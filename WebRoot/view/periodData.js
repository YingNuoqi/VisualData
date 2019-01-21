/**
 * 
 */



var optionPeriod = {
//	title : {
//		text : 'Post Time Frequencies during one day',
//		left : 'left'
////		textStyle: {
////			color:'#000'
////		}
//	},
	legend : {
		right:'right'
	},
	backgroundColor:'#d5d9dc',
	tooltip : {
		trigger : 'axis',
		showContent : false
	},
	dataset : {
		source : [     ///////////////////////////
			[ 'period', 'morning', 'afternoon', 'night', 'deepnight' ],
			[ 'non-depressed', 0.1968764, 0.4965684, 0.6591091,0.4914936 ],  //data
			[ 'depressed', 0.1417024, 0.2850951, 0.5435614,0.6352411 ],  //data
		]
	},
	xAxis : {
		type : 'category'
	},
	yAxis : {
		gridIndex : 0
	},
	grid : {
		top : '45%'
	},
	series : [
		{
			type : 'line',
			smooth : true,
			seriesLayoutBy : 'row'
		},
		{
			type : 'line',
			smooth : true,
			seriesLayoutBy : 'row'
		},
		{
			type : 'line',
			smooth : true,
			seriesLayoutBy : 'row'
		},
		{
			type : 'line',
			smooth : true,
			seriesLayoutBy : 'row'
		},
		{
			type : 'pie',
			id : 'pie',
			radius : '30%',
			center : [ '50%', '25%' ],
			label : {
				formatter : '{b}: {@2012} ({d}%)'
			},
			encode : {
				itemName : 'period',
				value : '2012',
				tooltip : '2012'
			}
		}
	]
};
