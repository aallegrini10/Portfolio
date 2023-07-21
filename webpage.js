var layout = {
  title: {
    text: 'plot title',
    font: {},
    xref: 'paper',
    x: 0.05,
  },
  paper_bgcolor: "orange",
  xaxis: {
    title: {
      text: 'x axis line',
      font: {}
    }
  }
};

TESTER = document.getElementById('tester');           Plotly.newPlot( TESTER, [{	  x: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red', 'deep red', 'IR1', 'IR2', 'IR3', 'IR4' ],          y: [24.55621302, 17.26708075, 11.19402985, 10.54158607, 10.3362391, 18.74145007, 22.01342282, 12.85500747, 65.63876652, 95.18413598, 98.16360601 ],         type: 'bar'                     }                            ], {
	margin: { t: 0 } } );
TESTER2 = document.getElementById('tester2');
Plotly.newPlot( TESTER2, [{x: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red', 'deep red', ],          y: [24.55621302, 17.26708075, 11.19402985, 10.54158607, 10.3362391, 18.74145007, 22.01342282, ], }])
TESTER3 = document.getElementById('tester3');           Plotly.newPlot( TESTER3, [{	  x: ['IR1', 'IR2', 'IR3', 'IR4' ],          y: [12.85500747, 65.63876652, 95.18413598, 98.16360601 ], }                           ], { margin: { t: 0 } } );
