<script setup lang="ts">
import MerchImg1 from '../assets/images/merch-img-1.png';
import MerchImg2 from '../assets/images/merch-img-2.png';
import MerchImg3 from '../assets/images/merch-img-3.png';
const merchArr = [
    {img: MerchImg1, title: 'T shirt 170 39', desc: "The classic black tee featuring the unmistakable '170 39' signature logo."},
    {img: MerchImg2, title: 'hoodie 170 39', desc: "Stay warm with our essential black hoodie, proudly showcasing the '170 39' emblem."},
    {img: MerchImg3, title: 'T shirt 170 39', desc: "Make a statement with our dynamic black tee, spotlighting the bold '170 39' design."}
]
</script>
<template>
    <section class="merch" id="merch">
        <h2 class="titles text-[var(--color-black)]">merch</h2>
        <div class="merch-cards">
            <div v-for="(item, index) in merchArr" :key="index" class="card">
                <img :src="item.img" alt="Merch Image">
                <h3 class="card-title">{{ item.title }}</h3>
                <p class="desc">{{ item.desc }}</p>
                <button class="btn-large">buy</button>
            </div>
        </div>
        <button class="btn-large bg-[var(--color-black)]">all the merch</button>
    </section>
</template>
<style scoped lang="scss">
    .merch {
        width: 100%;
        background-color: var(--color-white);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 64px 0;
        @media screen and (max-width:425px) {
            padding: 48px 16px;
        }
        .merch-cards {
            max-width: 1360px;
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin: 48px 0;
            gap: 80px;
            @media screen and (max-width: 425px) {
                margin: 32px 0;
                gap: 40px;
            }
            .card {
                width: 400px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 16px;
                background-color: var(--color-white);
                box-shadow: 0px 0px 16px 0px #00000040;
                border-radius: 16px;
                overflow: hidden;
                padding-bottom: 32px;
                @media screen and (max-width: 425px) {
                    width: 100%;
                }
                img {
                    width: 100%;
                    border-radius: 8px;
                    @media screen and (max-width: 425px) {
                        height: 500px;
                    }
                }
                .card-title {
                    font-family: 'Bebas Neue';
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 29px;
                    text-align: center;
                    color: var(--color-black);
                }
                .desc {
                    font-family: 'Agrandir Wide Light';
                    font-size: 16px;
                    text-align: center;
                    color: var(--color-black);
                    @media screen and (max-width: 425px) {
                        width: 90%;
                    }
                }
            }
        }
        .merch-cards + .btn-large {
            @media screen and (max-width: 425px) {
                width: 100%;
            }
        }
    }
</style>