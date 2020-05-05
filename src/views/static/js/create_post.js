$('#color-picker').change(function(){
    if($(this).val() == 'purple'){
        $('.color-picked').removeClass("orange")
        $('.color-picked').removeClass("cyan")
        $('.color-picked').removeClass("pink")

        $('.color-picked').addClass("purple")
        $('.color-picked').addClass("important")
    }
    if($(this).val() == 'orange'){
        $('.color-picked').removeClass("purple")
        $('.color-picked').removeClass("pink")
        $('.color-picked').removeClass("cyan")

        $('.color-picked').addClass("orange")
        $('.color-picked').addClass("important")
    }
    if($(this).val() == 'pink'){
        $('.color-picked').removeClass("orange")
        $('.color-picked').removeClass("purple")
        $('.color-picked').removeClass("cyan")

        $('.color-picked').addClass("pink")
        $('.color-picked').addClass("important");
    }
    if($(this).val() == 'cyan'){
        $('.color-picked').removeClass("orange")
        $('.color-picked').removeClass("purple")
        $('.color-picked').removeClass("pink")

        $('.color-picked').addClass("cyan")
        $('.color-picked').addClass("important");
    }

});

$('.typo-picker').addClass("typo");
$('.typo-picker').addClass("typo1");
$('.typo-picker').addClass("important");
$('textarea').addClass("typo");
$('textarea').addClass("typo1");
$('textarea').addClass("important");

$('#typo-picker').change(function(){
    if($(this).val() == 'typo1'){
        $('.typo-picker').removeClass("typo3");
        $('textarea').removeClass("typo3");
        $('.typo-picker').removeClass("typo2");
        $('textarea').removeClass("typo2");
        $('.typo-picker').removeClass("typo4");
        $('textarea').removeClass("typo4");

        $('.typo-picker').addClass("typo1");
        $('textarea').addClass("typo1");
    }
    if($(this).val() == 'typo2'){
        $('.typo-picker').removeClass("typo1");
        $('textarea').removeClass("typo1");
        $('.typo-picker').removeClass("typo3");
        $('textarea').removeClass("typo3");
        $('.typo-picker').removeClass("typo4");
        $('textarea').removeClass("typo4");

        $('.typo-picker').addClass("typo2");
        $('textarea').addClass("typo2");

    }
    if($(this).val() == 'typo3'){
        $('.typo-picker').removeClass("typo2");
        $('textarea').removeClass("typo2");
        $('.typo-picker').removeClass("typo1");
        $('textarea').removeClass("typo1");
        $('.typo-picker').removeClass("typo4");
        $('textarea').removeClass("typo4");

        $('.typo-picker').addClass("typo3");
        $('textarea').addClass("typo3");
    }
    if($(this).val() == 'typo4'){
        $('.typo-picker').removeClass("typo1");
        $('.typo-picker').removeClass("typo2");
        $('.typo-picker').removeClass("typo3");

        $('.typo-picker').addClass("typo4");
        $('textarea').addClass("typo4");
    }
});

