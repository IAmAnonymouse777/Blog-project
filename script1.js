document.addEventListener('DOMContentLoaded', function() {
    

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
    console.log(blogContainer);

    // Get the blogs from localStorage
    let blogs = JSON.parse(localStorage.getItem("blogs"));

    // Check if blogs is an array, if not, reset it to an empty array
    if (!Array.isArray(blogs)) {
        console.log("LocalStorage data is not an array. Resetting blogs.");
        blogs = [];
        localStorage.setItem("blogs", JSON.stringify(blogs));
    }

    // If no blogs exist
    if (!blogContainer) {
        console.error("Element with ID 'grid_div1' not found!");
        return;
    }

    // Clear any existing content in the container
    blogContainer.innerHTML = '';

    blogs.forEach((blog, index) => {
        // Create the blog card dynamically
        let card_container = document.createElement('div');
        card_container.className = "card_container";
        let card_image_container = document.createElement('a');
        card_image_container.className = "card_image_container";
        let card_image = document.createElement('img');
        card_image.className = "card_image";
        card_image.alt = "card_img";
        card_image.loading = 'lazy';
        let card_title_container = document.createElement('div');
        card_title_container.className = "card_title_container";
        let card_title_anchor = document.createElement('a');
        card_title_anchor.className = "card_title_anchor";
        let card_title = document.createElement('h2');
        card_title.href = '#';
        card_title.className = 'card_title';
        let card_desc = document.createElement('p');
        card_desc.className = "card_desc";
        let card_footer_container = document.createElement('div');
        card_footer_container.className = 'card_footer_container';
        let author_container = document.createElement('div');
        author_container.className = 'author_container';
        let author_avatar_container = document.createElement('div');
        author_avatar_container.className = 'author_avatar_container';
        let author_avatar = document.createElement('img');
        author_avatar.className = "author_avatar";
        author_avatar.alt = 'avatar';
        author_avatar.loading = 'lazy';
        let author_info_container = document.createElement('div');
        author_info_container.className = "author_info_container";
        let author_name = document.createElement('span');
        author_name.className = "author_name";
        let author_date = document.createElement('span');
        author_date.className = "author_date";
        let card_tag_div = document.createElement('div');
        card_tag_div.className = 'card_tag_div';
        let card_tag_container = document.createElement('span');
        card_tag_container.className = 'card_tag_container';
        let delete_blog_btn_div = document.createElement('div');
        delete_blog_btn_div.className = 'delete_blog_btn_div';
        let delete_blog_btn = document.createElement('button');
        delete_blog_btn.className = 'delete_blog_btn';

        // Adding content to the card
        card_title.innerHTML = blog.title;
        card_desc.innerHTML = blog.content;
        author_avatar.src = "https://api.dicebear.com/7.x/notionists/svg?seed=" + blog.userName + "?size=64";
  
    // Replace with your Unsplash Access Key
    const accessKey = "fnkBIwFQ_kXsTt9c2OawzcVq0vufh2JN0rx3q8miy9w";
  
    // Endpoint URL with query and access key
    const apiUrl = `https://api.unsplash.com/search/photos?query=${blog.category}&client_id=${accessKey}`;
  
    // Make the API request to Unsplash
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the response as JSON
      })
      .then(data => {
        // Check if results are available
        if (data.results && data.results.length > 0) {
          // Generate a random index
          const randomIndex = Math.floor(Math.random() * data.results.length);
  
          // Access the random image URL from the results
          const imageUrl = data.results[randomIndex].urls.regular;
  
          // Find your image element (make sure to have the correct class)
          if (card_image) {
            // Display the random image dynamically on the page
            card_image.src = imageUrl;
            card_image.alt = "Random Wanderlust Image from Unsplash";
            card_image.style.maxWidth = "500px";
          } else {
            console.log("Image element not found.");
          }
        } else {
          console.log("No images found for the query.");
        }
      })
      .catch(error => {
        console.error("Error fetching data from Unsplash:", error);
      });
 
  



        author_name.innerHTML = blog.userName;
        author_date.innerHTML = new Date(blog.id).toLocaleDateString();
        card_tag_container.innerHTML = blog.category;
        delete_blog_btn.innerHTML = 'Delete Blog';

        // Nesting elements
        card_image_container.appendChild(card_image);
        card_title_anchor.appendChild(card_title);
        card_title_container.appendChild(card_title_anchor);
        card_title_container.appendChild(card_desc);

        card_footer_container.appendChild(author_container);
        author_container.appendChild(author_avatar_container);
        author_avatar_container.appendChild(author_avatar);
        author_container.appendChild(author_info_container);
        author_info_container.appendChild(author_name);
        author_info_container.appendChild(author_date);
        card_footer_container.appendChild(card_tag_div);
        card_tag_div.appendChild(card_tag_container);

        delete_blog_btn_div.appendChild(delete_blog_btn);

        card_container.appendChild(card_image_container);
        card_container.appendChild(card_title_container);
        card_container.appendChild(card_footer_container);
        card_container.appendChild(delete_blog_btn_div);

        // Append the created card to the blog container
        blogContainer.appendChild(card_container);

        // Adding event listener to the delete button
        delete_blog_btn.onclick = function() {
            // Delete the blog from localStorage using the index
            blogs.splice(index, 1);  // Remove the blog at the specific index
            localStorage.setItem("blogs", JSON.stringify(blogs));

            // Remove the blog card from the DOM
            blogContainer.removeChild(card_container);

            alert('Blog deleted successfully!');
        };
    });

});

function openTextEditor() {
    console.log("go");
    window.open('./TextEditor/TextEditor.html', '_target');
}



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
