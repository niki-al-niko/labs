document.addEventListener('DOMContentLoaded', () => {

    const searchToggle = document.getElementById('searchToggle');
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    if (searchToggle && searchForm) {
        searchToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            searchForm.classList.toggle('active');
            
            if (searchForm.classList.contains('active')) {
                searchToggle.style.display = 'none';
                setTimeout(() => searchInput.focus(), 100);
            } else {
                searchToggle.style.display = 'flex';
            }
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                searchForm.classList.remove('active');
                searchToggle.style.display = 'flex';
            }
        });

        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchInput.value.trim().toLowerCase();
            if (query) {
                alert('Вы ищете: ' + query);
            }
        });
    }

    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            viewButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const view = button.dataset.view;
            if (view === 'mobile') {
                document.body.classList.add('is-mobile');
            } else {
                document.body.classList.remove('is-mobile');
            }
        });
    });

    function updateViewMode() {
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
            document.body.classList.add('is-mobile');
            const mobileBtn = document.querySelector('[data-view="mobile"]');
            const desktopBtn = document.querySelector('[data-view="desktop"]');
            if (mobileBtn) mobileBtn.classList.add('active');
            if (desktopBtn) desktopBtn.classList.remove('active');
        } else {
            document.body.classList.remove('is-mobile');
            const mobileBtn = document.querySelector('[data-view="mobile"]');
            const desktopBtn = document.querySelector('[data-view="desktop"]');
            if (desktopBtn) desktopBtn.classList.add('active');
            if (mobileBtn) mobileBtn.classList.remove('active');
        }
    }

    window.addEventListener('resize', updateViewMode);
    updateViewMode();

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
