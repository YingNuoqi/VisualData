var optionMonthly = {
//    title: {
//        text: 'Monthly Post numbers of depressed people in 2012 - 2014 '
//    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['2012','2013','2014'],
        center:'center'
    },
    
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['January','February','March','April','May','June','July','August','September','October','November','December'],
            
            clickable:true
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
    	{
            name:'2012',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[35,35,73,35,46,234,220,180,114,84,58,69]
        },
        {
            name:'2013',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[87,48,64,67,68,56,183,50,14,37,120,233]
        },
        {
            name:'2014',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[147,103,60,136,46,139,190,96,176,362,179,225]
        }
        
    ]
};
