document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/hello')
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').textContent = data.message;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('message').textContent = 'Error loading data';
        });
});