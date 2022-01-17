<template>
    <!-- 年度开工率 -->
    <div class="dashboardWrap">
        <div ref="dashboard" :style="{ height: height, width: '100%' }"></div>
    </div>
</template>

<script>
import echarts from "echarts";
export default {
    data() {
        return {
            options: {},
        };
    },
    props: {
        height: {
            type: String,
            default: "220px",
        },
        chartData: {
            type: Object,
            default: () => {
                return {
                    value: 350,
                    name: "警押比",
                    title: "AQI指数",
                    unit: "ppm",
                };
            },
        },
    },
    mounted() {
        let myChart = echarts.init(this.$refs.dashboard);
        const { value: dataValue, name, title, unit } = this.chartData;
        var colorRegionRate = (dataValue / 700).toFixed(2);
        let options = {
            backgroundColor: "transparent",
            grid: {
                left: 0,
                top: 0,
            },
            angleAxis: {
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                min: 0,
                max: 700,
                startAngle: 225,
            },
            radiusAxis: {
                type: "category",
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                data: ["a", "b", "c"],
                z: 10,
            },
            polar: {
                radius: "100%",
            },
            title: [
                {
                    text: title || "",
                    bottom: "60",
                    x: "center",
                    padding: [7, 14],
                    textStyle: {
                        fontWeight: "900",
                        fontSize: 14,
                        color: "#ffffff",
                        textShadowBlur: 20,
                        textShadowColor: "#0075ff",
                        shadowOffsetX: 20,
                        shadowOffsetY: 20,
                    },
                },
            ],
            series: [
                {
                    type: "gauge",
                    radius: "60%",
                    startAngle: 220,
                    endAngle: -40,
                    splitNumber: 28,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: [
                                // 有数值的部分
                                [
                                    colorRegionRate,
                                    new echarts.graphic.LinearGradient(
                                        0,
                                        1,
                                        0,
                                        0,
                                        [
                                            {
                                                offset: 0,
                                                color: "rgba(0, 255, 255, 0.6)",
                                            },
                                            {
                                                offset: 0.5,
                                                color: "#0cb5e7", // 100% 处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: "rgba(0, 0, 255, .6)",
                                            },
                                        ]
                                    ),
                                ],
                                // 底色
                                [
                                    1,
                                    new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        1,
                                        0,
                                        [
                                            {
                                                offset: 0,
                                                color: "rgba(255,255,255,0.1)", // 0% 处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: "rgba(255,255,255,0.1)", // 100% 处的颜色
                                            },
                                        ]
                                    ),
                                ],
                            ],
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        length: 12,
                        lineStyle: {
                            color: "auto",
                            width: 2,
                            shadowBlur: 3,
                            shadowColor: "rgba(0, 255, 255, 0.6)",
                        },
                    },
                    axisLabel: {
                        show: false,
                    },
                    title: {
                        offsetCenter: [0, -20],
                        color: "#FFFFFF",
                        fontSize: 10,
                        rich: {
                            a: {
                                fontWeight: 500,
                                padding: [0, 0, 10, 40],
                            },
                        },
                    },
                    pointer: {
                        show: false,
                    },
                    data: [
                        {
                            value: dataValue,
                            name,
                            itemStyle: {
                                color: "#ffffff",
                                textShadowBlur: 20,
                                textShadowColor: "#0075ff",
                            },
                        },
                    ],
                    detail: {
                        show: true,
                        formatter: function (value) {
                            console.log(value);
                            const b = unit ? unit : "";
                            return value + "\n" + "{a|" + b + "}";
                        },
                        rich: {
                            a: {
                                fontWeight: 500,
                                color: "#ffffff",
                                textShadowBlur: 20,
                                textShadowColor: "#0075ff",
                                shadowOffsetX: 20,
                                shadowOffsetY: 20,
                                padding: [0, 0, 0, 30],
                            },
                        },
                        color: "#ffffff",
                        textShadowBlur: 20,
                        textShadowColor: "#0075ff",
                        shadowOffsetX: 20,
                        shadowOffsetY: 20,
                        fontSize: 16,
                        fontWeight: 900,
                        offsetCenter: [0, 10],
                        padding: [4, 12],
                    },
                },
            ],
        };
        myChart.setOption(options);
    },
};
</script>
<style lang="scss" scoped>
.dashboardWrap {
    position: relative;
    .detail {
        width: 100%;
        position: absolute;
        text-align: center;
        top: 0;
        left: 0;
    }
}
</style>