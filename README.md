
# My Blog Project Discovery Zone
Table of Contents
 - Introduction
 - Features
 - Technologies Used
 - Setup Instructions
 - API Integration
 - Usage

 





## Introduction
The Discovery Zone website is a responsive, user-friendly platform that integrates blogs and APIs to deliver diverse content. From technical news to stock market insights, recipes, and user-generated blogs, this project combines innovation with a rich user experience. It also features note-taking tools and a dark theme for an engaging experience. User can Note down there ideas and create Beautiful blog using our TextEditor so that user can format the text acordingly for user preference.
## Features
 - Diverse Blog Categories:
    - Technical News: Stay updated with the latest advancements in technology.
    - Recipe Blog: Explore delicious and healthy recipes.
    - Stock Market News: Get insights into the financial market trends.
    - General News: Access a variety of news articles across different domains using the integrated News API.
- User-Created Blogs
    - Custom Blog Creation: Users can create their own blogs   using a built-in text editor.
    - Inline Text Editing: Write, edit, and format text directly within the website's editor.
    - Persistent Blogs: Blogs created by users are stored in the browser's local storage to prevent loss after page refreshes.
    - Easy Blog Management: Users can delete their blogs using a simple delete button.
- Notes Management
    - Quick Notes: A temporary note section where users can jot down ideas while exploring blogs. These notes are not persistent and disappear on refresh.
    - Permanent Notes: A dedicated section for saving confirmed ideas. These notes are stored in the browser's local storage and remain available even after refreshing the page.
- Search Functionality
    - API Search: Users can search across:
        - Recipe blogs using the Spoonacular API.
        - News articles using the News API.
        - Stock market news using the Marketaux API.
    - Topic Relevance: Quick filtering and exploration of relevant content based on user queries.
- User Experience
    - Responsive Design: Optimized for seamless use on mobile, tablet, and desktop devices.
    - Dark Theme: A rich, visually appealing dark mode enhances readability and user comfort.
    - Dynamic Animations:
        - Border color changes and box shadow effects for interactive elements.
        - Shaking animation on the "Load More" button to draw attention.
        - Intuitive UI: An easy-to-navigate interface ensuring smooth user interaction.
## Technologies Used
 Note :- This Project Does not use any Framework As this Project Mainly Focus on the JavaScript.

Frontend
 - HTML5, CSS3, JavaScript

Database: 
 - Users Local Storage



## Setup Instructions

Follow these steps to set up and run the project locally:

1. Clone the repository:- 
```bash
  git clone https://github.com/your-username/your-repo-name.git  
  cd your-repo-name  
```
2. Open the project:

- Navigate to the project folder and open the index.html file in your browser.
- No additional setup or dependencies are required as the project is built with HTML, CSS, and JavaScript.

3. API Keys Configuration (Optional):
- If you are using APIs, you may need to add your API keys directly into the JavaScript files (ensure you keep them secure)

```bash
const NEWS_API_KEY = 'your_news_api_key';  
const SPOONACULAR_API_KEY = 'your_spoonacular_api_key';  
const MARKETAUX_API_KEY = 'your_marketaux_api_key';  
```
## API Integration Details
1. NEWS API
 - Purpose: Fetch the latest health-related news.
 - Usage: Articles are displayed dynamically on the homepage under the "Latest News" section.
2. Spoonacular API
 - Purpose: Provide nutritional data and healthy recipes.
 - Usage: Content in the "Variaty of Dishes" and "Recipes" sections is fetched using this API.
3. Marketaux API
- Purpose: Offer market-related health insights.
- Usage: Display relevant market trends related to health industries.
## Usage

Once the project is set up and opened in a browser, users can interact with the website as follows:

1. Explore Blog Categories
- Technical News: View the latest updates and articles related to technology.
- Recipe Blogs: Browse healthy and delicious recipes fetched via the Spoonacular API.
- Stock Market Insights: Check the latest stock market trends and updates powered by the Marketaux API.
- General News: Stay informed with the latest news articles from various categories via the News API.
2. Create Your Own Blog
- Text Editor: Users can click the “Create Blog” button to open a text editor where they can write their blog posts.
- Blog Editing: Write, edit, and format blog content directly within the editor.
- Save Blogs: Once the blog is created, it is saved in the browser's local storage and will persist even after the page is refreshed.
3. Manage Blogs
- Delete Blogs: Users can easily delete their saved blogs by clicking the delete button next to each blog post.
4. Notes Section
- Quick Notes: Write temporary notes or ideas in the Quick Notes section. These will disappear once the page is refreshed.
- Permanent Notes: Write confirmed ideas or reminders in the Permanent Notes section. These notes are stored in the browser's local storage and remain even after refreshing the page.
5. Search Functionality
- Search Blogs: Use the search bar to explore specific recipes, news articles, or stock market updates.
- Refine Results: Filter content by relevant topics, such as health, technology, and stock market news.
6. Interactive Animations
- Animations: Enjoy interactive animations such as a shaking "Load More" button and dynamic color changes when interacting with the page and Many More.
- The website is designed to be responsive, ensuring smooth functionality across various devices like mobile phones, tablets, and desktops.


