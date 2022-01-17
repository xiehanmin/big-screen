<template>
    <div>
        <!-- 年度开工率 -->
        <div ref="lineChart" :style="{ height: height, width: '100%' }"></div>
    </div>
</template>

<script>
import echarts from "echarts";

export default {
    data() {
        return {
            chart: null,
        };
    },
    props: {
        title: {
            type: String,
            default: "",
        },
        height: {
            type: String,
            default: "180px",
        },
        yAxisUnit: {
            type: String,
            default: "",
        },
        yAxisType: {
            type: String,
            default: "value",
        },
        yAxisData: {
            type: Array,
            default: () => [],
        },
        aAxisUnit: {
            type: String,
            default: "",
        },
        aAxisType: {
            type: String,
            default: "category",
        },
        aAxisData: {
            type: Array,
            default: () => [],
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
        colorList: {
            type: Array,
            default: () => [],
        },
        inverse: {
            type: Boolean,
            default: false,
        },
        grid: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    watch: {
        series() {
            this.chart.setOption({
                series: this.series,
            });
        },
    },
    mounted() {
        this.chart = echarts.init(this.$refs.lineChart);
        let options = {
            backgroundColor: "transparent",
            legend: {
                data: this.legend,
                textStyle: {
                    color: "#fff",
                },
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
            grid: {
                top: "16%",
                left: "5%",
                right: "5%",
                bottom: "15%",
                ...this.grid,
            },
            xAxis: {
                type: this.aAxisType,
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#0696f9",
                    },
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
                splitLine: {
                    show: this.inverse ? true : false,
                    lineStyle: {
                        stroke: "rgba(128,128,128,0.3)",
                        opacity: 0.2,
                        lineWidth: 1,
                    },
                },
                data: this.category,
            },
            yAxis: {
                name: this.yAxisUnit,
                type: this.yAxisType,
                data: this.yAxisData,
                nameLocation: this.inverse ? "start" : "end",
                position: "left",
                nameTextStyle: {
                    color: "#fff",
                },
                splitLine: {
                    show: this.inverse ? false : true,
                    lineStyle: {
                        stroke: "rgba(128,128,128,0.3)",
                        opacity: 0.2,
                        lineWidth: 1,
                    },
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                inverse: this.inverse,
                axisLabel: {
                    formatter: "{value}",
                    color: "#fff",
                    fontSize: 14,
                },
            },
            series: this.series,
        };
        this.chart.setOption(options);
    },
};
</script>