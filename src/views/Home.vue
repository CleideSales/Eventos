<template>
  <main class="home-roxo">
    <!-- Topo roxo com logo/título -->
    <header class="header-roxo">
      <div>
        <h1>EVENTOS+</h1>
        <p>Encontre e compre ingressos para eventos</p>
      </div>
      <button class="login-btn" @click="irParaLogin">login</button>
    </header>
    
    <!-- Carrossel de banners -->
    <div class="carousel">
      <img v-for="banner in banners" :src="banner" :key="banner" class="banner-img" />
    </div>

    <!-- Categorias -->
    <section class="categorias">
      <h2>Categoria</h2>
      <div class="categorias-grid">
        <div v-for="cat in categorias" :key="cat.nome" class="cat-card">
          <img :src="cat.img" class="cat-img" />
          <span>{{ cat.nome }}</span>
        </div>
      </div>
    </section>

    <!-- Listagem de eventos -->
    <section class="eventos">
      <h2>Eventos</h2>
      <div class="eventos-grid">
        <div v-for="evento in eventos" :key="evento.nome" class="evento-card">
          <img :src="evento.img" class="evento-img" />
          <div class="evento-nome">{{ evento.nome }}</div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function irParaLogin() {
  router.push('/login');
}

// Exemplos de imagens (no real use, coloque no public/assets ou use URLs)
const banners = [
  'https://via.placeholder.com/320x120/7B1FA2/FFF?text=Banner1',
  'https://via.placeholder.com/320x120/7B1FA2/FFF?text=Banner2'
];

const categorias = [
  { nome: 'Show', img: 'https://via.placeholder.com/56x56/7B1FA2/FFF?text=Show' },
  { nome: 'Palestras', img: 'https://via.placeholder.com/56x56/7B1FA2/FFF?text=Palestras' },
  { nome: 'Teatro', img: 'https://via.placeholder.com/56x56/7B1FA2/FFF?text=Teatro' }
];

const eventos = [
  { nome: 'Olivia', img: 'https://via.placeholder.com/145x80/7B1FA2/FFF?text=Olivia' },
  { nome: 'RockFest', img: 'https://via.placeholder.com/145x80/7B1FA2/FFF?text=RockFest' },
  { nome: 'TechTalks', img: 'https://via.placeholder.com/145x80/7B1FA2/FFF?text=TechTalks' }
];
</script>

<style scoped>
.home-roxo {
  background: #f9f7fa;
  min-height: 100vh;
  font-family: 'Segoe UI', Arial, sans-serif;
}
.header-roxo {
  background: #4b1fa2;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem 1rem 3rem;
  border-radius: 0 0 18px 18px;
}
.header-roxo h1 { font-size: 2.4rem; margin-bottom: 0.3rem; letter-spacing: 1px; }
.header-roxo p { font-size: 1.1rem; margin: 0; }
.login-btn {
  background: #fff;
  color: #4b1fa2;
  font-weight: 700;
  padding: 0.6rem 1.4rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
}
.carousel {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: -30px;
  margin-bottom: 2.2rem;
}
.banner-img {
  border-radius: 18px;
  width: 320px;
  height: 120px;
  object-fit: cover;
  box-shadow: 0 6px 22px rgba(76,31,162,0.15);
}
.categorias { padding: 2rem 3rem 0 3rem; }
.categorias-grid { display: flex; gap: 1.5rem; justify-content: left; margin-top:1rem;}
.cat-card {
  background: #7B1FA2;
  border-radius: 12px;
  padding: 0.9rem 0.7rem;
  text-align: center;
  color: #fff;
  width: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  font-size: 1rem;
}
.cat-img { width: 56px; height:56px; border-radius:50%; background:#fff; object-fit:cover;}
.eventos { padding: 2rem 3rem;}
.eventos-grid { display:flex; gap:2rem; flex-wrap:wrap;}
.evento-card {
  background: #fff;
  border-radius: 13px;
  box-shadow: 0 2px 18px rgba(49,25,162,0.09);
  padding: 0.7rem 0.7rem 0.5rem 0.7rem;
  width: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.evento-img { width: 100%; height: 80px; border-radius: 11px; object-fit: cover;}
.evento-nome { color: #4b1fa2; font-weight:700; margin-top:0.7rem;}
</style>
