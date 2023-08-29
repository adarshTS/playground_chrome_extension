chrome.runtime.onMessage.addListener((request) => {
  if (request.message === "example_message") {
    window.alert("Message Received");
  }
});
