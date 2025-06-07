<template>
  <footer class="pied-page">
    <div class="contenu-footer">
      <!-- Logo et description -->
      <div class="colonne-footer marque-footer">
        <span class="logo-footer">Cosmetica</span>
        <p class="desc-footer">
          Boutique beauté & bien-être. Découvrez nos produits naturels et tendances.
        </p>
        <!-- Réseaux sociaux -->
        <div class="reseaux-footer">
          <a href="#" aria-label="Instagram" class="lien-reseau">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="#" aria-label="Facebook" class="lien-reseau">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="#" aria-label="Twitter" class="lien-reseau">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </div>
      </div>
      <!-- Liens rapides -->
      <div class="colonne-footer">
        <h4>Navigation</h4>
        <div class="liens-footer">
          <a href="/">Accueil</a>
          <a href="/produit">Produits</a>
          <a href="/apropos">À propos</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <!-- Contact -->
      <div class="colonne-footer">
        <h4>Contact</h4>
        <div class="contact-footer">
          <p>
            <ion-icon name="mail-outline"></ion-icon>
            contact@cosmetique-boutique.com
          </p>
          <p>
            <ion-icon name="call-outline"></ion-icon>
            01 23 45 67
          </p>
        </div>
      </div>
      <!-- Newsletter -->
      <div class="colonne-footer">
        <h4>Newsletter</h4>
        <form class="form-newsletter" @submit.prevent>
          <input type="email" placeholder="Votre email" required>
          <button type="submit" aria-label="S'inscrire">
            <ion-icon name="send-outline"></ion-icon>
          </button>
        </form>
        <span class="info-newsletter">Recevez nos offres et nouveautés !</span>
      </div>
    </div>
    <div class="bas-footer">
      &copy; 2025 Cosmetica. Tous droits réservés.
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap');

.pied-page {
  background: #fff;
  color: #222;
  padding: 0.5rem 1rem 1rem 1rem;
  border-radius: 18px 18px 0 0;
  margin-top: 2rem;
  font-family: 'Urbanist', sans-serif;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.contenu-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2.5rem;
}

.colonne-footer {
  flex: 1 1 210px;
  min-width: 210px;
  margin-bottom: 1.5rem;
}

.marque-footer {
  flex: 1.5 1 260px;
  min-width: 220px;
}

.logo-footer {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #5b7c6a;
  margin-bottom: 0.5rem;
  display: inline-block;
}

.desc-footer {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.2rem;
  line-height: 1.5;
}

.reseaux-footer {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}
.lien-reseau {
  color: #222;
  font-size: 1.5rem;
  transition: color 0.2s, transform 0.2s;
}
.lien-reseau:hover {
  color: #5b7c6a;
  transform: scale(1.15);
}

.colonne-footer h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #5b7c6a;
  letter-spacing: 1px;
}

.liens-footer {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.liens-footer a {
  color: #222;
  text-decoration: none;
  transition: color 0.2s;
  font-weight: 600;
}
.liens-footer a:hover {
  color: #5b7c6a;
}

.contact-footer p {
  margin: 0.3rem 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.contact-footer ion-icon {
  color: #5b7c6a;
  font-size: 1.2rem;
}

.form-newsletter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.form-newsletter input[type="email"] {
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1rem;
  outline: none;
  background: #f5f8e6;
  color: #222;
  width: 140px;
  transition: background 0.2s, border 0.2s;
}
.form-newsletter input[type="email"]:focus {
  background: #fff;
  border: 1px solid #5b7c6a;
}
.form-newsletter button {
  background: #5b7c6a;
  border: none;
  border-radius: 4px;
  color: #fff;
  padding: 8px 10px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
}
.form-newsletter button:hover {
  background: #222;
  transform: translateY(-2px) scale(1.1);
}
.info-newsletter {
  font-size: 0.95rem;
  color: #5b7c6a;
}

.bas-footer {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.98rem;
  color: #888;
  letter-spacing: 1px;
}

/* Responsivité améliorée */
@media (max-width: 1100px) {
  .contenu-footer {
    gap: 1.2rem;
  }
  .colonne-footer, .marque-footer {
    min-width: 160px;
  }
}
@media (max-width: 900px) {
  .contenu-footer {
    flex-wrap: wrap;
    align-items: flex-start;
    text-align: center;
    padding: 0 0.5rem;
    gap: 1.2rem;
  }
  .colonne-footer, .marque-footer {
    min-width: 0;
    width: 100%;
    margin-bottom: 0.8rem;
  }
  .reseaux-footer {
    justify-content: center;
  }
  /* Navigation et contact côte à côte */
  .footer-row {
    display: flex;
    justify-content: center;
    gap: 2%;
    width: 100%;
    margin-bottom: 0.8rem;
  }
  .footer-row .colonne-footer {
    width: 48%;
    min-width: 0;
    display: block;
    text-align: left;
    margin: 0;
  }
  .form-newsletter {
    flex-direction: column;
    gap: 0.7rem;
    width: 100%;
  }
  .form-newsletter input[type="email"] {
    width: 100%;
    min-width: 0;
  }
}
@media (max-width: 600px) {
  .pied-page {
    padding: 0.5rem 0.2rem 1rem 0.2rem;
    border-radius: 10px 10px 0 0;
  }
  .logo-footer {
    font-size: 1.3rem;
    letter-spacing: 1px;
  }
  .bas-footer {
    font-size: 0.92rem;
  }
  .footer-row {
    flex-direction: column;
    gap: 0.5rem;
  }
  .footer-row .colonne-footer {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
</style>