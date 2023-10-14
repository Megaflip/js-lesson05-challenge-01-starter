var button = document.querySelector(".show-cat");
// console.log(button);

var cat = document.querySelector(".cat");
// console.log(cat);

button.addEventListener("click", function () {
    if (cat.classList.remove(".show-cat")) { 
        //console.log("Yes");
      } else {
        //console.log("No");
      }
    });
