window.addEventListener("load", init, false);
           function init() {        
            let canvas = document.getElementById("canvas");
            let context = canvas.getContext("2d");
            let logo = new Image();                        
            logo.onload = function () {
                context.drawImage(logo, 5, 5);
            };
            logo.src = "./img/canada.png";
        }