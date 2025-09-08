// filepath: /my-simple-web-project/my-simple-web-project/script.js
document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById('openPageLink');
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        window.open('newpage.html', '_blank'); // Open the new page in a new tab
    });
});