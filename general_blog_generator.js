
// document.addEventListener('DOMContentLoaded',()=>{
//     const blogContainer = document.getElementById("grid_div1");
//     let currentPage = 1
//     let isLoading = false
//     console.log(blogContainer);
// function fetchArticles(page)
// {
//   isLoading = true;
//   fetch('https://dev.to/api/articles')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     if (data.length === 0) {
//       console.log('No more articles to load.');
//       window.removeEventListener('scroll', handleScroll); // Remove event listener if no more articles
//       return;
//     }
//     // Log all articles with their tags
//     console.log("Fetched Articles with Tags:");
//     data.forEach((article, index) => {
//       console.log(`Article ${index + 1}:`);
//       console.log("  Title:", article.title);
//       console.log("  Description:", article.description);
//       console.log("  Author:", article.user.name);
//       console.log("  Tags:", article.tag_list.join(", ")); // Joining tags into a comma-separated string
//       console.log("  URL:", article.url);
//       console.log("\n");
//     });

//     // Dynamically display articles and tags on the webpage
//     const articleContainer = document.getElementById('articles');
//     data.forEach((article,index) => {

//       let card_container = document.createElement('div');
//       card_container.className = "card_container";
//       let card_image_container = document.createElement('a');
//       card_image_container.className = "card_image_container";
//       let card_image = document.createElement('img');
//       card_image.className = "card_image";
//       card_image.alt = "card_img";
//       card_image.loading = 'lazy';
//       let card_title_container = document.createElement('div');
//       card_title_container.className = "card_title_container";
//       let card_title_anchor = document.createElement('a');
//       card_title_anchor.className = "card_title_anchor";
//       let card_title = document.createElement('h2');
//       card_title.href = '#';
//       card_title.className = 'card_title';
//       let card_desc = document.createElement('p');
//       card_desc.className = "card_desc";
//       let card_footer_container = document.createElement('div');
//       card_footer_container.className = 'card_footer_container';
//       let author_container = document.createElement('div');
//       author_container.className = 'author_container';
//       let author_avatar_container = document.createElement('div');
//       author_avatar_container.className = 'author_avatar_container';
//       let author_avatar = document.createElement('img');
//       author_avatar.className = "author_avatar";
//       author_avatar.alt = 'avatar';
//       author_avatar.loading = 'lazy';
//       let author_info_container = document.createElement('div');
//       author_info_container.className = "author_info_container";
//       let author_name = document.createElement('span');
//       author_name.className = "author_name";
//       let author_date = document.createElement('span');
//       author_date.className = "author_date";
//       let card_tag_div = document.createElement('div');
//       card_tag_div.className = 'card_tag_div';
//       let card_tag_container = document.createElement('span');
//       card_tag_container.className = 'card_tag_container';
//       let delete_blog_btn_div = document.createElement('div');
//       delete_blog_btn_div.className = 'delete_blog_btn_div';
    
      
//       card_title.innerHTML =` <a href="${article.url}" target="_blank"> ${article.title}</a>`
//       card_desc.innerHTML =`${article.description}`
//       // author_avatar.src = "https://api.dicebear.com/7.x/notionists/svg?seed=" + `${article.user.name}` + "?size=64";
//       author_avatar.src = `${article.user.profile_image}`
//       // author_name.innerHTML =`${article.user.name}`
//       author_date.innerHTML = new Date(article.published_at).toLocaleDateString();
//       card_tag_container.innerHTML = `${article.tag_list[1]}`;

//     // social media link for the user 
//     const github_username = `https://github.com/${article.user.github_user_name}`;
//     const twitterLink = `https://twitter.com/${article.user.twitter_username}`;
//     const websiteLink = article.user.website_url;
    
//     // Check if links are available and update author name
    // if (github_username && github_username !== 'https://github.com/' && github_username != `https://github.com/null` && github_username != `https://github.com/undefined`) {
    //   author_name.innerHTML = `<a href="${github_username}" target="_blank">${article.user.name}</a>`;
    // } else if (twitterLink && twitterLink !== 'https://twitter.com/' && twitterLink != `https://twitter.com/null` && twitterLink != `https://twitter.com/undefined`) {
    //   author_name.innerHTML = `<a href="${twitterLink}" target="_blank">${article.user.name}</a>`;
    // } else if (websiteLink) {
    //   author_name.innerHTML = `<a href="${websiteLink}" target="_blank">${article.user.name}</a>`;
    // } else {
    //   // If no social media link is available, provide a cleaner message
    //   author_name.innerHTML = `${article.user.name}`;
      
//     }
//        console.log(github_username)
//        console.log(twitterLink)
//        console.log(websiteLink)
//        // Replace with your Unsplash Access Key
//     const accessKey = "fnkBIwFQ_kXsTt9c2OawzcVq0vufh2JN0rx3q8miy9w";
  
//     // Endpoint URL with query and access key
//     const apiUrl = `https://api.unsplash.com/search/photos?query=${article.tag_list}&client_id=${accessKey}`;
  
//        // Make the API request to Unsplash
//     fetch(apiUrl)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json(); // Parse the response as JSON
//     })
//     .then(data => {
//       // Check if results are available
//       if (data.results && data.results.length > 0) {
//         // Generate a random index
//         const randomIndex = Math.floor(Math.random() * data.results.length);

//         // Access the random image URL from the results
//         const imageUrl = data.results[randomIndex].urls.regular;

//         // Find your image element (make sure to have the correct class)
//         if (card_image) {
//           // Display the random image dynamically on the page
//           card_image.src = imageUrl;
//           card_image.alt = "Random Wanderlust Image from Unsplash";
//           card_image.style.maxWidth = "500px";
//         } else {
//           console.log("Image element not found.");
//         }
//       } else {
//         console.log("No images found for the query.");
//       }
//     })
    
//     .catch(error => {
//       console.error("Error fetching data from Unsplash:", error);
//     });

   

//     // Nesting the Element 
//       card_image_container.appendChild(card_image);
//       card_title_anchor.appendChild(card_title);
//       card_title_container.appendChild(card_title_anchor);
//       card_title_container.appendChild(card_desc);

//       card_footer_container.appendChild(author_container);
//       author_container.appendChild(author_avatar_container);
//       author_avatar_container.appendChild(author_avatar);
//       author_container.appendChild(author_info_container);
//       author_info_container.appendChild(author_name);
//       author_info_container.appendChild(author_date);
//       card_footer_container.appendChild(card_tag_div);
//       card_tag_div.appendChild(card_tag_container);

//       card_container.appendChild(card_image_container);
//       card_container.appendChild(card_title_container);
//       card_container.appendChild(card_footer_container);
//       card_container.appendChild(delete_blog_btn_div);

//       // Append the created card to the blog container
//       blogContainer.appendChild(card_container);


      
//     });
//     isLoading = false; // Reset the loading state
//   })
//   .catch(error => {
//     console.error("Error fetching data:", error);
//     isLoading = false; // Reset loading state on error
//   });
  
// }
// function handleScroll() {
//   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

//   // Check if the user has scrolled close to the bottom of the page
//   if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoading) {
//     currentPage++;
//     fetchArticles(currentPage);
//   }
// }

// fetchArticles(currentPage);

// window.addEventListener('scroll', handleScroll);
// })






document.addEventListener('DOMContentLoaded', () => {
  const blogContainer = document.getElementById("grid_div1");
  const loadMoreBtn = document.getElementById("load_more_btn");
  let currentPage = 1;
  let isLoading = false;

  // Function to fetch articles
  function fetchArticles(page) {
    isLoading = true;
    fetch(`https://dev.to/api/articles?page=${page}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.length === 0) {
          console.log('No more articles to load.');
          loadMoreBtn.style.display = 'none'; // Hide the button if no more articles
          return;
        }

        data.forEach(article => createArticleCard(article));
        isLoading = false; // Reset the loading state
      })
      .catch(error => {
        console.error("Error fetching articles:", error);
        isLoading = false;
      });
  }

  // Function to create and display an article card
  function createArticleCard(article) {
    // Card container
    const cardContainer = document.createElement('div');
    cardContainer.className = "card_container";

    // Image container
    const cardImageContainer = document.createElement('a');
    cardImageContainer.className = "card_image_container";
    const cardImage = document.createElement('img');
    cardImage.className = "card_image";
    cardImage.alt = "card_img";

    cardImageContainer.appendChild(cardImage);

    // Fetch a random image for the article tags
    const accessKey = "fnkBIwFQ_kXsTt9c2OawzcVq0vufh2JN0rx3q8miy9w";
    const apiUrl = `https://api.unsplash.com/search/photos?query=${article.tag_list}&client_id=${accessKey}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.results.length);
          cardImage.src = data.results[randomIndex].urls.regular;
        } else {
          console.log("No images found for the query.");
        }
      })
      .catch(error => console.error("Error fetching Unsplash images:", error));

    // Title and description
    const cardTitleContainer = document.createElement('div');
    cardTitleContainer.className = "card_title_container";
    const cardTitle = document.createElement('h3'); 
    cardTitle.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
    const cardDesc = document.createElement('p');
    cardDesc.textContent = article.description;
    cardTitleContainer.appendChild(cardTitle);
    cardTitleContainer.appendChild(cardDesc);

    // Author information
    const cardFooterContainer = document.createElement('div');
    cardFooterContainer.className = "card_footer_container";
    const authorContainer = document.createElement('div');
    authorContainer.className = "author_container";
    const authorAvatar = document.createElement('img');
    authorAvatar.className = "author_avatar";
    authorAvatar.alt = "avatar";
    authorAvatar.loading = 'lazy';
    authorAvatar.src = article.user.profile_image;
    const authorName = document.createElement('span');
    authorName.className = "author_name";
    const authorDate = document.createElement('span');
    authorDate.className = "author_date";
    authorDate.textContent = new Date(article.published_at).toLocaleDateString();

    // Social media links for the author
    const github_username = `https://github.com/${article.user.github_user_name}`;
    const twitterLink = `https://twitter.com/${article.user.twitter_username}`;
    const websiteLink = article.user.website_url;

    if (github_username && github_username !== 'https://github.com/' && github_username != `https://github.com/null` && github_username != `https://github.com/undefined`) {
      authorName.innerHTML = `<a href="${github_username}" target="_blank">${article.user.name}</a>`;
    } else if (twitterLink && twitterLink !== 'https://twitter.com/' && twitterLink != `https://twitter.com/null` && twitterLink != `https://twitter.com/undefined`) {
      authorName.innerHTML = `<a href="${twitterLink}" target="_blank">${article.user.name}</a>`;
    } else if (websiteLink) {
      authorName.innerHTML = `<a href="${websiteLink}" target="_blank">${article.user.name}</a>`;
    } else {
      // If no social media link is available, provide a cleaner message
      authorName.innerHTML = `${article.user.name}`;
    }
    // Nest elements
    authorContainer.appendChild(authorAvatar);
    authorContainer.appendChild(authorName);
    authorContainer.appendChild(authorDate);
    cardFooterContainer.appendChild(authorContainer);

    // Tag container
    const tagContainer = document.createElement('div');
    tagContainer.className = "card_tag_div";
    const tags = article.tag_list.map(tag => `<span class="card_tag_container">${tag}</span>`).join('');
    tagContainer.innerHTML = tags;
    cardFooterContainer.appendChild(tagContainer);

    // Assemble the card
    cardContainer.appendChild(cardImageContainer);
    cardContainer.appendChild(cardTitleContainer);
    cardContainer.appendChild(cardFooterContainer);

    blogContainer.appendChild(cardContainer);
  }

  // Load More button click handler
  loadMoreBtn.addEventListener('click', () => {
   
      if (!isLoading) {
        currentPage++;
        fetchArticles(currentPage);
      }
   
  });

  // Initial fetch
  fetchArticles(currentPage);
});
