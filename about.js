document.addEventListener("DOMContentLoaded", () => {
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



    const flipCardContainer = document.getElementById("flipCardContainer");
    const flipCard = flipCardContainer.querySelector(".flip-card");

    // Add click event to toggle the rotate class
    flipCardContainer.addEventListener("click", () => {
        flipCard.classList.toggle("rotate");
    });
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
  