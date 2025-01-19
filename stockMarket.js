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


    const financeContainer = document.getElementById("grid_div1");
    const loadMoreBtn = document.getElementById("load_more_btn");
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    let currentPage = 1;
    let currentQuery = ""; // Track the current search query

    const apiKey = "57sbBkMUcar5UsAw2rJsd8C6ESnJiN4tgdCqMAUG";
    const apiUrl = "https://api.marketaux.com/v1/news/all";

    // Function to fetch finance data
    function fetchFinanceData(page, query = "") {
        const url = `${apiUrl}?api_token=${apiKey}&language=en&page=${page}&size=10${query ? `&q=${query}` : ""}`;

        fetch(url, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                if (data && data.data) {
                    if (page === 1) financeContainer.innerHTML = ""; // Clear previous results for new searches
                    data.data.forEach(article => createFinanceCard(article));
                } else {
                    console.log("No more data available.");
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }

    // Function to create and display a finance card
    function createFinanceCard(article) {
        const cardContainer = document.createElement('div');
        cardContainer.className = "card_container";

        const cardImageContainer = document.createElement('a');
        cardImageContainer.className = "card_image_container";
        cardImageContainer.href = article.url;
        cardImageContainer.target = "_blank";

        const cardImage = document.createElement('img');
        cardImage.className = "card_image";
        cardImage.alt = "Stock Market Image";
        cardImage.src = article.image_url || "https://via.placeholder.com/150";

        cardImageContainer.appendChild(cardImage);

        const cardTitleContainer = document.createElement('div');
        cardTitleContainer.className = "card_title_container";

        const cardTitle = document.createElement('h3');
        cardTitle.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;

        const description = article.summary || article.description || article.content || "No description available.";
        const cardDesc = document.createElement('p');
        cardDesc.textContent = description.slice(0, 100) + "...";

        cardTitleContainer.appendChild(cardTitle);
        cardTitleContainer.appendChild(cardDesc);

        const cardFooterContainer = document.createElement('div');
        cardFooterContainer.className = "card_footer_container";

        const sourceName = document.createElement('span');
        sourceName.className = "source_name";
        sourceName.textContent = article.source || "Unknown Source";

        const publishDate = document.createElement('span');
        publishDate.className = "publish_date";
        publishDate.textContent = new Date(article.published_at).toLocaleDateString();

        cardFooterContainer.appendChild(sourceName);
        cardFooterContainer.appendChild(publishDate);

        cardContainer.appendChild(cardImageContainer);
        cardContainer.appendChild(cardTitleContainer);
        cardContainer.appendChild(cardFooterContainer);

        financeContainer.appendChild(cardContainer);
    }

    // Load More button click handler
    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        fetchFinanceData(currentPage, currentQuery);
    });

    // Search button click handler
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            currentQuery = query;
            currentPage = 1; // Reset to the first page for a new search
            fetchFinanceData(currentPage, currentQuery);
        }
    });

    // Initial fetch
    fetchFinanceData(currentPage);
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