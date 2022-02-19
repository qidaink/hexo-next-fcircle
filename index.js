/* =====================================================================
* FileInstructions：NexT 主题友链朋友圈插件js实现文件
* Modify: qidaink
* Instructions: 仅供自己学习使用，如有需求，还请使用作者原插件
* =====================================================================*/
'use strict'

if( hexo.config.fcircle.enable == false )  return;  /* 判断是否开启了 fcircle 配置项*/

/*---------------------------------------------------------------------*/

/** 配置参数的值
 * 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。
 */
 const fcircle = Object.assign({
  apiurl: "",   // api地址
  initnumber: 20,      // 页面展示文章数量
  stepnumber: 10,      // 每次加载增加的篇数
  error_img: "https://cdn.jsdelivr.net/npm/hexo-next-fcircle@latest/lib/img/friends_404.gif",
  fcircleCSS: "https://cdn.jsdelivr.net/npm/hexo-next-fcircle@latest/lib/css/default.min.css",     // 开发者接口，自定义css链接
  fcircleJs: "https://cdn.jsdelivr.net/npm/hexo-next-fcircle@latest/lib/js/fcircle.min.js", // 开发者接口，自定义js链接
  fetchJs: "https://cdn.jsdelivr.net/npm/hexo-next-fcircle@latest/lib/js/fetch.min.js",
  fcirclePjax: "pjax"
}, hexo.config.fcircle);


/* 本地加载需安装依赖：npm install @next-theme/utils */
const Util = require('@next-theme/utils');  
const nunjuck = require('nunjucks')
const utils = new Util(hexo, __dirname);
/* 布局模板文件渲染 */
const content_njk = nunjuck.render(utils.getFilePath('lib/layout/fcircle.njk'), fcircle)  /* 传入参数到fcircle.njk模板文件 */


let pageData = {
  content: content_njk
}
if (fcircle.front_matter) {
  pageData = Object.assign(pageData, fcircle.front_matter)
}
console.log("========================================")
console.log("hexo-next-fcircle 插件已加载！")
console.log("========================================")
hexo.extend.generator.register('fcircle', function(locals){
  return {
    path: 'fcircle/index.html',
    data: pageData,
    layout: ['page', 'index']
  }
});
