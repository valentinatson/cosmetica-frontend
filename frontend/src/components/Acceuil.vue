<template>
  <div class="accueil-conteneur">
    <!-- Bannière-->
    <section class="banniere-slider">
      <div class="slider-conteneur">
        <div
          v-for="(slide, idx) in slides"
          :key="slide.title"
          class="diapositive"
          :class="{ active: idx === diapositiveActuelle }"
        >
          <img :src="slide.img" :alt="slide.title" />
          <div class="contenu-diapositive">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.text }}</p>
            <a href="#produits" class="bouton-cta">Voir nos produits</a>
          </div>
        </div>
        <!-- bouton pour slider -->
        <button class="fleche-slider gauche" @click="precedenteDiapositive" aria-label="Précédent">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <button class="fleche-slider droite" @click="suivanteDiapositive" aria-label="Suivant">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
        <!-- Points de navigation -->
        <div class="points-slider">
          <span
            v-for="(slide, idx) in slides"
            :key="idx"
            :class="{ active: idx === diapositiveActuelle }"
            @click="allerADiapositive(idx)"
          ></span>
        </div>
      </div>
    </section>

    <!-- Section Produits phares -->
    <section class="section-produits" id="produits">
      <h2>Produits phares</h2>
      <div class="liste-produits">
        <div v-for="produit in produitsPhares" :key="produit.id" class="carte-produit">
          <img :src="produit.img" :alt="produit.name" />
          <h3>{{ produit.name }}</h3>
          <p class="desc-produit">{{ produit.desc }}</p>
          <span class="prix-produit">{{ produit.price }} €</span>
          <button class="bouton-produit">Voir</button>
        </div>
      </div>
    </section>

    <!-- Section Mission -->
    <section class="section-mission">
      <div class="contenu-mission">
        <h2>Notre mission</h2>
        <p>
          Chez Cosmetica, nous croyons en une beauté naturelle, accessible et responsable.
          Notre mission est de vous proposer des produits sains, efficaces et respectueux de l’environnement, tout en vous accompagnant dans votre routine bien-être.
        </p>
        <ul class="points-mission">
          <li>
            <ion-icon name="leaf-outline"></ion-icon>
            <span>Formules naturelles & vegan</span>
          </li>
          <li>
            <ion-icon name="flask-outline"></ion-icon>
            <span>Innovation & efficacité</span>
          </li>
          <li>
            <ion-icon name="earth-outline"></ion-icon>
            <span>Respect de la planète</span>
          </li>
          <li>
            <ion-icon name="heart-outline"></ion-icon>
            <span>Conseils personnalisés</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Points forts -->
    <section class="points-forts">
      <div class="carte-point">
        <img :src="slider1" alt="Naturel" />
        <h2>Ingrédients naturels</h2>
        <p>Des formules respectueuses de votre peau et de l’environnement.</p>
      </div>
      <div class="carte-point">
        <img :src="slider2" alt="Conseils" />
        <h2>Conseils personnalisés</h2>
        <p>Notre équipe vous accompagne pour trouver la routine idéale.</p>
      </div>
      <div class="carte-point">
        <img :src="slider3" alt="Livraison rapide" />
        <h2>Livraison rapide</h2>
        <p>Recevez vos produits préférés directement chez vous en quelques jours.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import slider1 from '../assets/images/hero-banner-1.jpg'
import slider2 from '../assets/images/hero-banner-2.jpg'
import slider3 from '../assets/images/hero-banner-3.jpg'

const slides = [
  {
    img: slider1,
    title: 'Bienvenue chez Cosmetica',
    text: 'Beauté naturelle, soins innovants et bien-être au quotidien.',
  },
  {
    img: slider2,
    title: 'Prenez soin de vous',
    text: 'Découvrez nos routines visage, corps et cheveux adaptées à vos besoins.',
  },
  {
    img: slider3,
    title: 'Livraison rapide & conseils experts',
    text: 'Profitez de nos offres et de l’accompagnement de notre équipe.',
  },
]

const produitsPhares = [
  {
    id: 1,
    name: 'Crème Hydratante Bio',
    desc: 'Hydrate intensément et protège votre peau toute la journée.',
    price: 19.90,
    img: slider1,
  },
  {
    id: 2,
    name: 'Sérum Éclat Vitaminé éclaircissant',
    desc: 'Illumine le teint et booste l’éclat naturel.',
    price: 24.90,
    img: slider2,
  },
  {
    id: 3,
    name: 'Shampoing Doux Naturel',
    desc: 'Nettoie en douceur et respecte le cuir chevelu.',
    price: 14.90,
    img: slider3,
  },
  {
    id: 4,
    name: 'Shampoing Doux Naturel',
    desc: 'Nettoie en douceur et respecte le cuir chevelu.',
    price: 14.90,
    img: slider3,
  },
  {
    id: 5,
    name: 'Shampoing Doux Naturel',
    desc: 'Nettoie en douceur et respecte le cuir chevelu.',
    price: 14.90,
    img: slider3,
  },
]

const diapositiveActuelle = ref(0)
let interval = null

function suivanteDiapositive() {
  diapositiveActuelle.value = (diapositiveActuelle.value + 1) % slides.length
}
function precedenteDiapositive() {
  diapositiveActuelle.value = (diapositiveActuelle.value - 1 + slides.length) % slides.length
}
function allerADiapositive(idx) {
  diapositiveActuelle.value = idx
}

onMounted(() => {
  interval = setInterval(suivanteDiapositive, 5000)
})
onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap');

.accueil-conteneur {
  margin-top: 6.5%;
  max-width: 100%;
  padding: 0;
  background: #fff;
  border-radius: 0px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  color: #333;
  font-family: 'Urbanist', sans-serif;
}

/* Slider moderne */
.banniere-slider {
  width: 100%;
  margin-bottom: 2.5rem;
  position: relative;
}
.slider-conteneur {
  position: relative;
  width: 100%;
  height: 540px;
  overflow: hidden;
  border-radius: 0px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  background: #f5f8e6;
}
.diapositive {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.7s;
}
.diapositive.active {
  opacity: 1;
  pointer-events: auto;
  position: relative;
}
.diapositive img {
  width: 100%;
  height: 540px;
  object-fit: cover;
  border-radius: 0px;
  filter: brightness(0.75);
}
.contenu-diapositive {
  position: absolute;
  left: 0;
  right: 0;
  top: 30%;
  text-align: center;
  color: #fff;
  z-index: 2;
  padding: 0 2rem;
}
.contenu-diapositive h1 {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
}
.contenu-diapositive p {
  font-size: 1.15rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
}
.bouton-cta {
  background: #5b7c6a;
  color: #fff;
  padding: 0.9rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
}
.bouton-cta:hover {
  background: #222;
}

.fleche-slider {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  color: #5b7c6a;
  border: none;
  border-radius: 50%;
  font-size: 1.7rem;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  transition: background 0.2s, color 0.2s;
}
.fleche-slider.gauche { left: 18px; }
.fleche-slider.droite { right: 18px; }
.fleche-slider:hover {
  background: #5b7c6a;
  color: #fff;
}

.points-slider {
  position: absolute;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 4;
}
.points-slider span {
  display: block;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #5b7c6a;
  cursor: pointer;
  transition: background 0.2s, border 0.2s;
}
.points-slider span.active {
  background: #5b7c6a;
  border-color: #fff;
}

/* Produits phares */
.section-produits {
  margin: 2.5rem auto;
  max-width: 100%;
  padding: 0 1rem;
}
.section-produits h2 {
  text-align: center;
  color: #5b7c6a;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 800;
  letter-spacing: 1px;
}
.liste-produits {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.carte-produit {
  background: #faf7f8;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  padding: 0.6rem 0.5rem;
  width: 210px;
  text-align: center;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carte-produit img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.carte-produit h3 {
  font-size: 1.1rem;
  color: #222;
  
  font-weight: 700;
}
.desc-produit {
  color: #555;
  font-size: 0.87rem;
  
}
.prix-produit {
  color: #5b7c6a;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
.bouton-produit {
  background: #5b7c6a;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 18px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;
}
.bouton-produit:hover {
  background: #222;
}

/* Mission */
.section-mission {
  background: #f5f8e6;
  border-radius: 12px;
  margin: 2.5rem auto;
  max-width: 78%;
  padding: 2.5rem 2rem 2rem 2rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
}
.contenu-mission h2 {
  color: #5b7c6a;
  font-size: 1.7rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-align: center;
}
.contenu-mission p {
  color: #333;
  font-size: 1.08rem;
  margin-bottom: 1.5rem;
  text-align: center;
}
.points-mission {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}
.points-mission li {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.08rem;
  color: #222;
  background: #fff;
  border-radius: 8px;
  padding: 0.7rem 1.2rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  font-weight: 600;
}
.points-mission ion-icon {
  color: #5b7c6a;
  font-size: 1.4rem;
}

/* Points forts */
.points-forts {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2.5rem;
}

.carte-point {
  background: #faf7f8;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  padding: 0.5rem;
  width: 240px;
  text-align: center;
  transition: box-shadow 0.2s;
  margin-bottom: 2.5rem;
}

.carte-point img {
  width: 95%;
  height: 120px;
  object-fit: cover;
  border-radius: 5%;
  margin-bottom: 1rem;
}

.carte-point h2 {
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
  .slider-conteneur {
    height: 340px;
  }
  .diapositive img {
    height: 340px;
  }
}
@media (max-width: 900px) {
  .slider-conteneur,
  .diapositive img {
    height: 460px;
    min-height: 180px;
    border-radius: 12px;
  }
  .contenu-diapositive h1 {
    font-size: 2.3rem;
  }
  .contenu-diapositive p {
    font-size: 1.5rem;
  }
  
}
@media (max-width: 700px) {
  .slider-conteneur,
  .diapositive img {
    height: 320px;
    min-height: 140px;
  }
  .contenu-diapositive h1 {
    font-size: 1.1rem;
  }
  .contenu-diapositive p {
    font-size: 0.95rem;
  }
  .fleche-slider {
    width: 32px;
    height: 32px;
    font-size: 1.1rem;
  }
  .liste-produits {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .carte-produit {
    width: 100%;
    min-width: 0;
    max-width: 100%;
  }
}
@media (max-width: 600px) {
  .slider-conteneur,
  .diapositive img {
    height: 380px;
    min-height: 120px;
  }
  .contenu-diapositive h1 {
    font-size: 1.7rem;
  }
  .contenu-diapositive p {
    font-size: 1.1rem;
  }
  .fleche-slider {
    width: 26px;
    height: 26px;
    font-size: 0.9rem;
  }
  .liste-produits {
    gap: 0.7rem;
    grid-template-columns: 1fr 1fr;
  }
  
  .carte-produit {
    
    padding: 0.5rem 0.3rem;
  }
  .carte-produit h3 {
  font-size: 0.8rem;
  color: #222;
  margin-bottom: 0.5rem;
  font-weight: 700;
}
.desc-produit {
  color: #555;
  font-size: 0.8rem;
  margin-bottom: 0rem;
}
.prix-produit {
  color: #5b7c6a;
  font-weight: 700;
  font-size: 0.99rem;
  margin-bottom: 0rem;
}
.bouton-produit {
  background: #5b7c6a;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 12px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;
}
/* Mission */
.section-mission {
  margin: 1.5rem auto;
  max-width: 95%;
  padding: 0.3rem;
  padding-bottom: 0.8rem;
}
.contenu-mission h2 {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.3rem;
}
.contenu-mission p {
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.points-mission li {
  gap: 0.4rem;
  font-size: 0.9rem;
  padding: 0.4rem 0.8rem;
  font-weight: 600;
}


/* Points forts */
.points-forts {
  gap: 0rem;
  margin-top: 1.5rem;
}

.carte-point {
  padding: 0.8rem;
  width: 95%;
  text-align: center;
  transition: box-shadow 0.2s;
  margin-bottom: 0.8rem;
}

.carte-point img {
  width: 90%;
  height: 120px;
  object-fit: cover;
  border-radius: 5%;
  margin-bottom: 0.5rem;
}

.carte-point h2 {
  font-size: 1rem;
  margin-bottom: 0rem;
}

.carte-point p {

  font-size: 0.9rem;
}
}
</style>