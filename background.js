const menuItemMap = {
  PAGE: "Item-1",
  SELECTION: "Item-2",
};

const pageHandler = (info, tab) => {
  console.log("Page handler is clicked");
};

const selectionHandler = (info, tab) => {
  console.log(
    `Selection handler is clicked ${
      !info.selectionText
        ? "with no text"
        : `with selected text: ${info.selectionText}`
    }`
  );
};

const clickHandlerMap = {
  [menuItemMap.PAGE]: pageHandler,
  [menuItemMap.SELECTION]: selectionHandler,
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: menuItemMap.PAGE,
    title: "This is Item-1",
    contexts: ["page"],
  });

  chrome.contextMenus.create({
    id: menuItemMap.SELECTION,
    title: "This is Item-2",
    contexts: ["selection"],
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    const { menuItemId } = info;

    const handler = clickHandlerMap[menuItemId];

    if (handler) {
      handler(info, tab);
    }
  });
});
