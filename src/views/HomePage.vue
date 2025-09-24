<script setup>
import { ref, onMounted } from 'vue';

const dynamicTextRef = ref(null);

onMounted(() => {
    const dynamicTextElement = dynamicTextRef.value;
    const professions = ["Developer", "Designer", "Innovator", "Problem Solver"];
    let professionIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // Velocità di scrittura
    const deletingSpeed = 50; // Velocità di cancellazione
    const delayBetweenProfessions = 2000; // Ritardo prima di passare alla prossima professione

    function typeEffect() {
        const currentProfession = professions[professionIndex];

        if (!isDeleting) {
            // Scrittura
            dynamicTextElement.textContent = currentProfession.substring(0, charIndex);
            charIndex++;
            if (charIndex > currentProfession.length) {
                isDeleting = true;
                setTimeout(typeEffect, delayBetweenProfessions);
            } else {
                setTimeout(typeEffect, typingSpeed);
            }
        } else {
            // Cancellazione
            dynamicTextElement.textContent = currentProfession.substring(0, charIndex);
            charIndex--;
            if (charIndex < 0) {
                isDeleting = false;
                professionIndex = (professionIndex + 1) % professions.length;
                setTimeout(typeEffect, typingSpeed);
            } else {
                setTimeout(typeEffect, deletingSpeed);
            }
        }
    }

    if (dynamicTextElement) {
        typeEffect();
    }
});
</script>

<template>

    <section class="hero-section" id="home">
        <video autoplay muted loop playsinline class="hero-background-video">
            <source src="/Users/erikahu/Sito-myself/src/assets/4779866-hd_1920_1080_30fps.mp4" type="video/mp4">
            Il tuo browser non supporta il tag video.
        </video>

        <div class="testo-centrato">
            <h1 class="hero-title">CIAO, SONO <span class="highlight">CRISTOF BANO</span>.</h1>
            <p class="hero-description">Sono un <span ref="dynamicTextRef" class="dynamic-text"></span></p>
            <a href="#projects" class="hero-button">Scopri i miei progetti</a>
        </div>
        <div class="hero-background-overlay"></div>
    </section>

</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Anton&family=Cookie&family=Fira+Sans+Extra+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Cedarville+Cursive&family=Cookie&family=Fira+Sans+Extra+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
    --bg-dark: #1a1a1a;
    --text-light: #f0f0f0;
    --accent-blue: #007bff;
    --accent-hover: #0056b3;
    --overlay-color: rgba(0, 0, 0, 0.7);
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f8f9fa;
    color: var(--text-light);
    
}

/* Hero Section - il contenitore principale */
.hero-section {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
}

/* Video di sfondo */
.hero-background-video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    transform: translate(-50%, -50%);
    object-fit: cover;
}


.hero-background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

/* FONT FAMILY */ 
.testo-centrato {
    position: relative;
    z-index: 2;
    padding: 0 1rem;
    max-width: 800px;
    color: #000000;
    font-family: 'anton', sans-serif;

    
}

/* FONT GRANDEZZA */
.hero-title {
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.hero-title .highlight {
    color: rgb(0, 0, 0);
}

/* FONT GRANDEZZA PARTE SOTTO*/
.hero-description {
    font-size: 50px;
    font-weight: 300;
    margin-bottom: 2rem;
    line-height: 1.6;
    font-family:'Times New Roman', Times, serif
}

.hero-description .dynamic-text {
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: var(--accent-blue);
    font-weight: 600;
    border-right: 2px solid var(--accent-blue);
    padding-right: 5px;
    animation: blink-caret 0.75s step-end infinite;
}


.hero-button {
    margin-top: 150px;
    display: inline-block;
    padding: 1rem 2.5rem;
    background-color: var(--accent-blue);
    color: var(--text-light);
    text-decoration: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    transition: background-color 0.3s ease, transform 0.3s ease;
    border: none;
    
}

.hero-button:hover {
    background-color: var(--accent-hover);
    transform: translateY(-3px);
}

/* Media queries per la reattività */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .hero-description {
        font-size: 1.2rem;
    }

    .hero-button {
        padding: 0.8rem 2rem;
        font-size: 1rem;
    }
}
</style>