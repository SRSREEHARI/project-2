$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$workspace = 'C:\Users\panac\OneDrive\Desktop\project 2'
$cloneDir = Join-Path $workspace 'public\_clones'
$mirrorRoot = Join-Path $workspace 'public\_mirror'
$siteHost = 'www.bzanalytics.ai'
$siteBase = 'https://www.bzanalytics.ai'

$pages = [ordered]@{
  'metaverse-gaming.html' = 'https://www.bzanalytics.ai/industries/metaverse-gaming/'
  'digital-twin-dubai.html' = 'https://www.bzanalytics.ai/industries/metaverse-gaming/portfolio/digital-twin-dubai'
  'bznftmart-decentralized-nft-marketplace.html' = 'https://www.bzanalytics.ai/industries/metaverse-gaming/portfolio/bznftmart-decentralized-nft-marketplace'
  'learning-with-minecraft.html' = 'https://www.bzanalytics.ai/industries/metaverse-gaming/portfolio/learning-with-minecraft'
  'virtual-treasure-hunt-game.html' = 'https://www.bzanalytics.ai/industries/metaverse-gaming/portfolio/virtual-treasure-hunt-game'
  'virtual-hub.html' = 'https://www.bzanalytics.ai/industries/metaverse-gaming/portfolio/virtual-hub'
  'augmented-reality.html' = 'https://www.bzanalytics.ai/industries/metaverse-gaming/portfolio/augmented-reality'
}

function Get-MirrorWebPath([Uri]$uri) {
  $siteHostName = $uri.Host.ToLowerInvariant()
  $path = $uri.AbsolutePath
  if ([string]::IsNullOrWhiteSpace($path) -or $path.EndsWith('/')) {
    $path = $path + 'index.html'
  }
  return "/_mirror/$siteHostName$path"
}

function Get-MirrorFilePath([Uri]$uri) {
  $webPath = Get-MirrorWebPath $uri
  $relative = $webPath.TrimStart('/').Replace('/', '\')
  return (Join-Path $workspace ("public\" + $relative))
}

function Extract-Urls([string]$content, [Uri]$baseUri) {
  $out = New-Object System.Collections.Generic.List[string]
  $patterns = @(
    '(?:src|href)\s*=\s*["'']([^"'']+)["'']',
    'url\(([^)]+)\)'
  )

  foreach ($p in $patterns) {
    $matches = [regex]::Matches($content, $p, [Text.RegularExpressions.RegexOptions]::IgnoreCase)
    foreach ($m in $matches) {
      $raw = $m.Groups[1].Value.Trim().Trim('"').Trim("'")
      if ([string]::IsNullOrWhiteSpace($raw)) { continue }
      if ($raw.StartsWith('data:') -or $raw.StartsWith('javascript:') -or $raw.StartsWith('#')) { continue }

      $resolved = $null
      if ($raw.StartsWith('//')) {
        $resolved = "https:$raw"
      } elseif ($raw.StartsWith('/')) {
        $resolved = "$siteBase$raw"
      } elseif ($raw.StartsWith('http://') -or $raw.StartsWith('https://')) {
        $resolved = $raw
      } else {
        try {
          $resolved = (New-Object Uri($baseUri, $raw)).AbsoluteUri
        } catch {
          $resolved = $null
        }
      }

      if ([string]::IsNullOrWhiteSpace($resolved)) { continue }
      $out.Add($resolved)
    }
  }
  return $out
}

function Is-TextCandidate([Uri]$uri) {
  $path = $uri.AbsolutePath.ToLowerInvariant()
  return ($path.EndsWith('.css') -or $path.EndsWith('.js') -or $path.EndsWith('.svg') -or $path.EndsWith('.html'))
}

New-Item -ItemType Directory -Force -Path $cloneDir | Out-Null
New-Item -ItemType Directory -Force -Path $mirrorRoot | Out-Null

$assetQueue = New-Object System.Collections.Generic.Queue[string]
$seen = New-Object System.Collections.Generic.HashSet[string]

foreach ($name in $pages.Keys) {
  $url = $pages[$name]
  $resp = Invoke-WebRequest -Uri $url -UseBasicParsing
  $html = $resp.Content

  # Keep source page code, only remap local static assets to mirror copies.
  $html = $html -replace 'https?://(?:www\.)?bzanalytics\.ai/assets/', '/_mirror/www.bzanalytics.ai/assets/'
  $html = $html -replace '//(?:www\.)?bzanalytics\.ai/assets/', '/_mirror/www.bzanalytics.ai/assets/'
  $html = [regex]::Replace(
    $html,
    '([="''(])\/assets\/',
    '$1/_mirror/www.bzanalytics.ai/assets/',
    [Text.RegularExpressions.RegexOptions]::IgnoreCase
  )

  [System.IO.File]::WriteAllText((Join-Path $cloneDir $name), $html, (New-Object System.Text.UTF8Encoding($false)))

  $baseUri = New-Object Uri($url)
  $found = Extract-Urls -content $resp.Content -baseUri $baseUri
  foreach ($u in $found) {
    try {
      $uri = New-Object Uri($u)
      if (($uri.Host -eq 'www.bzanalytics.ai' -or $uri.Host -eq 'bzanalytics.ai') -and $uri.AbsolutePath.StartsWith('/assets/')) {
        if ($seen.Add($uri.AbsoluteUri)) {
          $assetQueue.Enqueue($uri.AbsoluteUri)
        }
      }
    } catch {}
  }
}

while ($assetQueue.Count -gt 0) {
  $u = $assetQueue.Dequeue()
  $uri = New-Object Uri($u)
  $file = Get-MirrorFilePath $uri
  $dir = Split-Path -Parent $file
  New-Item -ItemType Directory -Force -Path $dir | Out-Null

  try {
    Invoke-WebRequest -Uri $uri.AbsoluteUri -UseBasicParsing -OutFile $file
  } catch {
    continue
  }

  if (Is-TextCandidate $uri) {
    try {
      $txt = Get-Content -Raw $file
      $found = Extract-Urls -content $txt -baseUri $uri
      foreach ($x in $found) {
        try {
          $xu = New-Object Uri($x)
          if (($xu.Host -eq 'www.bzanalytics.ai' -or $xu.Host -eq 'bzanalytics.ai') -and $xu.AbsolutePath.StartsWith('/assets/')) {
            if ($seen.Add($xu.AbsoluteUri)) {
              $assetQueue.Enqueue($xu.AbsoluteUri)
            }
          }
        } catch {}
      }
    } catch {}
  }
}

Write-Output "Mirror complete. Downloaded assets: $($seen.Count)"
