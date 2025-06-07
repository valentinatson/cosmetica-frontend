<template>
  <nav class="barre-navigation">
    <div class="contenu-navbar">
      <!-- Logo à gauche -->
      <a href="#" class="logo">Cosmetica</a>
      <!-- Bouton burger pour mobile -->
      <button class="bouton-burger" @click="toggleMenu" aria-label="Ouvrir le menu">
        <span class="barre"></span>
        <span class="barre"></span>
        <span class="barre"></span>
      </button>
      <!-- Liens de navigation -->
      <ul :class="['menu-navigation', { 'actif': menuOpen }]">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/produit">Produits</router-link></li>
        <li><router-link to="/apropos">À propos</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
      <!-- Icône utilisateur avec dropdown -->
      <div class="utilisateur-dropdown-wrapper" @click="toggleUserDropdown">
        <ion-icon name="person-circle-outline" class="icone-utilisateur"></ion-icon>
        <div v-if="userDropdownOpen" class="utilisateur-dropdown">
          <button class="element-dropdown">Login</button>
          <button class="element-dropdown">Signup</button>
          <button class="element-dropdown">Profil</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
const menuOpen = ref(false)
const userDropdownOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
function handleClickOutside(event) {
  if (!event.target.closest('.utilisateur-dropdown-wrapper')) {
    userDropdownOpen.value = false
  }
}
function toggleUserDropdown(event) {
  userDropdownOpen.value = !userDropdownOpen.value
}
onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})
onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.barre-navigation {
  background: #fff;
  color: #222;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 10;
  font-family: 'Urbanist', sans-serif;
}

.contenu-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 30px;
}

.logo {
  color: #222;
  text-decoration: none;
  font-weight: bold;
  font-size: 2.5rem;
  letter-spacing: 2px;
}

.bouton-burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
}
.barre {
  height: 3px;
  width: 100%;
  background: #222;
  margin: 4px 0;
  border-radius: 2px;
  transition: 0.3s;
}

.menu-navigation {
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu-navigation li a {
  color: #222;
  text-decoration: none;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.1rem;
  position: relative;
  transition: color 0.2s;
  overflow: hidden;
}
.menu-navigation li a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 2px;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #5b7c6a 0%, #b6c9a6 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(.4,0,.2,1);
  border-radius: 2px;
}
.menu-navigation li a:hover,
.menu-navigation li a:focus {
  color: #5b7c6a;
  background: #f5f8e6;
}
.menu-navigation li a:hover::after,
.menu-navigation li a:focus::after {
  transform: scaleX(1);
}

.utilisateur-dropdown-wrapper {
  position: relative;
  margin-left: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.icone-utilisateur {
  font-size: 2.1rem;
  color: #5b7c6a;
  transition: color 0.2s;
}
.utilisateur-dropdown-wrapper:hover .icone-utilisateur {
  color: #222;
}
.utilisateur-dropdown {
  position: absolute;
  top: 120%;
  right: 0;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  border-radius: 8px;
  min-width: 140px;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  z-index: 100;
  animation: fadeIn 0.2s;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px);}
  to { opacity: 1; transform: translateY(0);}
}
.element-dropdown {
  background: none;
  border: none;
  color: #222;
  text-align: left;
  padding: 10px 20px;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.element-dropdown:hover {
  background: #f5f8e6;
  color: #5b7c6a;
  outline: none;
}

/* Responsive amélioré */
@media (max-width: 1100px) {
  .contenu-navbar {
    padding: 14px 10px;
  }
  .logo {
    font-size: 2rem;
  }
  .menu-navigation {
    gap: 1.2rem;
  }
}
@media (max-width: 900px) {
  .contenu-navbar {
    flex-wrap: wrap;
    padding: 12px 6px;
  }
  .bouton-burger {
    display: flex;
  }
  .menu-navigation {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    align-items: center;
    display: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    z-index: 20;
    gap: 20px;
    padding-bottom: 10px;
    animation: fadeIn 0.2s;
  }
  .menu-navigation.actif {
    display: flex;
  }
  .utilisateur-dropdown {
    right: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media (max-width: 600px) {
  .logo {
    font-size: 1.3rem;
    letter-spacing: 1px;
  }
  .contenu-navbar {
    padding: 8px 2px;
  }
  .menu-navigation {
    top: 48px;
    gap: 10px;
  }
  .utilisateur-dropdown {
    min-width: 110px;
    font-size: 0.95rem;
  }
}
</style>