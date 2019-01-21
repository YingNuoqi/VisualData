<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>Big Data Visualization</title>
	
	<!-- Favicons -->
	<link href="/VisualData/view2/img/favicon.png" rel="icon">
	
	<!-- Bootstrap core CSS -->
	<link href="/VisualData/view2/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<!--external css-->
	<link href="/VisualData/view2/lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
	<link rel="stylesheet" type="text/css"
		href="/VisualData/view2/lib/gritter/css/jquery.gritter.css" />
	<!-- Custom styles -->
	<link href="/VisualData/view2/css/style.css" rel="stylesheet">
	<link href="/VisualData/view2/css/custom-charts.css" rel="stylesheet">
	
	<script src="/VisualData/view2/lib/chart-master/Chart.js"></script>
	<script src="/VisualData/js/echarts.js"></script>
	<script src="http://code.jquery.com/jquery-1.4.1.min.js"></script>
	
	<!-- Multiple Chart Modules -->
	<script src='/VisualData/view/MonthlyData.js'></script>
	<script src='/VisualData/view/periodData.js'></script>
	<script src='/VisualData/view/emotionData.js'></script>
	<script src='/VisualData/view/termsFrequency.js'></script>
	<script src='/VisualData/view/numberOfWordsData.js'></script>
	<script src='/VisualData/view/violenceData.js'></script>
	
	<script src='/VisualData/js/dark.js'></script>
	<script src='/VisualData/js/White.js'></script>
	<script src='/VisualData/js/view2.js'></script>
	<script src='/VisualData/js/number.js'></script>

</head>

<body>
	<section id="container">
		<!-- **********************************************************************************************************************************************************
        TOP BAR 
        *********************************************************************************************************************************************************** -->
		<!--header start-->
		<header class="header black-bg">
			<div class="sidebar-toggle-box">
				<div class="fa fa-bars tooltips" data-placement="right"
					data-original-title="Toggle Navigation"></div>
			</div>
			<!--logo start-->
			<a href="#" class="logo"><b>Big Data Visualization of <span>Depressed
						and Non-depressed People (Team Fire)</span></b></a>
			<!--logo end-->

			<div class="top-menu">
				<ul class="nav pull-right top-menu"></ul>
			</div>
		</header>
		<!--header end-->

		<!-- **********************************************************************************************************************************************************
        MAIN SIDEBAR MENU
        *********************************************************************************************************************************************************** -->
		<!--sidebar start-->
		<aside>
			<div id="sidebar" class="nav-collapse ">
				<!-- sidebar menu start-->
				<ul class="sidebar-menu" id="nav-accordion">
					<h5 class="centered">The Outline</h5>
					<li class="mt"><a class="active" href="#monthlyDiv"> <i
							class="fa fa-bar-chart-o"></i> <span>Monthly Post Numbers
								of Depressed people in 2012-2014</span>
					</a></li>
					<li class="sub-menu"><a href="#numberOfWordsDiv"> <i
							class="fa fa-bar-chart-o"></i> <span>Number of Words in
								Posts Written by Depressed or Non-depressed People</span>
					</a></li>
					<li class="sub-menu"><a href="#emotion"> <i
							class="fa fa-bar-chart-o"></i> <span>Ratio of Detected
								Positive/Negative Emotions of Depressed or Non-depressed People</span>
					</a></li>
					<li class="sub-menu"><a href="#terms"> <i
							class="fa fa-bar-chart-o"></i> <span>Frequency of Terms
								Mentioned in Posts Written by Depressed or Non-depressed People</span>
					</a></li>
					<li class="sub-menu"><a href="#violence"> <i
							class="fa fa-bar-chart-o"></i> <span>Ratio of the
								Relevances to Crime in Posts Written by Depressed or
								Non-depressed People</span>
					</a></li>
					<li class="sub-menu"><a href="#period"> <i
							class="fa fa-bar-chart-o"></i> <span>Frequency of
								Publishing posts during different periods of the day by
								Depressed or Non-depressed People</span>
					</a></li>

				</ul>
				<!-- sidebar menu end-->
			</div>
		</aside>
		<!--sidebar end-->
		
		<!-- **********************************************************************************************************************************************************
        MAIN CONTENT
        *********************************************************************************************************************************************************** -->
		<!--main content start-->
		<section id="main-content">
			<section class="wrapper">
				<div class="row">
					<div class="col-lg-9 main-chart">
						<!-- Monthly Post Numbers of Depressed people in 2012-2014 -->
						<div class="border-head" id="monthlyDiv">
							<h3>Monthly Post Numbers of Depressed people in 2012-2014</h3>
						</div>
						<div class="custom-bar-chart">
							<div class="charts monthly" id="monthly"></div>
						</div>
						
						<div class="row mt" style="margin-top:15px;width:1600px;">
							<!-- Number of Words -->
							<div id="numberOfWordsDiv"
								class="col-md-4 col-sm-4 mb chartbelow"
								style="padding-right:0px;height: 322px;">
								<div class="grey-panel pn donut-chart ">
									<div class="grey-header below-header"
										style="margin-bottom: 5px;">
										<h5>Number of Words</h5>
									</div>
									<div class="charts numberOfWords" id="numberOfWords" style=""></div>
								</div>
							</div>

							<!-- Ratio of Detected Positive/Negative Emotions -->
							<div class="col-md-4 col-sm-4 mb chartbelow"
								style="padding-right:0px;">
								<div class="darkblue-panel pn"
									style="background:#eaeaea; box-shadow:0 0px 0px rgba(0, 0, 0, 0.2);">
									<div class="darkblue-header below-header"
										style="margin-bottom:5px;background:#eaeaea;">
										<h5 style="color:black;">Ratio of Detected
											Positive/Negative Emotions</h5>
									</div>
									<div class="charts emotion" id="emotion"></div>
								</div>
							</div>

							<!-- Frequency of Terms Mentioned in Posts -->
							<div class="col-md-4 col-sm-4 mb " style="width:355px;">
								<div class="green-panel pn">
									<div class="green-header" style="margin-bottom:0;">
										<h5>Frequency of Terms Mentioned in Posts</h5>
									</div>
									<div class="charts terms" id="terms"></div>
								</div>
							</div>

							<!-- Ratio of the Relevances to Crime -->
							<div class="col-md-4 col-sm-4 mb "
								style="width:355px;padding:0px;">
								<!-- REVENUE PANEL -->
								<div class="green-panel pn"
									style="padding:0;background:#eaeaea; box-shadow:0 0px 0px rgba(0, 0, 0, 0.2);">
									<div class="green-header"
										style="margin-bottom:0;background:#eaeaea;">
										<!-- #ccccc2 -->
										<h5 style="color:black">Ratio of the Relevances to Crime</h5>
									</div>
									<div class="charts violence" id="violence"></div>
								</div>
							</div>
						</div>
					</div>
					
					<!-- The Frequency of Publishing posts during different
								periods of the day -->
					<div class="col-lg-3 ds" style="width:360px;padding-left:0px;">
						<div class="donut-main">
							<h4>The Frequency of Publishing posts during different
								periods of the day</h4>
							<div class="charts period" id="period"></div>
						</div>
					</div>
				</div>

			</section>
		</section>
		<!--main content end-->

	</section>
	
	<script src="/VisualData/view2/lib/common-scripts.js"></script>
	
	<script type="text/javascript">
  		
	    $(document).ready(function() {
	      	return false;
	    });
	    
		// monthly
		var monthlyChart = echarts.init(document.getElementById('monthly'),'view2');
		monthlyChart.setOption(optionMonthly);
		monthlyChart.on('click', function (params) {
            if(params.value){
                alert("clicked"+params.name+"bar");
            }else{
                alert("clicked"+params.name+"x");
            }
        });
		
		//period
		var periodChart = echarts.init(document.getElementById('period'),'view2');
		periodChart.on('updateAxisPointer', function(event) {
			var xAxisInfo = event.axesInfo[0];
			if (xAxisInfo) {
				var dimension = xAxisInfo.value + 1;
				periodChart.setOption({
					series : {
						id : 'pie',
						label : {
							formatter : '{b}: {@[' + dimension + ']} ({d}%)'
						},
						encode : {
							value : dimension,
							tooltip : dimension
						}
					}
				});
			}
		});
		periodChart.setOption(optionPeriod);
		
		// number of words
		var numberOfWordsChart = echarts.init(document.getElementById('numberOfWords'),'number');
		numberOfWordsChart.setOption(optionNumberOfWords);
		
		//emotions
		var emotionChart = echarts.init(document.getElementById('emotion'),'White');
		emotionChart.setOption(optionEmotion);
		
		//terms
		var termsChart = echarts.init(document.getElementById('terms'),'dark');
		termsChart.setOption(optionTerms);
		
		//violence
		var violenceChart = echarts.init(document.getElementById('violence'),'White');
		violenceChart.setOption(optionViolence);
		
  </script>
</body>

</html>
