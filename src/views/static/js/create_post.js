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

$('#typo-picker').change(function(){
    if($(this).val() == 'typo1'){
        $('.typo-picker').removeClass("typo3");
        $('.typo-picker').removeClass("typo2");
        $('.typo-picker').removeClass("typo4");

        $('.typo-picker').addClass("typo1");
        $('.typo-picker').addClass("important");
        $('.typo-picker').addClass("typo");
        $('.typo-picker').addClass("important");
    }
    if($(this).val() == 'typo2'){
        $('.typo-picker').removeClass("typo1");
        $('.typo-picker').removeClass("typo3");
        $('.typo-picker').removeClass("typo4");

        $('.typo-picker').addClass("typo2");
        $('.typo-picker').addClass("typo");
        $('.typo-picker').addClass("important");
    }
    if($(this).val() == 'typo3'){
        $('.typo-picker').removeClass("typo2");
        $('.typo-picker').removeClass("typo1");
        $('.typo-picker').removeClass("typo4");

        $('.typo-picker').addClass("typo3");
        $('.typo-picker').addClass("typo");
        $('.typo-picker').addClass("important");
    }
    if($(this).val() == 'typo4'){
        $('.typo-picker').removeClass("typo1");
        $('.typo-picker').removeClass("typo2");
        $('.typo-picker').removeClass("typo3");

        $('.typo-picker').addClass("typo4");
        $('.typo-picker').addClass("typo");
        $('.typo-picker').addClass("important");
    }
});

// $("#selectBox option[value='White']").remove();