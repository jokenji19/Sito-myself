<script>
</script>

<template>
    <section class="contatti-section" id="Contatti">
        <h2>Contattami</h2>
        <form class="contatti-form">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" required>
    
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    
        <label for="message">Messaggio:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
    
        <button type="submit">Invia</button>
        </form>
    </section>
    
</template>

<style>
.contatti-section {
    padding: 2rem;
    max-width: 600px;
    margin: 0 auto;
    margin-top: 80px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>