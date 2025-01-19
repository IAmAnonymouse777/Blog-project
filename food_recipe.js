document.addEventListener('DOMContentLoaded', () => {

    // hamberger Start 
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>'; // Font Awesome icon
    const navBarDiv = document.getElementById('navBarDiv');
    navBarDiv.appendChild(hamburger);
  
    const navbarUl = document.querySelector('.navbar_ul');
  
    // Toggle the menu on hamburger click
    hamburger.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent closing when clicking on the hamburger
        navbarUl.classList.toggle('show');
    });
  
    // Close the menu when clicking anywhere outside
    document.addEventListener('click', (event) => {
        if (!navBarDiv.contains(event.target)) {
            navbarUl.classList.remove('show');
        }
    });
  
    // hamberger End 



    const blogContainer = document.getElementById("grid_div1");
    const loadMoreBtn = document.getElementById("load_more_btn");
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");
    let currentPage = 1;
    let isLoading = false;
    let currentQuery = ''; // Track the current search query
    const apiKey = "1310a2a2fb5343d9848d4186d0cd6f86"; // Replace with your actual Spoonacular API key
  
    // Function to fetch recipes
    function fetchRecipes(page, query = '') {
      isLoading = true;
      const url = query
        ? `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&offset=${(page - 1) * 10}&apiKey=${apiKey}`
        : `https://api.spoonacular.com/recipes/complexSearch?number=10&offset=${(page - 1) * 10}&apiKey=${apiKey}`;
  
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          if (page === 1) blogContainer.innerHTML = ''; // Clear results for a new search
          if (data.results.length === 0) {
            console.log('No more recipes available.');
            return;
          }
  
          data.results.forEach(recipe => createRecipeCard(recipe));
          isLoading = false; // Reset loading state
        })
        .catch(error => {
          console.error("Error fetching recipes:", error);
          isLoading = false;
        });
    }
  
    // Function to create and display a recipe card
    // Function to create and display a recipe card
function createRecipeCard(recipe) {
    const cardContainer = document.createElement('div');
    cardContainer.className = "card_container";

    const cardImageContainer = document.createElement('a');
    cardImageContainer.className = "card_image_container";
    cardImageContainer.href = `https://spoonacular.com/recipes/${recipe.title.replace(/\s+/g, '-').toLowerCase()}-${recipe.id}`;
    cardImageContainer.target = "_blank";

    const cardImage = document.createElement('img');
    cardImage.className = "card_image";
    cardImage.alt = "Recipe Image";
    cardImage.src = recipe.image;

    cardImageContainer.appendChild(cardImage);

    const cardTitleContainer = document.createElement('div');
    cardTitleContainer.className = "card_title_container";

    const cardTitle = document.createElement('h3');
    cardTitle.innerHTML = `<a href="${cardImageContainer.href}" target="_blank">${recipe.title}</a>`;

    // Check if dishTypes exists and is an array before using join
    const dishTypes = recipe.dishTypes && Array.isArray(recipe.dishTypes) ? recipe.dishTypes.join(', ') : 'No dish types available';

    const cardDesc = document.createElement('p');
    cardDesc.textContent = `Dish type: ${dishTypes}`;

    cardTitleContainer.appendChild(cardTitle);
    cardTitleContainer.appendChild(cardDesc);

    cardContainer.appendChild(cardImageContainer);
    cardContainer.appendChild(cardTitleContainer);

    blogContainer.appendChild(cardContainer);
}

  
    // Load More button click handler
    loadMoreBtn.addEventListener('click', () => {
      if (!isLoading) {
        currentPage++;
        fetchRecipes(currentPage, currentQuery);
      }
    });
  
    // Search button click handler
    searchBtn.addEventListener('click', () => {
      const query = searchInput.value.trim();
      if (query) {
        currentQuery = query; // Update the current query
        currentPage = 1; // Reset to the first page for a new search
        fetchRecipes(currentPage, currentQuery);
      }
      
    });
  
    // Initial fetch
    fetchRecipes(currentPage);
});



// category dropdown
document.addEventListener('DOMContentLoaded', function () {
  const categoriesDropdown = document.getElementById('categoriesDropdown');
  const dropdownMenu = categoriesDropdown.querySelector('.dropdown-menu');

  // Toggle dropdown visibility on click
  categoriesDropdown.addEventListener('click', function (e) {
      e.stopPropagation();  // Prevent the click event from propagating
      dropdownMenu.classList.toggle('show');
  });

  // Close the dropdown if the user clicks outside of it
  document.addEventListener('click', function (e) {
      if (!categoriesDropdown.contains(e.target)) {
          dropdownMenu.classList.remove('show');
      }
  });
});