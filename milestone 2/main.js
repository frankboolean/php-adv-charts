
function printGraphs(){


    var ctx = $("#fatturato");

    $.ajax({
      url : "server.php",
      method : "GET",
      success : function (data) {

        // variabili richiamo
        var mesi= ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre']


        var myChart = new Chart(ctx, {
            type: data.grafico1.type,
            data: {
                labels:mesi,
                datasets: [{
                    label:"Vendite" ,
                    data:data.grafico1.data ,
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

        console.log(err);
      }

    });



}

// seconda chiamata

function printPie(){


    var ctx = $("#agent");

    $.ajax({
      url : "server.php",
      method : "GET",
      success : function (data) {



        var myChart = new Chart(ctx, {
            type: data.grafico2.type,
            data: {
                labels:data.grafico2.names,
                datasets: [{
                    label:"" ,
                    data:data.grafico2.data ,
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

        console.log(err);
      }

    });



}









function init(){


  printGraphs();
  printPie();




}

$(document).ready(init);
