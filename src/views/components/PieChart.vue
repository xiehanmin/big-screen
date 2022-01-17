<template>
    <!-- 年度开工率 -->
    <div ref="pieChart" :style="{ height: height, width: height }"></div>
</template>

<script>
import echarts from "echarts";
import "echarts-liquidfill";
export default {
    data() {
        return {
            options: {},
        };
    },
    components: {},
    props: {
        chartData: {
            type: Array,
            default: () => [],
        },
        height: {
            type: String,
            default: "120px",
        },
        legend: {
            type: Array,
            default: () => [],
        },
        series: {
            type: Array,
            default: () => [],
        },
        category: {
            type: Array,
            default: () => [],
        },
        yAxis: {
            type: Array,
            default: () => [],
        },
    },
    watch: {
        chartData: {
            handler() {},
            immediate: true,
            deep: true,
        },
    },
    mounted() {
        let myChart = echarts.init(this.$refs.pieChart);
        let colorList = [];
        let colorScore = 0.5 * 100;
        if (colorScore >= 90) {
            let color1 = "rgb(0,125,187)";
            let color2 = "rgb(0,60,157)";
            colorList.push(color1);
            colorList.push(color2);
        } else if (colorScore >= 80 && colorScore < 90) {
            let color1 = "rgb(143,198,241)";
            let color2 = "rgb(0,255,255)";
            colorList.push(color1);
            colorList.push(color2);
        } else if (colorScore >= 60 && colorScore < 80) {
            let color1 = "rgb(0,125,187)";
            let color2 = "rgb(0,255,255)";
            colorList.push(color1);
            colorList.push(color2);
        } else if (colorScore < 60) {
            let color1 = "rgb(111,169,234)";
            let color2 = "rgb(0,255,255)";
            colorList.push(color1);
            colorList.push(color2);
        }
        let options = {
            series: [
                {
                    type: "liquidFill",
                    backgroundStyle: {
                        color: "transparent",
                    },
                    center: ["50%", "50%"],
                    shape: "circle",
                    radius: "100%",
                    z: 1,
                    amplitude: 10,
                    period: 2000,
                    // color: ["#008896", "#003c9d", "#007dbb"],
                    color: colorList,
                    itemStyle: {
                        shadowBlur: 0,
                        opacity: 0.7,
                    },
                    outline: {
                        show: true,
                        itemStyle: {
                            borderWidth: 1,
                        },
                        borderDistance: 0,
                    },
                    data: [
                        0.5,
                        {
                            value: 0.6,
                            direction: "left",
                        },
                        {
                            value: 0.7,
                            direction: "right",
                        },
                    ],
                    label: {
                        show: false,
                    },
                },
            ],
        };
        myChart.setOption(options);
    },
};
</script>