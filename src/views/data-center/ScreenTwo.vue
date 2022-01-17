<template>
    <div class="screen_two">
        <div class="screen_two_title">今日空气质量统计</div>
        <div class="screen_two_item">
            <div class="circle">
                <div class="circle_3 animation"></div>
                <div class="circle_2 animation"></div>
                <div class="circle_1 animation"></div>
                <div class="circle_value">300</div>
                <div class="circle_name">AOI</div>
            </div>
            <div class="circle">
                <div class="circle_3 animation"></div>
                <div class="circle_2 animation"></div>
                <div class="circle_1 animation"></div>
                <div class="circle_value">0.25</div>
                <div class="circle_name">PM2.5</div>
            </div>
        </div>
        <div class="screen_two_item" style="justify-content: center">
            <div class="chart">
                <PieChart />
                <div class="title">正常</div>
                <div class="circle_name">空气质量</div>
            </div>
        </div>
        <div class="screen_two_item" style="display: block">
            <p class="screen_two_title">平均租金统计</p>
            <div class="static">
                <div>
                    <p>鹿港大厦</p>
                    <p>72.4</p>
                </div>
                <div>
                    <p>城远大厦</p>
                    <p>72.4</p>
                </div>
                <div>
                    <p>悦开工中心</p>
                    <p style="font-style: normal">820</p>
                </div>
            </div>
        </div>
        <div class="screen_two_item">
            <div class="text_bg">
                <img
                    style="width: 45px"
                    src="../../assets/big-screen/userleft.png"
                    alt=""
                />
                <span>大厦人数</span>
            </div>
            <div class="text_bg">
                <img
                    style="width: 45px"
                    src="../../assets/big-screen/userright.png"
                    alt=""
                />
                <span>来访人员</span>
            </div>
        </div>
        <div class="breathing">
            <div>
                <i class="breathing_lamp lampDown"></i>
            </div>
            <div>
                <i class="breathing_lamp lampDown"></i>
            </div>
        </div>
        <div class="screen_two_item" style="padding: 0 10px">
            <div class="number"><span>6578</span></div>
            <div class="number"><span>6579</span></div>
        </div>
        <div class="screen_two_item" style="display: block; position: relative">
            <p
                class="screen_two_title"
                style="
                    margin-bottom: 10px;
                    position: absolute;
                    text-align: center;
                    width: 100%;
                "
            >
                访客楼层分布统计
            </p>
            <LineChart
                height="320px"
                yAxisType="category"
                aAxisType="value"
                :yAxisData="yAxisData"
                :inverse="true"
                :grid="{ left: '12%' }"
                :series="series"
            />
        </div>
    </div>
</template>
<script>
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart.vue";
export default {
    mixins: [],
    data() {
        return {
            yAxisData: ["一楼", "二楼", "三楼", "四楼", "五楼"],
            series: [
                {
                    type: "bar",
                    barWidth: 16,
                    backgroundBar: {
                        show: true,
                    },
                    itemStyle: {
                        normal: {
                            color: new this.$echarts.graphic.LinearGradient(
                                0,
                                0,
                                1,
                                0,
                                [
                                    { offset: 0, color: "#154983" },
                                    { offset: 1, color: "#188ffd" },
                                ]
                            ),
                        },
                    },
                    data: [500, 400, 300, 200, 100],
                },
            ],
        };
    },
    components: {
        PieChart,
        LineChart,
    },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/big-screen.scss";

.dv-scr-board {
    height: 260px;
    color: rgb(255, 255, 255);
    text-shadow: rgb(0 117 255) 0px 0px 8px;
    font-weight: 600;
}
.breathing {
    height: 20px;
    display: flex;
    width: 100%;
    justify-content: space-between;

    div {
        width: 150px;
        display: flex;
        height: 20px;
        justify-content: center;
        .lampDown {
            display: inline-block;
            width: 32px;
            height: 20px;
            transform: rotate(90deg);
            background: url("../../assets/big-screen/lamp.png") no-repeat center;
            background-size: 100%;
        }
    }
}
.screen_two {
    width: 18%;
    &_title {
        text-align: center;
        font-size: 16px;
        text-shadow: rgb(0 117 255) 0px 0px 16px;
        color: rgb(204, 230, 255);
        font-weight: 600;
    }
    &_item {
        display: flex;
        justify-content: space-between;
        padding: 10px 10px;
        box-sizing: border-box;
        width: 100%;
        .chart {
            position: relative;
        }
        .title {
            position: absolute;
            top: 0;
            left: 50%;
            margin-top: 60px;
            margin-left: -23px;
            font-size: 24px;
            font-weight: 600;
        }

        @keyframes circleAnimation {
            0% {
                transform: rotate(0);
            }
            100% {
                transform: rotate(720deg);
            }
            0% {
                transform: rotate(0deg);
            }
        }
        @-webkit-keyframes circleAnimation /* Safari 与 Chrome */ {
            0% {
                transform: rotate(0);
            }
            100% {
                transform: rotate(720deg);
            }
            0% {
                transform: rotate(0deg);
            }
        }
        @keyframes reCircleAnimation {
            0% {
                transform: rotate(0);
            }
            100% {
                transform: rotate(-720deg);
            }
            0% {
                transform: rotate(0deg);
            }
        }
        @-webkit-keyframes reCircleAnimation /* Safari 与 Chrome */ {
            0% {
                transform: rotate(0);
            }
            100% {
                transform: rotate(-720deg);
            }
            0% {
                transform: rotate(0deg);
            }
        }
        .circle {
            position: relative;
            &_name {
                color: rgb(255, 255, 255);
                font-size: 20px;
                filter: drop-shadow(rgb(0, 117, 255) 0px 0px 4px);
                text-shadow: rgb(0 117 255) 0px 0px 4px;
                font-weight: 600;
                text-align: center;
                margin-top: 10px;
            }
            &_value {
                position: absolute;
                top: 0;
                left: 0;
                font-size: 27px;
                font-weight: 600;
                width: 110px;
                height: 110px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-style: oblique;
                color: rgb(255, 255, 255);
                filter: drop-shadow(rgb(0, 117, 255) 0px 0px 4px);
                text-shadow: rgb(0 117 255) 0px 0px 4px;
            }
        }
        .circle_3 {
            width: 110px;
            height: 110px;
            background: url("../../assets/big-screen/circle3.png") no-repeat
                center;
            background-size: 100% 100%;
            animation: circleAnimation 23s;
            -webkit-animation: circleAnimation 23s; /* Safari 与 Chrome */
        }
        .circle_2 {
            width: 70px;
            height: 70px;
            margin: 0 auto;
            margin-top: 20px;
            margin-left: 20px;
            background: url("../../assets/big-screen/circle2.png") no-repeat
                center;
            background-size: 100% 100%;
            position: relative;
            animation: reCircleAnimation 23s;
            -webkit-animation: reCircleAnimation 23s; /* Safari 与 Chrome */
            position: absolute;
            top: 0;
            left: 0;
        }
        .circle_1 {
            width: 70px;
            height: 70px;
            margin: 0 auto;
            margin: 0 auto;
            background: url("../../assets/big-screen/circle1.png") no-repeat
                center;
            background-size: 100% 100%;
            position: relative;
            position: absolute;
            top: 0;
            left: 0;
            margin-top: 20px;
            margin-left: 20px;
            animation: reCircleAnimation 23s;
            -webkit-animation: reCircleAnimation 23s; /* Safari 与 Chrome */
        }

        .animation {
            animation-timing-function: linear;
            -webkit-animation-iteration-count: infinite;
            -webkit-animation-direction: alternate;
            -webkit-animation-timing-function: linear;
        }
        .static {
            background: url("../../assets/big-screen/center_bg.png") no-repeat
                center;
            background-size: 100% 100%;
            display: flex;
            margin-top: 10px;
            div {
                width: 33.33%;
                padding: 35px 10px;
                text-align: center;
                p:nth-of-type(1) {
                    font-size: 16px;
                    font-weight: 600;
                    color: rgb(64, 159, 255);
                    letter-spacing: 1px;
                    text-shadow: rgb(64, 159, 255) 0px 0px 4px;
                }
                p:nth-of-type(2) {
                    font-style: oblique;
                    margin-top: 5px;
                    font-size: 14px;
                    color: rgb(204, 230, 255);
                    font-weight: 600;
                }
            }
        }
    }
    .text_bg {
        background: url("../../assets/big-screen/text_bg.png") no-repeat center;
        background-size: 100% 100%;
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            color: rgb(255, 255, 255);
            font-size: 12px;
            filter: drop-shadow(rgb(0, 117, 255) 0px 0px 4px);
            text-shadow: rgb(0 117 255) 0px 0px 4px;
        }
    }
    .number {
        height: 42px;
        width: 150px;
        background: url("../../assets/big-screen/number_bg.png") no-repeat
            center;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            color: rgb(204, 234, 255);
            letter-spacing: 10px;
            font-size: 14px;
            filter: drop-shadow(rgb(204, 234, 255) 0px 0px 1px);
            text-shadow: rgb(204, 234, 255) 0px 0px 1px;
        }
    }
}
</style>