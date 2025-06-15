chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "changeBackground") {
    document.body.style.backgroundColor = "green";
  }
});