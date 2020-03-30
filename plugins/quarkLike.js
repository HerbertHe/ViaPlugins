/**
 * @name: QuarkLike
 * @Author: HerbertHe
 * @version: 1.0
 * @description: 便于更好使用夸克搜索的Via浏览器插件
 * @include: *
 * @createTime: 2020-03-30 22:34:00
 * @updateTime: 2020-03-30 22:34:00
 */

(function() {
    var whiteList = ["quark.sm.cn"];

    if (whiteList.indexOf(window.location.hostname) < 0) {
        return;
    };
    var key = encodeURIComponent("HerbertHe:QuarkLike:load");
    if (window[key]) {
        return;
    };
    /* 干掉头节点 */
    document.getElementById("header").remove();
    /* 样式调整 */
    document.getElementById("sider").style = "margin-bottom: 60px;";
    /* 新增DOM节点 */
    var herbSearchBox = document.createElement("div");
    herbSearchBox.id = "herb-search-box";
    herbSearchBox.style =
        "width: 100vw; height:40px; position: fixed; left: 0; bottom: 0; display: flex; flex-direction: row; justify-content: space-around; align-items: center; z-index: 10000; background-color: white; padding: 5px; border-top: 1px solid #a5b1c2;"
    /* 节点扩充 */
    herbSearchBox.innerHTML =
        '<input id="herb-inner-search-box" type="text" placeholder="搜点什么吧..." style="height: 30px; width: 70%; border-radius: 15px; background-color: #d1d8e0; padding-left: 10px; padding-right: 10px; border: none; outline: none;"/>' +
        '<button id="herb-search-btn" style="border: none; outline: none; background-color: white;">搜索</button>'
    document.getElementsByTagName("body")[0].insertBefore(herbSearchBox, document.getElementById("content"));
    document.getElementById("herb-inner-search-box").value = decodeURIComponent(/^\?q=([\w%]+)/.exec(location.search)[1]);
    /* 搜索事件监听 */
    document.getElementById("herb-search-btn").addEventListener("click", function() {
        if (document.getElementById("herb-inner-search-box").value.length === 0) return;
        location.href = "https://quark.sm.cn/s?q=" + encodeURIComponent(document.getElementById("herb-inner-search-box").value);
    });
})()
