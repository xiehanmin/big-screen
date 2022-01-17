<template>
    <div id="big_screen" ref="appRef">
        <div class="bg">
            <dv-loading v-if="loading">Loading...</dv-loading>
            <div v-else class="host-body">
                <div class="host_body_top">
                    <!-- <div class="host_body_top_content"> -->
                    <div class="top_left">
                        <div class="host_body_top_minTitle">
                            <span @click="$router.push('/data-center')"
                                >楼宇运营数据中心</span
                            >
                        </div>
                        <div>
                            <img
                                style="width: 100%"
                                src="../../assets/big-screen/line.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="host_body_top_title">
                        <span>悦开工环境监测看板</span>
                    </div>
                    <div class="top_right">
                        <div
                            class="host_body_top_minTitle1"
                            @click="$router.push('/energy-consumption')"
                        >
                            <span>能耗看板</span>
                        </div>
                        <div>
                            <img
                                style="width: 100%; transform: rotateY(180deg)"
                                src="../../assets/big-screen/line.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div class="host_body_content">
                    <ScreenOne />
                    <ScreenThree />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import drawMixin from "../../utils/drawMixin";
import { formatTime } from "../../utils/index.js";
import ScreenOne from "./ScreenOne.vue";
import ScreenThree from "./ScreenThree.vue";
export default {
    mixins: [drawMixin],
    data() {
        return {
            timing: null,
            loading: true,
            dateDay: null,
            dateYear: null,
            dateWeek: null,
            weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        };
    },
    components: { ScreenOne, ScreenThree },
    mounted() {
        this.timeFn();
        this.cancelLoading();
    },
    beforeDestroy() {
        clearInterval(this.timing);
    },
    methods: {
        timeFn() {
            this.timing = setInterval(() => {
                this.dateDay = formatTime(new Date(), "HH: mm: ss");
                this.dateYear = formatTime(new Date(), "yyyy-MM-dd");
                this.dateWeek = this.weekday[new Date().getDay()];
            }, 1000);
        },
        cancelLoading() {
            setTimeout(() => {
                this.loading = false;
            }, 500);
        },
    },
};
</script>

<style lang="scss" >
// @import "../../assets/scss/index.scss";
#big_screen {
    color: #d3d6dd;
    width: 1920px;
    height: 1080px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: left top;
    overflow: hidden;
}
.bg {
    background-size: 100% 100%;
    background: url("../../assets/big-screen/bg.jpg") no-repeat center;
    width: 100%;
    height: 100%;
}

.host_body {
    &_top {
        width: 100%;
        height: 65px;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        overflow: hidden;
        .top_left,
        .top_right {
            width: 30%;
            img {
                height: 6px;
                display: block;
            }
        }
        .top_left {
            .host_body_top_minTitle {
                float: right;
            }
        }
        &_content {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &_minTitle {
            top: 0;
            width: 200px;
            height: 45px;
            background: url("../../assets/big-screen/jump_bg1.png") no-repeat
                center;
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
            span {
                text-shadow: rgb(0 117 255) 0px 0px 8px;
                color: rgb(255, 255, 255);
                font-weight: bold;
                font-size: 16px;
            }
        }
        &_minTitle1 {
            top: 0;
            width: 200px;
            height: 45px;
            background: url("../../assets/big-screen/jump_bg.png") no-repeat
                center;
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
            span {
                text-shadow: rgb(0 117 255) 0px 0px 8px;
                color: rgb(255, 255, 255);
                font-weight: bold;
                font-size: 16px;
            }
        }
        &_title {
            display: inline-block;
            width: 40%;
            height: 100%;
            text-align: center;
            background: url("../../assets/big-screen/top_bg.png") no-repeat
                center;
            background-size: cover;
            span {
                text-shadow: rgb(0 106 255) 0px 0px 64px;
                color: rgb(0 106 255) 0px 0px 64px;
                font-size: 28px;
                letter-spacing: 10px;
                font-weight: 600;
                line-height: 50px;
            }
        }
    }
    &_content {
        margin: 0 auto;
        margin-top: 40px;
        display: flex;
    }
}
</style>
