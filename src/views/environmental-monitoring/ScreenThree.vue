<template>
    <div class="screen_three bg">
        <div class="screen_title">近七日数据变化</div>
        <div class="" style="padding-bottom: 10px">
            <div style="font-size: 20px; font-weight: 700">PM2.5</div>
            <div style="padding: 10px; box-sizing: border-box">
                <LineChart
                    :series="static1.series"
                    :category="static1.category"
                    :legend="static1.legend"
                    yAxisUnit="单位"
                    height="250px"
                />
            </div>
        </div>
        <div>
            <div style="font-size: 20px; font-weight: 700">甲醛</div>
            <div style="padding: 10px; box-sizing: border-box">
                <LineChart
                    :series="static2.series"
                    :category="static2.category"
                    :legend="static2.legend"
                    yAxisUnit="单位"
                    height="250px"
                />
            </div>
        </div>
        <div>
            <div style="font-size: 20px; font-weight: 700">TVOC</div>
            <div style="padding: 10px; box-sizing: border-box">
                <LineChart
                    :series="static3.series"
                    :category="static3.category"
                    :legend="static3.legend"
                    :yAxisData="static3.yAxisData"
                    yAxisUnit="单位"
                    height="250px"
                />
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
                        name: "诚远大厦",
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
            static2: {
                legend: [],
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
                        name: "悦开工中心中心",
                        type: "line",
                        smooth: true, //是否平滑
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
                    "12月25日",
                    "12月26日",
                    "12月27日",
                    "12月28日",
                    "12月29日",
                    "12月30日",
                    "12月31日",
                ],
                legend: [],
                series: [
                    {
                        type: "line",
                        showAllSymbol: true,
                        smooth: true, //是否平滑
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
    width: 48%;
    color: rgb(204, 230, 255);
    overflow: hidden;
}
.bg {
    padding: 0 10px;
    box-sizing: border-box;
    background: url("../../assets/big-screen/item_bg.png") no-repeat center;
    background-size: 100% 100%;
}
</style>