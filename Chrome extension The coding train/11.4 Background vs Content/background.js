

console.log("background.js running ");



chrome.browserAction.onClicked.addListener(buttonClicked);


function buttonClicked(tab){
    // console.log("Button clicked");
    console.log(tab);
    let msg = {
        txt: "hello"
    };
    console.log(msg);
    chrome.tabs.sendMessage(tab.id, msg);
}
