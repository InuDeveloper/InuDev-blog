function onScroll() {
  const header = document.getElementById("header")
  if (window.scrollY > 0) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
}

document.addEventListener("scroll", onScroll)


// I want to detect if we are on the page "home", if not, then a property is deleted