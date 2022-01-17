<template>
    <div ref="lineChart" :style="{ height: height, width: '250px' }"></div>
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
        colorList: {
            type: Array,
            default: () => [
                "#279cf2",
                "#13c2c2",
                "#bae7ff",
                "#03e4ff",
                "#b8ec8f",
                "#06375d",
                "#f32652",
            ],
        },
        height: {
            type: String,
            default: "230px",
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
        let myChart = echarts.init(this.$refs.lineChart);
        var option = {
            backgroundColor: "transparent",
            color: this.colorList,
            legend: {
                top: "center",
                orient: "vertical",
                right: "5%",
                itemGap: 10,
                itemWidth: 16,
                itemHeight: 16,
                textStyle: {
                    color: "#fff",
                    fontSize: 16,
                },
                data: ["B1楼", "楼顶", "1楼", "2楼", "3楼", "4楼", "广场"],
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)",
            },
            series: [
                {
                    name: "半径模式",
                    type: "pie",
                    center: ["20%", "60%"],
                    roseType: "radius",
                    label: {
                        show: false,
                    },
                    data: [
                        { name: "B1楼", value: 1000 },
                        { name: "楼顶", value: 710 },
                        { name: "1楼", value: 500 },
                        { name: "2楼", value: 300 },
                        { name: "3楼", value: 200 },
                        { name: "4楼", value: 100 },
                        { name: "广场", value: 100 },
                    ],
                },
            ],
        };
        //使用制定的配置项和数据显示图表
        myChart.setOption(option);
    },
};
</script>
