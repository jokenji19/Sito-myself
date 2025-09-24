<script>
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenu && mainNav) {
        mobileMenu.addEventListener('click', function () {
            mainNav.classList.toggle('active');
            mobileMenu.classList.toggle('is-active'); 
        });
    }
});
</script>

<template>
<header class="portfolio-header">
    <div class="header-container">
        <a href="#home" class="logo">PORTFOLIO</a>
        <nav class="main-nav">
            <ul>
                <li><a href="#about">Chi sono</a></li>
                <li><a href="#projects">Progetti</a></li>
                <li><a href="#skills">Competenze</a></li>
                <li><a href="#contact">Contatti</a></li>
            </ul>
        </nav>
        <div class="menu-toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </div>
</header>
</template>

<style scoped>
:root {
    --background-color: #ffffff;
    --text-color: #000000;
    --border-color: #eaeaea;
    --transition-speed: 0.3s ease-in-out;
}


.portfolio-header {
    background-color: #ffffff !important;
    backdrop-filter: none;
}

.portfolio-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #ffffff;
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
    transition: background-color var(--transition-speed);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    opacity: 1;
}

.header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
/*. FONT PORTFOLIO */  
.logo {
    font-size:  50px; 
    font-weight: 300;
    color: var(--text-color);
    text-decoration: none;
    letter-spacing: 10px;
    text-transform: uppercase;
}

.main-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 100px; /* Più spazio tra gli elementi */
}

.main-nav a {
    
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color var(--transition-speed);
}


.main-nav a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: var(--text-color);
    bottom: 0;
    left: 0;
    transform: scaleX(0); 
    transform-origin: center;
    transition: transform var(--transition-speed);
}



/* HAMBURGER MENU */
.menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 28px;
    height: 24px;
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 0;
    z-index: 10;
}

.menu-toggle .bar {
    width: 100%;
    height: 2px;
    background-color: var(--text-color);
    transition: all var(--transition-speed);
    transform-origin: center;
}



/* Animazione dell'hamburger che diventa una 'X' */
.menu-toggle.is-active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.menu-toggle.is-active .bar:nth-child(2) {
    opacity: 0;
    transform: translateX(-20px);
}

.menu-toggle.is-active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}



@media (max-width: 768px) {
    .main-nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: var(--background-color);
        border-top: 1px solid var(--border-color);
    }
    
    .main-nav.active {
        display: block;
    }
    
    .main-nav ul {
        flex-direction: column;
        padding: 1rem 0;
        width: 100%;
    }

    .main-nav li {
        text-align: center;
        margin: 1rem 0;
    }

    .menu-toggle {
        display: flex;
    }
}
</style>