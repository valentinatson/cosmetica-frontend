<template>
  <div class="produits-conteneur">
    <!-- Bannière/slider simple pour la page produits -->
    <section class="banniere-produits">
      <img :src="heroBanner" alt="Bannière produits" class="banniere-produits-img" />
      <div class="banniere-produits-contenu">
        <h1>Nos produits cosmétiques</h1>
        <p>
          Découvrez notre sélection de produits naturels et innovants pour prendre soin de votre peau, visage et cheveux.<br>
          Qualité, efficacité et bien-être sont au cœur de notre gamme.
        </p>
      </div>
    </section>

    <!-- Liste des produits -->
    <section class="section-liste-produits">
      <h2>Catalogue</h2>
      <div class="liste-produits">
        <div
          class="carte-produit"
          v-for="produit in produits"
          :key="produit.id"
        >
          <img :src="produit.image" :alt="produit.nom" class="image-produit" />
          <h3>{{ produit.nom }}</h3>
          <span class="prix-produit">{{ produit.prix }} €</span>
          <button class="ajouter-panier">Ajouter au panier</button>
        </div>
      </div>
    </section>

    <!-- Points forts -->
    <section class="points-forts">
      <div class="carte-point">
        <ion-icon name="leaf-outline"></ion-icon>
        <h4>Naturel & Vegan</h4>
        <p>Des formules respectueuses de votre peau et de l’environnement.</p>
      </div>
      <div class="carte-point">
        <ion-icon name="flask-outline"></ion-icon>
        <h4>Innovation</h4>
        <p>Des soins efficaces issus de la recherche cosmétique.</p>
      </div>
      <div class="carte-point">
        <ion-icon name="earth-outline"></ion-icon>
        <h4>Éco-responsable</h4>
        <p>Des engagements forts pour la planète et votre bien-être.</p>
      </div>
      <div class="carte-point">
        <ion-icon name="heart-outline"></ion-icon>
        <h4>Conseils personnalisés</h4>
        <p>Notre équipe vous accompagne dans votre routine beauté.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import heroBanner from '../assets/images/hero-banner-1.jpg'
import product01 from '../assets/images/product-01.jpg'
import product02 from '../assets/images/product-02.jpg'
import product03 from '../assets/images/product-03.jpg'
import product04 from '../assets/images/product-04.jpg'
import product05 from '../assets/images/product-05.jpg'
import product06 from '../assets/images/product-06.jpg'
import product07 from '../assets/images/product-07.jpg'
import product08 from '../assets/images/product-08.jpg'
import product09 from '../assets/images/product-09.jpg'
import product17 from '../assets/images/product-17.jpg'

const produits = ref([
  { id: 1, nom: 'Crème hydratante', prix: 24.90, image: product02 },
  { id: 2, nom: 'Sérum éclat', prix: 29.90, image: product01 },
  { id: 3, nom: 'Shampoing doux', prix: 14.90, image: product03 },
  { id: 4, nom: 'Masque nourrissant', prix: 17.90, image: product05 },
  { id: 5, nom: 'Gel nettoyant', prix: 13.90, image: product04 },
  { id: 6, nom: 'Huile sèche', prix: 21.90, image: product06 },
  { id: 7, nom: 'Lait corps douceur', prix: 16.90, image: product07 },
  { id: 8, nom: 'Baume à lèvres', prix: 7.90, image: product08 },
  { id: 9, nom: 'Gommage visage', prix: 12.90, image: product17 },
  { id: 10, nom: 'Brume hydratante', prix: 11.90, image: product09 }
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap');

.produits-conteneur {
  margin-top: 6.5%;
  max-width: 100%;
  padding: 0;
  background: #fff;
  border-radius: 0px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  color: #333;
  font-family: 'Urbanist', sans-serif;
}

/* Bannière produits */
.banniere-produits {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  border-radius: 0px;
  margin-bottom: 2.5rem;
  background: #f5f8e6;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banniere-produits-img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  filter: brightness(0.7);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.banniere-produits-contenu {
  position: relative;
  z-index: 2;
  color: #fff;
  text-align: center;
  width: 100%;
  padding: 0 2rem;
}
.banniere-produits-contenu h1 {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
}
.banniere-produits-contenu p {
  font-size: 1.15rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
}

/* Liste produits */
.section-liste-produits {
  margin: 2.5rem auto;
  max-width: 1200px;
  padding: 0 1rem;
}
.section-liste-produits h2 {
  text-align: center;
  color: #5b7c6a;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 800;
  letter-spacing: 1px;
}
.liste-produits {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  justify-items: center;
}
.carte-produit {
  background: #faf7f8;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  padding: 1.5rem 1.2rem;
  width: 210px;
  text-align: center;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image-produit {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.carte-produit h3 {
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 0.5rem;
  font-weight: 700;
}
.prix-produit {
  color: #5b7c6a;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
}
.ajouter-panier {
  background: #5b7c6a;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 18px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;
}
.ajouter-panier:hover {
  background: #222;
}

/* Points forts */
.points-forts {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 3rem 0 2rem 0;
}
.carte-point {
  background: #faf7f8;
  margin-bottom: 3rem;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  padding: 1.5rem;
  width: 220px;
  text-align: center;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carte-point ion-icon {
  font-size: 2.2rem;
  color: #5b7c6a;
  margin-bottom: 0.7rem;
}
.carte-point h4 {
  color: #5b7c6a;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
.carte-point p {
  color: #555;
  font-size: 0.97rem;
}

/* Responsive */
@media (max-width: 1200px) {
  .liste-produits {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 900px) {
  .points-forts {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }
  .carte-point {
    width: 45%;
    min-width: 120px;
    max-width: 320px;
    margin-bottom: 1.5rem;
  }
  .produits-conteneur {
    padding: 1rem;
  }
  .liste-produits {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    width: 100%;
    align-items: stretch;
    justify-items: center;
  }
  .banniere-produits,
  .banniere-produits-img {
    height: 460px;
    min-height: 180px;
    border-radius: 12px;
  }
  .banniere-produits-contenu h1 {
    font-size: 2.3rem;
  }
  .banniere-produits-contenu p {
    font-size: 1.5rem;
  }
}
@media (max-width: 700px) {
  .points-forts {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  .carte-point {
    width: 48%;
    min-width: 90px;
    max-width: 320px;
    margin-bottom: 1rem;
  }
  .liste-produits {
    grid-template-columns: 1fr 1fr;
    gap: 0.7rem;
    width: 100%;
  }
  .carte-produit {
    width: 100%;
    min-width: 0;
    padding: 1rem 0.3rem;
  }
  .banniere-produits,
  .banniere-produits-img {
    height: 320px;
    min-height: 140px;
  }
  .banniere-produits-contenu h1 {
    font-size: 1.1rem;
  }
  .banniere-produits-contenu p {
    font-size: 0.95rem;
  }
}
@media (max-width: 600px) {
  .points-forts {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.7rem;
  }
  .carte-point {
    width: 48%;
    min-width: 80px;
    max-width: 320px;
    margin-bottom: 0.7rem;
    padding: 1rem 0.3rem;
  }
  .banniere-produits,
  .banniere-produits-img {
    height: 380px;
    min-height: 120px;
  }
  .banniere-produits-contenu h1 {
    font-size: 1.7rem;
  }
  .banniere-produits-contenu p {
    font-size: 1.1rem;
  }
}
</style>