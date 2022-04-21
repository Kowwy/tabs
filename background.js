var desiredTabs = [
  "https://www.app.raindrop.io",
  "https://www.app.youneedabudget.com",
  "https://www.calendar.google.com",
  "https://www.reddit.com",
];

const tabs = browser.tabs;

function createPinnedTab(url) {
  tabs.create({
    pinned: true,
    url: url,
  });
  console.log("site: %s", url);
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

async function main() {
  let currentTabs = await getCurrentTabs();
  let neededTabs = getNeededTabs(currentTabs, desiredTabs);
  console.log(neededTabs);
  neededTabs.forEach((url) => {
    createPinnedTab(url);
  });
  return;
}

main();
//open specific pinned tabs in each firefox instance
//make sure tabs aren't open already
//open the pinned tabs
