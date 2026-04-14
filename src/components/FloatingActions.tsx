'use client';

export default function FloatingActions() {
  return (
    <>
      <button
        type="button"
        className="fixed bottom-6 left-3 z-40 border border-white/35 bg-black px-3 py-2 text-sm font-bold text-white"
      >
        Light/Dark
      </button>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ff9a00] bg-black text-[#ff9a00]"
          aria-label="Back to top"
        >
          ↑
        </button>

        <a
          href="https://wa.me/971545578355?text=Hi"
          target="_blank"
          rel="noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ff9a00] bg-black text-[#ffb000]"
          aria-label="WhatsApp"
        >
          ☏
        </a>
      </div>
    </>
  );
}
