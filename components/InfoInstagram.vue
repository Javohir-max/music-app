<script setup lang="ts">
import IconCopy from '~/assets/icons/IconCopy.vue';
import IconInstagramNew from '~/assets/icons/IconInstagramNew.vue';
import InstaImg1 from '~/assets/images/instagram-img-1.png';
import InstaImg2 from '~/assets/images/instagram-img-2.png';
import InstaImg3 from '~/assets/images/instagram-img-3.png';
import InstaImg4 from '~/assets/images/instagram-img-4.png';
import InstaImg5 from '~/assets/images/instagram-img-5.png';
import InstaImg6 from '~/assets/images/instagram-img-6.png';
const images = [
    InstaImg1,
    InstaImg2,
    InstaImg3,
    InstaImg4,
    InstaImg5,
    InstaImg6
]
const opneInstagram = () => {
    window.open('https://www.instagram.com/17039band', '_blank');
}
</script>
<template>
    <section class="section_insta">
        <h2 class="titles text-[var(--color-white)]">INSTAGRAM</h2>
        <div class="images-line">
            <div v-for="(item, index) in images" :key="index" class="img-box">
                <img :src="item" alt="instagram image 1">
                <div class="icon-copy">
                    <IconCopy />
                </div>
            </div>
        </div>
        <div class="insta-btns">
            <button class="btn-large">load more</button>
            <button class="btn-large" @click="opneInstagram">
                <IconInstagramNew style="color: var(--color-white);" />
                follow on instagram
            </button>
        </div>
    </section>
</template>
<style scoped lang="scss">
    .section_insta {
        width: 100%;
        padding: 64px 0 128px;
        background: var(--color-black) url('../assets/images/instragm-texture.png') no-repeat center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 48px;
        @media screen and (max-width: 768px) {
            background-size: cover;
            padding: 48px 0;
        }
        @media screen and (max-width: 425px) {
            gap: 32px;
        }
        .images-line {
            width: 100%;
            display: flex;
            justify-content: center;
            @media screen and (max-width: 768px) {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
            }
            @media screen and (max-width: 425px) {
                grid-template-columns: repeat(2, 1fr);
            }
            .img-box {
                position: relative;
                .icon-copy {
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    z-index: 1;
                    color: var(--color-white);
                }
            }
        }
        .insta-btns {
            display: flex;
            justify-content: center;
            gap: 16px;
            align-items: center;
            @media screen and (max-width: 768px) {
                flex-direction: column;
            }
            @media screen and (max-width: 425px) {
                width: 100%;
                padding: 0 16px;
            }
            .btn-large:nth-child(1) {
                padding: 16px 142.5px;
            }
            .btn-large:nth-child(2) {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 12px;
            }
            .btn-large {
                @media screen and (max-width: 425px) {
                    width: 100%;
                    padding: 16px 0 !important;
                }
            }
        }
    }
</style>