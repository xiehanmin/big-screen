<template>
    <div class="screen_two">
        <div class="screen_two_item">
            <div class="screen_titleone">48小时用电趋势</div>
            <div class="bg">
                <BarChart
                    height="390px"
                    :series="barChart1.series"
                    :category="barChart1.category"
                />
            </div>
        </div>
        <div class="screen_two_item">
            <div class="screen_titleone">20日用电量趋势</div>
            <div class="bg">
                <BarChart
                    height="390px"
                    :series="data1.series"
                    :legend="data1.legend"
                    :category="data1.category"
                />
            </div>
        </div>
        <div class="screen_two_item">
            <div class="screen_titleone">12月用电趋势</div>
            <div class="bg">
                <BarChart
                    height="390px"
                    :series="barChart2.series"
                    :category="barChart2.category"
                />
            </div>
        </div>
    </div>
</template>
<script>
import BarChart from "../components/BarChart";
export default {
    mixins: [],
    data() {
        return {
            active: -1,
            data1: {
                series: [
                    {
                        name: "室内用电",
                        type: "bar",
                        barWidth: 5,
                        stack: "Search Engine",
                        emphasis: {
                            focus: "series",
                        },
                        itemStyle: {
                            normal: { color: "#147CDF" },
                        },
                        data: [
                            10, 20, 30, 40, 50, 60, 70, 150, 10, 20, 30, 40, 50,
                            60, 70, 80, 90, 100, 110, 120,
                        ],
                    },
                    {
                        name: "空调用电",
                        type: "bar",
                        barWidth: 5,
                        stack: "Search Engine",
                        emphasis: {
                            focus: "series",
                        },
                        itemStyle: {
                            normal: { color: "#DBD01D" },
                        },
                        data: [
                            20, 30, 40, 50, 60, 70, 80, 150, 160, 20, 30, 40,
                            50, 60, 70, 80, 90, 100, 110, 120, 130,
                        ],
                    },
                ],
                category: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                ],
                legend: ["室内用电", "空调用电"],
            },
            series: [
                {
                    name: "已贯通",
                    type: "bar",
                    barWidth: 16,
                    showBackground: true,
                    backgroundStyle: {
                        color: "rgba(128,128,128,0.1)",
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
                    data: [100, 300, 130, 780, 150],
                },
            ],
            yAxisData: ["顶楼", "一楼", "三楼", "四楼", "五楼"],
            category: ["15天", "30天", "60天", "90天"],
            barChart: {
                series: [
                    {
                        name: "已贯通",
                        type: "bar",
                        barWidth: 18,
                        showBackground: true,
                        backgroundStyle: {
                            color: "rgba(128,128,128,0.1)",
                        },
                        itemStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        { offset: 0, color: "#1890ff" },
                                        { offset: 1, color: "#034ecc" },
                                    ]
                                ),
                            },
                        },
                        data: [10, 30, 10, 70],
                    },
                ],
                chartData: [10, 30, 10, 10, 70],
                category: ["15天", "30天", "60天", "90天"],
            },
            barChart1: {
                category: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                ],
                series: [
                    {
                        label: {
                            normal: {
                                show: true,
                                // formatter:"{c}%",
                                position: "top",
                                textStyle: {
                                    color: "black",
                                },
                            },
                        },
                        name: "一期",
                        barWidth: "35%",
                        type: "bar",
                        // stack:"1",    // 如果stack一樣就會堆疊
                        // 重疊
                        barGap: "-100%",
                        //   data: this.b
                        itemStyle: {
                            normal: { color: "#147CDF" },
                        },
                        data: [
                            50, 90, 200, 30, 100, 54, 79, 50, 90, 200, 50, 90,
                            200, 30, 100, 54, 79, 50, 90, 200, 50, 90, 200, 30,
                            100, 54, 79, 50, 90, 200, 50, 90, 200, 30, 100, 54,
                            79, 50, 90, 200, 50, 90, 200, 30, 100, 54, 79, 50,
                        ],
                    },
                ],
            },
            barChart2: {
                category: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30",
                ],
                series: [
                    {
                        label: {
                            normal: {
                                show: true,
                                // formatter:"{c}%",
                                position: "top",
                                textStyle: {
                                    color: "black",
                                },
                            },
                        },
                        name: "一期",
                        barWidth: "35%",
                        type: "bar",
                        // stack:"1",    // 如果stack一樣就會堆疊
                        // 重疊
                        barGap: "-100%",
                        //   data: this.b
                        itemStyle: {
                            normal: { color: "#147CDF" },
                        },
                        data: [
                            50, 90, 200, 30, 100, 54, 79, 50, 90, 200, 50, 90,
                            200, 30, 100, 54, 79, 50, 90, 200, 50, 90, 200, 30,
                            100, 54, 79, 50, 90, 200,
                        ],
                    },
                ],
            },
        };
    },
    components: {
        BarChart,
    },

    mounted() {},
    methods: {},
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/big-screen.scss";

.bg {
    height: 410px;
    background: url("../../assets/big-screen/item_bg.png") no-repeat center;
    background-size: 100% 100%;
    padding-top: 20px;
    box-sizing: border-box;
}

.screen_two {
    width: 100%;
    display: flex;
    color: rgb(204, 230, 255);
    &_item {
        width: 33%;
    }
}

.screen_titleone {
    width: 100%;
    background: url("../../assets/big-screen/title_bg.png") no-repeat center;
    background-size: 100% 100%;
    text-align: center;
    letter-spacing: 4px;
    font-size: 17px;
    height: 72px;
    line-height: 88px;
    box-sizing: border-box;
    font-weight: bold;
    overflow: hidden;
    text-shadow: rgb(0 117 255) 0px 0px 16px;
    font-size: 20px;
}
</style>