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

window.onload = () => {
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");
};

