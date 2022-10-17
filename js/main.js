document.addEventListener("DOMContentLoaded", () => {
  const myAtropos = Atropos({
    el: ".my-atropos",
    activeOffset: 40,
    shadowScale: 1.05,
  });
  const browser = () => {
    const button = document.querySelector(".download-btn");
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) != -1) {
      button.innerHTML = "Download for Opera";
    } else if (navigator.userAgent.indexOf("Edg") != -1) {
      button.innerHTML = "Download for Edge";
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
      button.innerHTML = "Download for Chrome";
    } /*  else if (navigator.userAgent.indexOf("Safari") != -1) {
      button.innerHTML = "Download for Safari";
    }  */ else if (navigator.userAgent.indexOf("Firefox") != -1) {
      button.innerHTML = "Download for Firefox";
    } else {
      button.innerHTML = "Try our wallet!";
    }
  };
  browser();
});
