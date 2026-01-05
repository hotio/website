$(function loadJSON() {
    var image = document.getElementsByTagName("h1")[0].innerHTML;
    const splitImage = image.split("/");
    document.getElementById("github-link").href="https://github.com/" + image;
    document.getElementById("ghcrio-link").href="https://github.com/orgs/" + splitImage[0] + "/packages/container/package/" + splitImage[1];

    $.getJSON('https://raw.githubusercontent.com/' + image + '/master/links.json', function(data) {
        $.each(data.links, function(i, f) {
            const svg = '<span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></span>'
            var link = `${svg} <a href="${f.url}" class="header-icons" target="_blank" rel="noopener">${f.name}</a><br>`
            $(link).appendTo("#project-links");
        });
    });

    $.getJSON('https://raw.githubusercontent.com/' + image + '/master/tags.json', function(data) {
        $.each(data, function(i, f) {
            var hide = f.hide;
            if (hide != true) {
                var last_updated = f.last_updated;
                var last_updated_url = f.last_updated_url;
                var description = f.description;
                var commit_message = f.commit_message;
                var commit_sha = f.commit_sha;
                var latest = f.latest;
                var tags_list = "";
                var tags_html = "";
                var nr = Math.floor(Math.random() * 100);
                if (description == undefined) {
                    description = "";
                }
                if (commit_message == undefined) {
                    commit_message = "";
                }
                if (commit_sha != undefined) {
                    commit_message = `<span class="tags-table-links"><a href="https://github.com/${image}/commit/${commit_sha}" target="_blank">${commit_message}</a></span>`;
                }
                if (latest == true) {
                    tags_list = "latest";
                    tags_html = `<div title="Copy to clipboard" id="tag${nr}" onclick="CopyToClipboard('tag${nr}');return false;" class="tag-decoration tag-decoration-latest">latest</div>`;
                }
                $.each(f.tags, function(i, f) {
                    if (f) {
                        nr = Math.floor(Math.random() * 100);
                        tags_list += `,${f}`;
                        tags_html += `<div title="Copy to clipboard" id="tag${nr}" onclick="CopyToClipboard('tag${nr}');return false;" class="tag-decoration">${f}</div>`;
                    }
                });
                var d = new Date(last_updated);
                var currentDate = new Date();
                var days = (d, currentDate) =>{
                    let difference = currentDate.getTime() - d.getTime();
                    let TotalDays = Math.floor(difference / (1000 * 3600 * 24));
                    if (TotalDays ==  0) {
                        TotalDays = Math.floor(difference / (1000 * 3600 * 1));
                        return `${TotalDays} hour(s)`;
                    } else {
                        return `${TotalDays} day(s)`;
                    }
                }
                var datestring = d.getFullYear() + "-" + (d.getMonth()+1).toString().padStart(2, '0') + "-" + d.getDate().toString().padStart(2, '0') + " " + d.getHours().toString().padStart(2, '0') + ":" + d.getMinutes().toString().padStart(2, '0') + ":" + d.getSeconds().toString().padStart(2, '0');
                if (last_updated_url != undefined) {
                    var last_updated_html = `<span class="tags-table-links"><a href="${last_updated_url}" target="_blank">${datestring}</a></span>`;
                } else {
                    var last_updated_html = `${datestring}`
                }
                var tblRow = `
                    <tr>
                    <td>${tags_html}</td>
                    <td>${description}</td>
                    <td>${commit_message}</td>
                    <td style=\"white-space:nowrap;\">${last_updated_html}</td>
                    <td>${days(d, currentDate)}</td>
                    </tr>
                `
                $(tblRow).appendTo("#tags-table tbody");
                tags_list = tags_list.replace(/^,/, '');
                console.log(`Tags: ${tags_list} / Last Updated: ${datestring} / Age: ${days(d, currentDate)}`);
            }
        });
    });
});
