chrome.storage.sync.get(null, (result) => {
  for (const [key, value] of Object.entries(result)) {
    if (value) {
      document.body.classList.add(`bp-${key}`);
      console.log(`bp-${key} class added`);
    }
  }
});