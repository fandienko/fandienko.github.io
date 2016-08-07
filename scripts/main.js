(function($){
    'use strict';
    $(document).ready(function(){
        $('.to-top').click(function(){
            $('body').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
        $('.learn-more').click(function(){
            $('body').animate({
                scrollTop: $('.provides').offset().top
            }, 500);
            return false;
        });

        $('.close').click(function(){
            $('body').removeClass('message-success');
            return false;
        });

        $('.order-form-btn').click(function(){
            $('.header-order').toggleClass('active');
            return false;
        });

        $('.js-order-form').submit(function(){
            var form = $(this);
            form.find('.text-input').val('');
            $('body').addClass('message-success');
            $('.header-order').removeClass('active');
            return false;
            $.post(
                form.attr('action'),
                form.serializeArray(),
                function (data)
                {
                    if (data.hasOwnPropery('success') && data.success)
                    {
                        form.find('.text-input').val('');
                        $('body').addClass('message-success');
                        $('.header-order').removeClass('active');
                    }
                },
                'json'
            )
            return false;
        });
    });
})(jQuery);