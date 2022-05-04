import { TabManager } from "./lib/tabs.js";
import { GroupManager } from "./lib/groups.js";
import { WindowManager } from "./lib/windows.js";

class application {
  constructor() {
    this.init();
  }
  async init() {
    const windows = new WindowManager();
    const groups = new GroupManager();
    const tabs = new TabManager();
    // let currentTabs = await tabs.getCurrentUrls();
    // let neededTabs = tabs.determineTabsNotOpen(currentTabs, desiredTabs);
    // tabs.createPinnedTabs(neededTabs);

    // let test = new URL(desiredTabs[0]);
    // console.log(test);
  }
}

new application();

// TODO: keep working on class TAB
