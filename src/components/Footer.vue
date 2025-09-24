<script>
document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
</script>

<template>
    <footer class="portfolio-footer">
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-column footer-links">
                    <h4>Navigazione</h4>
                    <ul>
                        <li><a href="#about">Chi sono</a></li>
                        <li><a href="#projects">Progetti</a></li>
                        <li><a href="#skills">Competenze</a></li>
                        <li><a href="#contact">Contatti</a></li>
                    </ul>
                </div>
                <div class="footer-column footer-social">
                    <h4>Seguimi</h4>
                    <div class="social-icons">
                        <a href="#" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
                        <a href="#" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div class="footer-column footer-contact">
                    <h4>Mettiamoci in contatto</h4>
                    <p><a href="mailto:cristofbano758@fmail.com">cristofbano758@fmail.com</a></p>
                    <p><a href="tel:+393315700725">+39 331 5700725</a></p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <span id="current-year">2025</span> Cristof Bano. Tutti i diritti riservati.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
:root {

    --background-color: #ffffff;
    --text-color: #000000;
    --border-color: #eaeaea;
    --text-secondary-color: #757575;
    --transition-speed: 0.9s ease-in-out;
}

.portfolio-footer {
    background-color: var(--background-color);
    color: var(--text-color);
    border-top: 1px solid var(--border-color);
    padding: 4rem 2rem 2rem;

}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 3rem;
}

.footer-column {
    flex: 1;
    min-width: 250px;
    
}

.footer-column h4 {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
}

.footer-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-column ul li {
    margin-bottom: 0.75rem;
}

.footer-column a {
    text-decoration: none;
    color: var(--text-color);
    transition: opacity var(--transition-speed);
}

.footer-column a:hover {
    opacity: 0.7;
}

.footer-contact p {
    margin: 0 0 0.5rem 0;
}


.social-icons {
    display: flex;
    gap: 1rem;
}

.social-icons a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid var(--text-color);
    border-radius: 50%;
    color: var(--text-color);
    font-size: 1rem;
    transition: background-color var(--transition-speed), color var(--transition-speed);
}

.social-icons a:hover {
    background-color: var(--text-color);
    color: var(--background-color);
    opacity: 1;
}


.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
    color: var(--text-secondary-color);
    font-size: 0.85rem;
}


@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        text-align: center;
    }

    .social-icons {
        justify-content: center;
    }
}
</style>