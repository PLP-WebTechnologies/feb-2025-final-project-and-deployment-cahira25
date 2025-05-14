document.addEventListener('DOMContentLoaded', function() {

    // --- Responsive Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('header nav'); // Target the nav element for .nav-open class
    const navLinksUl = document.querySelector('header nav .nav-links');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('nav-open'); // Toggles display of navLinksUl via CSS
        });
    }

    // Close mobile nav if clicked outside
    document.addEventListener('click', (event) => {
        if (navMenu && navMenu.classList.contains('nav-open')) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = navToggle.contains(event.target);
            if (!isClickInsideNav && !isClickOnToggle) {
                navMenu.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });


    // --- Dynamic Year in Footer ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Active Navigation Link Highlighting ---
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksList = document.querySelectorAll('header nav .nav-links a');

    navLinksList.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop() || 'index.html';
        if (linkPage === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // --- Blog Post Data (Simulated Backend) ---
    const blogPostsData = [
        {
            id: 1,
            title: "Getting Started with Modern JavaScript",
            date: "2025-05-10",
            author: "Alex Doe",
            image: "images/placeholder-post1.jpg",
            tags: ["JavaScript", "Web Development", "Tutorial"],
            excerpt: "An introduction to the core concepts of modern JavaScript, including ES6+ features, and how to set up your development environment.",
            content: `
                <p>Modern JavaScript, often referred to as ES6 (ECMAScript 2015) and beyond, has introduced a plethora of features that make the language more powerful and developer-friendly. This post will guide you through some of the fundamental aspects and help you get started.</p>
                <h3>Key ES6+ Features:</h3>
                <ul>
                    <li><strong>let and const:</strong> Block-scoped variable declarations. <code>let</code> allows reassignment, while <code>const</code> is for variables that won't be reassigned.</li>
                    <li><strong>Arrow Functions:</strong> A more concise syntax for writing functions, e.g., <code>(a, b) => a + b;</code>. They also behave differently with the <code>this</code> keyword.</li>
                    <li><strong>Template Literals:</strong> Allow for embedded expressions and multi-line strings using backticks (\`), e.g., <code>\`Hello, ${name}!\`</code>.</li>
                    <li><strong>Destructuring Assignment:</strong> Easily extract values from arrays or properties from objects into distinct variables.</li>
                    <li><strong>Modules:</strong> Native support for organizing code into reusable modules using <code>import</code> and <code>export</code> statements.</li>
                    <li><strong>Promises and Async/Await:</strong> Enhanced ways to handle asynchronous operations, making code cleaner and easier to manage than traditional callbacks.</li>
                </ul>
                <p>Setting up your environment usually involves Node.js and npm (Node Package Manager). You can use tools like Babel to transpile modern JavaScript code into versions compatible with older browsers if needed.</p>
                <blockquote>"The strength of JavaScript is that you can do anything. The weakness is that you will." - Reg Braithwaite</blockquote>
                <p>Dive in, experiment, and build something amazing!</p>
            `
        },
        {
            id: 2,
            title: "The Rise of AI in Web Design",
            date: "2025-05-12",
            author: "Jamie Smith",
            image: "images/placeholder-post2.jpg",
            tags: ["AI", "Web Design", "Trends"],
            excerpt: "Exploring how Artificial Intelligence is revolutionizing the field of web design, from automated layouts to personalized user experiences.",
            content: `
                <p>Artificial Intelligence (AI) is no longer a futuristic concept; it's actively reshaping industries, and web design is no exception. From AI-powered design tools to intelligent user experience personalization, the impact is profound.</p>
                <h3>How AI is Used in Web Design:</h3>
                <ol>
                    <li><strong>AI Design Assistants:</strong> Tools like The Grid or Wix ADI use AI to generate website layouts and designs based on user input and content.</li>
                    <li><strong>Personalized User Experiences:</strong> AI algorithms can analyze user behavior to tailor content, recommendations, and even UI elements to individual preferences.</li>
                    <li><strong>Automated A/B Testing:</strong> AI can run and analyze A/B tests at scale, optimizing conversion rates more efficiently than manual methods.</li>
                    <li><strong>Chatbots and Virtual Assistants:</strong> Enhancing user support and engagement through intelligent, automated conversations.</li>
                    <li><strong>Content Creation:</strong> AI tools are emerging that can assist with writing copy or even generating basic visual assets.</li>
                </ol>
                <p>While AI offers incredible potential, it's important to remember that human creativity and strategic thinking remain crucial. AI should be seen as a powerful assistant, not a replacement for designers.</p>
                <p>The future of web design will likely involve a synergistic relationship between human designers and intelligent machines, leading to more efficient workflows and highly adaptive, user-centric websites.</p>
            `
        },
        {
            id: 3,
            title: "A Deep Dive into CSS Grid Layout",
            date: "2025-05-14",
            author: "Chris Lee",
            image: "images/placeholder-post3.jpg",
            tags: ["CSS", "Layout", "Web Development"],
            excerpt: "Unlock the power of two-dimensional layouts with CSS Grid. This guide covers the basics to more advanced techniques.",
            content: `
                <p>CSS Grid Layout is a revolutionary layout system available in CSS. It allows developers to create complex, responsive grid structures with more ease and control than ever before. Unlike Flexbox, which is primarily for one-dimensional layouts, Grid excels at two-dimensional arrangements.</p>
                <h3>Core Concepts of CSS Grid:</h3>
                <ul>
                    <li><strong>Grid Container:</strong> The element on which <code>display: grid</code> or <code>display: inline-grid</code> is applied.</li>
                    <li><strong>Grid Item:</strong> The direct children of the grid container.</li>
                    <li><strong>Grid Lines:</strong> The dividing lines that make up the structure of the grid. They can be horizontal or vertical.</li>
                    <li><strong>Grid Tracks:</strong> The space between two adjacent grid lines. You can think of them as the columns or rows of the grid.</li>
                    <li><strong>Grid Cell:</strong> The space between two adjacent row and two adjacent column grid lines. It's a single "unit" of the grid.</li>
                    <li><strong>Grid Area:</strong> The total space surrounded by four grid lines. A grid area may be composed of any number of grid cells.</li>
                </ul>
                <p>To define a grid, you use properties like <code>grid-template-columns</code> and <code>grid-template-rows</code> on the container. For placing items, you can use line-based placement (<code>grid-column-start</code>, <code>grid-row-end</code>), named grid areas (<code>grid-template-areas</code>), or allow the auto-placement algorithm to do its job.</p>
                <p>CSS Grid simplifies many layout challenges that were previously complex, such as centering elements, creating full-page layouts, and managing white space effectively. It's a vital tool in any modern web developer's toolkit.</p>
            `
        }
        // Add more post objects here if needed
    ];

    // --- Populate Blog Posts on Home Page (index.html) ---
    const blogPostsContainer = document.getElementById('blogPostsContainer');
    if (blogPostsContainer) {
        if (blogPostsData.length === 0) {
            blogPostsContainer.innerHTML = "<p>No blog posts available yet. Check back soon!</p>";
        } else {
            blogPostsData.forEach(post => {
                const postElement = document.createElement('article');
                postElement.classList.add('post-summary-card');
                postElement.innerHTML = `
                    <img src="${post.image}" alt="${post.title}" class="post-thumbnail">
                    <div class="post-card-content">
                        <h3>${post.title}</h3>
                        <p class="post-meta">By ${post.author} on <time datetime="${post.date}">${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time></p>
                        <p class="post-excerpt">${post.excerpt}</p>
                        <a href="post.html?id=${post.id}" class="btn">Read More</a>
                    </div>
                `;
                blogPostsContainer.appendChild(postElement);
            });
        }
    }

    // --- Populate Single Post Page (post.html) ---
    const fullPostContent = document.getElementById('fullPostContent');
    if (fullPostContent) {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get('id'));
        const post = blogPostsData.find(p => p.id === postId);

        if (post) {
            document.title = `${post.title} - My Tech Blog`; // Set page title
            fullPostContent.innerHTML = `
                <h2 class="post-title">${post.title}</h2>
                <p class="post-meta-full">
                    <span>By: ${post.author}</span> | 
                    <span>Published: <time datetime="${post.date}">${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time></span> | 
                    <span>Tags: ${post.tags.join(', ')}</span>
                </p>
                <img src="${post.image}" alt="${post.title}" class="post-image-full">
                <div class="post-content-full">
                    ${post.content}
                </div>
            `;
        } else {
            document.title = "Post Not Found - My Tech Blog";
            fullPostContent.innerHTML = '<p class="loading-message">Sorry, the post you are looking for could not be found. Please check the URL or navigate back to the <a href="index.html">homepage</a>.</p>';
        }
    }

    // --- Contact Form Validation (contact.html) ---
    const contactForm = document.getElementById('contactForm');
    const formStatusMessage = document.getElementById('formStatusMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            clearAllErrors();
            let isValid = true;

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');

            // Name validation
            if (nameInput.value.trim().length < 3) {
                showError(nameInput, 'Full name must be at least 3 characters long.');
                isValid = false;
            }

            // Email validation
            if (!isValidEmail(emailInput.value.trim())) {
                showError(emailInput, 'Please enter a valid email address.');
                isValid = false;
            }

            // Subject validation
            if (subjectInput.value.trim().length < 5) {
                showError(subjectInput, 'Subject must be at least 5 characters long.');
                isValid = false;
            }

            // Message validation
            if (messageInput.value.trim().length < 10) {
                showError(messageInput, 'Message must be at least 10 characters long.');
                isValid = false;
            }

            if (isValid) {
                formStatusMessage.textContent = 'Message sent successfully! (This is a demo)';
                formStatusMessage.className = 'success';
                contactForm.reset();
                setTimeout(() => {
                    formStatusMessage.textContent = '';
                    formStatusMessage.className = '';
                }, 5000);
            } else {
                formStatusMessage.textContent = 'Please correct the errors in the form.';
                formStatusMessage.className = 'error';
                 setTimeout(() => { // Remove general error message after a while if fields are still not fixed
                    if (formStatusMessage.textContent === 'Please correct the errors in the form.') {
                        formStatusMessage.textContent = '';
                        formStatusMessage.className = '';
                    }
                }, 5000);
            }
        });
    }

    function showError(inputElement, message) {
        inputElement.classList.add('invalid');
        const errorDiv = inputElement.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('error-message')) {
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        }
    }

    function clearError(inputElement) {
        inputElement.classList.remove('invalid');
        const errorDiv = inputElement.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('error-message')) {
            errorDiv.textContent = '';
            errorDiv.style.display = 'none';
        }
    }

    function clearAllErrors() {
        const invalidInputs = contactForm.querySelectorAll('.invalid');
        invalidInputs.forEach(input => clearError(input));
        if (formStatusMessage) {
             formStatusMessage.textContent = '';
             formStatusMessage.className = '';
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Clear individual error on input
    if(contactForm) {
        ['name', 'email', 'subject', 'message'].forEach(id => {
            const input = document.getElementById(id);
            if(input) {
                input.addEventListener('input', () => clearError(input));
            }
        });
    }

    // --- Comment Form (post.html - basic placeholder submit) ---
    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const commentName = document.getElementById('commentName').value;
            const commentText = document.getElementById('commentText').value;
            if (commentName.trim() && commentText.trim()) {
                alert("Comment submitted (demo)!\nName: " + commentName + "\nComment: " + commentText);
                commentForm.reset();
            } else {
                alert("Please fill in both name and comment fields.");
            }
        });
    }

});