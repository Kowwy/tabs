export class TabManager {
  static defaultTabConfig = {
    currentWindow: true,
    pinned: true,
  };

  constructor() {
    this.init();
  }

  async init() {
    console.log("its working");
    // let tabsOpen = await TabManager.getTabs();
    //let tabsNotOpen = this.determineTabsNotOpen(tabsOpen, defaultGroup);
    // console.log(tabsNotOpen);
  }

  // TODO: get rid of extractUrl
  extractUrl(tab) {
    return tab.url;
  }

  static async getTabs(params = this.defaultTabConfig) {
    return await browser.tabs.query(params);
  }

  static async getCurrentUrls() {
    let tabs = this.getTabs();
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

  determineTabsNotOpen(current, desired) {
    const tabsNotOpen = [];

    for (let i = 0; i < desired.length; i++) {
      tabsNotOpen.push(desired[i]);

      for (let j = 0; j < current.length; j++) {
        if (current[j].includes(desired[i])) {
          tabsNotOpen.pop();
        }
      }
    }
    return tabsNotOpen;
  }
}

// class Tab {
// 	static baseConfig =
//   constructor({index, pinned, url}) {
//     this.index = index;
//     this.pinned = pinned;
//     this.url = url;
//   }
//
//   createTab() {
//     browser.tabs.create({
//       url: this.url,
// 			index:
//       pinned: this.pinned,
//     });
//   }
// }
