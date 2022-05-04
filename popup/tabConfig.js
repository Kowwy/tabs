class TabConfig {
  constructor({ pinned, index, url, group = "default" }) {
    this.pinned = pinned;
    this.index = index;
    this.url = url;
    this.group = group;
  }
}

document.addEventListener("DOMContentLoaded", addListeners);

function addListeners() {
  document.getElementById("capture").addEventListener("click", captureTabs);
}

async function captureTabs() {
  // should just return the query
  let tabs = await browser.tabs.query({
    currentWindow: true,
    pinned: true,
  });
  storeTabs();
  console.log("stored tabs");
}

async function storeTabs() {
  try {
    browser.storage.local.set();
  } catch (err) {
    console.log(error);
  }
}

class TabGroup {
  constructor(tabs, groupId) {
    this.tabs = tabs;
    this.id = groupId;
  }
}
