
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
    const apiKey = "c4ecc3d6fe2544da85d1252433d3118b"; // Replace with your actual NewsAPI key
  
    // Function to fetch articles
    function fetchArticles(page, query = '') {
      isLoading = true;
      const url = query
        ? `https://newsapi.org/v2/everything?q=${query}&page=${page}&pageSize=10&apiKey=${apiKey}`
        : `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=10&apiKey=${apiKey}`;
  
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          if (page === 1) blogContainer.innerHTML = ''; // Clear results for a new search
          if (data.articles.length === 0) {
            console.log('No more articles available.');
            return;
          }
  
          data.articles.forEach(article => createArticleCard(article));
          isLoading = false; // Reset loading state
        })
        .catch(error => {
          console.error("Error fetching articles:", error);
          isLoading = false;
        });
    }
  
    // Function to create and display an article card
    function createArticleCard(article) {
      const cardContainer = document.createElement('div');
      cardContainer.className = "card_container";
  
      const cardImageContainer = document.createElement('a');
      cardImageContainer.className = "card_image_container";
      cardImageContainer.href = article.url;
      cardImageContainer.target = "_blank";
  
      const cardImage = document.createElement('img');
      cardImage.className = "card_image";
      cardImage.alt = "News Image";
      cardImage.src = article.urlToImage || 'https://via.placeholder.com/150';
  
      cardImageContainer.appendChild(cardImage);
  
      const cardTitleContainer = document.createElement('div');
      cardTitleContainer.className = "card_title_container";
  
      const cardTitle = document.createElement('h3');
      cardTitle.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
  
      const cardDesc = document.createElement('p');
      cardDesc.textContent = article.description || 'No description available.';
  
      cardTitleContainer.appendChild(cardTitle);
      cardTitleContainer.appendChild(cardDesc);
  
      const cardFooterContainer = document.createElement('div');
      cardFooterContainer.className = "card_footer_container";
  
      const authorName = document.createElement('span');
      authorName.className = "author_name";
      authorName.textContent = article.author || 'Unknown Author';
  
      const publishDate = document.createElement('span');
      publishDate.className = "author_date";
      publishDate.textContent = new Date(article.publishedAt).toLocaleDateString();
  
      cardFooterContainer.appendChild(authorName);
      cardFooterContainer.appendChild(publishDate);
  
      cardContainer.appendChild(cardImageContainer);
      cardContainer.appendChild(cardTitleContainer);
      cardContainer.appendChild(cardFooterContainer);
  
      blogContainer.appendChild(cardContainer);
    }
  
    // Load More button click handler
    loadMoreBtn.addEventListener('click', () => {
      if (!isLoading) {
        currentPage++;
        fetchArticles(currentPage, currentQuery);
      }
    });
  
    // Search button click handler
    searchBtn.addEventListener('click', () => {
      const query = searchInput.value.trim();
      if (query) {
        currentQuery = query; // Update the current query
        currentPage = 1; // Reset to the first page for a new search
        fetchArticles(currentPage, currentQuery);
      }
    });
  
    // Initial fetch
    fetchArticles(currentPage);
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