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
    $.getJSON('https://cors.hotio.workers.dev/?https://api.github.com/repos/' + image + '/branches', function(data) {
        $.each(data, function(i, f) {
            var branch = f.name;
            var commit = f.commit.sha;
            if (branch == "master") {
                return;
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
                var latest = data.latest
                var extraTag = ""
                if (latest == true) {
                    extraTag = " (latest)";
                }
                $.getJSON('https://cors.hotio.workers.dev/?https://api.github.com/repos/' + image + '/commits/' + commit, function(data) {
                    var commitDate = data.commit.author.date;
                    var commitMessage = data.commit.message;
                    var commitHTMLUrl = data.html_url;
                    var d = new Date(commitDate);
                    var currentDate = new Date();
                    var days = (d, currentDate) =>{
                        let difference = currentDate.getTime() - d.getTime();
                        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
                        if (TotalDays ==  1) {
                            return `${TotalDays} Day`;
                        } else {
                            return `${TotalDays} Days`;
                        }
                    }
                    var datestring = d.getFullYear() + "-" + (d.getMonth()+1).toString().padStart(2, '0') + "-" + d.getDate().toString().padStart(2, '0') + " " + d.getHours().toString().padStart(2, '0') + ":" + d.getMinutes().toString().padStart(2, '0') + ":" + d.getSeconds().toString().padStart(2, '0');
                    if (version == undefined) {
                        version = d.getUTCFullYear() + (d.getUTCMonth()+1).toString().padStart(2, '0') + d.getUTCDate().toString().padStart(2, '0') + d.getUTCHours().toString().padStart(2, '0') + d.getUTCMinutes().toString().padStart(2, '0') + d.getUTCSeconds().toString().padStart(2, '0');
                    }
                    var versionCode = `<code>${version}</code>`;
                    console.log(`Tag: ${branch}, Version: ${version}, Commit: ${commit}, Last Updated: ${commitDate}, Age: ${days(d, currentDate)}`);
                    var tblRow = `
                        <tr>
                        <td><a class=\"header-icons\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/${image}/tree/${branch}\">${branch}</a>${extraTag}</td>
                        <td>${description}</td>
                        <td>${versionCode}</td>
                        <td><a class=\"header-icons\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"${commitHTMLUrl}\">${commit.slice(0,7)}</a></td>
                        <td>${commitMessage}</td>
                        <td style=\"white-space:nowrap;\">${datestring}</td>
                        <td>${days(d, currentDate)}</td>
                        </tr>
                    `
                    $(tblRow).appendTo("#tags-table tbody");
                });
            });
        });
    });
    //$.getJSON('https://cors.hotio.workers.dev/?https://api.github.com/rate_limit', function(data) {
        //console.log(data.resources.core.remaining);
    //});
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
