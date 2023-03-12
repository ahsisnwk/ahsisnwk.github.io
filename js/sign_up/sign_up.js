function sign_up() {
    var q = (function () {
      $.getJSON("../../json/data.json", function (data) {
        b(data); //传入一个函数
      });
    })();
    var b = function (data) {
        var key0 = document.getElementsByTagName("input")[0].value;
      var key1 = document.getElementsByTagName("input")[2].value;
      var key2 = document.getElementsByTagName("input")[3].value;
      for (var a = 0; a < data.length; a++) {
        if (key0 == data[a].name) {
          break;
        }
      }
      if(key0 == "" || key1 == "" || key2 == "")
      {
        alert("还没填完呢！");
      }
      else{
      if (a == data.length) {
        if (key1 == key2) {
          alert(
            "注册无误，但由于特殊原因，暂不开放注册入口，如有需要，可发通过邮件联系站长，邮箱为：xbzjbb@126.com"
          );
        } else {
          alert("两次输入的密码好像不同啊，请重试！");
        }
      } else {
        alert("该用户名已被使用，请重试(^_^)");
      }
    }
    };
  }
