console.log("Kittens working");


let filenames = [
    "c1.jpg",
    "c2.jpg",
    "c3.jpg",
    "c4.jpg",
    "c5.jpg"
];

let images = document.getElementsByTagName('img');

for (imgElt of images)
{
  let r = Math.floor(Math.random() * filenames.length);
  let file = filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  // console.log(imgElt.src);
  // console.log(url);
}
