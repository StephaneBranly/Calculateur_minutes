function calculer() {
  var total = 0;
  var total_day = 0;
  var content_tab = "";
  var line_tab;
  var current_line;
  var month;
  var debut;
  var fin;
  var content = document.getElementById("content").value;
  content = content.split("\n");
  for (var i = 0; i < content.length; i++) {
    current_line = content[i];

    if (current_line != "") {
      month = RegExp("[a-zA-Z]", "g").exec(current_line);
      if (month == null) {
        current_line = current_line.split("-");
        debut = current_line[0].split(":");
        fin = current_line[1].split(":");
        if (parseInt(fin[0]) < parseInt(debut[0])) {
          fin[0] = parseInt(fin[0]) + 24;
        }
        total_day +=
          parseInt(fin[0]) * 60 +
          parseInt(fin[1]) -
          parseInt(debut[0]) * 60 -
          parseInt(debut[1]);
      } else {
        if (total_day != 0) {
          line_tab += "<td>" + total_day + "</td></tr>";
          total += total_day;
          total_day = 0;
          content_tab += line_tab;
        }
        line_tab = "<tr><td>" + current_line + "</td>";
      }
    }
  }
  line_tab += "<td>" + total_day + "</td></tr>";
  total += total_day;
  total_day = 0;
  content_tab += line_tab;

  line_tab = "<tr id='total'><td>TOTAL</td><td>" + total + "</td></tr>";
  content_tab = line_tab + content_tab;

  const tableau = document.getElementById("tableau");
  tableau.innerHTML = content_tab;
}
