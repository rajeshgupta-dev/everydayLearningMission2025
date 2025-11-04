const searchInput = document.getElementById("SearchInput");
const searchBTN = document.getElementById("seachBTN");
const resDiv = document.getElementById("result");
const pagination = document.getElementById("pagination");
let sortSelect = document.getElementById("selectSort")

let allMeals = [];
let currentPage = 1;
const itemsPerPage = 6;

// 🔍 Search button click
searchBTN.addEventListener("click", handleSearch);
const debouncedLiveSearch = debounce(handleLiveSearch, 1000);

searchInput.addEventListener("input", debouncedLiveSearch);


// 🔍 Live search while typing
searchInput.addEventListener("input", handleLiveSearch);

async function handleSearch() {
  const inputValue = searchInput.value.trim();
  if (inputValue) {
    await fetchMeals(inputValue);
  }
}

async function handleLiveSearch() {
  const inputValue = searchInput.value.trim();
  if (inputValue.length > 2) {
    await fetchMeals(inputValue);
  } else {
    resDiv.innerHTML = "<p>Type at least 3 characters...</p>";
    pagination.innerHTML = "";
  }
}

function handleSorting() {
  applySorting();
  showMeals();
}


async function fetchMeals(query) {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await res.json();

    if (data.meals) {
      allMeals = data.meals;
      currentPage = 1;
      showMeals();
    } else {
      allMeals = [];
      resDiv.innerHTML = "<p>No meals found.</p>";
      pagination.innerHTML = "";
    }
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

function showMeals() {
  resDiv.innerHTML = "";

  if (!allMeals || allMeals.length === 0) {
    resDiv.innerHTML = "<p>No meals found.</p>";
    pagination.innerHTML = "";
    return;
  }

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const mealsToShow = allMeals.slice(start, end);

  mealsToShow.forEach(meal => {
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("meal-item");
    mealDiv.innerHTML = `
      <h3>${meal.strMeal}</h3>
      <img src="${meal.strMealThumb}" width="150">
    `;
    resDiv.appendChild(mealDiv);
  });

  renderPagination();
}

function renderPagination() {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(allMeals.length / itemsPerPage);
  if (totalPages <= 1) return;

  // Previous button
  if (currentPage > 1) {
    const prevBtn = createPaginationButton("Prev", () => {
      currentPage--;
      showMeals();
    });
    pagination.appendChild(prevBtn);
  }

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = createPaginationButton(i, () => {
      currentPage = i;
      showMeals();
    });
    if (i === currentPage) {
      pageBtn.style.background = "#555";
      pageBtn.style.color = "#fff";
    }
    pagination.appendChild(pageBtn);
  }

  // Next button
  if (currentPage < totalPages) {
    const nextBtn = createPaginationButton("Next", () => {
      currentPage++;
      showMeals();
    });
    pagination.appendChild(nextBtn);
  }
}

function createPaginationButton(text, onClick) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.addEventListener("click", onClick);
  btn.style.margin = "0 5px";
  return btn;
}

function applySorting() {
  const sortValue = sortSelect.value;
  if (sortValue === "az") {
    allMeals.sort((a, b) => a.strMeal.localCompare(b.strMeal));
  } else if (sortValue === "za") {
    allMeals.sort((a, b) => b.strMeal.localCompare(a.strMeal));
  }
}


function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}