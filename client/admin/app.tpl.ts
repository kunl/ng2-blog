let tpl = `
 <div class="wrap">
  
  <Nav></Nav>

<div id="wpbody" role="main">
 <div id="wpbody-content" aria-label="主内容" tabindex="0">
  
  <div class="wrap">
<h1>仪表盘</h1>
<div id="welcome-panel" class="welcome-panel ">
 <div class="welcome-panel-content">
  <h2>欢迎使用WordPress！</h2>
  <p class="about-description">我们准备了几个链接供您开始：</p>
  <div class="welcome-panel-column-container">
<div class="welcome-panel-column">
 <h3>开始使用</h3>
 <a >自定义您的站点</a>
 <a >自定义您的站点</a>
</div>
<div class="welcome-panel-column">
 <h3>接下来</h3>
 <ul>
  <li><a >添加“关于”页面</a></li>
  <li><a >查看站点</a></li>
 </ul>
</div>

<Post></Post>


<my-lock>
  <ng-content></ng-content>
  <i class="lock"></i>
</my-lock>

  </div>
 </div>
</div>
<div id="dashboard-widgets-wrap">
 <div id="dashboard-widgets" class="metabox-holder">
  <div id="postbox-container-1" class="postbox-container">
  
 <div id="dashboard_activity" class="postbox ">
 
  <h2 class='hndle'><span>活动</span></h2>
  <div class="inside">
<div id="activity-widget">
 <div id="published-posts" class="activity-block">
  <h3>最近发布</h3>
  <ul>
<li><span>上午11:10 今天</span> <a href="http://127.0.0.1/wordpress/wp-admin/post.php?post=1&amp;action=edit" aria-label="编辑“世界，您好！”">世界，您好！</a></li>
  </ul>
 </div>
 <div id="latest-comments" class="activity-block">
  <h3>近期评论</h3>
  <ul id="the-comment-list" data-wp-lists="list:comment">
<li id="comment-1" class="comment even thread-even depth-1 comment-item approved">
 

</li>
  </ul>
  
 </div>
</div>
  </div>
 </div>
  </div>

  <div id="wpfooter" role="contentinfo">
<p id="footer-upgrade" class="alignright">0.0.1版本 </p>
            <Footer></Footer>
<div class="clear"></div>
  </div>
 
  

 </div>
 
  

`

export {tpl};