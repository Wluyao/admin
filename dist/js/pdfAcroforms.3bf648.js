(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{696:function(e,t,n){},697:function(e,t,n){},836:function(e,t,n){"use strict";var i=n(696);n.n(i).a},837:function(e,t,n){"use strict";var i=n(697);n.n(i).a},883:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var i=n(613),a=n.n(i),r=n(616),o=n.n(r),s=n(695);a.a.GlobalWorkerOptions.workerSrc=o.a;var c={name:"PdfAcroforms",data:function(){return{fileLoading:!1,fileUrl:"http://www.xdocin.com/xdoc?_key=t7t7z6j54vezfdnwptijcmo63i&_func=down&_dir=math.pdf"}},created:function(){},mounted:function(){this.loadFile()},methods:{loadFile:function(){var e=this;this.fileLoading=!0,a.a.getDocument(this.fileUrl).promise.then((function(t){for(var n=t.numPages,i=1;i<=n;i++)e.renderPage(t,i);e.fileLoading=!1})).catch((function(){e.$message.error("文件加载失败！"),e.fileLoading=!1}))},renderPage:function(e,t){var n=this;e.getPage(t).then((function(e){var i=new s.PDFPageView({container:n.$refs.container,id:t,scale:1,defaultViewport:e.getViewport({scale:1}),annotationLayerFactory:new s.DefaultAnnotationLayerFactory,renderInteractiveForms:!0});i.setPdfPage(e),i.draw()}))}}},f=(n(836),n(837),n(51)),l=Object(f.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"pdf-acroforms"},[this._m(0),this._v(" "),t("div",{directives:[{name:"loading",rawName:"v-loading",value:this.fileLoading,expression:"fileLoading"}],ref:"container",staticClass:"pdf-acroforms__container",attrs:{"element-loading-spinner":"el-icon-loading","element-loading-text":"文件加载中"}})])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"pdf-acroforms__tip"},[t("p",[this._v("\n      参考的是pdf.js官方例子：\n      "),t("a",{attrs:{href:"https://github.com/mozilla/pdf.js/tree/master/examples/acroforms",target:"_blank"}},[this._v("acroforms")])]),this._v(" "),t("p",[this._v("清晰度更高。")])])}],!1,null,"5bec09e9",null).exports}}]);