console.log("Content.js running");




chrome.runtime.onMessage.addListener(gotMessage);
console.log("Listening");




function gotMessage(message, sender, sendResponse) {
  //   console.log(message.txt);
  console.log(message.txt, "hello");
  if (message.txt === "hello") {
    let paragraphs = document.getElementsByTagName("p");
    for (elt of paragraphs)
    {
        elt.innerHTML = 'Hacked';
        elt.style['background-color'] = '#f0f0f0';
    }

  }
}
