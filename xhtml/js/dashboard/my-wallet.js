

(function($) {
    /* "use strict" */
	
 var icChartlist = function(){
	
	var screenWidth = $(window).width();
	let draw = Chart.controllers.line.__super__.draw; //draw shadow
	
	var pieChart = function(){
		if(jQuery('#pieChart').length > 0 ){
			//doughut chart
			const pieChart = document.getElementById("pieChart").getContext('2d');
			// pieChart.height = 100;
			new Chart(pieChart, {
				type: 'doughnut',
				data: {
					weight: 5,	
					defaultFontFamily: 'Poppins',
					datasets: [{
						data: [50, 30, 20],
						borderWidth: 0, 
						borderColor: "rgba(255,255,255,1)",
						backgroundColor: [
							"#8df05f",
							"#ff4b4b",
							"#e3e3e3"
						],
						hoverBackgroundColor: [
							"#8df05f",
							"#ff4b4b",
							"#e3e3e3"
						]

					}],
				},
				options: {
					weight: 1,	
					cutoutPercentage: 70,
					responsive: true,
					maintainAspectRatio: false
				}
			});
		}
	}
	var lineChart = function(){
		var options = {
		  series: [
		  {
			name: "Income",
			data: [10, 30, 20, 40, 20, 45, 10]
		},
		{
			name: "Expense",
			data: [10, 15, 10, 30, 15, 35, 5]
		},
		{
			name: "Unknown",
			data: [5, 15, 5, 15, 10, 25, 5]
		}
		],
		  chart: {
		  height: 170,
		  type: 'line',
		  toolbar:{
			  show:false
		  },
		  zoom: {
			enabled: false
		  }
		},
		colors:['#68e365','#FFB252','#969ba0'],
		dataLabels: {
		  enabled: false
		},
		stroke: {
		  curve: 'smooth',
		  width:3
		},
		legend:{
			show:false
		},
		grid: {
		  /* row: {
			colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
			opacity: 0.5
		  }, */
		   xaxis: {
				lines: {
					show: true
				}
			},  
		},
		xaxis: {
		  categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		},
		yaxis:{
			show:false
		}
		};

		var chart = new ApexCharts(document.querySelector("#line-chart"), options);
		chart.render();
	}
	
	var donutChart1 = function(){
		$("span.donut1").peity("donut", {
			width: "60",
			height: "60"
		});
	}
	
	
	
	
	
	
	
	
	
	
	
 
	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){
				pieChart();
				lineChart();
				donutChart1();
			},
			
			resize:function(){
			}
		}
	
	}();

	
		
	jQuery(window).on('load',function(){
		setTimeout(function(){
			icChartlist.load();
		}, 1000); 
		
	});

     

})(jQuery);