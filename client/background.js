const SITE_CATEGORIES = {
  productive: ["leetcode.com", "github.com", "stackoverflow.com", "geeksforgeeks.org"],
  unproductive: ["youtube.com", "facebook.com", "instagram.com", "twitter.com"]
};

function classifySite(url) {
  const hostname = new URL(url).hostname;
  if (SITE_CATEGORIES.productive.some(domain => hostname.includes(domain))) return "productive";
  if (SITE_CATEGORIES.unproductive.some(domain => hostname.includes(domain))) return "unproductive";
  return "neutral";
}

let currentTab = null;
let startTime = null;

chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, tab => handleTabChange(tab.url));
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.status === "complete") {
    handleTabChange(tab.url);
  }
});

function handleTabChange(url) {
  const now = Date.now();
  if (currentTab && startTime) {
    const duration = (now - startTime) / 1000;
    const category = classifySite(currentTab);
    const log = { url: currentTab, duration, category, timestamp: new Date().toISOString() };

    chrome.storage.local.get(["activityLog"], result => {
      const logs = result.activityLog || [];
      logs.push(log);
      chrome.storage.local.set({ activityLog: logs });
    });
  }
  currentTab = url;
  startTime = now;
}
