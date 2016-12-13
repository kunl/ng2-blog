export default   `
    <div class="menu">
<ul id="adminmenu">
 <li id="menu-dashboard">
  <a >
仪表盘
  </a>
 </li>
 <li class=" wp-menu-separator" >
  
 </li>
 <li class=" ">
  <a  class=" " aria-haspopup="true">

<div class='wp-menu-name'>文章</div>
  </a>
  <ul class='wp-submenu wp-submenu-wrap'>
<li class='wp-submenu-head' >文章</li>
<li class="wp-first-item"><a  class="wp-first-item">所有文章</a></li>
<li><a href='post-new.php'>写文章</a></li>
<li>
<a href='edit-tags.php?taxonomy=category'>分类目录</a></li>
<li>
<a href='edit-tags.php?taxonomy=post_tag'>标签</a></li>
  </ul>
 </li>
 <li class="" id="menu-media">
  <a href='upload.php' class="menu-icon-media" aria-haspopup="true">
<div class="wp-menu-arrow">
 <div></div>
</div>
<div class='wp-menu-image dashicons-before dashicons-admin-media'>
 <br />
</div>
<div class='wp-menu-name'>多媒体</div>
  </a>
  <ul class='wp-submenu wp-submenu-wrap'>
<li class='wp-submenu-head' >多媒体</li>
<li class="wp-first-item"><a href='upload.php' class="wp-first-item">媒体库</a></li>
<li><a href='media-new.php'>添加</a></li>
  </ul>
 </li>
 <li class="" id="menu-pages">
  <a href='edit.php?post_type=page' class="">
<div class="wp-menu-arrow">
 <div></div>
</div>
<div class='wp-menu-image dashicons-before dashicons-admin-page'>
 <br />
</div>
<div class='wp-menu-name'>页面</div>
  </a>
  <ul class='wp-submenu wp-submenu-wrap'>
<li class='wp-submenu-head' >页面</li>
<li class="wp-first-item"><a href='edit.php?post_type=page' class="wp-first-item">所有页面</a></li>
<li><a href='post-new.php?post_type=page'>新建页面</a></li>
  </ul>
 </li>
 <li class="  menu-icon-comments -last" id="menu-comments">
  <a href='edit-comments.php' class="  menu-icon-comments -last">
<div class="wp-menu-arrow">
 <div></div>
</div>
<div class='wp-menu-image dashicons-before dashicons-admin-comments'>
 <br />
</div>
<div class='wp-menu-name'>评论<span class="awaiting-mod count-0"><span class="pending-count">0</span></span>
</div>
  </a>
 </li>
 <li class=" wp-menu-separator" >
  
 </li>
 
 <li class="menu-icon-plugins" id="menu-plugins">
  
  <ul class='wp-submenu wp-submenu-wrap'>
<li class='wp-submenu-head' >插件<span class='update-plugins count-0'><span class='plugin-count'>0</span></span>
</li>
<li class="wp-first-item"><a href='plugins.php' class="wp-first-item">已安装的插件</a></li>
<li><a href='plugin-install.php'>安装插件</a></li>
<li><a href='plugin-editor.php'>编辑</a></li>
  </ul>
 </li>
 <li class="menu-icon-users" id="menu-users">
  <a href='users.php' class="menu-icon-users" aria-haspopup="true">
<div class="wp-menu-arrow">
 <div></div>
</div>
<div class='wp-menu-image dashicons-before dashicons-admin-users'>
 <br />
</div>
<div class='wp-menu-name'>用户</div>
  </a>
  <ul class='wp-submenu wp-submenu-wrap'>
<li class='wp-submenu-head' >用户</li>
<li class="wp-first-item"><a href='users.php' class="wp-first-item">所有用户</a></li>
<li><a href='user-new.php'>添加用户</a></li>
<li><a href='profile.php'>我的个人资料</a></li>
  </ul>
 </li>
 <li class="menu-icon-tools" id="menu-tools">
  <a href='tools.php' class="menu-icon-tools" aria-haspopup="true">
<div class="wp-menu-arrow">
 <div></div>
</div>
<div class='wp-menu-image dashicons-before dashicons-admin-tools'>
 <br />
</div>
<div class='wp-menu-name'>工具</div>
  </a>
  <ul class='wp-submenu wp-submenu-wrap'>
<li class='wp-submenu-head' >工具</li>
<li class="wp-first-item"><a href='tools.php' class="wp-first-item">可用工具</a></li>
<li><a href='import.php'>导入</a></li>
<li><a href='export.php'>导出</a></li>
  </ul>
 </li>
 <li class="menu-icon-settings -last" id="menu-settings">
  <a href='options-general.php' class="menu-icon-settings -last" aria-haspopup="true">
<div class="wp-menu-arrow">
 <div></div>
</div>
<div class='wp-menu-image dashicons-before dashicons-admin-settings'>
 <br />
</div>
<div class='wp-menu-name'>设置</div>
  </a>
  <ul class='wp-submenu wp-submenu-wrap'>
<li class='wp-submenu-head' >设置</li>
<li class="wp-first-item"><a href='options-general.php' class="wp-first-item">常规</a></li>
<li><a href='options-writing.php'>撰写</a></li>
<li><a href='options-reading.php'>阅读</a></li>
<li><a href='options-discussion.php'>讨论</a></li>
<li><a href='options-media.php'>多媒体</a></li>
<li><a href='options-permalink.php'>固定链接</a></li>
  </ul>
 </li>
 <li id="collapse-menu" class="hide-if-no-js">
  <div id="collapse-button">
<div></div>
  </div><span>收起菜单</span></li>
</ul>
  </div>
  <div id="content">
<div id="wpadminbar">
 <div class="quicklinks" id="wp-toolbar">
  <a class=" ab-top-menu ab-item" href="http://127.0.0.1/wordpress/">查看站点</a>
  <a class="ab-item" >您好，root</a>
 </div>

</div>

`