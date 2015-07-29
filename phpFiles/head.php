<?php 
	$url = "";
	if(!$base){
		
	}
?>

<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<script type="text/javascript" src="<?php echo $base;?>js/lib/jquery-1.8.2.min.js"></script>
		<script type="text/javascript" src="<?php echo $base;?>js/lib/jquery.jplayer.min.js"></script>
		<style type="text/css">
			body { margin: 0; padding: 0; height: 100%; background: url(<?php  echo $url;?>css/images/bgimage.png) repeat-x; background-color: #9aa2a5; font-family: Helvetica,"微软雅黑",Arial,sans-serif; }
			
			.jp-cont {
				height: 30px;
				line-height: 30px;
				color: #FFF;
				font-size: 12px;
				font-family: Helvetica,"微软雅黑",Arial,sans-serif;
				position: relative;
				text-align:right;
				padding: 0 60px 0 0;
			}
			.jp-cont a {margin:0 5px; color:#FFF; text-decoration:none;}
			.mute_on {
				background: url(<?php  echo $url;?>css/images/music.gif) no-repeat
			}
			.mute_off {
				background: url(<?php  echo $url;?>css/images/music.png) no-repeat
			}
			.mute_off_m {

				background: url(<?php  echo $url;?>css/images/music.png) no-repeat
			}

			.volumn_btn {
				position:absolute;
				right:0; top:10px;
				width: 50px;
				height:30px;
			}
			
			#logo { text-align: right; width: 1336px; height: 39px; line-height: 39px; margin-top: 0px; }
			#nav { width: 714px; height: 39px; background-color: #e5e5e5; color: #455057; border: 0; float: right; padding: 0; margin: 0; }
			#nav ul { color: #455057; display: block; font-family: Helvetica,"微软雅黑",Arial,sans-serif; font-size: 12px; list-style-type: none; width: 714px; padding: 0; margin: 0; }
			#nav ul li { float: left; text-align: center; width: 101px; border-right: 1px solid #000; padding: 0; margin: 0; background: url(<?php  echo $url;?>css/images/nav-bj.jpg); }
			#nav ul li a { color: #455057; text-decoration: none; }
			#nav ul li.selected { background: url(<?php  echo $url;?>css/images/navhover-bj.jpg); }
			#nav ul li.selected a { color: #fff; }
			#nav ul li:hover { background: url(<?php  echo $url;?>css/images/navhover-bj.jpg); }
			#nav ul li:hover > div { display: block; }
			#nav ul li:hover a { color: #fff; }
			#nav ul li:hover div a { color: #455057; }
			#nav ul li:hover div a:hover { background: url(<?php  echo $url;?>css/images/navhover-bj.jpg); color: #fff; }
			#sddm div { position: absolute; display: none; margin: 0;  +margin-top: 28px; +margin-left: -78px; padding: 0; border: 0; }
			#sddm #m4 {  +margin-left: -66px;}
			#m2 { z-index: 10; }
			#m3 { z-index: 10; }
			#m5 { z-index: 10; }
			#m4 { z-index: 10; }
			#m6 { z-index: 10; }
			#sddm div a { position: relative; display: block; margin: 0; padding: 12px 0 0; width: 101px; height: 27px; white-space: nowrap; text-align: center; text-decoration: none; background: url(<?php  echo $url;?>css/images/nav-bj.jpg); color: #455057; font: 12px arial; z-index: 1000; }
			#sddm div a:hover { background: url(<?php  echo $url;?>css/images/navhover-bj.jpg); color: #fff; }
			#foot { font-family: Helvetica,"微软雅黑",Arial,sans-serif; font-size: 12px; color: #fff; line-height: 30px; display: block; float: left; }
			#foot a { font-family: Helvetica,"微软雅黑",Arial,sans-serif; font-size: 12px; color: #fff; line-height: 30px; text-decoration: none; }
			#foot a:hover { font-family: Helvetica,"微软雅黑",Arial,sans-serif; font-size: 12px; color: #231f20; line-height: 30px; text-decoration: none; }
		</style>
		<script type="text/javascript">
		//<![CDATA[
		$(document).ready(function(){

			$("#jquery_jplayer_1").jPlayer({
				backgroundColor: "#f6efdd",

				ready: function () {
					$(this).jPlayer("setMedia", {
						mp3: "<?php  echo $url;?>css/music/1.mp3"
					}).jPlayer("play");
				},
				ended: function (event) {
					$(this).jPlayer("play");
				},
				swfPath: "<?php  echo $url;?>js/plugins/jwplayer.swf",
				supplied: "mp3"
			});
			$('#mute').click(function() {
				if($(this).hasClass('mute_on')){
					$('#jquery_jplayer_1').jPlayer('volume', 0);
					$(this).removeClass('mute_on').addClass('mute_off_m');
				}
				else{
					$('#jquery_jplayer_1').jPlayer('volume', 1);
					$(this).removeClass('mute_off_m').addClass('mute_on');
				}
			});
		});
		//]]>
		</script>
		<style type="text/css">
			#footw{
				position: absolute;
				bottom: 0;
				height: 30px;
			}
			#maincontent{
				width: 1336px;
				height: 606px;
				left: 13px;
				background:#eee;
				position:relative;
				-webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
				-moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
				box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
			}
			#maincontent:before, #maincontent:after{
				content:"";
				position:absolute;
				z-index:-1;
				-webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);
				-moz-box-shadow:0 0 20px rgba(0,0,0,0.8);
				box-shadow:0 0 20px rgba(0,0,0,0.8);
				top:0;
				bottom:0;
				left:10px;
				right:10px;
				-moz-border-radius:100px / 10px;
				border-radius:100px / 10px;
			
			}
			#maincontent:after{
				right:10px;
				left:auto;
				-webkit-transform:skew(8deg) rotate(3deg);
				-moz-transform:skew(8deg) rotate(3deg);
				-ms-transform:skew(8deg) rotate(3deg);
				-o-transform:skew(8deg) rotate(3deg);
				transform:skew(8deg) rotate(3deg);
			}
		</style>
	</head>
	<body>
		<div class="jp-cont">
			<a href="../cn/index.html">中文</a>|<a href="index.html">English</a> <!-- Need to change for the language -->
			<a href="#" id="mute" class="volumn_btn mute_on"></a>
			<div id="jquery_jplayer_1" class="jp-jplayer" style="background-color: rgb(246, 239, 221);">
				<img id="jp_poster_0" style="width: 900px; height: 0px; display: none;">
				<audio id="jp_audio_0" preload="metadata" src="css/music/1.mp3"></audio>
			</div>
		</div>
		<div id="maincontent">
			<div id="uppernav">
				<div id="logo">
					<div id="nav">
						<ul id="sddm">
							<li class="selected" width="95px"><a href="index.html">Home</a></li> <!-- For the Home Page link will be index.html  -->
							<li><a href="en_brand-story.html">Brand Story</a> </li>  <!-- This is Brand Story.  -->
							<li>  <!-- This is Ad Page -->
								<a href="en_campaign-2015ss.html">AD Campaign</a>
								<div id="m2"> 
									<a href="en_campaign-2015ss.html">2015 S/S</a> 
									<a href="en_campaign-2015aw.html">2015 A/W</a> 
									<a href="en_campaign-2014aw.html">2014 A/W</a> 
									<a href="en_campaign-2014ss.html">2014 S/S</a> 
								</div>
							</li>
							<li> <!--  This one is for videos -->
								<a href="en_more-videos.html">Video</a>
								<div id="m4"> 
									<a href="en_making-the-ad.html">Making the AD</a> 
									<a href="en_more-videos.html">More Videos</a> 
								</div>
							</li>
							<li> <!-- THis one is for the Products -->
								<a href="en_collection-2015ss.html">Collection</a>
								<div id="m3"> 
									<a href="en_collection-2015ss.html">2015 S/S</a> 
									<a href="en_collection-2015aw.html">2015 A/W</a> 
									<a href="en_collection-2014aw.html">2014 A/W</a> 
									<a href="en_collection-2014ss.html">2014 S/S</a> 
								</div>
							</li>
							<li> <!-- This one is also for the products -->
								<a href="en_stores.html">Art Store</a>
							</li>
							<li> <!-- This one is for the News -->
								<a href="en_party.html">News</a>
								<div id="m5"> 
									<a href="en_media-2014spring.html">Media</a> 
									<a href="en_art.html">Art</a> 
									<a href="en_star.html">Star</a> 
									<a href="en_party.html">Party</a> 
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div id="belowcontent">
				<!-- 
					所有的每一个页面的主要的东西要放在这里了！
				-->