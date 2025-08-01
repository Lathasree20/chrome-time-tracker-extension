function getWeeklyReport(callback) {
  chrome.storage.local.get(["activityLog"], result => {
    const logs = result.activityLog || [];
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    let productiveTime = 0, unproductiveTime = 0;

    logs.forEach(log => {
      if (new Date(log.timestamp) >= oneWeekAgo) {
        if (log.category === "productive") productiveTime += log.duration;
        else if (log.category === "unproductive") unproductiveTime += log.duration;
      }
    });

    callback({ productiveTime, unproductiveTime });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  getWeeklyReport(report => {
    document.getElementById("productive").innerText =
      `🟢 Productive Time: ${Math.round(report.productiveTime / 60)} minutes`;
    document.getElementById("unproductive").innerText =
      `🔴 Unproductive Time: ${Math.round(report.unproductiveTime / 60)} minutes`;
  });

  document.getElementById("reset").addEventListener("click", () => {
    chrome.storage.local.set({ activityLog: [] }, () => {
      alert("Weekly data reset.");
      location.reload();
    });
  });
});
