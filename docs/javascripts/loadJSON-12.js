$(function loadJSON() {
    var image = document.getElementsByTagName("h1")[0].innerHTML;

    $("#tags-table tbody").empty();

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
                    commit_message = `<a href="https://github.com/${image}/commit/${commit_sha}" target="_blank">${commit_message}</a>`;
                }
                if (latest == true) {
                    tags_list = "latest";
                    tags_html = `<div class="tag-decoration-latest">latest</div>`;
                }
                $.each(f.tags, function(i, f) {
                    if (f) {
                        nr = Math.floor(Math.random() * 100);
                        tags_list += `,${f}`;
                        tags_html += `<div id="tag${nr}" onclick="CopyToClipboard('tag${nr}');return false;" class="tag-decoration">${f}</div>`;
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
                    var last_updated_html = `<a href="${last_updated_url}" target="_blank">${datestring}</a>`;
                } else {
                    var last_updated_html = `${datestring}`
                }
                var tblRow = `
                    <tr>
                    <td>${tags_html}</td>
                    <td>${description}</td>
                    <td>${commit_message}</td>
                    <td>${last_updated_html}</td>
                    </tr>
                `
                $(tblRow).appendTo("#tags-table tbody");
                tags_list = tags_list.replace(/^,/, '');
                console.log(`Tags: ${tags_list} / Last Updated: ${datestring} / Age: ${days(d, currentDate)}`);
            }
        });
    });
});
