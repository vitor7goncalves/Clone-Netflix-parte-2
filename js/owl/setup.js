$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// $ significa que voce está usando o jquery
var v = document.querySelector("video")
v.play();

var v2 = document.getElementsByClassName("video-trailler2")[0];

document.querySelector(".botao2").addEventListener("click",function(){
    document.querySelector(".filme-principal").classList.toggle("mini");
    v.pause();
    v2.play();
    });

document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".filme-principal").classList.toggle("mini");
    v.play();
    v2.pause();
    });

        