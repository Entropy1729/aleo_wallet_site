document.addEventListener("DOMContentLoaded", () => {
  const myAtropos = Atropos({
    el: ".my-atropos",
    activeOffset: 40,
    shadowScale: 1.05,
  });
  const menu = () => {
    const trigger = document.querySelector(".menu-trigger");
    const menu = document.querySelector(".nav-options");
    trigger.addEventListener("click", () => {
      menu.classList.toggle("show-menu");
      menu.classList.toggle("hide-menu");
      document.body.classList.toggle("overflow");
    });
  };
  menu();
  const browser = () => {
    const button = document.querySelector(".download-btn");
    /* if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) != -1) {
      button.innerHTML = "Download for Opera";
    } else if (navigator.userAgent.indexOf("Edg") != -1) {
      button.innerHTML = "Download for Edge";
    } else  */ if (navigator.userAgent.indexOf("Chrome") != -1) {
      button.innerHTML = "Download for Chrome";
    } /* else if (navigator.userAgent.indexOf("Safari") != -1) {
      button.innerHTML = "Download for Safari";
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
      button.innerHTML = "Download for Firefox";
    } */ else {
      button.innerHTML = "Try our wallet!";
    }
  };
  browser();
  const preview = () => {
    const features = document.querySelectorAll(".feature");
    features.forEach((feature) => {
      feature.addEventListener("mouseenter", () => {
        document.querySelector("img.wallet").style.opacity = "0";
        feature.querySelector(".preview").style.opacity = "1";
      });
      feature.addEventListener("mouseleave", () => {
        document.querySelector("img.wallet").style.opacity = "1";
        feature.querySelector(".preview").style.opacity = "0";
      });
    });
  };
  preview();
});
