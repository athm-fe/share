# Share

## Usage

样式请自己写，该库对 HTML 的惟一要求就是必须有几个分享按钮的样式类名，可以是 `share-wechat`，`share-weibo`，`share-friend`，`share-qzone`，`share-qq`。

```html
<div class="share">
  <button type="button" class="share-wechat">
    微信
  </button>
  <button type="button" class="share-weibo">
    新浪微博
  </button>
  <button type="button" class="share-friend">
    朋友圈
  </button>
  <button type="button" class="share-qzone">
    QQ空间
  </button>
  <button type="button" class="share-qq">
    QQ好友
  </button>
</div>
```

通过脚本初始化

```javascript
$('.share').share({
  shareTitle: '分享标题',
  shareUrl: 'https://m.autohome.com.cn/',
  sharePic: 'https://www3.autoimg.cn/newsdfs/g12/M12/B4/C9/400x300_0_autohomecar__wKjBy1g_CemAHZEvAAGyJet9vxY587.JPG',
  shareSummary: '分享描述',
});
```

## Options

参数可以通过 data attributes 或者 JavaScript 两种方式来配置.

Name | Type | Default | Description
---- | ---- | ------- | -----------
shareTitle | string | `document.title` | 分享标题
shareUrl | string | `document.location.href` | 分享链接
sharePic | string | 空 | 分享配图
shareSummary | string | 空 | 分享内容

# End

Thanks to [Bootstrap](http://getbootstrap.com/)
