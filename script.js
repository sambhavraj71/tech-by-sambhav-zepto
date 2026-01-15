// No specific JavaScript interactions were identified in the page description or screenshot.
// If there are dynamic elements like form validation or carousels, add them here.
// For example, basic form submission handler:
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted!');
});

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const loginModal = document.getElementById('loginModal');
    const searchModal = document.getElementById('searchModal');
    const openLoginBtn = document.querySelector('.open-login');
    const openSearchBtn = document.querySelector('.open-search');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const exploreTabBtns = document.querySelectorAll('.explore-tab-btn');
    
    // Open Login Modal
    openLoginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = 'flex';
        // Show login tab by default
        switchTab('login');
    });
    
    // Open Search Modal
    openSearchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        searchModal.style.display = 'flex';
        // Show categories tab by default
        switchExploreTab('categories');
    });
    
    // Close Modals
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            loginModal.style.display = 'none';
            searchModal.style.display = 'none';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (e.target === searchModal) {
            searchModal.style.display = 'none';
        }
    });
    
    // Login/Register Tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    // Explore Tabs
    exploreTabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-explore');
            switchExploreTab(tabId);
        });
    });
    
    // Registration Type Buttons
    const regTypeBtns = document.querySelectorAll('.reg-type-btn');
    regTypeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            alert(`Registration type selected: ${type}. This would redirect to specific registration form.`);
            // Here you would typically redirect to a specific registration page
            // or load a specific registration form
        });
    });
    
    // Explore Button
    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            alert('Applying filters and searching...');
            // Here you would implement the actual search functionality
        });
    }
    
    // Tab switching functions
    function switchTab(tabId) {
        // Update tab buttons
        tabBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-tab') === tabId) {
                btn.classList.add('active');
            }
        });
        
        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabId + 'Tab').classList.add('active');
    }
    
    function switchExploreTab(tabId) {
        // Update explore tab buttons
        exploreTabBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-explore') === tabId) {
                btn.classList.add('active');
            }
        });
        
        // Update explore tab content
        document.querySelectorAll('.explore-tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabId + 'Tab').classList.add('active');
    }
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            loginModal.style.display = 'none';
            searchModal.style.display = 'none';
        }
    });
});