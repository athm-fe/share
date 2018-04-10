# Share

## Usage

可以通过两种方式来初始化 Layer 控件, 你可以根据自己的需要来进行选择. 另外, 对话框的关闭也非常方便.

### Via data attributes

无需写 JavaScript , 即可启用对话框. 在一个触发元素（比如按钮）上设置 `data-toggle="layer"` , 然后通过 `data-target="#ID"` 指定一个对应的要打开的弹出层.

```html
<button type="button" data-toggle="layer" data-target="#layer">打开</button>
```

### Via JavaScript

直接在对应的弹出层 DOM 上调用即可.

```javascript
$('#layer').layer(options);
```

### `data-dismiss="layer"`

除了下文中将会提到的隐藏对话框的 JS 方法外, 你也可以在对话框的某个（或某些）DOM元素上配置 `data-dismiss="layer"` 来达到目的

```javascript
<div id="layer" class="layer" style="display:none;">
  <i data-dismiss="layer">关闭</i>
  <div class="layer-content">内容</div>
</div>
```

## Options

参数可以通过 data attributes 或者 JavaScript 两种方式来配置.

Name | Type | Default | Description
---- | ---- | ------- | -----------
keyboard | boolean | true | 是否支持 ESC 关闭.
backdrop | boolean or the string `'lock'` | true | 是否创建遮罩层. 默认点击遮罩层可以关闭对话框, 当值为 `'lock'` 时，不支持点击遮罩层关闭对话框.
opacity | number | 0.5 | 遮罩层的透明度, 0 到 1 之间的浮点数.
show | boolean | true | 初始化时是否打开对话框.
time | number | 0 | 自动关闭, 默认不自动关闭, 可以配置毫秒数表示关闭时间

## Methods

### `.layer(options)`

初始化当前 DOM 内容为一个对话框, 可以接受参数进行配置.

```javascript
$('#layer').layer({
  keyboard: false
});
```

### `.layer('show')`

手动打开对话框. 该方法运行结束并不代表对话框已真实显示, 如果需要在真实显示后执行代码, 可以使用后面的自定义事件.

```javascript
$('#layer').layer('show');
```

### `.layer('hide')`

手动关闭对话框. 该方法运行结束并不代表对话框已真实显示, 如果需要在真实显示后执行代码, 可以使用后面的自定义事件.

```javascript
$('#layer').layer('hide');
```

## Event

Event Type | Description
---------- | -----------
show.fe.layer | 当 `show` 方法被调用, 此事件会立即触发. 如果是通过点击按钮打开的, 则可以通过事件对象的 `relatedTarget` 获取到点击按钮.
shown.fe.layer | 对话框已呈现完毕时触发.
hide.fe.layer | 当 `hide` 方法被调用, 此事件会立即触发. 如果是通过点击按钮打开的, 则可以通过事件对象的 `relatedTarget` 获取到点击按钮.
hidden.fe.layer | 对话框已隐藏完毕时触发.

```javascript
$('#layer').on('show.fe.layer', function (e) {
  // 阻止对话框打开
  e.preventDefault();

  // 如果是通过点击按钮打开的，则可以获取到点击按钮
  e.relatedTarget;
});
```

# End

Thanks to [Bootstrap](http://getbootstrap.com/)
