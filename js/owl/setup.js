
 var v = document.getElementById("video-trailler");
var v2 = document.getElementById("video-trailler2");

$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 7,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:7
        }
    }
})

// $ significa que voce está usando o jquery

let imgOut = true;
setTimeout(function(){

   if(imgOut){
       document.getElementById("capa").hidden = true; // hidden so funciona com getElementById
   }

}, 2000);

document.querySelector(".botao2").addEventListener("click",function(){
document.querySelector(".filme-principal").classList.toggle("mini");
document.getElementById("capa").hidden = false;
    imgOut = false
    v2.load(); //---carrega o video
    v2.play(); //---toca o video
});

document.querySelector(".close").addEventListener("click",function(){
document.querySelector(".filme-principal").classList.toggle("mini");
document.getElementById("capa").hidden = true;
    v2.pause();
});
