/** 视频页面的配置文件 */
/*  
 * artData : 视频页面列表
 *  	|	background ------ 背景图片路径
 *  	|	orbit ---- 供展示的图片列表
 *  		               |- id    : 表示列表的id
 * 		                   |- images: 图片列表保存路径(src)和长(height)宽(width)
 *  	|	text ------------ 描述文字
 *  		               |- title: 标题
 * 		                   |- date : 日期
 *  		               |- p    : 段落列表
 *  		               |- author: 视频贡献者
 *  	|	video ----------- 视频信息     
 *  		               |- id   : 视频标识id
 *  		               |- file : 视频路径  
 *  	|	thumbnail ------- 下方展示的缩略图路径
 *
 * ps : 路径信息都是相对于html页面的
 */

/* 格式
var artData = [
	{
		background: "",
		orbit: {
			id: "",
			images:[{src:"",width:,height:}，{src:"",width:,height:}]
		},
		text:{
			title: "",
			date: "",
			p:["",""],
			author: ""
		},
		video:{
			id: "",
			file: ""
		},
		thumbnail: ""
	}
];
 */

var artData = [
	{
		background: "img/art-bg1.png",
		orbit: {
			id: "featured1",
			images:[{src:"img/5248376f1fe8d.jpg",width:545,height:363}]
		},
		text:{
			title: "陈正飞：巴黎寻觅之旅（预告片）",
			date: "2013年8月",
			p:["这个世界有许多种可能，其中一种，是遇见另一个自己，像一个平行世界的奇妙交集。追逐的脚步一路未停，你在寻找一个怎样的自己？&nbsp;"],
			author: "ELLE MEN"
		},
		video:{
			id: "video1",
			file: "./mp4/ost.mp3"
		},
		thumbnail: "img/5248376f1fe8d.jpg"
	},
	{
		background: "img/art-bg2.jpg",
		orbit: {
			id: "featured2",
			images:[{src:"img/524836ea331e2.jpg",width:545,height:363}]
		},
		text:{
			title: "陈正飞：巴黎寻觅之旅",
			date: "2013年8月",
			p:["这个世界有许多种可能，其中一种，是遇见另一个自己，像一个平行世界的奇妙交集。追逐的脚步一路未停，你在寻找一个怎样的自己？&nbsp;"],
			author: "ELLE MEN"
		},
		video:{
			id: "video2",
			file: "./mp4/test.mp4"
		},
		thumbnail: "img/524836ea331e2.jpg"
	}
];