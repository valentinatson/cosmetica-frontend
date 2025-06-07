<template>
  <div class="contact-container">
    <!-- Bannière contact -->
    <section class="contact-hero">
      <img :src="heroBanner" alt="Bannière contact" class="contact-hero-img" />
      <div class="contact-hero-content">
        <h1>Contactez-nous</h1>
        <p>
          Une question sur nos produits ou votre commande ?<br>
          Notre équipe vous répond rapidement !
        </p>
      </div>
    </section>

    <!-- Formulaire de contact -->
    <section class="contact-form-section">
      <form class="contact-form" @submit.prevent="sendMessage">
        <h2>Formulaire de contact</h2>
        <div class="form-group">
          <label for="name">Nom</label>
          <input type="text" id="name" v-model="name" placeholder="Votre nom" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Votre email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="message" placeholder="Votre message" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
        <p v-if="sent" class="success-message">Votre message a bien été envoyé !</p>
      </form>
      <div class="contact-info">
        <h2>Ou contactez-nous directement :</h2>
        <p><ion-icon name="mail-outline"></ion-icon> contact@cosmetique-boutique.com</p>
        <p><ion-icon name="call-outline"></ion-icon> 01 23 45 67 89</p>
        <p><ion-icon name="location-outline"></ion-icon> 123 Avenue de la Beauté, 75000 Paris</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import heroBanner from '../assets/images/hero-banner-1.jpg'

const name = ref('')
const email = ref('')
const message = ref('')
const sent = ref(false)

function sendMessage() {
  sent.value = true
  setTimeout(() => {
    sent.value = false
    name.value = ''
    email.value = ''
    message.value = ''
  }, 3000)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap');

.contact-container {
  margin-top: 6.5%;
  max-width: 100%;
  background: #fff;
  border-radius: 0px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  color: #333;
  font-family: 'Urbanist', sans-serif;
  padding: 0;
}

/* Bannière */
.contact-hero {
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
.contact-hero-img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  filter: brightness(0.7);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.contact-hero-content {
  position: relative;
  z-index: 2;
  color: #fff;
  text-align: center;
  width: 100%;
  padding: 0 2rem;
}
.contact-hero-content h1 {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
}
.contact-hero-content p {
  font-size: 1.15rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
}

/* Formulaire et infos */
.contact-form-section {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: flex-start;
  max-width: 1100px;
  margin: 0 auto 3rem auto;
  flex-wrap: wrap;
}
.contact-form {
  background: #faf7f8;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  padding: 2rem 1.5rem;
  min-width: 320px;
  max-width: 400px;
  flex: 1 1 340px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
}
.contact-form h2 {
  color: #5b7c6a;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
}
.form-group {
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 0.3rem;
  font-weight: 500;
}
input, textarea {
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
  background: #fff;
}
button {
  background: #5b7c6a;
  color: #fff;
  border: none;
  padding: 0.8rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}
button:hover {
  background: #222;
}
.success-message {
  color: #2ecc71;
  margin-top: 0.5rem;
  text-align: center;
}

/* Infos contact */
.contact-info {
  background: #f5f8e6;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  padding: 2rem 1.5rem;
  min-width: 260px;
  max-width: 340px;
  flex: 1 1 260px;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: flex-start;
  margin-top: 0.5rem;
}
.contact-info h2 {
  margin-bottom: 0.5rem;
  color: #5b7c6a;
  font-size: 1.1rem;
  font-weight: 700;
}
.contact-info p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;
  font-size: 1rem;
}
.contact-info ion-icon {
  color: #5b7c6a;
  font-size: 1.3rem;
}

/* Responsive */
@media (max-width: 900px) {
  .contact-form-section {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 0 0.5rem;
  }
  .contact-form, .contact-info {
    min-width: 0;
    max-width: 100%;
    width: 100%;
  }
  .contact-hero,
  .contact-hero-img {
    height: 390px;
    min-height: 120px;
    border-radius: 12px;
  }
  .contact-hero-content h1 {
    font-size: 2.3rem;
  }
  .contact-hero-content p {
    font-size: 1.5rem;
  }
}
@media (max-width: 700px) {
  .contact-hero,
  .contact-hero-img {
    height: 320px;
    min-height: 140px;
  }
  .contact-hero-content h1 {
    font-size: 2.1rem;
  }
  .contact-hero-content p {
    font-size: 1.97rem;
  }
}
@media (max-width: 600px) {
  .contact-hero,
  .contact-hero-img {
    height: 380px;
    min-height: 120px;
  }
  .contact-hero-content h1 {
    font-size: 1.7rem;
  }
  .contact-hero-content p {
    font-size: 1.1rem;
  }
}
</style>