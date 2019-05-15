$(document).ready(function () {
    $img = $('#carousel ul li img');
    $radio = $('#radio input');
    $caption = $('.caption');
    indexImg = $img.length - 1;
    i = 0;
    $CurrentRadio = $radio.eq(i);
    $currentImg = $img.eq(i);
    $currentCaption = $caption.eq(i);
    $img.css('display', 'none');
    $currentImg.css('display', 'block');
    $caption.css('display', 'none');
    $currentCaption.css('display', 'block');

    $('.right').click(function () {
        if (i < indexImg) {
            i++;
            if (i <= indexImg) {
                $img.css('display', 'none');
                $caption.css('display', 'none');
                $CurrentRadio = $radio.eq(i);
                $CurrentRadio.prop('checked', true);
                $currentImg = $img.eq(i);
                $currentImg.slideToggle("200");
                $currentImg.css('display', 'block');
                $currentCaption = $caption.eq(i);
                $currentCaption.css('display', 'block');
            } else {
                i = indexImg;
            }
        } else {
            i = 0;
            $img.css('display', 'none');
            $caption.css('display', 'none');
            $CurrentRadio = $radio.eq(i);
            $CurrentRadio.prop('checked', true);
            $currentImg = $img.eq(i);
            $currentImg.slideToggle("200");
            $currentImg.css('display', 'block');
            $currentCaption = $caption.eq(i);
            $currentCaption.css('display', 'block');
        }
    });

    $('.left').click(function () {
        if (i > 0) {
            i--;
            $img.css('display', 'none');
            $caption.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.slideToggle("200");
            $CurrentRadio = $radio.eq(i);
            $CurrentRadio.prop('checked', true);
            $currentImg.css('display', 'block');
            $currentCaption = $caption.eq(i);
            $currentCaption.css('display', 'block');
        } else {
            i = indexImg;
            $img.css('display', 'none');
            $caption.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.slideToggle("200");
            $CurrentRadio = $radio.eq(i);
            $CurrentRadio.prop('checked', true);
            $currentImg.css('display', 'block');
            $currentCaption = $caption.eq(i);
            $currentCaption.css('display', 'block');
        }

    });

    $('#un').click(function () {
        i = 0;
        $img.css('display', 'none');
        $caption.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.slideToggle("200");
        $currentImg.css('display', 'block');
        $currentCaption = $caption.eq(i);
        $currentCaption.css('display', 'block');
    });
    $('#deux').click(function () {
        i = 1;
        $img.css('display', 'none');
        $caption.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.slideToggle("200");
        $currentImg.css('display', 'block');
        $currentCaption = $caption.eq(i);
        $currentCaption.css('display', 'block');
    });
    $('#trois').click(function () {
        i = 2;
        $img.css('display', 'none');
        $caption.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.slideToggle("200");
        $currentImg.css('display', 'block');
        $currentCaption = $caption.eq(i);
        $currentCaption.css('display', 'block');
    });
    $('#quatre').click(function () {
        i = 3;
        $img.css('display', 'none');
        $caption.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.slideToggle("200");
        $currentImg.css('display', 'block');
        $currentCaption = $caption.eq(i);
        $currentCaption.css('display', 'block');
    });
    $('#cinq').click(function () {
        i = 4;
        $img.css('display', 'none');
        $caption.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.slideToggle("200");
        $currentImg.css('display', 'block');
        $currentCaption = $caption.eq(i);
        $currentCaption.css('display', 'block');
    });

    function CarouselAuto() {
        setTimeout(function () {

            if (i < indexImg) {
                i++;
            } else {
                i = 0;
            }

            $img.css('display', 'none');
            $caption.css('display', 'none');
            $CurrentRadio = $radio.eq(i);
            $CurrentRadio.prop('checked', true);
            $currentImg = $img.eq(i);
            $currentImg.slideToggle("200");
            $currentImg.css('display', 'block');
            $currentCaption = $caption.eq(i);
            $currentCaption.css('display', 'block');

            CarouselAuto();

        }, 5000);
    }

    CarouselAuto();

});