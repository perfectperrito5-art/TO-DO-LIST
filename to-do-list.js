const themeBtn = document.getElementById('theme-btn');










// Toggle dark mode
themeBtn.addEventListener('click', () => {
    if (document.documentElement.getAttribute('theme-view') !== 'dark'){
        document.documentElement.setAttribute('theme-view', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.removeAttribute('theme-view');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark') {
        document.documentElement.setAttribute('theme-view', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.removeAttribute('theme-view');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

loadTheme();