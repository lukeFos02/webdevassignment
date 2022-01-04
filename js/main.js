$(document).ready(function(){

    $('.leftColBtn').click(function(){
  if ( $('#leftCol').css('visibility') == 'hidden' )
    $('#leftCol').css('visibility','visible');
  else
    $('#leftCol').css('visibility','hidden');
});

var facilitiesImgs = [
    "img/fac1.jpg",
    "img/fac2.jpg",
    "img/fac3.jpg",
    "img/fac4.jpg",
    "img/fac5.jpg",
    "img/fac6.jpg",
    "img/fac7.jpg",
];

console.dir(facilitiesImgs);
document.getElementById("facilitiesImages").setAttribute("src", facilitiesImgs[0])

setInterval(chgImage, 1500)
var imageCounter = 0

function chgImage()
{
    document.getElementById("facilitiesImages").setAttribute("src", facilitiesImgs[imageCounter])
    imageCounter = imageCounter + 1
    if (imageCounter == 6)
    {
        imageCounter = 0
    }
    console.info("called")
}

});
