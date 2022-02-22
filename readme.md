# <p align="center"><font size=5>自用NexT主题友链朋友圈插件</font></p>

【个人主页】

<table>
    <tr>
        <td align="center" width=150px>GitHub Pages</td>
        <td align="left" width=450px>
            <a href="https://qidaink.github.io/" target="_blank">https://qidaink.github.io/</a>
        </td>
    </tr>
    <tr>
        <td align="center" width=150px>Gitee Pages</td>
        <td align="left" >
            <a href="https://qidaink.gitee.io/" target="_blank">https://qidaink.gitee.io/</a>
        </td>
    </tr>
</table>

【说明】

&emsp;&emsp;原作者项目插件为`butterfly`主题，而自己使用的是`NexT`主题，所以`folk`后进行了修改适配，仅供自己学习使用。如有需求，还请使用原作者插件(我当时用的版本是【`hexo-filter-fcircle@0.0.6`】，最后一次提交的版本号为【`0.0.6: 0e981284fb2e59da1aa518ca82a3d0bfa23d00d4`】)。

- 原作者插件项目

<table>
    <tr>
        <td align="center">原项目</td>
        <td align="center">项目地址</td>
    </tr>
    <tr>
        <td align="left">hexo-filter-fcircle</td>
        <td align="left"><a href="https://github.com/Akilarlxh/hexo-filter-fcircle" target="_blank">https://github.com/Akilarlxh/hexo-filter-fcircle</td>
    </tr>
</table>


- 参考博客

<table>
    <tr>
        <td align="center">参考博客</td>
        <td align="center">博客文章</td>
    </tr>
    <tr>
        <td align="left">Akilarの糖果屋</td>
        <td align="left"><a href="https://akilar.top/posts/62f13a97/" target="_blank">hexo-filter-fcircle</td>
    </tr>
    <tr>
        <td align="left">贰猹の小窝</td>
        <td align="left"><a href="https://akilar.top/posts/615e2dec/" target="_blank">友链朋友圈食用说明书</td>
    </tr>
    <tr>
        <td align="left">友链朋友圈</td>
        <td align="left"><a href="https://hexo-circle-of-friends-doc.vercel.app/" target="_blank">说明文档</td>
    </tr>
</table>

【安装与配置】

```yml
# ------------------------------------------------
# Instructions: 友链朋友圈插件
# Plugins: npm install hexo-next-fcircle --save
# Attention: 要提前创建好 fcircle 页面以及 fcircle导航菜单
# ------------------------------------------------
# [blogRoot]/_config.yml 添加以下内容
fcircle:
  enable: true   #控制开关
  apiurl: https://hexo-circle-of-friends-rose.vercel.app/all #api地址
  initnumber: 20 #【可选】页面初始化展示文章数量
  stepnumber: 10 #【可选】每次加载增加的篇数
  fcircleCSS: "https://cdn.jsdelivr.net/npm/hexo-next-fcircle@latest/lib/css/default.min.css"     #【可选】开发者接口，自定义css链接
  fcircleJs: "https://cdn.jsdelivr.net/npm/hexo-next-fcircle@latest/lib/js/fcircle.min.js"
  fetchJs: "https://cdn.jsdelivr.net/npm/hexo-next-fcircle@latest/lib/js/fetch.min.js"      #【可选】开发者接口，自定义js链接
  fcirclePjax: "pjax" # 适配 pjax
  error_img: "https://cdn.jsdelivr.net/npm/hexo-next-fcircle@latest/lib/img/friends_404.gif"
  front_matter: #【可选】fcircle页面的 front_matter 配置
    title: 欢迎来到我的友链朋友圈
    comments: false
```
