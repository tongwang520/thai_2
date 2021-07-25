// 判断机型
		function closeios() {
			document.getElementById("show_android").style.display = "none";
			document.getElementById("show_ios").style.display = "block";
		}

		function closeandroid() {
			document.getElementById("show_android").style.display = "block";
			document.getElementById("show_ios").style.display = "none";
		}


// pc端打开导航     公共组件header
function openNav() {
    document.getElementById("mySidenav").style.width = "210px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// h5 打开侧边栏导航控制按钮
function openhbNav() {
    document.getElementById("hbnav").style.width = "100%";
}

function closehbNav() {
    document.getElementById("hbnav").style.width = "0";
}






var elem = document.getElementById("Header_example")
var headroom = new Headroom(elem, {
    // 參數設定[註1]
    "offset": 30, // 當捲軸到哪時，取消固定
    "scroller": window, // 捲軸
    "classes": {
        "initial": "animated", // 初始的類別
        "pinned": "slideInDown", // 固定時新增的類別(這裡運用Animate.css的類別)
        "unpinned": "slideOutUp", // 取消固定時新增的類別(這裡運用Animate.css的類別)
        "top": "headroom--top", // 當捲軸在最上面時新增的類別
        "notTop": "headroom--not-top", // 當捲軸不在最上面時新增的類別
        "bottom": "headroom--bottom", // 當捲軸在最下面時新增的類別
        "notBottom": "headroom--not-bottom" // 當捲軸不在最下面時新增的類別
    },
    onPin: function () {
        // 固定時觸發的事件
        // console.log('1')
    },
    onUnpin: function () {
        // 取消固定時觸發的事件
        //   console.log('2')
    },
    onTop: function () {
        //   console.log('top');
        // 當捲軸在最上面時觸發的事件
    },
    onNotTop: function () {
        //   console.log('not top');
        // 當捲軸不在最上面時觸發的事件
    },
    onBottom: function () {
        // 當捲軸在最下面時觸發的事件
    },
    onNotBottom: function () {
        // 當捲軸不在最下面時事件
    }
});
headroom.init();