
<script setup>

import { Header } from './components';
import { Navbar } from './components';
import { Footer } from './components';

</script>

<template>
  <div>
    <Header /> <Navbar />  
    <RouterView /> <Footer />
  </div>  
  

</template>

<style scoped></style>
