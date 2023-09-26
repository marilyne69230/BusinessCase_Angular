// const g = document.querySelector(".gallery");
// const items = document.querySelectorAll(".item");

// function run() {
//   const hero = document.querySelector(".hero");
//   hero.style.height = g.offsetHeight + "px";
//   const w = window.innerWidth;
//   console.log(w);
//   let item_row;
//   if (w < 640) {
//     item_row = 2;
//   } else if (w >= 1200) {
//     item_row = 4;
//   } else {
//     item_row = 3;
//   }
//   console.log(item_row);
//   for (let i = 0; i < items.length; i++) {
//     items[i].classList.remove("odd", "even");
//     console.log(i);
//     console.log(i % item_row);
//     if (i % item_row == 0 || i % item_row == 2) {
//       items[i].classList.add("odd");

//       console.log("odd");
//     } else if (i % item_row == 1 || i % item_row == 3) {
//       items[i].classList.add("even");
//       console.log("even");
//     }
//     console.log("---");
//   }
//   const clone = g.cloneNode(true);
//   clone.classList.add("clone", "show");
//   g.after(clone);
//   g.classList.add("show");
// }
// window.addEventListener("load", function () {
//   run();
// });

// let timer = 0;
// window.addEventListener("resize", function () {
//   g.classList.remove("show");
//   for (i of items) {
//     i.classList.remove("odd", "even");
//   }
//   const clones = document.querySelectorAll(".clone");
//   for (c of clones) {
//     c.parentNode.removeChild(c);
//   }
//   if (timer > 0) {
//     clearTimeout(timer);
//   }

//   timer = setTimeout(function () {
//     console.log("window resized");
//     run();
//   }, 300);
// });
