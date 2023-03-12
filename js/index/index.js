function index() {
  var q = (function () {
    $.getJSON("../../json/data.json", function (data) {
      b(data); //传入一个函数
    });
  })();
  var b = function (data) {
    var key1 = document.getElementsByTagName("input")[0].value;
    var key2 = document.getElementsByTagName("input")[1].value;
    for (var a = 0; a < data.length; a++) {
      if (key1 == data[a].name && key2 == data[a].password) {
        break;
      }
    }
    if (a == data.length) {
      alert("登陆失败，请重试！");
    } else {
      window.location.href = "../../sign_in.html";
      alert("登陆成功，欢迎回来(^_^)");
    }
  };
}
