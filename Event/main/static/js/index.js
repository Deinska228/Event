
window.onload = function() {


    var img = document.getElementsByClassName('carousel');
    var button_arrow_right = document.getElementsByClassName('arrow_right')
    var button_arrow_left = document.getElementsByClassName('arrow_left')
    var carousel_name = document.getElementsByClassName('carousel_name');
    var carousel_about = document.getElementsByClassName('carousel_about');


    var carousel_moving = true;

    var carousel_numb_0 = 0;
    var carousel_numb_1 = 1;
    var carousel_numb_3 = 2;
    var carousel_numb_2 = img.length - 1;

    for (var i = 0; i < button_arrow_right.length; i += 1) {
        button_arrow_right[i].style.zIndex = 2;
        button_arrow_left[i].style.zIndex = 2;
    }
    for (var i = 0; i < img.length; i += 1) {
        
        if (i == img.length - 1) {
            img[i].style.display = "block";
            img[i].style.left = img[i].getBoundingClientRect().left - 550 + "px";
            img[i].style.opacity = "0.5";
            img[i].style.zIndex = -1;
            img[i].style.transition = ".5s";

            carousel_name[i].style.display = "block";
            carousel_name[i].style.left = carousel_name[i].getBoundingClientRect().left - 550 - 125 + "px";
            carousel_name[i].style.opacity = "0.5";
            carousel_name[i].style.zIndex = 2;
            carousel_name[i].style.transition = ".5s";

        }
        if (i == 0) {
            img[i].style.display = "block";
            img[i].style.zIndex = 3;
            img[i].style.transition = ".5s";
            img[i].style.opacity = "1";
            

            carousel_name[i].style.display = "block";
            carousel_name[i].style.left = "calc(50% - 595px/2 + 57.9px)";
            carousel_name[i].style.zIndex = 4;
            carousel_name[i].style.transition = ".5s";
            carousel_name[i].style.opacity = "1";
            

        }
        if (i == 1) {
            img[i].style.display = "block";
            img[i].style.left = img[i].getBoundingClientRect().left + 550 + "px";
            img[i].style.opacity = "0.5"
            img[i].style.zIndex = -2;
            img[i].style.transition = ".5s";

            carousel_name[i].style.display = "block";
            carousel_name[i].style.left = img[i].getBoundingClientRect().left + 550 + "px";
            carousel_name[i].style.opacity = "0.5"
            carousel_name[i].style.zIndex = -1;
            carousel_name[i].style.transition = ".5s";

        }
        if (i != 1 && i != 0 && i != img.length - 1) {
            img[i].style.left = img[i].getBoundingClientRect().left + 550 * 2 + "px";
            img[i].style.opacity = "0"
            img[i].style.zIndex = -1;
            img[i].style.transition = ".5s";

            carousel_name[i].style.left = carousel_name[i].getBoundingClientRect().left + 550 * 2 - 125 + "px";
            carousel_name[i].style.opacity = "0"
            carousel_name[carousel_numb_3].style.zIndex = 2;
            carousel_name[i].style.transition = ".5s";

        }

    }

    var a = setInterval(carousel, 4 * 1000);
    setInterval(mouse, 1);

    img[carousel_numb_0].onmouseover = function(){console.log(true)}
    img[carousel_numb_0].onmouseout = function(){console.log(false)}

    function mouse(){
        img[carousel_numb_0].onmouseover = function(){a = clearTimeout(a);}
        img[carousel_numb_0].onmouseout = function(){a = setInterval(carousel, 4 * 1000)}
    }


    document.querySelector("#arrow_carousel_right").onclick = function() {
        carousel()
    }
    

    function carousel() {

        if (carousel_moving && !document.hidden) {
            clearTimeout(a);
            a = setInterval(carousel, 4 * 1000);
            carousel_moving = false
            setTimeout(function() { carousel_moving = true }, 501)

            for (var i = 0; i < img.length; i += 1) {

                if (carousel_numb_0 == i) {

                    // Первая ячейка

                    carousel_name[carousel_numb_0].style.left = carousel_name[carousel_numb_0].getBoundingClientRect().left - 550 + 25 + "px";
                    carousel_name[carousel_numb_0].style.opacity = "0.5";
                    carousel_name[carousel_numb_0].style.zIndex = 2;

                    img[carousel_numb_0].style.left = img[carousel_numb_0].getBoundingClientRect().left - 550 + "px";
                    img[carousel_numb_0].style.opacity = "0.5";
                    img[carousel_numb_0].style.zIndex = -1;
                    
                    // Вторая ячейка
                    carousel_name[carousel_numb_1].style.left = carousel_name[carousel_numb_1].getBoundingClientRect().left - 550 + 25 + "px";
                    carousel_name[carousel_numb_1].style.opacity = "1"
                    carousel_name[carousel_numb_1].style.zIndex = 4;

                    img[carousel_numb_1].style.left = img[carousel_numb_1].getBoundingClientRect().left - 550 + "px";
                    img[carousel_numb_1].style.opacity = "1"
                    img[carousel_numb_1].style.zIndex = 3;

                    if ((img[carousel_numb_3].getBoundingClientRect().left + 595 < window.pageYOffset)) {

                        carousel_name[carousel_numb_3].style.display = "none";
                        carousel_name[carousel_numb_3].style.left = carousel_name[carousel_numb_3].getBoundingClientRect().left + 1570 + "px"
                        carousel_name[carousel_numb_3].style.display = "block";
                        carousel_name[carousel_numb_3].style.zIndex = 2;

                        img[carousel_numb_3].style.display = "none";
                        img[carousel_numb_3].style.left = img[carousel_numb_3].getBoundingClientRect().left + 1570 + "px"
                        img[carousel_numb_3].style.display = "block";

                    }
                     
                    // Нулевая ячейка (За экраном с лева)

                    carousel_name[carousel_numb_2].style.left = carousel_name[carousel_numb_2].getBoundingClientRect().left - 550 + 25 + "px";
                    carousel_name[carousel_numb_2].style.opacity = "0";
                    carousel_name[carousel_numb_2].style.zIndex = 2;

                    img[carousel_numb_2].style.left = img[carousel_numb_2].getBoundingClientRect().left - 550 + "px";
                    img[carousel_numb_2].style.opacity = "0";
                        
                    // Четвертая ячейка (За экраном с права)
                    carousel_name[carousel_numb_3].style.left = carousel_name[carousel_numb_3].getBoundingClientRect().left - 550 + 25 + "px";
                    carousel_name[carousel_numb_3].style.opacity = "0.5";
                    carousel_name[carousel_numb_3].style.zIndex = -1;

                    img[carousel_numb_3].style.left = img[carousel_numb_3].getBoundingClientRect().left - 550 + "px";
                    img[carousel_numb_3].style.opacity = "0.5";
                    img[carousel_numb_3].style.zIndex = -2;
 
                }
            }

            carousel_numb_0 += 1
            if (carousel_numb_0 == img.length) {
                carousel_numb_0 = 0;
            }
            carousel_numb_1 = carousel_numb_0 + 1
            if (carousel_numb_1 == img.length) {
                carousel_numb_1 = 0;
            }
            carousel_numb_3 = carousel_numb_0 + 2
            if (carousel_numb_3 == img.length) {
                carousel_numb_3 = 0;
            } else if (carousel_numb_3 == img.length + 1) {
                carousel_numb_3 = 1;
            }
            carousel_numb_2 = carousel_numb_0 - 1
            if (carousel_numb_2 < 0) {
                carousel_numb_2 = img.length - 1;
            }
        }
    }




    document.querySelector("#arrow_carousel_left").onclick = function() {
        console.log(window.innerWidth);
    }

};