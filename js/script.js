// ;colors = [
//     "",
//     "penny-red-commet",
//     "penny-makana",
//     "penny-rasta",
//     "penny-cobalt",
//     "penny-peace-off",
//     "penny-dreamland",
//     "penny-battleship",
//     "penny-pegasus"
// ];

// (function() {
//     let lru = [0, 0, 0];
//     let lruSize = 3;
//     let lruIdx = 0;

//     function main() {
//         var elements = document.querySelectorAll(".post-index--item");
//         Array.prototype.forEach.call(elements, function(el, i) {
//             let idx = Math.floor(Math.random() * colors.length);

//             while (lru.includes(idx)) {
//                 idx = Math.floor(Math.random() * colors.length);
//             }

//             lru[lruIdx++ % lruSize] = idx;

//             console.log(lru)

//             el.classList.add(colors[idx]);
//         });
//     };

//     function ready(fn) {
//         if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//             fn();
//         } else {
//             document.addEventListener('DOMContentLoaded', fn);
//         }
//     }

//     ready(main);
// })();
