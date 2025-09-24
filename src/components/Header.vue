<script setup>
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

onMounted(() => {
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');
    
    if (mobileMenu && mainNav) {
        mobileMenu.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
        });

        // Chiudi il menu quando si clicca su un link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                mobileMenu.classList.remove('is-active');
            });
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
                <li><router-link to="/progetti">Progetti</router-link></li>
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
    background-color: #ffffff;
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
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
}

/*. FONT PORTFOLIO */  
.logo {
    font-size: 50px; 
    font-weight: 300;
    color: var(--text-color);
    text-decoration: none;
    letter-spacing: 10px;
    text-transform: uppercase;
    white-space: nowrap;
    flex-shrink: 0;
}

.main-nav {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

.main-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 50px; /* lo spazio che c'era tra gli elementi */
    flex-wrap: nowrap;
}

.main-nav a {
    position: relative;
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color var(--transition-speed);
    padding: 5px 0;
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

.main-nav a:hover::after {
    transform: scaleX(1);
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
    z-index: 1000;
    margin-left: 20px;
    flex-shrink: 0;
}

.menu-toggle .bar {
    width: 100%;
    height: 2px;
    text-align: left;
    background-color: black;
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



/* Tablet e dispositivi più piccoli */
@media (max-width: 1024px) {
    .header-container {
        padding: 1rem;
    }

    .logo {
        font-size: 32px;
        letter-spacing: 5px;
    }

    .main-nav {
        display: none;
        position: fixed;
        top: 72px; /* Altezza dell'header */
        left: 0;
        width: 100%;
        height: calc(100vh - 72px);
        background-color: rgba(255, 255, 255, 0.98);
        border-top: 1px solid var(--border-color);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all var(--transition-speed);
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        z-index: 999;
    }
    
    .main-nav.active {
        display: block;
        animation: slideDown 0.3s ease-in-out;
    }
    
    .main-nav ul {
        flex-direction: column;
        padding: 2rem 1rem;
        width: 100%;
        gap: 2rem;
    }

    .main-nav li {
        text-align: center;
        margin: 0;
        opacity: 0;
        animation: fadeIn 0.5s ease-in-out forwards;
    }

    .main-nav a {
        display: inline-block;
        padding: 0.5rem 1rem;
        font-size: 18px;
    }

    .main-nav a::after {
        height: 2px;
    }

    .main-nav.active li {
        opacity: 1;
    }

    .main-nav li:nth-child(1) { animation-delay: 0.1s; }
    .main-nav li:nth-child(2) { animation-delay: 0.2s; }
    .main-nav li:nth-child(3) { animation-delay: 0.3s; }
    .main-nav li:nth-child(4) { animation-delay: 0.4s; }

    .menu-toggle {
        display: flex;
    }
}

/* Regole specifiche per schermi di medie dimensioni */
@media (min-width: 769px) and (max-width: 1024px) {
    .main-nav ul {
        gap: 30px;
    }
    
    .main-nav a {
        font-size: 14px;
    }
    
    .logo {
        font-size: 40px;
    }
}

/* Regole specifiche per schermi molto piccoli */
@media (max-width: 480px) {
    .logo {
        font-size: 24px;
        letter-spacing: 3px;
    }
    
    .header-container {
        padding: 1rem;
    }
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>