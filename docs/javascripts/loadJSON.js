$(function loadJSON() {
    var image = document.getElementsByTagName("h1")[0].innerHTML;
    $.getJSON('https://cors.hotio.workers.dev/?https://hub.docker.com/v2/repositories/hotio/?page_size=1&name=' + image.replace('hotio/',''), function(data) {
        $.each(data.results, function(i, f) {
            console.log("Pulls: " + f.pull_count + ", Stars: " + f.star_count);
            const objPulls = document.getElementById("stats-pulls");
            animateValue(objPulls, 0, f.pull_count, 1000);
            const objStars = document.getElementById("stats-stars");
            animateValue(objStars, 0, f.star_count, 1000);
        });
    });
    $.getJSON('https://api.github.com/repos/' + image + '/branches', function(data) {
        $.each(data, function(i, f) {
            var branch = f.name;
            var commit = f.commit.sha;
            var commitURL = f.commit.url;
            if (branch == "master") {
                return;
            }
            var extraTag = ""
            if (branch == "release") {
                extraTag = " (latest)";
            }
            $.getJSON('https://raw.githubusercontent.com/' + image + '/' + f.name + '/VERSION.json', function(data) {
                var hide = data.hide;
                if (hide == true) {
                    return;
                }
                var version = data.version;
                var description = data.description;
                if (description == undefined) {
                    description = "";
                }
                $.getJSON(commitURL, function(data) {
                    var commitDate = data.commit.author.date;
                    var d = new Date(commitDate);
                    var datestring = d.getFullYear() + "-" + (d.getMonth()+1).toString().padStart(2, '0') + "-" + d.getDate().toString().padStart(2, '0') + " " + d.getHours().toString().padStart(2, '0') + ":" + d.getMinutes().toString().padStart(2, '0') + ":" + d.getSeconds().toString().padStart(2, '0');
                    if (version == undefined) {
                        version = d.getUTCFullYear() + (d.getUTCMonth()+1).toString().padStart(2, '0') + d.getUTCDate().toString().padStart(2, '0') + d.getUTCHours().toString().padStart(2, '0') + d.getUTCMinutes().toString().padStart(2, '0') + d.getUTCSeconds().toString().padStart(2, '0');
                    }
                    var versionCode = "<code>" + version + "</code>";
                    console.log("Tag: " + branch + ", Version: " + version + ", Commit: " + commit + ", Last Updated: " + commitDate);
                    var tblRow = "<tr>" + "<td><a class=\"header-icons\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/" + image + "/tree/" + branch + "\">" + branch + "</a>" + extraTag + "</td>" + "<td>" + description + "</td>" + "<td>" + versionCode + "</td>" + "<td><a class=\"header-icons\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/" + image + "/tree/" + commit + "\">" + commit.slice(0,7) + "</a></td>" + "<td style=\"white-space:nowrap;\">" + datestring + "</td>" + "</tr>"
                    $(tblRow).appendTo("#tags-table tbody");
                    sortTable;
                });
            });
        });
    });
});

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = (Math.floor(progress * (end - start) + start)).toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tags-table");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        // Check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}
