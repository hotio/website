$(function loadJSON() {
    var image = document.getElementsByTagName("h1")[0].innerHTML;
    $.getJSON('https://cors.hotio.workers.dev/?https://api.github.com/repos/' + image + '/branches', function(data) {
        data = data.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
        });
        $.each(data, function(i, f) {
            var branch = f.name;
            if (branch == "master") {
                return;
            }
            $.getJSON('https://raw.githubusercontent.com/' + image + '/' + branch + '/VERSION.json', function(data) {
                var hide = data.hide;
                if (hide == true) {
                    return;
                }
                var description = data.description;
                if (description == undefined) {
                    description = "";
                }
                var latest = data.latest
                var extraTag = ""
                if (latest == true) {
                    extraTag = "<div class=\"tag-decoration tag-decoration-latest\">latest</div><br>";
                }
                $.getJSON('https://raw.githubusercontent.com/' + image + '/' + branch + '/TAGS.json', function(data) {
                    var tags = "";
                    var tags_code = "";
                    var last_updated = data.last_updated;
                    $.each(data.tags, function(i, f) {
                        tags = tags + ", " + f;
                        tags_code = tags_code + "<div class=\"tag-decoration\">" + f + "</div><br>";
                    });
                    tags = tags.replace(/^,/, '');
                    var d = new Date(last_updated);
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
                    console.log(`Tags: ${tags}, Last Updated: ${datestring}, Age: ${days(d, currentDate)}`);
                    var tblRow = `
                        <tr>
                        <td style=\"white-space:nowrap;\">${extraTag}${tags_code}</td>
                        <td>${description}</td>
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
