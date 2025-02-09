document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-container");
    const searchInput = document.getElementById("searchInput");

    const posts = [
        { 
            title: "प्री-पीएच0डी के दौरान", 
            desc: "एक रोमांचक सफर", 
            img: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Updated image link for the first post
            link: "posts/post1.html", 
            author: "Prakash sanwal", 
            date: "Dec 28, 2024", 
            category: "Blog_#1" 
        },

        { 
            title: "सिनॉप्सिस प्रस्तुतिकरण", 
            desc: "यात्रा और संघर्ष", 
            img: "https://images.pexels.com/photos/356372/pexels-photo-356372.jpeg", // Updated image link for the second post
            link: "posts/post2.html", 
            author: "Prakash sanwal", 
            date: "Jan 1, 2025", 
            category: "Technology" 
        },

        { 
            title: "सिनॉप्सिस प्रस्तुतिकरण", 
            desc: "यात्रा और संघर्ष", 
            img: "https://images.pexels.com/photos/730705/pexels-photo-730705.jpeg", // Updated image link for the second post
            link: "posts/post2.html", 
            author: "Prakash sanwal", 
            date: "Jan 1, 2025", 
            category: "Technology" 
        },

        { 
            title: "सिनॉप्सिस प्रस्तुतिकरण", 
            desc: "यात्रा और संघर्ष", 
            img: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg", // Updated image link for the second post
            link: "posts/post2.html", 
            author: "Prakash sanwal", 
            date: "Jan 1, 2025", 
            category: "Technology" 
        },

        { 
            title: "सिनॉप्सिस प्रस्तुतिकरण", 
            desc: "यात्रा और संघर्ष", 
            img: "https://images.pexels.com/photos/730708/pexels-photo-730708.jpeg", // Updated image link for the second post
            link: "posts/post2.html", 
            author: "Prakash sanwal", 
            date: "Jan 1, 2025", 
            category: "Technology" 
        },

        { 
            title: "सिनॉप्सिस प्रस्तुतिकरण", 
            desc: "यात्रा और संघर्ष", 
            img: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Updated image link for the second post
            link: "posts/post2.html", 
            author: "Prakash sanwal", 
            date: "Jan 1, 2025", 
            category: "Technology" 
        }
    ];

    // Dynamic rendering of blog posts
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("col-md-4", "mb-4");

        postElement.innerHTML = `
            <div class="card">
                <img src="${post.img}" class="card-img-top" alt="${post.title}">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.desc}</p>
                    <a href="${post.link}" class="btn btn-primary">Read More</a>
                </div>
                <div class="card-footer">
                    <small class="text-muted">By ${post.author} | ${post.date} | ${post.category}</small>
                </div>
            </div>
        `;

        blogContainer.appendChild(postElement);
    });

    // Search functionality
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(query) || post.desc.toLowerCase().includes(query));
        
        blogContainer.innerHTML = "";
        filteredPosts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("col-md-4", "mb-4");

            postElement.innerHTML = `
                <div class="card">
                    <img src="${post.img}" class="card-img-top" alt="${post.title}">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.desc}</p>
                        <a href="${post.link}" class="btn btn-primary">Read More</a>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">By ${post.author} | ${post.date} | ${post.category}</small>
                    </div>
                </div>
            `;

            blogContainer.appendChild(postElement);
        });
    });
});



