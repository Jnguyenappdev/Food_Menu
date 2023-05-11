let menu = {
  drinks: ["Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"],
  entrees: [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate",
  ],
  desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"],
};

const categorySelectorEl = document.getElementById("categorySelector");
categorySelectorEl.onchange = onGetCategoryChanged;

function onGetCategoryChanged() {
  const categorySelectorEl = document.getElementById("categorySelector");
  const categorySelectedValue = categorySelectorEl.value;
  const selectedCategoryMembers = menu[categorySelectedValue];
  const memberDisplayEl = document.getElementById("memberDisplay");
  memberDisplayEl.options.length = 0
  if (!!selectedCategoryMembers) {
    for (let i = 0; i < selectedCategoryMembers.length; i++) {
      let optionEl = document.createElement("option");
      optionEl.textContent = selectedCategoryMembers[i];
      memberDisplayEl.appendChild(optionEl);
    }
  }
}
