<script setup>
// Qui puoi aggiungere la logica del componente
</script>

<template>
  <div class="progetti-container">
    <h1>I Miei Progetti</h1>
    <div class="progetti-grid">
      <div class="progetto">
        <h2>Progetto 1</h2>
        <p>Descrizione del progetto 1</p>
      </div>
      <div class="progetto">
        <h2>Progetto 2</h2>
        <p>Descrizione del progetto 2</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progetti-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 80px;
}

.progetti-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.progetto {
  background: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.progetto:hover {
  transform: translateY(-5px);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .progetti-container {
    padding: 1rem;
  }

  .progetti-grid {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>