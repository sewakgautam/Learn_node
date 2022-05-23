setInterval(function () {
  let s = document.getElementById("dot").getAttribute("style");
  if (s == "font-family: sans-serif;") {
    document.getElementById("dot").style.fontFamily = "Trebuchet";
  } else {
    document.getElementById("dot").style.fontFamily = "sans-serif";
  }
}, 1000);
