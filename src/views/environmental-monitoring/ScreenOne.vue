<template>
    <div class="screen_one">
        <div class="screen_one_item" style="padding-bottom: 20px">
            <div class="screen_title">外部环境监测</div>
            <div class="header">
                <div>空气质量实测</div>
                <div>2021-12-27 13:22发布</div>
            </div>
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
                <div class="chart">
                    <PieChart />
                    <div class="title">正常</div>
                    <div class="circle_name">空气质量</div>
                </div>
            </div>
            <div class="headerB">
                <div class="headerB_circle">
                    <div
                        class="one"
                        style="
                            background-image: linear-gradient(#6c7253, #9a9213);
                        "
                    >
                        优
                    </div>
                    <div class="two">AOI.54</div>
                    <div class="date">8月20</div>
                    <div class="time">
                        <div class="line"></div>
                        <div class="dot"></div>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="headerB_circle">
                    <div
                        class="one"
                        style="
                            background-image: linear-gradient(#6c7253, #9a9213);
                        "
                    >
                        良
                    </div>
                    <div class="two">AOI.54</div>
                    <div class="date">8月20</div>
                    <div class="time">
                        <div class="line"></div>
                        <div class="dot"></div>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="headerB_circle">
                    <div
                        class="one"
                        style="
                            background-image: linear-gradient(#8c551c, #554153);
                        "
                    >
                        轻度
                    </div>
                    <div class="two">AOI.54</div>
                    <div class="date">8月20</div>
                    <div class="time">
                        <div class="line"></div>
                        <div class="dot"></div>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="headerB_circle">
                    <div
                        class="one"
                        style="
                            background-image: linear-gradient(#984365, #984365);
                        "
                    >
                        中度
                    </div>
                    <div class="two">AOI.54</div>
                    <div class="date">8月20</div>
                    <div class="time">
                        <div class="line"></div>
                        <div class="dot"></div>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="headerB_circle">
                    <div
                        class="one"
                        style="
                            background-image: linear-gradient(#902a8c, #902a8c);
                        "
                    >
                        重度
                    </div>
                    <div class="two">AOI.54</div>
                    <div class="date">8月20</div>
                    <div class="time">
                        <div class="line"></div>
                        <div class="dot"></div>
                        <div class="line"></div>
                    </div>
                </div>
            </div>
            <div class="screen_title">大楼环境监测</div>
            <div style="height: 300px">
                <div class="dashboardTitle">月开工中心17楼</div>
                <div class="dashboard" style="margin-top: -30px">
                    <div class="dashboard_item">
                        <Dashboard
                            :chartData="{
                                name: '温度',
                                unit: '℃',
                                title: 'AQI指数',
                                value: 80,
                            }"
                        />
                    </div>
                    <div class="dashboard_item">
                        <Dashboard
                            :chartData="{
                                name: '湿度',
                                unit: 'RH',
                                title: 'AQI指数',
                                value: 350,
                            }"
                        />
                    </div>
                    <div class="dashboard_item">
                        <Dashboard
                            :chartData="{
                                name: 'PM2.5',
                                unit: '微米',
                                title: 'AQI指数',
                                value: 350,
                            }"
                        />
                    </div>
                    <div class="dashboard_item">
                        <Dashboard
                            :chartData="{
                                name: 'TVOC',
                                unit: '',
                                title: 'AQI指数',
                                value: 350,
                            }"
                        />
                    </div>
                    <div class="dashboard_item">
                        <Dashboard
                            :chartData="{
                                name: '甲醛',
                                unit: 'ppm',
                                title: 'AQI指数',
                                value: 350,
                            }"
                        />
                    </div>
                </div>
                <div class="dashboardTitle" style="margin-top: -20px">
                    月开工中心1楼大堂
                </div>
                <div class="dashboard" style="margin-top: -30px">
                    <div class="dashboard_item">
                        <Dashboard
                            :chartData="{
                                name: '温度',
                                unit: '℃',
                                title: 'AQI指数',
                                value: 80,
                            }"
                        />
                    </div>
                    <div class="dashboard_item">
                        <Dashboard
                            :chartData="{
                                name: '湿度',
                                unit: 'RH',
                                title: 'AQI指数',
                                value: 350,
                            }"
                        />
                    </div>
                    <div class="dashboard_item">
                        <Dashboard
                            :chartData="{
                                name: 'PM2.5',
                                unit: '微米',
                                title: 'AQI指数',
                                value: 350,
                            }"
                        />
                    </div>
                    <div class="dashboard_item">
                        <Dashboard
                            :chartData="{
                                name: 'TVOC',
                                unit: '',
                                title: 'AQI指数',
                                value: 350,
                            }"
                        />
                    </div>
                    <div class="dashboard_item">
                        <Dashboard
                            :chartData="{
                                name: '甲醛',
                                unit: 'ppm',
                                title: 'AQI指数',
                                value: 350,
                            }"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PieChart from "../components/PieChart.vue";
import Dashboard from "../components/Dashboard";
import echarts from "echarts";
export default {
    mixins: [],
    data() {
        return {
            static1: {
                category: [
                    "12月25日",
                    "12月26日",
                    "12月27日",
                    "12月28日",
                    "12月29日",
                    "12月30日",
                    "12月31日",
                ],
                series: [
                    {
                        // name: "诚远大厦",
                        type: "line",
                        smooth: true, //是否平滑
                        symbolSize: 0,
                        lineStyle: {
                            normal: {
                                color: "#DA5555",
                                shadowColor: "rgba(0, 0, 0, .3)",
                                shadowBlur: 0,
                                shadowOffsetY: 5,
                                shadowOffsetX: 5,
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: "rgba(0,202,149,0.3)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(0,202,149,0)",
                                        },
                                    ],
                                    false
                                ),
                                shadowColor: "rgba(0,202,149, 0.9)",
                                shadowBlur: 20,
                            },
                        },
                        data: [67, 38, 15, 518, 34, 111, 219],
                    },
                ],
            },
        };
    },
    components: {
        PieChart,
        Dashboard,
    },

    mounted() {},
    methods: {},
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/big-screen.scss";
.dashboardTitle {
    font-size: 18px;
    margin-left: 20px;
    margin-top: 10px;
}
.date {
    text-align: center;
    color: #5cc8fb;
    margin-top: 8px;
}
.time {
    margin-top: 3px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    .line {
        width: 100px;
        border-bottom: 1px solid #5cc8fb;
        opacity: 0.7;
    }
    .dot {
        width: 9px;
        height: 9px;
        background: #5cc8fb;
        border-radius: 9px;
    }
}
.dashboard {
    display: flex;
    &_item {
        width: 20%;
    }
}
.header {
    display: flex;
    justify-content: space-between;
    margin: 10px 84px 0px 26px;
    font-size: 17px;
    font-weight: 700;
    color: #f9fbfd;
}
.headerB {
    display: flex;
    margin-top: 20px;
    justify-content: space-around;
    &_circle {
        width: 25%;
    }
}
.one {
    width: 110px;
    height: 110px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 55px;
    text-align: center;
    line-height: 110px;
    font-size: 30px;
    font-weight: 700;
    color: #ffffff;
}
.two {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    margin-top: 10px;
}
.screen_one {
    box-sizing: border-box;
    margin-right: 1%;
    width: 53%;
    color: rgb(204, 230, 255);
    overflow: hidden;
    background: url("../../assets/big-screen/item_bg.png") no-repeat center;
    background-size: 100% 100%;
}

.screen_two {
    &_title {
        text-align: center;
        font-size: 16px;
        text-shadow: rgb(0 117 255) 0px 0px 16px;
        color: rgb(204, 230, 255);
        font-weight: 600;
    }
    &_item {
        display: flex;
        justify-content: space-around;
        padding: 10px 0px 10px 0px;
        box-sizing: border-box;
        width: 100%;
        .chart {
            position: relative;
        }
        .title {
            position: absolute;
            top: 0;
            left: 50%;
            margin-top: 44px;
            margin-left: -20px;
            font-size: 20px;
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
    }
}
</style>
