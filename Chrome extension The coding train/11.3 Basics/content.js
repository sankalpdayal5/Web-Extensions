console.log("Successfully executed");

var paragraphs = document.getElementsByTagName('p');
for (var i=0; i<paragraphs.length; i++)
{
    paragraphs[i].innerHTML = 'Hacked';
    paragraphs[i].style['background-color'] = '#f0f0f0';
}