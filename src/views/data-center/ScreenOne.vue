<template>
    <div class="screen_one">
        <div class="screen_one_item screen_item" style="padding-bottom: 20px">
            <div class="screen_title">电量统计</div>
            <div class="screen_one_item_content">
                <div class="content_item">
                    <div class="minTitle">
                        <i class="lamp" /> 客户状态管理统计
                    </div>
                    <div style="display: flex">
                        <div class="divider">
                            <div class="text_bg"><span>潜在客户总数</span></div>
                            <i class="breathing_lamp lamp" />
                            <div class="number"><span>6578</span></div>
                        </div>
                        <div class="divider">
                            <div class="text_bg">
                                <span>合同即将到期数</span>
                            </div>
                            <i class="breathing_lamp lamp" />
                            <div class="number"><span>6578</span></div>
                        </div>
                        <div class="divider">
                            <div class="text_bg"><span>转租总数</span></div>
                            <i class="breathing_lamp lamp" />
                            <div class="number"><span>6578</span></div>
                        </div>
                    </div>
                    <div style="display: flex; margin-top: 10px">
                        <div class="divider">
                            <div class="text_bg"><span>租金逾期总数</span></div>
                            <i class="breathing_lamp lamp" />
                            <div class="number"><span>6578</span></div>
                        </div>
                        <div class="divider">
                            <div class="text_bg">
                                <span>租金总催缴总数</span>
                            </div>
                            <i class="breathing_lamp lamp" />
                            <div class="number"><span>6578</span></div>
                        </div>
                        <div class="divider">
                            <div class="text_bg"><span>退租总数</span></div>
                            <i class="breathing_lamp lamp" />
                            <div class="number"><span>6578</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content_item" style="margin-top: 35px; height: 200px">
                <div class="minTitle" style="margin-bottom: 0">
                    <i class="lamp" /> 项目入驻率统计
                </div>
                <div style="padding: 10px; box-sizing: border-box">
                    <LineChart
                        :grid="{ right: '1%' }"
                        :series="static1.series"
                        :category="static1.category"
                        :legend="static1.legend"
                        yAxisUnit="百分比"
                    />
                </div>
            </div>
        </div>
        <div class="screen_one_item">
            <div class="screen_title">租赁合同到期面积统计</div>
            <BarChart
                :grid="{ top: '17%' }"
                :series="series"
                :category="category"
                yAxisName="平方米"
                height="200px"
            />
        </div>
        <div class="screen_one_item">
            <div class="screen_title">租金催缴订单统计</div>
            <div class="table">
                <div class="row table_head">
                    <div class="col_3">租户</div>
                    <div class="col_3">催缴金额（元）</div>
                    <div class="col_3">租金剩余天数</div>
                </div>
                <div class="table_body">
                    <div
                        :class="{ row: true, active: active == index }"
                        v-for="(item, index) in tableData"
                        :key="'row' + index"
                        @click="active = index"
                    >
                        <div class="col_3">{{ item.name }}</div>
                        <div class="col_3">{{ item.money }}</div>
                        <div class="col_3">{{ item.day }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BarChart from "../components/BarChart.vue";
import LineChart from "../components/LineChart.vue";
import echarts from "echarts";

export default {
    mixins: [],
    data() {
        return {
            active: -1,
            static1: {
                legend: ["鹿港大厦", "悦开工中心", "诚远大厦"],
                category: ["01月", "03月", "05月", "07月", "09月", "11月"],
                series: [
                    {
                        name: "鹿港大厦",
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
                        tooltip: {
                            show: false,
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
                        data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
                    },
                    {
                        name: "悦开工中心",
                        type: "line",
                        smooth: true, //是否平滑
                        symbolSize: 0,
                        lineStyle: {
                            normal: {
                                color: "#00ca95",
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
                        data: [67, 97, 51, 338, 32, 11, 1],
                    },
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
            tableData: [
                { name: "上海天问道具制作有限公司", money: 134300, day: 10 },
                { name: "上海天问道具制作有限公司", money: 134300, day: 10 },
                { name: "上海天问道具制作有限公司", money: 134300, day: 10 },
                { name: "上海天问道具制作有限公司", money: 134300, day: 10 },
                { name: "上海天问道具制作有限公司", money: 134300, day: 10 },
                { name: "上海天问道具制作有限公司", money: 134300, day: 10 },
                { name: "上海天问道具制作有限公司", money: 134300, day: 10 },
                { name: "上海天问道具制作有限公司", money: 134300, day: 10 },
                { name: "上海天问道具制作有限公司", money: 134300, day: 10 },
                { name: "上海天问道具制作有限公司", money: 134300, day: 10 },
                { name: "上海天问道具制作有限公司", money: 134300, day: 10 },
                { name: "上海天问道具制作有限公司", money: 134300, day: 10 },
                { name: "上海天问道具制作有限公司", money: 134300, day: 10 },
                { name: "上海天问道具制作有限公司", money: 134300, day: 10 },
                { name: "上海天问道具制作有限公司", money: 134300, day: 10 },
            ],
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
                    data: [100, 300, 130, 780],
                },
            ],
            chartData: [100, 300, 130, 250, 780],
            category: ["15天", "30天", "60天", "90天"],
        };
    },
    components: {
        BarChart,
        LineChart,
    },

    mounted() {},
    methods: {},
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/big-screen.scss";
.screen_one {
    width: 42%;
    color: rgb(204, 230, 255);
    overflow: hidden;
    &_item {
        &_content {
            display: flex;
            padding: 0 10px;
            box-sizing: border-box;
            background: url("../../assets/big-screen/item_bg.png") no-repeat
                center;
            background-size: 100% 100%;
            .minTitle {
                margin-top: -5px;
            }
            .divider {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .text_bg {
                background: url("../../assets/big-screen/text_bg.png") no-repeat
                    center;
                background-size: 100% 100%;
                height: 30px;
                padding: 2px 18px;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                span {
                    color: rgb(255, 255, 255);
                    font-size: 12px;
                    filter: drop-shadow(rgb(0, 117, 255) 0px 0px 4px);
                    text-shadow: rgb(0 117 255) 0px 0px 4px;
                    letter-spacing: 5px;
                }
            }
            .number {
                height: 30px;
                width: 110px;
                background: url("../../assets/big-screen/number_bg.png")
                    no-repeat center;
                background-size: 100% 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                span {
                    color: rgb(204, 234, 255);
                    letter-spacing: 10px;
                    font-size: 14px;
                    filter: drop-shadow(rgb(204, 234, 255) 0px 0px 1px);
                    text-shadow: rgb(204, 234, 255) 0px 0px 1px;
                }
            }
        }
    }
    .table {
        .row {
            color: #fff;
            display: flex;
            text-align: center;
            padding: 15px 0;
            box-sizing: border-box;
            .col_3 {
                width: 33.33%;
            }
        }
        &_body {
            height: 180px;
            overflow-x: hidden;
            overflow-y: scroll;
            font-size: 14px;
            cursor: pointer;
            .row:nth-child(2n-1) {
                background: rgba(1, 22, 53, 0.7);
            }
            .active {
                border: 2px solid #989d11;
            }
        }

        &_body::-webkit-scrollbar {
            display: none;
        }
    }
}
</style>