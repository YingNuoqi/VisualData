/**
 * 
 */

var optionNumberOfWords = {
//	title : {
//		text : 'Words in comments & posts',
//		//subtext: '纯属虚构',
//		x : 'center',
//		left:'left',
////		textStyle: {
////			color:'#ffffff'
////		}
//	},
	backgroundColor:'#dfdfe1',
	tooltip : {
		trigger : 'item',
		formatter : "{a} <br/>{b} : {c} ({d}%)"
	},
	legend : {
		center:'center',
//		x : 'center',
//		y : '80%',
		data : [ 'depressed', 'non-depressed' ]
	},
	calculable : true,
	graphic: {
		type:'text',
		left:'center',
		zleve:100,
		style:{
			text:'in comments                             in posts',
			x:100,
			y:110,
			fill:'#8c8d8f'
		}
	},
	series : [
		{
			name : 'Number of words in comments',
			type : 'pie',
			radius : [ 45, 70 ],
			center : [ '25%', '50%' ],
			roseType : 'radius',
			label : {
				normal : {
					show : false
				},
				emphasis : {
					show : true
				}
			},
			lableLine : {
				normal : {
					show : false
				},
				emphasis : {
					show : true
				}
			},
			data : [
				{
					value : 59.03458,   //data
					name : 'depressed'
				},
				{
					value : 66.21612,   //data
					name : 'non-depressed'
				}

			]
		},
		{
			name : 'in posts',
			type : 'pie',
			radius : [ 45, 70 ],
			center : [ '75%', '50%' ],
			roseType : 'area',
			data : [
				{
					value : 7.57437,   //data
					name : 'depressed'
				},
				{
					value : 8.217598,   //data
					name : 'non-depressed'
				}

			]
		}
	]
};