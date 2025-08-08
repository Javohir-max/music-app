<script setup lang="ts">
import IconBandcamp from './assets/icons/IconBandcamp.vue';
import IconClose from './assets/icons/IconClose.vue';
import IconDeezer from './assets/icons/IconDeezer.vue';
import IconFacebook from './assets/icons/IconFacebook.vue';
import IconInstagramOld from './assets/icons/IconInstagramOld.vue';
import IconMenu from './assets/icons/IconMenu.vue';
import IconSpotify from './assets/icons/IconSpotify.vue';
import IconYoutube from './assets/icons/IconYoutube.vue';
const footerLinks = [
  {
    title: 'Follow us',
    links: [
      { url: 'https://www.facebook.com/17039band', icon: IconFacebook },
      { url: 'https://www.youtube.com/@17039band', icon: IconYoutube },
      { url: 'https://www.instagram.com/17039band', icon: IconInstagramOld }
    ]
  },
  {
    title: 'Listen us',
    links: [
      { url: 'https://open.spotify.com/artist/7fjCuZhJy1TrvPMsZnz5Y5?si=_cEKmfGfTmqFCppzJuITXA', icon: IconSpotify },
      { url: 'https://link.deezer.com/s/30GnDHJKRIBH7Xv65T6kM', icon: IconDeezer },
      { url: 'https://17039band.bandcamp.com/', icon: IconBandcamp }
    ]
  }
];
const menuType = ref(false);
const openAndClose = (type: boolean) => {
  menuType.value = type;
}
onMounted(() => {
  const sections = document.querySelectorAll('section[id]');
  
  function scrollActive() {
    const scrollY = window.pageYOffset;
  
    sections.forEach(current => {
      const section = current as HTMLElement;
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 80;
      const sectionId = section.getAttribute('id');
  
      const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link?.classList.add('link-active');
      } else {
        link?.classList.remove('link-active');
      }
    });
  }
  
  window.addEventListener('scroll', scrollActive);

});

</script>

<template>
  <header class="header">
    <div class="mobile-menu">
      <div class="m-logo">
        <a href="#">
          <img src="./assets/images/Logo-small.png" alt="">
        </a>
      </div>
      <h1 class="title">170 39</h1>
      <button class="btn-menu" @click="openAndClose(true)">
        <IconMenu />
      </button> 
    </div>
    <div class="container" :class="{ 'mobile-active': menuType }">
      <div class="close-btn">
        <button @click="openAndClose(false)">
          <IconClose />
        </button>
      </div>
      <div class="logo">
        <a href="#">
          <img src="./assets/images/Logo-medium.png" alt="">
        </a>
      </div>
      <nav class="nav__menu">
        <li>
          <a class="link-active" href="#home">Home</a>
        </li>
        <li>
          <a href="#info">Info</a>
        </li>
        <li>
          <a href="#release">release</a>
        </li>
        <li>
          <a href="#videos">Videos</a>
        </li>
        <li>
          <a href="#merch">Merch</a>
        </li>
      </nav>  
      <button class="btn-small">Book us</button>
    </div>
  </header>
  <main class="main container">
    <!-- Home Section -->
    <Home/>
    <!-- About Us Section -->
    <AboutUs />
    <!-- Release Section -->
    <Release />
    <!-- Last Video Section --> 
    <LastVideo />
    <!-- Merch Section -->
    <Merch />
    <!-- Instagram Section -->
    <InfoInstagram />
  </main>
  <footer class="foot container">
    <div class="foot-box">
      <div class="top">
        <div v-for="(item, index) in footerLinks" :key="index" class="text-us">
          <h3 class="text">{{ item.title }}</h3>
          <div class="links">
            <button v-for="(link, index) in item.links" :key="index" class="btn-icon text-[var(--color-white-black)]">
              <a :href="link.url" target="_blank">
                <component :is="link.icon" />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div class="down">
        <h3 class="text">Privacy Policy</h3>
        <h3 class="text">Terms & conditions</h3>
        <h3 class="text">@2022 Odf Records</h3>
      </div>
    </div>
  </footer>
</template>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  @media screen and (max-width: 768px) {
    background-color: var(--color-black);
  }
  .mobile-menu {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: space-between;
      padding: 0 40px;
    }
    .m-logo {
      width: 40px;
      height: 40px;
    }
    .title {
      font-family: 'HACKED';
      font-weight: 400;
      font-size: 38px;
      line-height: 37px;
      color: var(--color-white);
    }
    .btn-menu {
      background-color: transparent;
      border: none;
      cursor: pointer;
      svg {
        color: var(--color-white);
      }
      
    }
  }
  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    background-color: var(--color-black);
    @media screen and (max-width: 768px) {
      height: 100vh;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      background-color: var(--color-black);
      padding: 36px 0 0;
      transform: translateX(-100%);
      position: absolute;
      top: 0;
      left: 0;
      transition: .2s;
    }
    .close-btn {
      display: none;
      @media screen and (max-width: 768px) {
        display: flex;
        width: 100%;
        justify-content: end;
        padding: 0 32px;
        margin-bottom: 150px;
      }
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        svg {
          color: var(--color-white);
        }
      }
    }
    .logo {
      width: 64px;
      height: 64px;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    nav {
      display: flex;
      gap: 100px;
      @media screen and (max-width: 1024px) {
        gap: 70px;
      }
      @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 48px;
        align-items: center;
        margin-bottom: 48px;
      }
      li {
        list-style: none;
        a {
          font-family: 'Agrandir Grand Heavy';
          color: var(--color-white);
          text-decoration: none;
          font-size: 16px;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }
        .link-active {
          color: var(--color-red);
        }
      }
    }
  }
  .mobile-active {
    transform: translateX(0);
  }
}
.main {
  width: 100%;
}
.foot {
  width: 100%;
  background-color: var(--color-white-black);
  display: flex;
  justify-content: center;
  padding: 48px 0;
  .foot-box {
    width: 640px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media screen and (max-width: 425px) {
      width: 100%;
      align-items: center;
      gap: 48px;
    }
    .top {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 425px) {
        width: 275px;
        flex-direction: column;
        align-items: end;
        gap: 16px;
      }
      .text-us {
        display: flex;
        gap: 40px;
        align-items: center;
        .text {
          font-family: 'Bebas Neue';
          font-weight: 400;
          font-size: 32px;
          line-height: 38px;
          text-transform: uppercase;
          color: var(--color-white);
        }
        .links {
          display: flex;
          gap: 16px;
          .btn-icon {
            padding: 4px;
          }
        }
      }
    }
    .down {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 425px) {
        flex-direction: column;
        align-items: center;
        gap: 24px;
      }
      .text {
        font-family: 'Agrandir Grand Light';
        font-size: 14px;
        line-height: 18px;
        color: var(--color-white);
      }
    }
  }
}
</style>
