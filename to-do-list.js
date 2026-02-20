const themeBtn = document.getElementById('theme-btn');










// Toggle dark mode
themeBtn.addEventListener('click', () => {
    isDarkMode =! isDarkMode;
    if (isDarkMode) {
        document.documentElement.setAttribute('theme-view', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.removeAttribute('theme-view');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});