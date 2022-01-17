<template>
    <!-- 年度开工率 -->
    <div ref="barChart" :style="{ height: height, width: '100%' }"></div>
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
        grid: {
            type: Object,
            default: () => {},
        },
        height: {
            type: String,
            default: "240px",
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
        yAxisName: {
            type: String,
            default: "",
        },
    },
    mounted() {
        let myChart = echarts.init(this.$refs.barChart);
        let options = {
            title: {
                text: "",
            },
            tooltip: {
                trigger: "axis",
                backgroundColor: "rgba(255,255,255,0.1)",
                axisPointer: {
                    type: "shadow",
                    label: {
                        show: true,
                        backgroundColor: "#7B7DDC",
                    },
                },
            },
            legend: {
                data: this.legend,
                textStyle: {
                    color: "#B4B4B4",
                },
                top: "0%",
            },
            grid: {
                x: "8%",
                width: "88%",
                y: "13%",
                bottom: "15%",
                ...this.grid
            },
            xAxis: {
                data: this.category,
                axisLine: {
                    lineStyle: {
                        color: "rgba(128,128,128,0.3)",
                    },
                },
                axisTick: {
                    show: true,
                },
                axisLabel: {
                    inside: false,
                    textStyle: {
                        color: "#fff", // x轴颜色
                        fontWeight: "normal",
                        fontSize: "14",
                        lineHeight: 22,
                    },
                },
            },
            yAxis: [
                {
                    name: this.yAxisName,
                    nameTextStyle: {
                        color: "#fff",
                    },
                    axisLabel: {
                        formatter: "{value}",
                        color: "#fff",
                        fontSize: 14,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            stroke: "rgba(128,128,128,0.3)",
                            opacity: 0.2,
                            lineWidth: 1,
                        },
                    },
                    axisLine: {
                        show: false,
                    },
                },
                ...this.yAxis,
            ],
            series: this.series,
        };
        myChart.setOption(options);
    },
};
</script>