async function loadComponent(id, file, cacheDuration = 86400, useSessionStorage = false) {  
    const container = document.getElementById(id);
    const cacheKey = `cache_${file}`; // Unique cache key for each component
    const cacheTimeKey = `cacheTime_${file}`; // Stores timestamp
    const now = Math.floor(Date.now() / 1000); // Current time in seconds

    // Use localStorage or sessionStorage based on the flag
    const storage = useSessionStorage ? sessionStorage : localStorage;

    // Check if cached version exists & is fresh
    const cached = storage.getItem(cacheKey);
    const cachedTime = storage.getItem(cacheTimeKey);

    if (cached && cachedTime && (now - cachedTime < cacheDuration)) {
        container.innerHTML = cached;  // Load from cache
        return;
    }

    // Fetch component from server if not cached or expired
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Failed to load ${file}`);

        const content = await response.text();
        container.innerHTML = content;

        // Store in storage with timestamp
        storage.setItem(cacheKey, content);
        storage.setItem(cacheTimeKey, now);

    } catch (error) {
        console.error(`Error loading ${file}:`, error);
        container.innerHTML = `<p>Error loading ${file}</p>`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function () {
            nav.classList.toggle("active");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault(); // Prevent default submission

            grecaptcha.ready(function () {
                grecaptcha.execute("6LdKgtYqAAAAANjSuRNnfe7z6sNEfy9ZGdB7Bfi3", { action: "submit" }).then(async function (token) {
                    // Add the reCAPTCHA token to the form
                    document.getElementById("recaptcha-token").value = token;

                    // Get form data
                    const formData = new FormData(contactForm); // Use FormData directly

                    try {
                        // Send data to Google Apps Script
                        await fetch("https://script.google.com/macros/s/AKfycbyIRcBmx3135Zt-fZpOzyNhUuMqf8eRv0uumhxViDnNh4bxpdhckpKhI-saKwgAkbc/exec", {
                            method: "POST",
                            body: formData, // Send FormData directly
                            mode: "no-cors" // Prevents preflight OPTIONS request
                        });

                        alert("Form submitted successfully!"); // No response due to no-cors mode
                    } catch (error) {
                        console.error("Form submission failed:", error);
                        alert("Error submitting form. Please try again.");
                    }
                });
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault(); // Prevent default submission
            submitForm();
        });
    }
});

async function submitForm() {
    console.log("Form submitted!");
}

try {
    const response = await fetch("https://script.google.com/macros/library/d/1pFKX1IPJN_LpAoo7-iZanZvDTbfeoxAa8OhEOuEZ7pN-kdsLOUrFdsNc/3", {
        method: "GET",
        mode: "cors" // Allow cross-origin request
    });

    const result = await response.text();
    console.log("Response:", result);
} catch (error) {
    console.error("Error:", error);
}

window.onload = async () => {
    await loadComponent("footer", "footer.html");
    initializeMobileMenu();
};

