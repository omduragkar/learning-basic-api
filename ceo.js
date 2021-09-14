var clickbtn = document.getElementById("clickbtn");
clickbtn.addEventListener('click',cimage);
function cimage()
{
    var xh = new XMLHttpRequest();
    xh.open('get','https://dog.ceo/api/breeds/image/random');
    xh.send();
    xh.onload= function()
    {
        console.log(xh.response);
        var respobj= JSON.parse(xh.response);
        var goturl = respobj.message;
        document.getElementById("imgfinal").setAttribute('src',goturl);
    }
}