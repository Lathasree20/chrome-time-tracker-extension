fetch("http://localhost:3000/report/user123")
  .then(res => res.json())
  .then(data => {
    const domainTime = {};
    data.forEach(entry => {
      domainTime[entry.domain] = (domainTime[entry.domain] || 0) + entry.duration;
    });

    const labels = Object.keys(domainTime);
    const durations = Object.values(domainTime).map(ms => ms / 60000); // Convert to minutes

    new Chart(document.getElementById("reportChart"), {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Time Spent (Minutes)",
          data: durations,
          backgroundColor: "rgba(54, 162, 235, 0.6)"
        }]
      }
    });
  });
