function a_click(params) {
  let id = params.srcElement.hash;
  id = id.replace(/#/g, "");
  document.getElementById(id).style.display = "block";

  var a = [
    "home-page",
    "novel",
    "agent-ios",
    "agent-android",
    "agent-windows",
    "app",
    "anime",
    "cartoon",
    "about_us",
  ];
  for (var i = 0; i < a.length; i++) {
    if (a[i] != id) {
      document.getElementById(a[i]).style.display = "none";
    }
  }
}

function start() {
  var a = [
    "home-page",
    "novel",
    "agent-ios",
    "agent-android",
    "agent-windows",
    "app",
    "anime",
    "cartoon",
    "about_us",
  ];
  for (var i = 0; i < a.length; i++) {
    if (a[i] != "home-page") {
      document.getElementById(a[i]).style.display = "none";
    }
  }
}
