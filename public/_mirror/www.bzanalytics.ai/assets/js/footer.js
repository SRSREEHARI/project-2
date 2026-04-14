
$(document).ready(function() {
    const form = $('#subscribe-form');
    const emailInput = $('#subscription-email');
    const submitBtn = $('#subscription-submit');
    const validationMessage = $('.email-validation-message');
    const toast = $('#toast-notification');
    const toastMessage = $('.toast-message');
    const toastClose = $('.toast-close');
    
    // Close toast when clicking X
    toastClose.on('click', function() {
        hideToast();
    });
    
    // Also close toast when clicking anywhere outside
    $(document).on('click', function(e) {
        if (toast.hasClass('show') && !$(e.target).closest('.toast-notification').length) {
            hideToast();
        }
    });
    
    // Validate email on input
    emailInput.on('input', function() {
        validateEmail();
    });
    
    // Form submission
    form.on('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.val().trim();
        
        // Reset validation
        emailInput.removeClass('input-error');
        validationMessage.text('');
        
        // Basic validation
        if (!email) {
            showFieldError('Email is required');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFieldError('Please enter a valid email address');
            return;
        }
        
        // Disable button to prevent multiple submissions
        submitBtn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i>');
        
        $.ajax({
            url: '/subscriptions',
            type: 'POST',
            data: { email: email },
            dataType: 'json',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            success: function(response) {
                if (response.status === 'success') {
                    showToast('success', response.message);
                    emailInput.val(''); // Clear the input
                    validationMessage.text(''); // Clear validation message
                } else {
                    // Check if it's an already subscribed error
                    if (response.message.includes('already subscribed')) {
                        showFieldError('This email is already subscribed');
                    } else if (response.message.includes('wait before trying')) {
                        showToast('error', response.message);
                    } else {
                        showFieldError(response.message);
                    }
                }
            },
            error: function(xhr, status, error) {
                showToast('error', 'An error occurred. Please try again later.');
                console.error(xhr.responseText);
            },
            complete: function() {
                // Re-enable the button
                submitBtn.prop('disabled', false).html('Submit');
            }
        });
    });
    
    // Show field-specific error
    function showFieldError(message) {
        emailInput.addClass('input-error');
        validationMessage.text(message);
    }
    
    // Validate email format
    function validateEmail() {
        const email = emailInput.val().trim();
        
        if (email && !isValidEmail(email)) {
            showFieldError('Please enter a valid email address');
        } else {
            emailInput.removeClass('input-error');
            validationMessage.text('');
        }
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show toast notification
    function showToast(type, message) {
        // Hide success/error icons based on type
        $('#toast-icon-success').css('display', type === 'success' ? 'inline-block' : 'none');
        $('#toast-icon-error').css('display', type === 'error' ? 'inline-block' : 'none');
        
        // Set message and type
        toastMessage.text(message);
        toast.removeClass('success error').addClass(type);
        
        // Show the toast
        toast.addClass('show');
        
        // Auto-hide after delay (for success only)
        if (type === 'success') {
            setTimeout(hideToast, 5000);
        }
    }
    
    // Hide toast notification
    function hideToast() {
        toast.removeClass('show');
    }
});