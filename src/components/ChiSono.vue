<template>
    <section class="about-me-section" id="ChiSono">
        <div class="container">
            <div class="profile-image">
                <img src="/Users/erikahu/Sito-myself/src/assets/aifaceswap-9c901548141e7c75d26ac484d8b718e1 - Modificata.jpg" alt="Foto Profilo mia">
            </div>
            <div class="content">
                <h2 class="title">Piacere</h2>
                <h3 class="subtitle">Sviluppatore Web & Creative Coder</h3>
                <div class="text-content">
                    <p class="intro">
                        Ho 24 anni e sono un programmatore con una vera passione per la tecnologia. Mi sto immergendo a fondo nello sviluppo full stack, dove posso curare i progetti dall'inizio alla fine: mi diverto a creare interfacce intuitive e a "mettere in ordine la casa" sul lato backend.
                    </p>
                    <p class="intro">
                        Oltre al codice, mi affascina tutto ciò che è innovazione. Sono un grande appassionato di robotica e di come la tecnologia stia cambiando il mondo. Credo che non si finisca mai di imparare e sono sempre alla ricerca di nuove sfide.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-me-section {
    background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
    padding: 80px 0;
    color: #ffffff;
    min-height: auto;
    display: flex;
    align-items: center;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    gap: 400px;
    padding: 0 30px;
}

.profile-image {
    flex: 0 0 350px;
    display: flex;
    align-items: center;
    margin-top: 30px;
}

.profile-image img {
    width: 100%;
    height: 380px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: transform 0.4s ease-out;
}

.profile-image img:hover {
    transform: scale(1.03);
}

.content {
    flex: 1;
    max-width: 600px;
    padding-top: 40px;
}

.title {
    font-size: 3rem;
    font-weight: 700;
    color: #9abadb;
    margin-bottom: 8px;
    letter-spacing: -1px;
}

.subtitle {
    font-size: 1.6rem;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 30px;
    opacity: 0.9;
}

.text-content {
    margin-bottom: 30px;
}

.intro {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 15px;
    color: #f0f0f0;
}

.skills {
    margin: 50px 0;
}

.skills h4 {
    font-size: 1.4rem;
    margin-bottom: 30px;
    color: #9abadb;
}

.skill-icons {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
}

.skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    transition: transform 0.3s ease;
}

.skill-item:hover {
    transform: translateY(-5px);
}

.skill-item i {
    font-size: 2.8rem;
    color: #9abadb;
}

.skill-item p {
    font-size: 1rem;
    color: #ffffff;
}

.passion {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #f0f0f0;
    border-left: 4px solid #9abadb;
    padding-left: 20px;
    margin-top: 40px;
}

@media (max-width: 1024px) {
    .container {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .profile-image {
        flex: 0 0 auto;
        width: 100%;
        max-width: 300px;
    }

    .profile-image img {
        height: 300px;
    }

    .skill-icons {
        justify-content: center;
    }

    .passion {
        border-left: none;
        padding-left: 0;
    }
}

@media (max-width: 768px) {
    .about-me-section {
        padding: 50px 0;
    }

    .container {
        gap: 30px;
    }

    .profile-image {
        max-width: 250px;
    }

    .profile-image img {
        height: 250px;
    }

    .title {
        font-size: 2.5rem;
    }

    .subtitle {
        font-size: 1.4rem;
    }
}
</style>