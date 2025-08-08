<script setup lang="ts">

</script>
<template>
    <section class="about-us" id="info">
        <div class="about-us-top">
            <div class="left">
                <img src="../assets/images/about-image.svg" alt="">
            </div>
            <div class="right">
                <h2 class="titles text-[var(--color-red)]">About us ?</h2>
                <p class="desc">
                    <span>
                        Hybrid and impactful, 170 39 is the result of an unexpected collision between eclectic techno and modern progressive metal. An electronic duet from Caen formed in 2018 , the project stems from a creative push confronting without premeditation a sound engineer producer to a theory-fueled multi-instrumentalist.
                    </span>
                    <br><br>
                    <span>
                        Patterned electronic textures give life to threatening ambiances and complex rhythms pushing techno to its limits: 170 39 is a whimsical and wild hunt through terra incognita. At times an extraterrestrial jungle or an apocalyptic labyrinth, the multiple influences of this musical olibrius make for an immersive experience, nestled yet decompartmentalized.
                    </span>
                </p>
                <div class="line"></div>
                <button class="btn-large">Learn more</button>
            </div>
        </div>
        <div class="about-us-down">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vZtbGsJOTPQ?si=TNSiU6Dlr_Fi7xvS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </section>
</template>
<style scoped lang="scss">
    .about-us {
        width: 100%;
        .about-us-top {
            height: 659px;
            background: var(--color-black) url('../assets/images/about-texture.png') no-repeat center;
            display: flex;
            justify-content: center;
            gap: 100px;
            align-items: center;
            @media screen and (max-width: 768px) {
                height: auto;
                flex-direction: column;
                gap: 48px;
                background-size: cover;
                padding: 32px 0;
                gap: 32px;
            }
            .left {
                height: 100%;
                display: flex;
                align-items: end;
                @media screen and (max-width:425px) {
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                }
            }
            .right {
                width: 700px;
                display: flex;
                flex-direction: column;
                align-items: start;
                gap: 32px;
                @media screen and (max-width: 768px) {
                    align-items: center;
                    gap: 24px;
                }
                @media screen and (max-width: 425px) {
                    width: 100%;
                    padding: 0 16px;
                }
                .desc {
                    span {
                        font-family: 'Agrandir Wide Light';
                        font-size: 16px;
                        letter-spacing: 0;
                        color: var(--color-white);
                    }
                    @media screen and (max-width: 768px) {
                        text-align: center;
                    }
                }
                .line {
                    width: 180px;
                    border: 1px solid var(--color-white);
                }
            }
        }
        .about-us-down {
            max-width: 1920px;
            max-height: 818px;
            height: 818px;
            margin: 0 auto;
            @media screen and (max-width: 1024px) {
                height: 550px;
            }
            @media screen and (max-width: 768px) {
                height: 400px;
            }
            @media screen and (max-width: 425px) {
                height: 250px;
            }
        }
    }
</style>