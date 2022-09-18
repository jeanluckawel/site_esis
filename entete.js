let slide = new Array("01.jpg", "02.jpg", "03.jpg", "04.jpg");
let numero = 0;
let b2 = document.querySelector(".b2");
let b4 = document.querySelector(".b4");
let l2 = document.querySelector(".l2");
let l4 = document.querySelector(".l4");


b2.onmouseover=function()
{
    l2.style.opacity = "1";
}
b2.onmouseout=function()
{
    l2.style.opacity = "0";
}

l2.onmouseover=function()
{
    l2.style.opacity = "1";
}
l2.onmouseout=function()
{
    l2.style.opacity = "0";
}


b4.onmouseover=function()
{
    l4.style.opacity = "1";
}
b4.onmouseout=function()
{
    l4.style.opacity = "0";
}

l4.onmouseover=function()
{
    l4.style.opacity = "1";
}
l4.onmouseout=function()
{
    l4.style.opacity = "0";
}


function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

setInterval("ChangeSlide(1)", 7*1000);