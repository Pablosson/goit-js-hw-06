const categoriesEl = document.querySelectorAll("#categories .item").length;
console.log(`Number of categories: ${categoriesEl}`);

const categoryItems = document.querySelectorAll("#categories .item");
categoryItems.forEach((categoryItem) => {
  const categoryName = categoryItem.querySelector("h2").textContent;
  const elementsCount = categoryItem.querySelectorAll("ul > li").length;
  console.log("Category:", categoryName);
  console.log("Elements:", elementsCount);
});
