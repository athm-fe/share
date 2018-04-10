import $ from 'jquery';

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'share';
const DATA_KEY = 'fe.share';
const JQUERY_NO_CONFLICT = $.fn[NAME];

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

function Share(elem, options) {
  this.options = $.extend({}, Share.Default, options);
  this.$elem = $(elem);
  this.$shareWx = $('.share-weixin', this.$elem);
  this.$shareWb = $('.share-weibo', this.$elem);
  this.$shareQz = $('.share-qzone', this.$elem);
  this.$shareFr = $('.share-friend', this.$elem);
  this.$shareQq = $('.share-qq', this.$elem);

  this.sharetitle = options.sharetitle;
  this.shareUrl = options.shareUrl;
  this.pic = options.pic;
  this.summary = options.summary;

  this.init();
}

Share.Default = {};


Share.prototype.init = function () {
  // TODO 点击空白区域关闭
  // TODO 腾讯微博
  var that = this;
  that.$shareWx.on('click', function () {
    $('<div id="bsWXBox" class="bsBox" style="position:fixed;top:50%;left:50%;z-index:1000;width:269px;height:232px;border:1px solid #c3d3f2;border-radius:0 0 2px 2px;background-color:#fff;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);"><div class="bsTop" style="position:relative;height:40px;padding-left:13px;font-size:14px;font-weight:bold;color:#386ed3;line-height:40px;border-bottom:1px solid #c3d3f2;"><div class="bsClose" style="position:absolute;right:0;top:0;width:14px;height:14px;padding:12px 13px;font-size:14px;font-weight:normal;color:#386ed3;line-height:1;cursor:pointer;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhklEQVRYR8WXP07DMBSHn5OhHTJwhc6oIgsSG+UGvQgonAC4QQQH4Qi0WyWWoIqZKzBkaIcklaO6dVLHfu/ZVTtaSb/v+c/7xQIu/BMX5kNH4O5p/bqJkrzIJ//nEEuzv6txVX5WcfT8nV8XknEQkHAAeGkAim2UPISWkPBRXX4JgBQaWK4+prOOQPtAVS6EgJvQEjq8aeBnGyczVWBnCc4hYYN3ZkCteUgJF9woIAdDSGDggwK+Eli4VYArQYE7BagSVDhKACvBgaMFXBJcOElgSEKOqw7XbzKYdk4Oo/4R3VeRcuDkGTA1KznGhfsJqGCRAh4BxluCPVxW3lbhEWAkAdNubzehR4qiBWxHzSc7UAKYc86VcApg4D5RbhWgwLkSgwIcOEfCKOADp0qcCISAUyROP0q1JqN/vWKCxfSM63QcBEJW3hexSRwvJo/rBQi49wkW2yzpEgDwtnqfyovQ8WZ0m/2mcVXnmziZh74V6XtiXJeZgrPTkLsfTO85O2FImOm/dkIWBz+sTpzmAAAAAElFTkSuQmCC) center center no-repeat;background-size:14px 14px;"></div>扫描分享到微信好友或微信朋友圈</div><div class="bsFrameDiv" style="border:none;background:#fff"><div style="height: 190px;text-align: center;"><img style="width:178px;height:178px;margin:6px;display:inline-block;" src="https://athm.cn/qrcode?size=256&amp;url='+that.shareUrl+'?"></div></div></div>').appendTo($("body"));
    $(".bsClose").on('click', function () {
      $("#bsWXBox").remove();
    });
  });

  that.$shareFr.on('click', function () {
    $('<div id="bsWXBox" class="bsBox" style="position:fixed;top:50%;left:50%;z-index:1000;width:269px;height:232px;border:1px solid #c3d3f2;border-radius:0 0 2px 2px;background-color:#fff;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);"><div class="bsTop" style="position:relative;height:40px;padding-left:13px;font-size:14px;font-weight:bold;color:#386ed3;line-height:40px;border-bottom:1px solid #c3d3f2;"><div class="bsClose" style="position:absolute;right:0;top:0;width:14px;height:14px;padding:12px 13px;font-size:14px;font-weight:normal;color:#386ed3;line-height:1;cursor:pointer;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhklEQVRYR8WXP07DMBSHn5OhHTJwhc6oIgsSG+UGvQgonAC4QQQH4Qi0WyWWoIqZKzBkaIcklaO6dVLHfu/ZVTtaSb/v+c/7xQIu/BMX5kNH4O5p/bqJkrzIJ//nEEuzv6txVX5WcfT8nV8XknEQkHAAeGkAim2UPISWkPBRXX4JgBQaWK4+prOOQPtAVS6EgJvQEjq8aeBnGyczVWBnCc4hYYN3ZkCteUgJF9woIAdDSGDggwK+Eli4VYArQYE7BagSVDhKACvBgaMFXBJcOElgSEKOqw7XbzKYdk4Oo/4R3VeRcuDkGTA1KznGhfsJqGCRAh4BxluCPVxW3lbhEWAkAdNubzehR4qiBWxHzSc7UAKYc86VcApg4D5RbhWgwLkSgwIcOEfCKOADp0qcCISAUyROP0q1JqN/vWKCxfSM63QcBEJW3hexSRwvJo/rBQi49wkW2yzpEgDwtnqfyovQ8WZ0m/2mcVXnmziZh74V6XtiXJeZgrPTkLsfTO85O2FImOm/dkIWBz+sTpzmAAAAAElFTkSuQmCC) center center no-repeat;background-size:14px 14px;"></div>扫描分享到微信好友或微信朋友圈</div><div class="bsFrameDiv" style="border:none;background:#fff"><div style="height: 190px;text-align: center;"><img style="width:178px;height:178px;margin:6px;display:inline-block;" src="https://athm.cn/qrcode?size=256&amp;url='+that.shareUrl+'?"></div></div></div>').appendTo($("body"));
    $(".bsClose").on('click', function () {
      $("#bsWXBox").remove();
    });
  });

  that.$shareWb.on('click', function () {
    (function(s,d,e){
      var f = 'http://v.t.sina.com.cn/share/share.php?';
      var u = d.location.href;
      var p = [
        'url=',e(u),
        '&title=',e(that.sharetitle),
        '&appkey=2924220432',
        '&pic=',e(that.pic),
        '&url=',e(that.shareUrl)
      ].join('');
      function a(){
        if(!window.open([f,p].join(''),'mb',[
          'toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)/2,
          ',top=',(s.height-450)/2].join('')
        ))
          u.href=[f,p].join('');
      }
      if (/Firefox/.test(navigator.userAgent)) {
        setTimeout(a, 0)
      } else {
        a()
      }
    })(screen,document,encodeURIComponent);
  })
  that.$shareQz.on('click', function () {
    (function(s,d,e){
      var f = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
      var u = that.shareUrl;
      var p=[
        'url=',e(u),
        '&title=',e(that.sharetitle),
        '&appkey=2924220432',
        '&pics=',e(that.pic),
        '&summary=',e(that.summary),
        '&url=',e(that.shareUrl)
      ].join('');
      function a(){
        if(!window.open([f,p].join(''),'mb',[
          'toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)/2,
          ',top=',(s.height-450)/2].join('')
        ))
          u.href=[f,p].join('');
      }
      if (/Firefox/.test(navigator.userAgent)) {
        setTimeout(a, 0)
      } else {
        a()
      }
    })(screen,document,encodeURIComponent);
  })
  that.$shareQq.on('click', function () {
    (function(s,d,e){
      var f = 'http://connect.qq.com/widget/shareqq/index.html?';
      var u = that.shareUrl;
      var p = [
        'url=',e(u),
        '&title=',e(that.sharetitle),
        '&appkey=2924220432',
        '&pics=',e(that.pic),
        '&summary=',e(that.summary),
        '&url=',e(that.shareUrl)
      ].join('');
      function a() {
        if(!window.open([f,p].join(''),'mb',[
          'toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)/2,
          ',top=',(s.height-450)/2].join('')
        ))
          u.href=[f,p].join('');
      }
      if (/Firefox/.test(navigator.userAgent)) {
        setTimeout(a, 0)
      }else{
        a()
      }
    })(screen,document,encodeURIComponent);
  })
};

/**
 * ------------------------------------------------------------------------
 * Plugin Definition
 * ------------------------------------------------------------------------
 */

function Plugin(config) {
  return this.each(function () {
    const $this = $(this);
    let data = $this.data(DATA_KEY);

    if (!data) {
      const _config = $.extend({}, Share.Default, $this.data(), typeof config === 'object' && config);
      data = new Share(this, _config);
      $this.data(DATA_KEY, data);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
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
}

export default Share;
