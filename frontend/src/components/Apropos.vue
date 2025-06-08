<template>
  <div class="apropos-conteneur">
    <!-- Bannière -->
    <section class="banniere-apropos">
      <img :src="heroBanner" alt="Bannière À propos" class="banniere-apropos-img" />
      <div class="banniere-apropos-contenu">
        <h1>À propos de Cosmetica</h1>
        <p>
          Cosmetica, c’est l’histoire d’une passion pour la beauté naturelle, l’innovation et le bien-être.<br>
          Notre équipe s’engage chaque jour à vous proposer des produits sains, efficaces et respectueux de l’environnement.
        </p>
      </div>
    </section>

    <!-- Notre histoire -->
    <section class="section-histoire">
      <h2>Notre histoire</h2>
      <p>
        Fondée par des passionnés de cosmétique, Cosmetica a pour mission de rendre la beauté accessible à tous, sans compromis sur la qualité ou l’éthique.<br>
        Nous sélectionnons avec soin chaque ingrédient et travaillons main dans la main avec des experts pour vous offrir le meilleur de la nature et de la science.
      </p>
    </section>

    <!-- Valeurs et points forts -->
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

    <!-- Notre équipe -->
    <section class="section-equipe">
      <h2>Notre équipe</h2>
      <p>
        Cosmetica, c’est avant tout une équipe soudée, passionnée et à l’écoute de vos besoins.<br>
        Nous croyons en une beauté inclusive, bienveillante et responsable.
      </p>
    </section>
  </div>
</template>

<script setup>
import heroBanner from '../assets/images/hero-banner-1.jpg';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap');

.apropos-conteneur {
  margin-top: 6.5%;
  max-width: 100%;
  padding: 0;
  background: #fff;
  border-radius: 0px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  color: #333;
  font-family: 'Urbanist', sans-serif;
  padding-bottom: 1rem;
}

/* Bannière */
.banniere-apropos {
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
.banniere-apropos-img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  filter: brightness(0.7);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.banniere-apropos-contenu {
  position: relative;
  z-index: 2;
  color: #fff;
  text-align: center;
  width: 100%;
  padding: 0 2rem;
}
.banniere-apropos-contenu h1 {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
}
.banniere-apropos-contenu p {
  font-size: 1.15rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
}

/* Notre histoire & équipe */
.section-histoire,
.section-equipe {
  margin: 2.5rem auto;
  max-width: 900px;
  padding: 2rem 1rem;
  background: #f5f8e6;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  text-align: center;
}
.section-equipe {
  margin: 2.5rem auto 3.5rem auto;
}
.section-histoire h2,
.section-equipe h2 {
  color: #5b7c6a;
  font-size: 1.7rem;
  font-weight: 800;
  margin-bottom: 1rem;
}
.section-histoire p,
.section-equipe p {
  color: #333;
  font-size: 1.08rem;
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
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  padding: 1.5rem;
  width: 220px;
  text-align: center;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
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

/* Responsive : 2 cartes points par ligne jusqu'à 900px, 700px, 600px */
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
  .apropos-conteneur {
    padding: 1rem;
  }
  .banniere-apropos,
  .banniere-apropos-img {
    height: 460px;
    min-height: 180px;
    border-radius: 12px;
  }
  .banniere-apropos-contenu h1 {
    font-size: 2.3rem;
  }
  .banniere-apropos-contenu p {
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
  .banniere-apropos,
  .banniere-apropos-img {
    height: 320px;
    min-height: 140px;
  }
  .banniere-apropos-contenu h1 {
    font-size: 1.1rem;
  }
  .banniere-apropos-contenu p {
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
  .banniere-apropos,
  .banniere-apropos-img {
    height: 380px;
    min-height: 120px;
  }
  .banniere-apropos-contenu h1 {
    font-size: 1.7rem;
  }
  .banniere-apropos-contenu p {
    font-size: 1.1rem;
  }
}
</style>