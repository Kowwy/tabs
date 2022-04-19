var websites = [
  "https://www.app.raindrop.io",
  "https://www.app.youneedabudget.com",
  "https://www.calendar.google.com",
  "https://www.reddit.com",
  "https://www.help.obsidian.md",
  "https://rocketleague.tracker.network/",
  "https://www.google.com",
];

let tabs = browser.tabs;

function createPinnedTab(site) {
  tabs.create({
    pinned: true,
    url: site,
  });
  console.log("site: %s", site);
}

async function getCurrentTabs() {
  let currentTabs = await browser.tabs.query({});
  let urls = [];
  currentTabs.forEach((tab) => {
    urls.push(tab.url);
  });
  return urls;
}

function getNeededTabs(current, desired) {
  const needed = [];
  for (let i = 0; i < desired.length; i++) {
    needed.push(desired[i]);
    for (let j = 0; j < current.length; j++) {
      if (current[j].includes(desired[i])) {
        needed.pop();
      }
    }
  }
  return needed;
}

async function main() {
  let currentTabs = await getCurrentTabs();
  let needed = getNeededTabs(currentTabs, websites);
  console.log(needed);
  needed.forEach((url) => {
    createPinnedTab(url);
  });
  return;
}

main();
//open specific pinned tabs in each firefox instance
//make sure tabs aren't open already
//open the pinned tabs
