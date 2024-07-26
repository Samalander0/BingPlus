chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync') {
    chrome.tabs.query({ url: "*://www.bing.com/search/*" }, (tabs) => {
      for (let tab of tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['content.js']
        });
      }
    });
  }
});