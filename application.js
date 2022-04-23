var desiredTabs = [
  "https://www.app.raindrop.io",
  "https://www.app.youneedabudget.com",
  "https://www.calendar.google.com",
  "https://www.reddit.com",
];

class application {
  async init() {
    const tabManager = new TabManager();

    let currentTabs = await tabManager.getCurrentUrls();
    let neededTabs = tabManager.getNeededTabs(currentTabs, desiredTabs);
    tabManager.createPinnedTabs(neededTabs);

    let test = new URL(desiredTabs[0]);
    console.log(test);
  }
}

class TabManager {
  constructor() {}

  extractUrl(tab) {
    return tab.url;
  }

  get windowTabs() {
    return browser.tabs.query({
      currentWindow: true,
      pinned: true,
    });
  }

  async getCurrentUrls() {
    let tabs = await this.windowTabs;
    return tabs.map(this.extractUrl);
  }

  createPinnedTabs(urls) {
    urls.forEach((url) => {
      browser.tabs.create({
        pinned: true,
        url: url,
      });
    });
  }

  getNeededTabs(current, desired) {
    const neededTabs = [];

    for (let i = 0; i < desired.length; i++) {
      neededTabs.push(desired[i]);

      for (let j = 0; j < current.length; j++) {
        if (current[j].includes(desired[i])) {
          neededTabs.pop();
        }
      }
    }
    return neededTabs;
  }
}

class Tab {
  constructor(config) {
    this.config = config;
  }

	createTab()
}

app = new application();
app.init();
