/*
 * @name: QuarkLike
 * @Author: HerbertHe
 * @version: 1.3
 * @description: 便于更好使用夸克搜索的Via浏览器插件
 * @include: *
 * @createTime: 2020-03-30 22:34:00
 * @updateTime: 2020-04-01 13:59:00
 */

(function() {
    var whiteList = ["quark.sm.cn"];

    if (whiteList.indexOf(window.location.hostname) >= 0) {
        /* 修改使之匹配不同网站，在quark页面的情况下 */
        /* 干掉头节点 */
        document.getElementById("header").remove();
    }
    var quarkLike = encodeURIComponent("HerbertHe:QuarkLike:load");
    if (window[quarkLike]) {
        return;
    }
    window[quarkLike] = true;
    /* 样式调整 */
    /* document.getElementById("sider").style = "margin-bottom: 60px;"; */
    document
        .getElementsByTagName("body")[0]
        .getElementsByTagName("div")[0].lastChild.style =
        "margin-bottom: 60px;";
    /* 新增DOM节点 */
    var herbSearchBox = document.createElement("div");
    herbSearchBox.id = "herb-search-box";
    herbSearchBox.style =
        "width: 100vw; height:40px; position: fixed; left: 0; bottom: 0; z-index: 10000; background-color: white; padding: 5px; border-top: 1px solid #eeeeee;";
    /* 节点扩充 */
    herbSearchBox.innerHTML =
        '<div id="herb-box-input">' +
        '<input id="herb-inner-search-box" type="text" placeholder="搜点什么吧..." style="margin-right: 5px; height: 30px; width: 75%; border-radius: 15px; background-color: #eeeeee; padding-left: 10px; padding-right: 10px; border: none; outline: none;"/>' +
        '<button id="herb-search-btn" style="margin-left: 5px; border: none; outline: none; background-color: white;">搜索</button>' +
        "</div>" +
        '<div id="herb-box-display">' +
        '<button id="herb-shower-box" style="text-align: center; margin-right: 5px; height: 30px; width: 90%; border-radius: 15px; background-color: #eeeeee; padding-left: 10px; padding-right: 10px; border: none; outline: none;"></button>' +
        "</div>";
    /* 通用flex样式 */
    var commonFlex =
        " display: flex; flex-direction: row; justify-content: center; align-items: center; ";
    document
        .getElementsByTagName("body")[0]
        .insertBefore(herbSearchBox, document.getElementById("content"));
    document.getElementById("herb-box-input").style = "display: none;";
    document.getElementById("herb-box-display").style =
        "width: 100%; height: 100%;" + commonFlex;
    /* 初始值，存在null的问题 */
    var defaultTitle =
        /^\?q=([\w%]+)/.exec(location.search)[1] === null
            ? "null"
            : /^\?q=([\w%]+)/.exec(location.search)[1];
    document.getElementById("herb-shower-box").innerText =
        defaultTitle === "null"
            ? document.title
            : decodeURIComponent(defaultTitle === "null" ? "" : defaultTitle);
    document.getElementById("herb-inner-search-box").value =
        defaultTitle === "null"
            ? location.href
            : decodeURIComponent(defaultTitle === "null" ? "" : defaultTitle);
    /* 展示盒子点击事件监听 */
    document
        .getElementById("herb-shower-box")
        .addEventListener("click", function() {
            document.getElementById("herb-box-input").style =
                "width: 100%; height: 100%;" + commonFlex;
            document.getElementById("herb-box-display").style =
                "display: none;";
        });
    /* 搜索事件监听 */
    document
        .getElementById("herb-search-btn")
        .addEventListener("click", function() {
            if (
                document.getElementById("herb-inner-search-box").value
                    .length === 0
            )
                return;
            location.href =
                "https://quark.sm.cn/s?q=" +
                encodeURIComponent(
                    document.getElementById("herb-inner-search-box").value
                );
        });
})();
