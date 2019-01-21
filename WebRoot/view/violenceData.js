//

var optionViolence = {
//    title: {
//        text: 'Relevent to Violence'
//    },
    backgroundColor:'#eaeaea',
    tooltip: {},
    legend: {
        data: ['Depressed', 'Non-depressed'],
        right:'right'
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [  //'stealing','crime','weapon','kill'
           { name: 'stealing', max: 0.0015},
           { name: 'crime', max: 0.0015},
           { name: 'weapon', max: 0.0015},
           { name: 'kill', max: 0.0015}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [0.0008989388,0.001299336,0.001253982,0.001043736],  //data
                name : 'Depressed'
            },
             {
                value : [0.000625395,0.0006300037,0.0006606971,0.000901398],  //data
                name : 'Non-depressed'
            }
        ]
    }]
};

