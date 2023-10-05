const section = document.querySelectorAll("section");
let page = 5;
let coolTime = true;

function handleScroll(event) {
  if (coolTime) {
    coolTime = false;
    setTimeout(() => {
      coolTime = true;
    }, 1000);

    // Determine scroll direction
    const deltaY = event.deltaY;
    if (deltaY > 0) {
      page = (page + 1) % 5;
    } else {
      page = (page + 3) % 5;
    }

    for (let i = 0; i < section.length; i++) {
      if (i === page) {
        if (deltaY > 0) {
          section[i].classList.add('up');
        } else {
          section[i].classList.add('down');
        }
        section[i].style.zIndex = 99;
      } else {
        section[i].style.zIndex = -100;
        setTimeout(() => {
          section[i].classList.remove('up');
          section[i].classList.remove('down');
        }, 1000);
      }
    }
  }
}

function init() {
  section[0].style.display = "grid";
}

init();

// Attach scroll event listener to the window
window.addEventListener('wheel', handleScroll);