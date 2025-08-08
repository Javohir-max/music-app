<script setup lang="ts">
import IconSpotify from '~/assets/icons/IconSpotify.vue';
import CardImg1 from '~/assets/images/release-card-img-1.png';
import CardImg2 from '~/assets/images/release-card-img-2.png';
import CardImg3 from '~/assets/images/release-card-img-3.png';
const cardArr = [
    {
        title: 'Last rendition',
        imgSrc: CardImg1,
        url: 'https://open.spotify.com/album/2fCBcCP7g5E6g2FyCebP8S?si=ypt8EeFYT52ioC6xhW-VpA'
    },
    {
        title: 'ogba Aghara (pt​.​3)',
        imgSrc: CardImg2,
        url: 'https://open.spotify.com/album/56Qcdlmyx7OLvbgOBuBzbF?si=bxlTH09qRxK8_XI8SreL0g'
    },
    {
        title: 'Archives',
        imgSrc: CardImg3,
        url: 'https://open.spotify.com/album/0Q6cCdzgr6vwUo7Q0lRwTQ?si=aznBbC-7TqakhlPO3ZDBdg'
    }
]
function routePush() {
    window.open('https://open.spotify.com/artist/7fjCuZhJy1TrvPMsZnz5Y5/discography/all', '_blank');
}

</script>
<template>
    <section class="release" id="release">
        <h2 class="titles text-[var(--color-red)]">release</h2>
        <div class="cards">
            <div v-for="(card, index) in cardArr" :key="index" class="card">
                <img :src="card.imgSrc" alt="image-card">
                <h3 class="card-title">{{ card.title }}</h3>
                <button class="btn-icon">
                    <a :href="card.url" target="_blank">
                        <IconSpotify />
                    </a>
                </button>
            </div>
        </div>
        <button class="btn-large" @click="routePush">
            all the relEAse
        </button>
    </section>
</template>
<style scoped lang="scss">
    .release {
        width: 100%;
        background: var(--color-black) url('../assets/images/release-texture.png') no-repeat center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 64px;
        padding: 100px 0;
        @media screen and (max-width: 768px) {
            padding: 48px 0;
            gap: 32px;
        }
        .cards {
            max-width: 1180px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 64px;
            @media screen and (max-width: 768px) {
                flex-direction: column;
                flex-wrap: nowrap;
                gap: 32px;
            }
            .card {
                width: 350px;
                height: 475px;
                background-color: var(--color-gray);
                border-radius: 16px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 16px;
                .card-title {
                    font-family: 'Bebas Neue';
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 29px;
                    text-transform: uppercase;
                    color: var(--color-white);
                }
                .btn-icon {
                    color: var(--color-gray);
                }
            }
        }
        .btn-large {
            @media screen and (max-width: 768px) {
                padding: 16px 97.5px;
            }
        }
    }
</style>