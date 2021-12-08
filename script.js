const root = document.documentElement;
const carousselElementsDisplayed = getComputedStyle(root).getPropertyValue("--caroussel-elements-displayed");
const carousselContent = document.querySelector("ul.caroussel-content");

root.style.setProperty("--caroussel-elements", carousselContent.children.length);

for(let i=0; i<carousselElementsDisplayed; i++) {
  carousselContent.appendChild(carousselContent.children[i].cloneNode(true));
}