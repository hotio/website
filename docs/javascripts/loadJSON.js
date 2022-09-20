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
                    $("<span>docker pull " + image + ":" + branch + "</span><br>").appendTo("#tags-codeblock code");
                    $("<span>docker pull " + image + ":" + branch + "-" + version + "</span><br>").appendTo("#tags-codeblock code");
                    $("<span>docker pull " + image + ":" + branch + "-" + commit.slice(0,7) + "</span><br>").appendTo("#tags-codeblock code");
                    var codeBlock = document.getElementById("tags-codeblock").getElementsByTagName( 'code' )[0].innerHTML;
                    if (codeBlock == "") {
                        document.getElementById("tags-table").remove();
                        $("<span>Couldn't load tags! Try again later...</span><br>").appendTo("#tags-codeblock code");
                    }
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
