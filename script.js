// Format date function
function formatDate(date) {
    const yyyy = date.getFullYear().toString();
    const mm = (date.getMonth() + 1).toString().padStart(2, "0");
    const dd = date.getDate().toString().padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
}

// Get a random date
function getRandomDate() {
    const start = new Date("1995-06-16");
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    fetchAPOD(formatDate(randomDate));
}

// Load today's APOD
function loadCurrentDateAPOD() {
    const today = new Date();
    fetchAPOD(formatDate(today));
}

// Initialize Date Picker & Fetch APOD
function initializeDatepicker() {
    const selectedDate = prompt("Enter a date (YYYY-MM-DD):", formatDate(new Date()));
    if (selectedDate) {
        fetchAPOD(selectedDate);
    }
}

// Fetch APOD Data
function fetchAPOD(date) {
    const apiKey = "DEMO_KEY"; // Replace with your NASA API Key
    const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("apod-image").src = data.url;
            document.getElementById("apod-title").textContent = data.title;
            document.getElementById("apod-description").textContent = data.explanation;
            document.getElementById("apod-date").textContent = `Date: ${data.date}`;
        })
        .catch(error => console.error("Error fetching APOD:", error));
}
