<script setup lang="ts">

</script>
<template>
    <section class="home" id="home">
        <div class="content">
            <div class="logo">
                <img src="../assets/images/Logo.svg" alt="">
            </div>
            <h2 class="title-home">170 39</h2>
            <p>
                hybrid & impactful <span>techno</span>
                modern progressive <span>metal</span>
            </p>
        </div>
    </section>
</template>
<style scoped lang="scss">
    .home {
        width: 100%;
        height: 1080px;
        background: url('../assets/images/Background.png') no-repeat center;
        display: flex;
        justify-content: center;
        align-items: center;
        .content {
            width: 425px;
            display: flex;
            flex-direction: column;
            align-self: center;
            justify-content: center;
            @media screen and (max-width: 768px) {
                width: 285px;
            }
            .logo {
                width: 420px;
                height: 420px;
                @media screen and (max-width: 768px) {
                    width: 280px;
                    height: 280px;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            h2.title-home {
                font-family: 'HACKED' !important;
                font-weight: 400;
                font-size: 96px;
                line-height: 110px;
                color: var(--color-white);
                text-align: center;
            }
            p {
                font-family: 'Bebas Neue';
                font-size: 48px;
                font-weight: 400;
                line-height: 60px;
                letter-spacing: -1px;
                text-align: center;
                text-transform: uppercase;
                color: var(--color-white);
                @media screen and (max-width: 768px) {
                    font-size: 32px;
                    line-height: 40px;
                }
                span {
                    color: var(--color-red);
                    font-family: 'Bebas Neue';
                    font-weight: 400;
                    font-size: 48px;
                    line-height: 100%;
                    @media screen and (max-width: 768px) {
                        font-size: 32px;
                        line-height: 40px;
                    }
                }
            }
        }
    }
</style>