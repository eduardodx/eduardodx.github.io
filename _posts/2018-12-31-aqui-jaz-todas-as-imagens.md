---
layout: post
title: Aqui jaz todas as imagens
date:   2018-12-31 18:09:01 -0200
tags: [art]
---

<canvas id="canvas" width="700" height="525"></canvas>

<script>
(function() {
    function main() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        for (let i = 0; i < 700; ++i) {
            for (let j = 0; j < 525; ++j) {
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b})`;
                ctx.fillRect(i, j, 1, 1);
            }
        }
    };

    function ready(fn) {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    ready(main);
})();

</script>
