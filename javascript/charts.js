function show_hide_button(id){

        if (document.getElementById) {
          var chart_ID = document.getElementById(id);
          var chart_divs = document.getElementsByClassName("all-charts");

          for(var i=0;i<chart_divs.length;i++) {
             chart_divs[i].style.display = "none";


          }
          chart_ID.style.display = "block";

        }


        return false;
};
