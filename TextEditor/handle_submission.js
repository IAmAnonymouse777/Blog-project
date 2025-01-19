

document.getElementById("post_blog_btn").addEventListener("click", () => {
    // Get form data
    const title = document.getElementById("title_text").value;
    const userName = document.getElementById("user_name").value;
    const category = document.getElementById("blog_category").value;
    const content = document.getElementById("content").innerHTML;

    // Validate input
    if (!title || !userName || !category || !content.trim()) {
        alert("Please fill in all the fields!");
        return;
    }
 
    // Create blog object
    const blog = {
      
        id: Date.now(), // Unique ID for each blog
        title,
        userName,
        category,
        content,
    };

    // Retrieve existing blogs from localStorage
    let blogs = [];
    try {
        // Ensure that the blogs variable is an array
        const storedBlogs = localStorage.getItem("blogs");
        blogs = storedBlogs ? JSON.parse(storedBlogs) : []; // If the stored value is not null, parse it; otherwise, initialize an empty array
    } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        blogs = []; // If an error occurs, reset blogs to an empty array
    }

    // Make sure blogs is still an array
    if (!Array.isArray(blogs)) {
        console.error("LocalStorage data is not an array. Resetting blogs.");
        blogs = []; // Reset to an empty array if it's not an array
    }

    // Add new blog to the list
    blogs.push(blog);


    // Save updated blogs list to localStorage
    localStorage.setItem("blogs", JSON.stringify(blogs));

    alert("Blog posted successfully!");

    // Clear the form
    document.getElementById("title_text").value = "";
    document.getElementById("user_name").value = "";
    document.getElementById("blog_category").value = "";
    document.getElementById("content").innerHTML = "Type your message here...";

    document.location.href='../index.html';
});