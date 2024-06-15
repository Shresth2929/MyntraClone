document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search');

    searchInput.addEventListener('focus', () => {
        searchInput.style.borderColor = '#ff3f6c';
    });

    searchInput.addEventListener('blur', () => {
        searchInput.style.borderColor = 'grey';
    });
});
