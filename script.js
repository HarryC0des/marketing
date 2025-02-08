async function loadComponent(id, file, cacheDuration = 86400) {  
    const container = document.getElementById(id);
    const cacheKey = `cache_${file}`; // Unique cache key for each component
    const cacheTimeKey = `cacheTime_${file}`; // Stores timestamp
    const now = Math.floor(Date.now() / 1000); // Current time in seconds

    // Check if cached version exists & is fresh
    const cached = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);

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

        // Store in cache with timestamp
        localStorage.setItem(cacheKey, content);
        localStorage.setItem(cacheTimeKey, now);
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
        container.innerHTML = `<p>Error loading ${file}</p>`;
    }
}

window.onload = () => {
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");
    loadComponent("head", "head.html");
};
