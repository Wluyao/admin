(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{650:function(t,e,a){},781:function(t,e,a){"use strict";var l=a(650);a.n(l).a},847:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return b}));var l=a(608),n=a.n(l),i={props:{height:{type:Number,default:360}},data:function(){return{chartId:"chart"+ +new Date+(1e3*Math.random()).toFixed(0),chartData:[{type:"类型1",value:45},{type:"类型2",value:52},{type:"类型3",value:89},{type:"类型4",value:145},{type:"类型5",value:29},{type:"类型6",value:102}]}},mounted:function(){this.createChart(this.chartId,this.chartData)},methods:{createChart:function(t,e){var a=new n.a.Chart({container:t,forceFit:!0,height:this.height,padding:[50,50,50,80],background:{fill:"#fff"}});a.source(e),a.scale("value",{min:0,alias:"数量"}),a.axis("type",{tickLine:{length:0}}),a.axis("value",{line:{lineWidth:1,stroke:"rgb(202,202,202)"},title:{textStyle:{fill:"#4a4a4a"}}}),a.interval().position("type*value").color("value").label("value"),a.render()}}},r=a(51),o=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.chartId}})}),[],!1,null,null,null).exports,s={props:{height:{type:Number,default:360}},data:function(){return{chartId:"chart"+ +new Date+(1e3*Math.random()).toFixed(0),chartData:[{name:"张三",vote:35654},{name:"李四",vote:65456},{name:"王五",vote:45724},{name:"赵六",vote:13654}]}},mounted:function(){this.createChart(this.chartId,this.chartData)},methods:{createChart:function(t,e){var a={"张三":"https://zos.alipayobjects.com/rmsportal/mYhpaYHyHhjYcQf.png","李四":"https://zos.alipayobjects.com/rmsportal/JBxkqlzhrlkGlLW.png","王五":"https://zos.alipayobjects.com/rmsportal/zlkGnEMgOawcyeX.png","赵六":"https://zos.alipayobjects.com/rmsportal/KzCdIdkwsXdtWkg.png"},l=new n.a.Chart({container:t,forceFit:!0,height:this.height,padding:[60,20,40,60],background:{fill:"#fff"}});l.source(e),l.scale({name:{alias:"姓名"},vote:{min:0,alias:"票数",formatter:function(t){return Number(t)/1e3+"k"}}}),l.tooltip({showTitle:!1}),l.interval().position("name*vote").color("name",["#7f8da9","#fec514","#db4c3c","#daf0fd"]).tooltip("name*vote"),l.point().position("name*vote").size(60).shape("name",(function(t){return["image",a[t]]})),l.render()}}},c=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.chartId}})}),[],!1,null,null,null).exports,u={props:{height:{type:Number,default:360}},data:function(){return{chartId:"chart"+ +new Date+(1e3*Math.random()).toFixed(0),chartData:[{type:"书架",value:48e3,cat:"家具"},{type:"椅子",value:36e3,cat:"家具"},{type:"桌子",value:9e3,cat:"家具"},{type:"复印机",value:30500,cat:"技术"},{type:"电话",value:22e3,cat:"技术"},{type:"配件",value:12e3,cat:"技术"},{type:"纸张",value:25e3,cat:"办公用品"},{type:"笔",value:17e3,cat:"办公用品"},{type:"美术",value:8e3,cat:"办公用品"},{type:"收纳",value:9e3,cat:"办公用品"}]}},mounted:function(){this.createChart(this.chartId,this.chartData)},methods:{createChart:function(t,e){var a=new n.a.Chart({container:t,forceFit:!0,height:this.height,padding:"auto",background:{fill:"#fff"}});a.source(e),a.scale("value",{alias:"数量"}),a.axis("type",{label:{textStyle:{fill:"#aaa"}},tickLine:{length:0}}),a.axis("value",{label:{textStyle:{fill:"#aaa"},formatter:function(t){return t.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}},title:{offset:70,textStyle:{fill:"#aaa"}}}),a.tooltip(!0,{showTitle:!1,itemTpl:'<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{type}：{value}</li>'}),a.guide().text({top:!0,position:["椅子","min"],content:"家具",style:{fill:"#000",fontSize:14,fontWeight:"300",textAlign:"center"},offsetY:40}),a.guide().text({top:!0,position:["电话","min"],content:"技术",style:{fill:"#000",fontSize:14,fontWeight:"300",textAlign:"center"},offsetY:40}),a.guide().text({top:!0,position:["笔","min"],content:"办公用品",style:{fill:"#000",fontSize:14,fontWeight:"300"},offsetY:40,offsetX:20}),a.guide().line({start:["30%","100%"],end:["30%","120%"],lineStyle:{stroke:"#d9d9d9",lineDash:[0,0]}}),a.guide().line({start:["60%","100%"],end:["60%","120%"],lineStyle:{stroke:"#d9d9d9",lineDash:[0,0]}}),a.interval().position("type*value").color("cat").tooltip("type*value",(function(t,e){return{type:t,value:e}})),a.render()}}},h=Object(r.a)(u,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.chartId}})}),[],!1,null,null,null).exports,p={props:{height:{type:Number,default:360}},data:function(){return{chartId:"chart"+ +new Date+(1e3*Math.random()).toFixed(0),chartData:[{company:"服装销售额",type:"第一季度",value:120012},{company:"化妆品销售额",type:"第一季度",value:21331},{company:"电器销售额",type:"第一季度",value:32142},{company:"服装销售额",type:"第二季度",value:90012},{company:"化妆品销售额",type:"第二季度",value:31331},{company:"电器销售额",type:"第二季度",value:25142},{company:"服装销售额",type:"第三季度",value:80012},{company:"化妆品销售额",type:"第三季度",value:28331},{company:"电器销售额",type:"第三季度",value:36142},{company:"服装销售额",type:"第四季度",value:150012},{company:"化妆品销售额",type:"第四季度",value:41331},{company:"电器销售额",type:"第四季度",value:53248}]}},mounted:function(){this.createChart(this.chartId,this.chartData)},methods:{createChart:function(t,e){var a=new n.a.Chart({container:t,forceFit:!0,height:this.height,padding:[50,50,50,100],background:{fill:"#fff"}});a.source(e),a.scale("value",{alias:"销售额（元）"}),a.axis("type",{label:{textStyle:{fill:"#aaa"}},tickLine:{length:0}}),a.axis("value",{label:{textStyle:{fill:"#aaa"},formatter:function(t){return t/1e3+"k"}},title:{offset:80}}),a.legend({position:"top-center"}),a.interval().position("type*value").color("company").adjust([{type:"dodge",marginRatio:.02}]),a.render()}}},f=Object(r.a)(p,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.chartId}})}),[],!1,null,null,null).exports,m={props:{height:{type:Number,default:360}},data:function(){return{chartId:"chart"+ +new Date+(1e3*Math.random()).toFixed(0),chartData:[{name:"绝云",value:1256},{name:"米法",value:2108},{name:"再飞",value:1780},{name:"青湳",value:2254},{name:"有田",value:1233},{name:"十吾",value:1180},{name:"象数",value:1455},{name:"顾倾",value:372},{name:"画康",value:243},{name:"完白",value:1193}]}},mounted:function(){this.createChart(this.chartId,this.chartData)},methods:{createChart:function(t,e){var a=new n.a.Chart({container:t,forceFit:!0,height:this.height,padding:[20,20,50,50],background:{fill:"#fff"}});a.source(e),a.scale("value",{alias:"行数(万)"}),a.axis("name",{label:{textStyle:{fill:"#aaa"}},tickLine:{length:0}}),a.axis("value",{label:null,title:{offset:30}}),a.guide().regionFilter({top:!0,start:["start","max"],end:["end",1440],color:"#FF4D4F"}),a.guide().line({top:!0,start:["start",1440],end:["end",1440],lineStyle:{stroke:"#595959",lineWidth:1,lineDash:[3,3]},text:{position:"start",style:{fill:"#595959",fontSize:12,fontWeight:300},content:"公司平均 14,40",offsetY:-5}}),a.interval().position("name*value").label("value",{textStyle:function(t){var e={fill:"#595959",fontWeight:"normal",fontSize:12};return parseInt(t)>1440&&(e.fontWeight="bold"),e},offset:2}),a.render()}}},v=Object(r.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.chartId}})}),[],!1,null,null,null).exports,d={props:{height:{type:Number,default:360}},data:function(){return{chartId:"chart"+ +new Date+(1e3*Math.random()).toFixed(0),chartData:[{type:"日用品",money:300},{type:"伙食费",money:900},{type:"交通费",money:200},{type:"水电费",money:300},{type:"房租",money:1200},{type:"商场消费",money:1e3},{type:"应酬交际",money:2e3},{type:"总费用",money:5900}]}},mounted:function(){this.createChart(this.chartId,this.chartData)},methods:{createChart:function(t,e){var a=n.a,l=a.Util,i=a.Shape,r=a.Global;i.registerShape("interval","waterfall",{draw:function(t,e){var a=function(t){var e=r.shape.interval;return l.mix({},e,t.style,{fill:t.color,stroke:t.color,fillOpacity:t.opacity})}(t),n=function(t){for(var e=[],a=0;a<t.length;a++){var l=t[a];if(l){var n=0===a?"M":"L";e.push([n,l.x,l.y])}}var i=t[0];return e.push(["L",i.x,i.y]),e.push(["z"]),e}(t.points);n=this.parsePath(n);var i=e.addShape("path",{attrs:l.mix(a,{path:n})});if(t.nextPoints){var o=[["M",t.points[2].x,t.points[2].y],["L",t.nextPoints[0].x,t.nextPoints[0].y]];0===t.nextPoints[0].y&&(o[1]=["L",t.nextPoints[1].x,t.nextPoints[1].y]),o=this.parsePath(o),e.addShape("path",{attrs:{path:o,stroke:"#8c8c8c",lineDash:[4,2]}})}return i}});for(var o=0;o<e.length;o++){var s=e[o];o>0&&o<e.length-1&&(l.isArray(e[o-1].money)?s.money=[e[o-1].money[1],s.money+e[o-1].money[1]]:s.money=[e[o-1].money,s.money+e[o-1].money])}var c=new n.a.Chart({container:t,forceFit:!0,height:this.height,padding:[50,50,80,80],background:{fill:"#fff"}});c.source(e),c.legend({custom:!0,clickable:!1,items:[{value:"各项花销",marker:{symbol:"circle",fill:"#1890FF",radius:5}},{value:"总费用",marker:{symbol:"circle",fill:"#8c8c8c",radius:5}}]}),c.interval().position("type*money").color("type",(function(t){return"总费用"===t?"#8c8c8c":"#1890FF"})).tooltip("type*money",(function(t,e){return l.isArray(e)?{name:"费用(元)",value:e[1]-e[0]}:{name:"费用(元)",value:e}})).shape("waterfall"),c.render()}}},y=Object(r.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.chartId}})}),[],!1,null,null,null).exports,g={props:{height:{type:Number,default:360}},data:function(){return{chartId:"chart"+ +new Date+(1e3*Math.random()).toFixed(0),chartData:[{time:"17 Q1",type:"移动游戏",value:0},{time:"17 Q1",type:"移动购物",value:17.8},{time:"17 Q1",type:"移动营销",value:69.4},{time:"17 Q1",type:"共享单车",value:12.8},{time:"17 Q2",type:"移动游戏",value:0},{time:"17 Q2",type:"移动购物",value:18.1},{time:"17 Q2",type:"移动营销",value:70.7},{time:"17 Q2",type:"共享单车",value:11.2},{time:"17 Q3",type:"移动游戏",value:12},{time:"17 Q3",type:"移动购物",value:20.8},{time:"17 Q3",type:"移动营销",value:57.4},{time:"17 Q3",type:"共享单车",value:9.8},{time:"17 Q4",type:"移动游戏",value:.1},{time:"17 Q4",type:"移动购物",value:20.3},{time:"17 Q4",type:"移动营销",value:69.2},{time:"17 Q4",type:"共享单车",value:10.4},{time:"18 Q1",type:"移动游戏",value:.4},{time:"18 Q1",type:"移动购物",value:17.3},{time:"18 Q1",type:"移动营销",value:68.3},{time:"18 Q1",type:"共享单车",value:14},{time:"18 Q2",type:"移动游戏",value:1.2},{time:"18 Q2",type:"移动购物",value:18.3},{time:"18 Q2",type:"移动营销",value:68.6},{time:"18 Q2",type:"共享单车",value:11.9}]}},mounted:function(){this.createChart(this.chartId,this.chartData)},methods:{createChart:function(t,e){var a=new n.a.Chart({container:t,forceFit:!0,height:this.height,padding:"auto",background:{fill:"#fff"}});a.source(e),a.scale("value",{formatter:function(t){return t+"%"}}),a.axis("time",{label:{textStyle:{fill:"#aaa"}},tickLine:{length:0}}),a.legend({position:"right-center"}),a.intervalStack().position("time*value").color("type",["#40a9ff","#1890ff","#096dd9","#0050b3"]).label("value",(function(t){return!(t<10)&&{position:"middle",offset:0,textStyle:{fill:"#fff",fontSize:12}}})),a.render()}}},x={name:"PillarChart",components:{ChartBase:o,ChartCustom:c,ChartGroup1:h,ChartGroup2:f,ChartGuide:v,ChartWaterfall:y,ChartOverlay:Object(r.a)(g,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.chartId}})}),[],!1,null,null,null).exports}},b=(a(781),Object(r.a)(x,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart-wrap"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{lg:12,sm:24}},[a("p",{staticClass:"title"},[t._v("基础柱状图")]),t._v(" "),a("chart-base")],1),t._v(" "),a("el-col",{attrs:{lg:12,sm:24}},[a("p",{staticClass:"title"},[t._v("自定义顶部图片")]),t._v(" "),a("chart-custom")],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{lg:12,sm:24}},[a("p",{staticClass:"title"},[t._v("分组柱状图1")]),t._v(" "),a("chart-group1")],1),t._v(" "),a("el-col",{attrs:{lg:12,sm:24}},[a("p",{staticClass:"title"},[t._v("分组柱状图2")]),t._v(" "),a("chart-group2")],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{lg:12,sm:24}},[a("p",{staticClass:"title"},[t._v("辅助元素")]),t._v(" "),a("chart-guide")],1),t._v(" "),a("el-col",{attrs:{lg:12,sm:24}},[a("p",{staticClass:"title"},[t._v("瀑布图")]),t._v(" "),a("chart-waterfall")],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{lg:12,sm:24}},[a("p",{staticClass:"title"},[t._v("堆叠柱状图")]),t._v(" "),a("chart-overlay")],1),t._v(" "),a("el-col",{attrs:{lg:12,sm:24}})],1)],1)}),[],!1,null,"734f4557",null).exports)}}]);