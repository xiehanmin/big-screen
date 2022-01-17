<template>
    <div class="screen_three">
        <div class="screen_three_item" style="padding-bottom: 20px">
            <div class="screen_title">客户入驻管理</div>
            <div class="screen_three_item" style="display: flex">
                <div class="content_item">
                    <div class="minTitle">
                        <i class="lamp" /> 今日用电量统计
                    </div>
                    <div style="display: flex">
                        <div class="divider" style="margin-right: 8px">
                            <img
                                src="../../assets/big-screen/divider.png"
                                alt=""
                            />
                            <i class="breathing_lamp lamp" />
                        </div>
                        <div class="icon">
                            <span></span>
                            <img
                                style="width: 100%"
                                src="../../assets/big-screen/circle.png"
                                alt=""
                            />
                        </div>
                        <div class="divider" style="margin-left: 8px">
                            <img
                                src="../../assets/big-screen/divider.png"
                                style="transform: rotate(180deg)"
                            />
                            <i
                                class="breathing_lamp lamp"
                                style="transform: rotate(180deg)"
                            />
                        </div>
                        <div>
                            <div
                                class="content_item_list"
                                style="margin-top: 0"
                            >
                                <div class="title">今日用电量</div>
                                <i class="list_icon breathing_lamp lamp"></i>
                                <div class="value">16.83%</div>
                            </div>
                            <div class="content_item_list">
                                <div class="title">昨日用电量</div>
                                <i class="list_icon breathing_lamp lamp"></i>
                                <div class="value">16.83%</div>
                            </div>
                            <div class="content_item_list">
                                <div class="title">比昨日涨幅</div>
                                <i class="list_icon breathing_lamp lamp"></i>
                                <div class="value">16.83%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content_item">
                    <div class="minTitle">
                        <i class="lamp" /> 本周用电量统计
                    </div>
                    <div style="display: flex">
                        <div class="divider" style="margin-right: 8px">
                            <img
                                src="../../assets/big-screen/divider.png"
                                alt=""
                            />
                            <i class="breathing_lamp lamp" />
                        </div>
                        <div class="icon">
                            <img
                                style="width: 100%"
                                src="../../assets/big-screen/circle.png"
                                alt=""
                            />
                        </div>
                        <div class="divider" style="margin-left: 8px">
                            <img
                                src="../../assets/big-screen/divider.png"
                                style="transform: rotate(180deg)"
                            />
                            <i
                                class="breathing_lamp lamp"
                                style="transform: rotate(180deg)"
                            />
                        </div>
                        <div>
                            <div
                                class="content_item_list"
                                style="margin-top: 0"
                            >
                                <div class="title">本周用电量</div>
                                <i class="list_icon breathing_lamp lamp"></i>
                                <div class="value">16.83%</div>
                            </div>
                            <div class="content_item_list">
                                <div class="title">上周用电量</div>
                                <i class="list_icon breathing_lamp lamp"></i>
                                <div class="value">16.83%</div>
                            </div>
                            <div class="content_item_list">
                                <div class="title">比上周涨幅</div>
                                <i class="list_icon breathing_lamp lamp"></i>
                                <div class="value">16.83%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content_item">
                    <div class="minTitle">
                        <i class="lamp" /> 本月用电量统计
                    </div>
                    <div style="display: flex">
                        <div class="divider" style="margin-right: 8px">
                            <img
                                src="../../assets/big-screen/divider.png"
                                alt=""
                            />
                            <i class="breathing_lamp lamp" />
                        </div>
                        <div class="icon">
                            <img
                                style="width: 100%"
                                src="../../assets/big-screen/circle.png"
                                alt=""
                            />
                        </div>
                        <div class="divider" style="margin-left: 8px">
                            <img
                                src="../../assets/big-screen/divider.png"
                                style="transform: rotate(180deg)"
                            />
                            <i
                                class="breathing_lamp lamp"
                                style="transform: rotate(180deg)"
                            />
                        </div>
                        <div>
                            <div
                                class="content_item_list"
                                style="margin-top: 0"
                            >
                                <div class="title">本月用电量</div>
                                <i class="list_icon breathing_lamp lamp"></i>
                                <div class="value">16.83%</div>
                            </div>
                            <div class="content_item_list">
                                <div class="title">上月用电量</div>
                                <i class="list_icon breathing_lamp lamp"></i>
                                <div class="value">16.83%</div>
                            </div>
                            <div class="content_item_list">
                                <div class="title">比上月涨幅</div>
                                <i class="list_icon breathing_lamp lamp"></i>
                                <div class="value">16.83%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="screen_three_item" style="padding-bottom: 20px">
            <div class="screen_title">人员统计</div>
            <div
                class="content_item"
                style="margin-top: 20px; position: relative; width: 100%"
            >
                <div class="minTitle" style="margin-bottom: 0">
                    <i class="lamp" /> 人流统计
                </div>
                <div class="chartTitle">
                    <div class="title1">实时在线人数</div>
                    <div class="title2"><span>1234</span>/人</div>
                </div>
                <div style="padding: 10px; box-sizing: border-box">
                    <LineChart
                        :series="static2.series"
                        :category="static2.category"
                        :legend="static2.legend"
                        yAxisUnit="单位"
                        height="250px"
                        :grid="{ right: 0 }"
                    />
                </div>
            </div>
            <div
                class="content_item"
                style="margin-top: 25px; position: relative; width: 100%"
            >
                <div class="minTitle" style="margin-bottom: 0">
                    <i class="lamp" /> 客流统计
                </div>
                <div style="padding: 10px; box-sizing: border-box">
                    <LineChart
                        :series="static3.series"
                        :category="static3.category"
                        :legend="static3.legend"
                        :yAxisData="static3.yAxisData"
                        yAxisUnit="单位"
                        height="320px"
                        :grid="{ right: 0 }"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LineChart from "../components/LineChart.vue";
import echarts from "echarts";

export default {
    mixins: [],
    data() {
        return {
            static2: {
                legend: [],
                category: [
                    "00:00",
                    "02:00",
                    "04:00",
                    "06:00",
                    "08:00",
                    "10:00",
                    "12:00",
                    "14:00",
                    "16:00",
                    "18:00",
                    "20:00",
                    "22:00",
                ],
                series: [
                    {
                        name: "悦开工中心中心",
                        type: "line",
                        showAllSymbol: false,
                        symbolSize: 0,
                        lineStyle: {
                            symbolSize: 0,
                            normal: {
                                color: "#00b3f4",
                                shadowColor: "rgba(0, 0, 0, .3)",
                                shadowBlur: 0,
                                shadowOffsetY: 5,
                                shadowOffsetX: 5,
                            },
                        },
                        label: {
                            show: true,
                            position: "top",
                            textStyle: {
                                color: "#00b3f4",
                            },
                        },
                        itemStyle: {
                            color: "#00b3f4",
                            borderColor: "#fff",
                            borderWidth: 3,
                            shadowColor: "rgba(0, 0, 0, .3)",
                            shadowBlur: 0,
                            shadowOffsetY: 2,
                            shadowOffsetX: 2,
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
                                            color: "rgba(0,179,244,0.3)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(0,179,244,0)",
                                        },
                                    ],
                                    false
                                ),
                                shadowColor: "rgba(0,179,244, 0.9)",
                                shadowBlur: 20,
                            },
                        },
                        data: [
                            502.84, 205.97, 332.79, 281.55, 398.35, 214.02, 200,
                            140, 201, 394, 493, 293, 203,
                        ],
                    },
                ],
            },
            static3: {
                category: [
                    "12/23",
                    "12/24",
                    "12/25",
                    "12/26",
                    "12/27",
                    "12/28",
                    "12/29",
                ],
                legend: ["2021/12/23-2021/12/29"],
                series: [
                    {
                        name: "2021/12/23-2021/12/29",
                        type: "line",
                        showAllSymbol: true,
                        // symbol: 'image://./static/images/guang-circle.png',
                        symbol: "circle",
                        symbolSize: 5,
                        lineStyle: {
                            normal: {
                                color: "#00b3f4",
                                shadowColor: "rgba(0, 0, 0, .3)",
                                shadowBlur: 0,
                                shadowOffsetY: 5,
                                shadowOffsetX: 5,
                            },
                        },
                        label: {
                            show: true,
                            formatter: (e) => {
                                return "title" + e.dataIndex;
                            },
                        },
                        itemStyle: {
                            color: "#fff",
                            borderWidth: 8,
                            shadowColor: "rgba(0, 202, 149, .8)",
                            shadowBlur: 0,
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
                                            color: "rgba(0,179,244,0.3)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(0,179,244,0)",
                                        },
                                    ],
                                    false
                                ),
                                shadowColor: "rgba(0,179,244, 0.9)",
                                shadowBlur: 20,
                            },
                        },
                        data: [
                            502.84, 205.97, 332.79, 281.55, 398.35, 214.02, 300,
                        ],
                    },
                ],
            },
        };
    },
    components: { LineChart },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/big-screen.scss";
.screen_three {
    width: 40%;
    color: rgb(204, 230, 255);
    overflow: hidden;
    .chartTitle {
        position: absolute;
        top: -10px;
        text-align: center;
        width: 100%;
        .title1 {
            color: rgb(230, 247, 255);
            font-size: 10px;
        }
        .title2 {
            color: rgb(15, 146, 255);
            span {
                color: rgb(255, 255, 255);
                text-shadow: rgb(19 128 255) 0px 0px 10px;
                letter-spacing: 6px;
                font-weight: 900;
            }
        }
    }
    &_item {
        overflow: hidden;
        box-sizing: border-box;
        &_title {
            background: url("../../assets/big-screen/title_bg.png") no-repeat
                center;
            background-size: 100% 100%;
            text-align: center;
            font-size: 18px;
            height: 60px;
            line-height: 80px;
            box-sizing: border-box;
            font-weight: 600;
            overflow: hidden;
            text-shadow: rgb(0 117 255) 0px 0px 16px;
        }
        .icon {
            width: 70px;
            height: 70px;
            margin-top: 24px;
            transform: rotate(234.5deg);
            position: relative;
            span {
                display: inline-block;
                position: absolute;
                transform: rotate(318deg);
                top: 0;
                left: 0;
                border-radius: 52px 52px 52px 52px;
                width: 52px;
                height: 52px;
                margin-left: 9px;
                margin-top: 9px;
                border: 2px solid transparent;
            }
        }
        &_content {
            padding: 0 10px;
            box-sizing: border-box;
            background: url("../../assets/big-screen/item_bg.png") no-repeat
                center;
            background-size: 100% 100%;
        }
        .content_item {
            width: 33.3%;
            margin-top: 12px;
            font-size: 12px;
            &_list {
                display: flex;
                margin-left: 5px;
                margin-top: 32px;
                position: relative;
                overflow: hidden;
                .title {
                    text-shadow: rgb(0 117 255) 0px 0px 16px;
                    font-weight: 600;
                }
                .value {
                    font-size: 15px;
                    font-weight: 600;
                }
            }
            .divider {
                position: relative;
                margin-top: 24px;
                img {
                    display: inline-block;
                    width: 8px;
                    height: 58px;
                }
                .lamp {
                    position: absolute;
                    left: -6px;
                    top: 30px;
                    margin-top: -10px;
                }
            }
        }
    }
}
</style>