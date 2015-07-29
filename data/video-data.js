/** 视频页面的配置文件 */
/*  
 * videoData : 视频页面列表
 *  	|	background ------ 背景图片路径
 *  	|	orbit ---- 供展示的图片列表
 *  		               |- id    : 表示列表的id
 * 		                   |- images: 图片列表保存路径(src)和长(height)宽(width)
 *  	|	text ------------ 描述文字
 *  		               |- title: 标题
 * 		                   |- date : 日期
 *  		               |- p    : 段落列表
 *  	|	video ----------- 视频信息     
 *  		               |- id   : 视频标识id
 *  		               |- file : 视频路径  
 *  	|	thumbnail ------- 下方展示的缩略图路径
 *
 * ps : 路径信息都是相对于html页面的
 */

/* 格式
var videoData = [
	{
		background: "",
		orbit: {
			id: "",
			images:[{src:"",width:,height:}，{src:"",width:,height:}]
		},
		text:{
			title: "",
			date: "",
			p:["",""]
		},
		video:{
			id: "",
			file: ""
		},
		thumbnail: ""
	}
];
 */

var videoData = [
	{
		background: "img/552b2cbe0165c.jpg",
		orbit: {
			id: "featured1",
			images:[{src:"img/52483312ea688.jpg",width:545,height:363}]
		},
		text:{
			title: "3周年回顾",
			date: "2013年8月",
			p:["自2010年品牌成立以来，TRENDIANO秉持“时尚改变生活”的理念，与各大主流媒体通力合作，屡出精品，持续向消费者传递出自信、积极进取、享受生活的精神和态度，现在就让我们来回顾一下品牌3年来的精彩瞬间！&nbsp;","自2010年品牌成立以来，TRENDIANO秉持“时尚改变生活”的理念，与各大主流媒体通力合作，屡出精品，持续向消费者传递出自信、积极进取、享受生活的精神和态度，现在就让我们来回顾一下品牌3年来的精彩瞬间！&nbsp;"]
		},
		video:{
			id: "video1",
			file: "./mp4/ost.mp3"
		},
		thumbnail: "img/52483312ea688.jpg"
	},
	{
		background: "img/552b2cbe0165c.jpg",
		orbit: {
			id: "featured2",
			images:[{src:"img/52483312ea688.jpg",width:545,height:363},{src:"img/52483312ea688.jpg",width:545,height:363}]
		},
		text:{
			title: "3周年回顾",
			date: "2013年8月",
			p:["自2010年品牌成立以来，TRENDIANO秉持“时尚改变生活”的理念，与各大主流媒体通力合作，屡出精品，持续向消费者传递出自信、积极进取、享受生活的精神和态度，现在就让我们来回顾一下品牌3年来的精彩瞬间！&nbsp;","自2010年品牌成立以来，TRENDIANO秉持“时尚改变生活”的理念，与各大主流媒体通力合作，屡出精品，持续向消费者传递出自信、积极进取、享受生活的精神和态度，现在就让我们来回顾一下品牌3年来的精彩瞬间！&nbsp;","自2010年品牌成立以来，TRENDIANO秉持“时尚改变生活”的理念，与各大主流媒体通力合作，屡出精品，持续向消费者传递出自信、积极进取、享受生活的精神和态度，现在就让我们来回顾一下品牌3年来的精彩瞬间！&nbsp;"]
		},
		video:{
			id: "video2",
			file: "./mp4/test.mp4"
		},
		thumbnail: "img/52483312ea688.jpg"
	},
	{
		background: "img/552b2cbe0165c.jpg",
		orbit: {
			id: "featured3",
			images:[{src:"img/52483312ea688.jpg",width:545,height:363}]
		},
		text:{
			title: "3周年回顾",
			date: "2013年8月",
			p:["自2010年品牌成立以来，TRENDIANO秉持“时尚改变生活”的理念，与各大主流媒体通力合作，屡出精品，持续向消费者传递出自信、积极进取、享受生活的精神和态度，现在就让我们来回顾一下品牌3年来的精彩瞬间！&nbsp;"]
		},
		video:{
			id: "video3",
			file: "./mp4/test.mp4"
		},
		thumbnail: "img/52483312ea688.jpg"
	},
	{
		background: "img/552b2cbe0165c.jpg",
		orbit: {
			id: "featured4",
			images:[{src:"img/52483312ea688.jpg",width:545,height:363}]
		},
		text:{
			title: "3周年回顾",
			date: "2013年8月",
			p:["自2010年品牌成立以来，TRENDIANO秉持“时尚改变生活”的理念，与各大主流媒体通力合作，屡出精品，持续向消费者传递出自信、积极进取、享受生活的精神和态度，现在就让我们来回顾一下品牌3年来的精彩瞬间！&nbsp;"]
		},
		video:{
			id: "video4",
			file: "./mp4/music.mp4"
		},
		thumbnail: "img/52483312ea688.jpg"
	},
	{
		background: "img/552b2cbe0165c.jpg",
		orbit: {
			id: "featured5",
			images:[{src:"img/52483312ea688.jpg",width:545,height:363}]
		},
		text:{
			title: "3周年回顾",
			date: "2013年8月",
			p:["自2010年品牌成立以来，TRENDIANO秉持“时尚改变生活”的理念，与各大主流媒体通力合作，屡出精品，持续向消费者传递出自信、积极进取、享受生活的精神和态度，现在就让我们来回顾一下品牌3年来的精彩瞬间！&nbsp;"]
		},
		video:{
			id: "video5",
			file: "./mp4/music.mp4"
		},
		thumbnail: "img/52483312ea688.jpg"
	},
	{
		background: "img/552b2cbe0165c.jpg",
		orbit: {
			id: "featured6",
			images:[{src:"img/52483312ea688.jpg",width:545,height:363}]
		},
		text:{
			title: "3周年回顾",
			date: "2013年8月",
			p:["自2010年品牌成立以来，TRENDIANO秉持“时尚改变生活”的理念，与各大主流媒体通力合作，屡出精品，持续向消费者传递出自信、积极进取、享受生活的精神和态度，现在就让我们来回顾一下品牌3年来的精彩瞬间！&nbsp;"]
		},
		video:{
			id: "video6",
			file: "./mp4/music.mp4"
		},
		thumbnail: "img/52483312ea688.jpg"
	},
	{
		background: "img/552b2cbe0165c.jpg",
		orbit: {
			id: "featured7",
			images:[{src:"img/52483312ea688.jpg",width:545,height:363}]
		},
		text:{
			title: "3周年回顾",
			date: "2013年8月",
			p:["自2010年品牌成立以来，TRENDIANO秉持“时尚改变生活”的理念，与各大主流媒体通力合作，屡出精品，持续向消费者传递出自信、积极进取、享受生活的精神和态度，现在就让我们来回顾一下品牌3年来的精彩瞬间！&nbsp;"]
		},
		video:{
			id: "video7",
			file: "./mp4/music.mp4"
		},
		thumbnail: "img/52483312ea688.jpg"
	},
	{
		background: "img/552b2cbe0165c.jpg",
		orbit: {
			id: "featured8",
			images:[{src:"img/52483312ea688.jpg",width:545,height:363}]
		},
		text:{
			title: "3周年回顾",
			date: "2013年8月",
			p:["自2010年品牌成立以来，TRENDIANO秉持“时尚改变生活”的理念，与各大主流媒体通力合作，屡出精品，持续向消费者传递出自信、积极进取、享受生活的精神和态度，现在就让我们来回顾一下品牌3年来的精彩瞬间！&nbsp;"]
		},
		video:{
			id: "video8",
			file: "./mp4/music.mp4"
		},
		thumbnail: "img/52483312ea688.jpg"
	}
];