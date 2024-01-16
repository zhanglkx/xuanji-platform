class Drag {
  constructor(config) {
    const { id, zoomId } = config;

    // 获取目标元素
    this.moveTarget = document.getElementById(id);

    // 限制区
    if (zoomId) {
      // 获取限制区元素
      this.targetParent = document.getElementById(zoomId);

      // 计算限制区的范围
      // 左侧能拖拽的最大距离 = 限制元素的宽度 - 目标元素宽度
      this.max_left =
        this.targetParent.clientWidth - this.moveTarget.offsetWidth;

      // 上部可拖拽的最大距离 = 限制元素的视窗高度 - 目标元素的高度
      this.max_top =
        this.targetParent.clientHeight - this.moveTarget.offsetHeight;
    } else {
      // 无限制区 => 窗口范围内拖拽
      this.max_left =
        document.documentElement.clientWidth -
        this.moveTarget.offsetWidth -
        parseInt(
          // 获取body的边框宽度
          this.getStyle(document.body, "border-width")
        );

      this.max_top =
        document.documentElement.clientHeight -
        this.moveTarget.offsetHeight -
        parseInt(
          // 获取body的边框宽度
          this.getStyle(document.body, "border-width")
        );
    }

    // 初始化锁定传参
    this.lock = true;
  }

  // 获取dom样式
  getStyle(element, attr) {
    // 兼容浏览器处理
    if (element.currentStyle) {
      return element.currentStyle[attr];
    } else {
      return window.getComputedStyle(element, null).getPropertyValue(attr);
    }
  }

  // 鼠标按下
  mouseDown(e) {
    // 1. 获取事件
    e = e || window.event;

    // 2. 获取全局尺寸
    this.clientX = e.clientX;
    this.clientY = e.clientY;

    // 3. 鼠标锁定时，获取当前元素的left & top
    this.startLeft = parseInt(
      this.moveTarget.style.left || this.getStyle(this.moveTarget, "left")
    );
    this.startTop = parseInt(
      this.moveTarget.style.top || this.getStyle(this.moveTarget, "top")
    );

    // 4. 鼠标按下时，鼠标的clientX | clientY值
    this.startClientX = e.clientX;
    this.startClientY = e.clientY;

    // 5. 开始准备移动
    this.lock = false;
  }

  // 鼠标拖拽
  mouseMove(e) {
    // 1. 获取事件
    e = e || window.event;

    // 额外判断
    if (e.which != 1) {
      this.lock = true;
    }

    // 2. 动态处理
    if (!this.lock) {
      // 真实的左移动距离 = 当前的水平位置 - 鼠标开始横向的位置
      let realLeft = this.startLeft + e.clientX - this.startClientX;
      // 真实的上侧移动距离 = 开始的上侧距离 + 当前的垂直位置 - 鼠标开始时纵向位置
      let realTop = this.startTop + e.clientY - this.startClientY;

      // 关键：根据限制区大小，判断当前限制后的真实左侧以及上侧距离
      let limitedLeft =
        realLeft > this.max_left ? this.max_left : realLeft > 0 ? realLeft : 0;

      let limitedTop =
        realTop > this.max_top ? this.max_top : realTop > 0 ? realTop : 0;

      // 设定真实参数
      this.moveTarget.style.left = limitedLeft + "px";
      this.moveTarget.style.top = limitedTop + "px";
    }
  }

  // 鼠标释放
  mouseUp() {
    // 拓展样式改变
    this.lock = true;
  }

  startDrag() {
    // 鼠标按下事件 => 开始锁定
    this.moveTarget.onmousedown = function (e) {
      this.mouseDown(e);
    }.bind(this);
    // 鼠标移动事件 => 开始拖拽
    this.moveTarget.onmousemove = function (e) {
      this.mouseMove(e);
    }.bind(this);
    // 鼠标释放事件 => 释放锁定
    this.moveTarget.onmouseup = function (e) {
      this.mouseUp(e);
    }.bind(this);
  }
}

export default Drag;
