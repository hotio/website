$(function loadJSON() {
    var image = document.getElementsByTagName("h1")[0].innerHTML;

    $.getJSON('https://raw.githubusercontent.com/' + image + '/master/tags.json', function(data) {
        $.each(data, function(i, f) {
            var last_updated = f.last_updated;
            var description = f.description;
            if (description == undefined) {
                description = "";
            }
            var latest = f.latest;
            var extraTag = "";
            if (latest == true) {
                extraTag = "<div class=\"tag-decoration tag-decoration-latest\">latest</div><br>";
            }
            var tags = "";
            var tags_code = "";
            $.each(f.tags, function(i, f) {
                tags = tags + ", " + f;
                tags_code = tags_code + "<div class=\"tag-decoration\">" + f + "</div><br>";
            });
            tags = tags.replace(/^,/, '');
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
