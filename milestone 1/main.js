
function printChart(){

  var ctx = $("#canvas");

    $.ajax({
      url : "server.php",
      method : "GET",
      success : function (data) {

        // variabili richiamo
        var vertical = data.vertical;
        var mesi= data.mesi;


        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: mesi,
                datasets: [{
                    label: 'Vendite',
                    data: vertical,
                    backgroundColor: [
                        'rgba(51, 189, 66, 1)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 3
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });


      }, error : function (err){

      }

    });


};
// fine chiamata

function init(){

  printChart();



}

$(document).ready(init);
