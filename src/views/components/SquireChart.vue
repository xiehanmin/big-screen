<template>
    <div>
        <!-- 年度开工率 -->
        <div ref="SquireChart" :style="{ height: height, width: '100%' }"></div>
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
    components: {},
    props: {
        // chartData: {
        //     type: Array,
        //     default: () => [],
        // },
        height: {
            type: String,
            default: "180px",
        },  
        yAxisUnit: {
            type: String,
            default: "",
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
    },
    mounted() {
        let SquireChart = echarts.init(this.$refs.SquireChart);
        let options = {
            backgroundColor: "transparent",
            legend: {
                data: this.legend,
                textStyle: {
                    color: "#fff",
                },
            },
            grid: {
                top: "16%",
                left: "5%",
                right: "5%",
                bottom: "15%",
                // containLabel: true
            },
            xAxis: [
                {
                    type: "category",
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
                    data: this.category,
                },
            ],
            yAxis:[
                {
                    name: this.yAxisUnit,
                    type:'value',
                    position: "left",
                    nameTextStyle: {
                        color: "#fff",
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
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        formatter: "{value}",
                        color: "#fff",
                        fontSize: 14,
                    },
                },
            ],
            series: this.series,
        };
        SquireChart.setOption(options);
    },
};
</script>