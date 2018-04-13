/*!
 * @autofe/share v0.1.0
 * (c) 2018 Autohome Inc.
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
	typeof define === 'function' && define.amd ? define(['jquery'], factory) :
	(global.AutoFE = global.AutoFE || {}, global.AutoFE.Share = factory(global.jQuery));
}(this, (function ($) { 'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'share';
var DATA_KEY = 'fe.share';
var JQUERY_NO_CONFLICT = $.fn[NAME];

var strWindowFeatures = '\n  toolbar=0,\n  menubar=0,\n  status=0,\n  location=1,\n  resizable=1,\n  width=720,\n  height=540,\n  left=' + (window.screen.width - 720) / 2 + ',\n  top=' + (window.screen.height - 540) / 2 + '\n';

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 * wechat 微信, weibo 新浪微博, qzone QQ空间, qq QQ好友, friend 朋友圈
 */

function Share(elem, options) {
  var _this = this;

  this.options = $.extend({}, Share.Default, options);
  this.$elem = $(elem);
  this.$wechatBox = null;

  this.shareTitle = options.shareTitle || document.title;
  this.shareUrl = options.shareUrl || document.location.href;
  this.sharePic = options.sharePic || '';
  this.shareSummary = options.shareSummary || '';

  $(document).on('click', '.athm-share-wechat-box-close', function () {
    _this.$wechatBox && _this.$wechatBox.hide();
  });

  this.$elem.on('click', '.share-wechat', function () {
    _this.shareToWechat();
  });

  this.$elem.on('click', '.share-friend', function () {
    _this.shareToWechat();
  });

  this.$elem.on('click', '.share-weibo', function () {
    _this.shareToWeibo();
  });

  this.$elem.on('click', '.share-qzone', function () {
    _this.shareToQzone();
  });

  this.$elem.on('click', '.share-qq', function () {
    _this.shareToQQ();
  });
}

Share.Default = {};

Share.prototype.shareToWechat = function () {
  if (!this.$wechatBox) {
    var box = '\n      <div style="position:fixed;top:50%;left:50%;z-index:1000;width:269px;height:232px;border:1px solid #c3d3f2;border-radius:0 0 2px 2px;background-color:#fff;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);">\n        <div style="position:relative;height:40px;padding-left:13px;font-size:14px;font-weight:bold;color:#386ed3;line-height:40px;border-bottom:1px solid #c3d3f2;">\n          <div class="athm-share-wechat-box-close" style="position:absolute;right:0;top:0;width:14px;height:14px;padding:12px 13px;font-size:14px;font-weight:normal;color:#386ed3;line-height:1;cursor:pointer;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhklEQVRYR8WXP07DMBSHn5OhHTJwhc6oIgsSG+UGvQgonAC4QQQH4Qi0WyWWoIqZKzBkaIcklaO6dVLHfu/ZVTtaSb/v+c/7xQIu/BMX5kNH4O5p/bqJkrzIJ//nEEuzv6txVX5WcfT8nV8XknEQkHAAeGkAim2UPISWkPBRXX4JgBQaWK4+prOOQPtAVS6EgJvQEjq8aeBnGyczVWBnCc4hYYN3ZkCteUgJF9woIAdDSGDggwK+Eli4VYArQYE7BagSVDhKACvBgaMFXBJcOElgSEKOqw7XbzKYdk4Oo/4R3VeRcuDkGTA1KznGhfsJqGCRAh4BxluCPVxW3lbhEWAkAdNubzehR4qiBWxHzSc7UAKYc86VcApg4D5RbhWgwLkSgwIcOEfCKOADp0qcCISAUyROP0q1JqN/vWKCxfSM63QcBEJW3hexSRwvJo/rBQi49wkW2yzpEgDwtnqfyovQ8WZ0m/2mcVXnmziZh74V6XtiXJeZgrPTkLsfTO85O2FImOm/dkIWBz+sTpzmAAAAAElFTkSuQmCC) center center no-repeat;background-size:14px 14px;"></div>\n          \u626B\u63CF\u5206\u4EAB\u5230\u5FAE\u4FE1\u597D\u53CB\u6216\u5FAE\u4FE1\u670B\u53CB\u5708\n        </div>\n        <div style="border:none;background:#fff">\n          <div style="height: 190px;text-align: center;">\n            <img style="width:178px;height:178px;margin:6px;display:inline-block;" src="https://athm.cn/qrcode?size=256&amp;url=' + String(this.shareUrl) + '?">\n          </div>\n        </div>\n      </div>\n    ';
    this.$wechatBox = $(box);
    this.$wechatBox.appendTo($('body'));
  }
  this.$wechatBox.show();
};

Share.prototype.shareToQQ = function () {
  var f = 'https://connect.qq.com/widget/shareqq/index.html?';
  var p = ['url=', encodeURIComponent(this.shareUrl), '&title=', encodeURIComponent(this.shareTitle), '&pics=', encodeURIComponent(this.sharePic), '&summary=', encodeURIComponent(this.shareSummary)].join('');

  window.open(f + p, 'shareWindow', strWindowFeatures);
};

Share.prototype.shareToQzone = function () {
  // pics 多张图用 | 分割
  var f = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
  var p = ['url=', encodeURIComponent(this.shareUrl), '&title=', encodeURIComponent(this.shareTitle), '&pics=', encodeURIComponent(this.sharePic), '&summary=', encodeURIComponent(this.shareSummary)].join('');

  window.open(f + p, 'shareWindow', strWindowFeatures);
};

Share.prototype.shareToWeibo = function () {
  // pic 多张图片用 || 分割
  var f = 'https://service.weibo.com/share/share.php?';
  var p = ['url=', encodeURIComponent(this.shareUrl), '&title=', encodeURIComponent(this.shareTitle), '&pic=', encodeURIComponent(this.sharePic), '&appkey=2924220432'].join('');

  window.open(f + p, 'shareWindow', strWindowFeatures);
};

/**
 * ------------------------------------------------------------------------
 * Plugin Definition
 * ------------------------------------------------------------------------
 */

function Plugin(config) {
  return this.each(function () {
    var $this = $(this);
    var data = $this.data(DATA_KEY);

    if (!data) {
      var _config = $.extend({}, Share.Default, $this.data(), typeof config === 'object' && config);
      data = new Share(this, _config);
      $this.data(DATA_KEY, data);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError('No method named "' + config + '"');
      }
      data[config]();
    }
  });
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = Plugin;
$.fn[NAME].Constructor = Share;
$.fn[NAME].noConflict = function () {
  $.fn[NAME] = JQUERY_NO_CONFLICT;
  return Plugin;
};

return Share;

})));
