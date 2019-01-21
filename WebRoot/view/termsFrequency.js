/**
 * 
 */

var optionTerms = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    backgroundColor: '#4fcdc4',
//    title: {
//    	text:'Terms Frequency'
//    },
    legend: {
        data: ['Depressed', 'Non-depressed'],
        right:'10%'
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '2%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['someone','people','help','feel','life',"I'm"]
    },
    series: [
        {
            name: 'Depressed',
            type: 'bar',
            barWidth:'25',
            stack: '总量',
//            label: {
//                normal: {
//                    show: true,
//                    position: 'insideRight'
//                }
//            },
            data: [0.001632258, 0.007052933,0.002280089,0.004113084,0.001976914,0.01157656]  //data
        },
        {
            name: 'Non-depressed',
            type: 'bar',
            stack: '总量',
//            label: {
//                normal: {
//                    show: true,
//                    position: 'insideRight'
//                }
//            },
            data: [0.001249354,0.003594543,0.001462565,0.001472841,0.001362954,0.00597077]   //data
        }
        
        
    ]
};

//  ['someone','people','help','feel','life',"I'm"]

//var builderJson = {  //  [0.001632258, 0.007052933,0.002280089,0.004113084,0.001976914,0.01157656]
//	"all" : 0.012,
//	"charts" : {  //depressed
//		"someone" : 0.001632258,
//		"people" : 0.007052933,
//		"help" : 0.002280089,
//		"feel" : 0.004113084,
//		"life" : 0.001976914,
//		"I'm" : 0.01157656
//	},
//	"components" : {  //non-depressed    [0.001249354,0.003594543,0.001462565,0.001472841,0.001362954,0.00597077]
//		"someone" : 0.001249354,
//		"people" : 0.003594543,
//		"help" : 0.001462565,
//		"feel" : 0.001472841,
//		"life" : 0.001362954,
//		"I'm" : 0.00597077
//	},
//	"ie" : 9743
//};
//
//var downloadJson = {  //depressed
//		"someone" : 0.001632258,
//		"people" : 0.007052933,
//		"help" : 0.002280089,
//		"feel" : 0.004113084,
//		"life" : 0.001976914,
//		"I'm" : 0.01157656
//};
//
//var themeJson = {
//		"someone" : 0.001249354,
//		"people" : 0.003594543,
//		"help" : 0.001462565,
//		"feel" : 0.001472841,
//		"life" : 0.001362954,
//		"I'm" : 0.00597077
//};
//
//var waterMarkText = 'ECHARTS';
//
//var canvas = document.createElement('canvas');
//var ctx = canvas.getContext('2d');
//canvas.width = canvas.height = 100;
//ctx.textAlign = 'center';
//ctx.textBaseline = 'middle';
//ctx.globalAlpha = 0.08;
//ctx.font = '20px Microsoft Yahei';
//ctx.translate(50, 50);
//ctx.rotate(-Math.PI / 4);
//ctx.fillText(waterMarkText, 0, 0);
//
//var optionTerms = {
//	tooltip : {},
//	title : [ {
//		text : 'Terms Frequency',
//		//subtext : '总计 ' + builderJson.all,
//		x : '25%',
//		textAlign : 'center',
//		textStyle: {
//            fontSize: 20,
//            fontWeight: 'bolder',
//            color:'#ffffff'
//        }
//	}, {
//		text : 'Depressed',
////		subtext : '总计 ' + Object.keys(downloadJson).reduce(function(all, key) {
////				return all + downloadJson[key];
////			}, 0),
//		x : '75%',
//		textAlign : 'center'
//	}, {
//		text : 'Non-depressed',
////		subtext : '总计 ' + Object.keys(themeJson).reduce(function(all, key) {
////				return all + themeJson[key];
////			}, 0),
//		x : '75%',
//		y : '50%',
//		textAlign : 'center'
//	} ],
//	grid : [ {
//		top : 50,
//		width : '50%',
//		bottom : '45%',
//		left : 10,
//		containLabel : true
//	}, {
//		top : '55%',
//		width : '50%',
//		bottom : 0,
//		left : 10,
//		containLabel : true
//	} ],
//	xAxis : [ {
//		type : 'value',
//		max : builderJson.all,
//		splitLine : {
//			show : false
//		}
//	}, {
//		type : 'value',
//		max : builderJson.all,
//		gridIndex : 1,
//		splitLine : {
//			show : false
//		}
//	} ],
//	yAxis : [ {
//		type : 'category',
//		data : Object.keys(builderJson.charts),
//		axisLabel : {
//			interval : 0,
//			rotate : 30
//		},
//		splitLine : {
//			show : false
//		}
//	}, {
//		gridIndex : 1,
//		type : 'category',
//		data : Object.keys(builderJson.components),
//		axisLabel : {
//			interval : 0,
//			rotate : 30
//		},
//		splitLine : {
//			show : false
//		}
//	} ],
//	series : [ {
//		type : 'bar',
//		stack : 'chart',
//		barWidth:22,
//		z : 3,
//		label : {
//			normal : {
//				position : 'right',
//				show : true
//			}
//		},
//		data : Object.keys(builderJson.charts).map(function(key) {
//			return builderJson.charts[key];
//		})
//	}, {
//		type : 'bar',
//		stack : 'chart',
//		barWidth:22,
//		silent : true,
//		itemStyle : {
//			normal : {
//				//color : '#eee'
//			}
//		},
//		data : Object.keys(builderJson.charts).map(function(key) {
//			return builderJson.all - builderJson.charts[key];
//		})
//	}, {
//		type : 'bar',
//		stack : 'component',
//		barWidth:22,
//		xAxisIndex : 1,
//		yAxisIndex : 1,
//		z : 3,
//		label : {
//			normal : {
//				position : 'right',
//				show : true
//			}
//		},
//		data : Object.keys(builderJson.components).map(function(key) {
//			return builderJson.components[key];
//		})
//	}, {
//		type : 'bar',
//		stack : 'component',
//		barWidth:22,
//		silent : true,
//		xAxisIndex : 1,
//		yAxisIndex : 1,
//		itemStyle : {
//			normal : {
//				//color : '#eee'
//			}
//		},
//		data : Object.keys(builderJson.components).map(function(key) {
//			return builderJson.all - builderJson.components[key];
//		})
//	}, {
//		type : 'pie',
//		radius : [ 0, '30%' ],
//		barWidth:22,
//		center : [ '75%', '25%' ],
//		data : Object.keys(downloadJson).map(function(key) {
//			return {
//				name : key.replace('.js', ''),
//				value : downloadJson[key]
//			}
//		})
//	}, {
//		type : 'pie',
//		radius : [ 0, '30%' ],
//		barWidth:22,
//		center : [ '75%', '75%' ],
//		data : Object.keys(themeJson).map(function(key) {
//			return {
//				name : key.replace('.js', ''),
//				value : themeJson[key]
//			}
//		})
//	} ]
//}