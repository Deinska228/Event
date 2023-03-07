var carousel_numb = 1;
let img = document.getElementsByClassName('carousel');
// for (var i = 0; i < img.length; i += 1){
//     img[i].style.display = "none";
// }

document.querySelector("#arrow_carousel_left").onclick = function() {
    arrow_carousel_left(0);
  }

function arrow_carousel_left (n){
    for (let i = 0; i < img.length; i += 1){
        if (i == 2){
            mg[i].style.display = "block";
        }
    } 
    


    // for (let i = 0; i < img.length; i += 1){
    //     if (i == 2){
    //         var left =  img[i].style.marginLeft = n + "px";
            
    //         if (n > -500){
    //             arrow_carousel_left (n -= 55)
    //         }
    //         else{
    //             a += Number(1);
    //             console.log(a)
    //             return 
    //         }
            
    //     } else{
    //         img[i].style.display = "none";
    //     }
    // }
}
document.querySelector("#arrow_carousel_right").onclick = function() {
    console.log("asd")
  }