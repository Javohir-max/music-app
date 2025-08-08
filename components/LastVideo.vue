<script setup lang="ts">
import IconPlay from '~/assets/icons/IconPlay.vue';
import video1 from '../assets/video/video_1.mp4';
import video2 from '../assets/video/video_2.mp4';
import video3 from '../assets/video/video_3.mp4';
import Img1 from '../assets/images/last-video-1.png';
import Img2 from '../assets/images/last-video-2.png';
import Img3 from '../assets/images/last-video-3.png';
const hidden = ref<{index: number | null; type: boolean}>({
    index: null,
    type: false
});
const videoArr = [
  { src: video1, poster: Img1 },
  { src: video2, poster: Img2 },
  { src: video3, poster: Img3 }
];
const datesArr = [
    {
        year: '2022',
        dates: [
            { month: 'Juil.', day: '02', title: 'Caen', desc: 'Portobello Rock Club' },
            { month: 'Juin', day: '29', title: 'cherbourg', desc: 'Les Art’Zimutés' }
        ]
    },
    {
        year: '2021',
        dates: [
            { month: 'aout', day: '28', title: 'barfleurs', desc: 'MusiKenSaire' },
            { month: 'Juin', day: '21', title: 'cherbourg', desc: 'Les Art’Zimutés' }
        ]
    }
];
const urlsYoutube: string[] = [
    'https://www.youtube.com/@17039band/videos',
    'https://www.youtube.com/@17039band'
]
function openYoutube(url: string) {
    window.open(url, '_blank');
}
const playVideo = (index: number) => {
    const videoElement = document.getElementById(`video${index}`) as HTMLVideoElement;
    const videoPaused = document.getElementById(`video${hidden.value.index}`) as HTMLVideoElement;
    if (videoPaused && index !== hidden.value.index) {
        videoPaused.pause();
    }
    if (videoElement.paused) {
        videoElement.play()
        hidden.value = { index, type: true };
    } else {
        videoElement.pause();
        hidden.value = { index: null, type: true };
    }
};
</script>
<template>
    <section class="last-video" id="videos">
        <div class="video">
            <h2 class="titles text-[var(--color-white)]">last videos</h2>
            <div class="cards">
                <div v-for="(item, index) in videoArr" :key="index" class="card">
                    <video :id="`video${index}`" :poster="item.poster" @click="playVideo(index)">
                        <source :src="item.src" type="video/mp4">
                    </video>
                    <button class="icon-play" :class="{'hidden': hidden.type && hidden.index === index}" @click="playVideo(index)">
                        <IconPlay />
                    </button>
                </div>
            </div>
            <div class="btns">
                <button class="btn-large bg-[var(--color-black)]" @click="openYoutube(urlsYoutube[0]!)">videos & clips</button>
                <button class="btn-large bg-[var(--color-black)]" @click="openYoutube(urlsYoutube[1]!)">youtube channel</button>
            </div>
        </div>
        <div class="dates">
            <h2 class="titles text-[var(--color-white)] mb-[24px]">dates</h2>
            <p class="year-24">2024</p>
            <p class="text">No dates planned at the moment</p>
            <div v-for="(item, index) in datesArr" :key="index" class="info-box-con">
                <p class="year">{{ item.year }}</p>
                <div v-for="(box, index) in item.dates" :key="index" class="info-box">
                    <div class="left">
                        <div class="date">
                            <h3>{{ box.month }}</h3>
                            <h2>{{ box.day }}</h2>
                        </div>
                        <div class="text-desc">
                            <h3 class="text">{{ box.title }}</h3>
                            <p class="desc">{{ box.desc }}</p>
                        </div>
                    </div>
                    <button class="btn-medium">infos</button>
                </div>
            </div>
            <button class="btn-large">See all dates</button>
        </div>
    </section>
</template>
<style scoped lang="scss">
    .last-video {
        width: 100%;
        .video {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 48px;
            background-color: var(--color-red);
            padding: 64px 0;
            @media screen and (max-width: 768px) {
                padding: 48px 0;
                gap: 32px;
            }
            @media screen and (max-width: 425px) {
                padding: 48px 16px;
            }
            .cards {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 32px;
                flex-wrap: wrap;
                @media screen and (max-width: 425px) {
                    width: 100%;
                    gap: 16px;
                }
                .card {
                    width: 532px;
                    position: relative;
                    @media screen and (max-width: 425px) {
                        width: 100%;
                    }
                    video {
                        border-radius: 16px;
                    }
                    .icon-play {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        cursor: pointer;
                        transform: translate(-50%, -50%);
                        color: var(--color-white);
                        svg {
                            @media screen and (max-width: 425px) {
                                width: 32px;
                                height: 32px;
                            }
                        }
                    }
                }
            }
            .btns {
                display: flex;
                justify-content: center;
                gap: 16px;
                @media screen and (max-width: 425px) {
                    flex-direction: column;
                    width: 100%;
                }
                .btn-large {
                    @media screen and (max-width: 425px) {
                        width: 100%;
                    }
                }
            }
        }
        .dates {
            width: 100%;
            height: 1124px;
            background: url('../assets/images/dates-background.png') no-repeat center;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 24px;
            @media screen and (max-width: 768px) {
                height: auto;
                padding: 48px 0;
                background-size: cover;
            }
            @media screen and (max-width: 425px) {
                padding: 48px 19px;
            }
            .year-24 {
                font-family: 'Bebas Neue';
                font-weight: 400;
                font-size: 40px;
                line-height: 48px;
                text-transform: uppercase;
                color: var(--color-white);
                @media screen and (max-width: 425px) {
                    margin-bottom: -8px;
                }
            }
            .text {
                font-family: 'Bebas Neue';
                font-weight: 400;
                font-size: 40px;
                line-height: 48px;
                text-transform: uppercase;
                color: var(--color-white);
                margin-bottom: 24px;
            }
            .year-24, .text {
                @media screen and (max-width: 425px) {
                    font-size: 24px;
                    line-height: normal;   
                }
            }
            .info-box-con {
                width: 1153px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 16px;
                @media screen and (max-width: 1024px) {
                    width: 90%;
                }
                @media screen and (max-width: 425px) {
                    width: 100%;
                    gap: 8px;
                }
                .year {
                    font-family: 'Bebas Neue';
                    font-weight: 400;
                    font-size: 40px;
                    line-height: 48px;
                    text-transform: uppercase;
                    color: var(--color-white);
                    margin-bottom: 8px;
                    @media screen and (max-width: 425px) {
                        margin: 0;
                        font-size: 24px;
                        line-height: normal;
                    }
                }
                .info-box {
                    width: 100%;
                    height: 94px;
                    padding: 16px 24px;
                    background-color: var(--color-gray);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 12px;
                    @media screen and (max-width: 425px) {
                        flex-direction: column;
                        height: auto;
                        padding: 24px 22px;
                        gap: 24px;
                    }
                    .left {
                        display: flex;
                        gap: 48px;
                        align-items: center;
                        @media screen and (max-width: 425px) {
                            width: 100%;
                            gap: 16px;
                        }
                        .date {
                            width: 32px;
                            h3, h2 {
                                font-family: 'Bebas Neue';
                                font-weight: 400;
                                font-size: 20px;
                                line-height: 24px;
                                text-transform: uppercase;
                                text-align: center;
                                color: var(--color-red);
                            }
                            h2 {
                                font-size: 32px;
                                line-height: 38px;
                            }
                        }
                        .text-desc {
                            display: flex;
                            gap: 48px;
                            @media screen and (max-width:425px) {
                                flex-direction: column;
                                gap: 4px;
                            }
                            .text {
                                width: 110px;
                                font-size: 20px;
                                line-height: 24px;
                                margin: 0;
                            }
                            .desc {
                                font-family: 'Agrandir Wide Light';
                                font-size: 16px;
                                line-height: 23px;
                                color: var(--color-white);
                                opacity: 0.8;
                            }
                        }
                    }
                    .btn-medium {
                        @media screen and (max-width: 425px) {
                            width: 100%;
                        }
                    }
                }
            }
            .info-box-con:nth-child(5) {
                margin-top: 24px;
            }
            .info-box-con + .btn-large {
                margin-top: 40px;
                @media screen and (max-width: 425px) {
                    width: 100%;
                    margin-top: 24px;
                }
            }
        }
    }
</style>