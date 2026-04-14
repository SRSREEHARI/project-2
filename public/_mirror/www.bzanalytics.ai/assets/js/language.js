
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT
    }, 'google_translate_element');

    var savedLang = localStorage.getItem('selectedLanguage') || 'en';
    jQuery('.goog-te-combo').val(savedLang);
    triggerHtmlEvent(jQuery('.goog-te-combo')[0], 'change');
    jQuery('#selected-lang').html(getLangHtml(savedLang));
    updateDropdownOptions(savedLang);
}

function triggerHtmlEvent(element, eventName) {
    var event;
    if (document.createEvent) {
        event = document.createEvent('HTMLEvents');
        event.initEvent(eventName, true, true);
        element.dispatchEvent(event);
    } else {
        event = document.createEventObject();
        event.eventType = eventName;
        element.fireEvent('on' + event.eventType, event);
    }
}
var savedLang = localStorage.getItem('selectedLanguage');

// Update the content of the #selected-lang element
$('#selected-lang').html(getLangHtml(savedLang));

// Function to generate HTML for the selected language based on its value
function getLangHtml(lang) {
switch (lang) {
    case 'hi':
        return '<img src="/assets/images/resources/india.png" loading="lazy" alt="Hindi" class="flag-icon-img"> HI';
    case 'ar':
        return '<img src="/assets/images/resources/uae.png" loading="lazy" alt="Arabic" class="flag-icon-img"> AR';
    default:
        return '<img src="/assets/images/resources/usa.png" loading="lazy" alt="English" class="flag-icon-img"> EN';
}
}
function updateDropdownOptions(selectedLang) {
jQuery('.custom-option').each(function () {
    var lang = jQuery(this).data('value');
    if (lang === selectedLang) {
        jQuery(this).hide();
    } else {
        jQuery(this).show();
    }
});
}


jQuery(document).ready(function () {
    jQuery('.custom-select-wrapper').on('click', function () {
        jQuery('.custom-select').toggleClass('open');
        updateDropdownOptions(savedLang);
    });

    jQuery('.custom-option').on('click', function () {
        var lang = jQuery(this).data('value');
        updateDropdownOptions(savedLang);
        localStorage.setItem('selectedLanguage', lang);
        jQuery('.goog-te-combo').val(lang);
        location.reload();
        triggerHtmlEvent(jQuery('.goog-te-combo')[0], 'change');
        jQuery('#selected-lang').html(jQuery(this).html());
        jQuery('.custom-select').removeClass('open');
        
    });

    jQuery(window).on('click', function (e) {
        if (!jQuery(e.target).closest('.custom-select-wrapper').length) {
            jQuery('.custom-select').removeClass('open');
        }
    });
});

window.onload = function () {
    setTimeout(function () {
        var savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
        jQuery('.goog-te-combo').val(savedLanguage);
        jQuery('#selected-lang').html(getLangHtml(savedLanguage));
        triggerHtmlEvent(jQuery('.goog-te-combo')[0], 'change');
    }, 1000);
};
