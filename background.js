chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { message: "example_message" });
    });
  });
});
