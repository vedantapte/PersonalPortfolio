const tabItems = document.querySelectorAll(".topNavItem");
const tabContents = document.querySelectorAll(".tab-content");

for (let i = 0; i < tabs.length; i++) {
  const tabItem = tabItems[i];
  tabItem.addEventListener("click", switchClass);
}

function switchClass(e) {
  for (let i = 0; i < tabItems.length; i++) {
    const tabItem = tabItems[i];
    tabItem.classList.remove("active");
    tabContents[i].classList.remove("show-content");
  }

  const index = Array.prototype.slice
    .call(e.target.parentElement.children)
    .indexOf(e.target);

  e.target.classList.add("active");
  tabContents[index].classList.add("show-content");
}
