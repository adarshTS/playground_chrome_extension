const menuItemMap = {
  PAGE: "Item-1",
  SELECTION: "Item-2",
  PAGE3: "Item-3",
  PAGE4: "Item-4",
  PAGE5: "Item-5",
};

const pageHandler = (info, tab) => {
  console.log("Page handler is clicked");
};

const pageHandler3 = (info, tab) => {
  console.log("3rd handler is clicked");
};

const pageHandler4 = (info, tab) => {
  console.log("4th handler is clicked");
};

const pageHandler5 = (info, tab) => {
  console.log("5th handler is clicked");
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
  [menuItemMap.PAGE3]: pageHandler3,
  [menuItemMap.PAGE4]: pageHandler4,
  [menuItemMap.PAGE5]: pageHandler5,
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

  chrome.contextMenus.create({
    id: menuItemMap.PAGE3,
    title: "This is Item-3",
    contexts: ["page"],
  });

  chrome.contextMenus.create({
    id: menuItemMap.PAGE4,
    title: "This is Item-4",
    contexts: ["page"],
  });

  chrome.contextMenus.create({
    id: menuItemMap.PAGE5,
    title: "This is Item-5",
    contexts: ["page"],
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    const { menuItemId } = info;

    const handler = clickHandlerMap[menuItemId];

    if (handler) {
      handler(info, tab);
    }
  });
});
