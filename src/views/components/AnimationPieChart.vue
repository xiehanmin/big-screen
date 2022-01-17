<template>
    <!-- 年度开工率 -->
    <div class="dashboardWrap">
        <div ref="dashboard" :style="{ height: height, width: '100%' }"></div>
    </div>
</template>

<script>
const getCirlPoint = (x0, y0, r, angle) => {
    //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
    let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
    let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
    return {
        x: x1,
        y: y1,
    };
};
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
            default: "150px",
        },
        chartData: {
            type: Object,
            default: () => {
                return {
                    value: 360,
                    name: "警押比",
                    title: "AQI指数",
                    unit: "ppm",
                };
            },
        },
    },
    mounted() {
        let myChart = echarts.init(this.$refs.dashboard);
        let angle = 0; //角度，用来做简单的动画效果的
        let options = {
            backgroundColor: "transparent",
            grid: {
                left: 0,
                right: 0,
            },
            legend: {
                type: "plain",
                orient: "vertical",
                right: 0,
                top: "10%",
                align: "auto",
                data: [
                    {
                        name: "涨价后没吃过",
                        icon: "circle",
                    },
                    {
                        name: "天天吃",
                        icon: "circle",
                    },
                    {
                        name: "三五天吃一次",
                        icon: "circle",
                    },
                    {
                        name: "半个月吃一次",
                        icon: "circle",
                    },
                ],
                textStyle: {
                    color: "white",
                    fontSize: 16,
                    padding: [10, 1, 10, 0],
                },
                selectedMode: false,
            },
            series: [
                {
                    name: "ring5",
                    type: "custom",
                    coordinateSystem: "none",
                    renderItem: function (params, api) {
                        return {
                            type: "arc",
                            shape: {
                                cx: api.getWidth() / 2,
                                cy: api.getHeight() / 2,
                                r:
                                    (Math.min(api.getWidth(), api.getHeight()) /
                                        2) *
                                    1.1,
                                startAngle: ((0 + angle) * Math.PI) / 180,
                                endAngle: ((90 + angle) * Math.PI) / 180,
                            },
                            style: {
                                stroke: "#29b2ff",
                                fill: "transparent",
                                lineWidth: 1.5,
                            },
                            silent: true,
                        };
                    },
                    data: [0],
                },
                {
                    name: "ring5",
                    type: "custom",
                    coordinateSystem: "none",
                    renderItem: function (params, api) {
                        return {
                            type: "arc",
                            shape: {
                                cx: api.getWidth() / 2,
                                cy: api.getHeight() / 2,
                                r:
                                    (Math.min(api.getWidth(), api.getHeight()) /
                                        2) *
                                    1.1,
                                startAngle: ((180 + angle) * Math.PI) / 180,
                                endAngle: ((270 + angle) * Math.PI) / 180,
                            },
                            style: {
                                stroke: "#29b2ff",
                                fill: "transparent",
                                lineWidth: 1.5,
                            },
                            silent: true,
                        };
                    },
                    data: [0],
                },
                {
                    name: "ring5",
                    type: "custom",
                    coordinateSystem: "none",
                    renderItem: function (params, api) {
                        return {
                            type: "arc",
                            shape: {
                                cx: api.getWidth() / 2,
                                cy: api.getHeight() / 2,
                                r:
                                    (Math.min(api.getWidth(), api.getHeight()) /
                                        2) *
                                    1.15,
                                startAngle: ((270 + -angle) * Math.PI) / 180,
                                endAngle: ((40 + -angle) * Math.PI) / 180,
                            },
                            style: {
                                stroke: "#29b2ff",
                                fill: "transparent",
                                lineWidth: 1.5,
                            },
                            silent: true,
                        };
                    },
                    data: [0],
                },
                {
                    name: "ring5",
                    type: "custom",
                    coordinateSystem: "none",
                    renderItem: function (params, api) {
                        return {
                            type: "arc",
                            shape: {
                                cx: api.getWidth() / 2,
                                cy: api.getHeight() / 2,
                                r:
                                    (Math.min(api.getWidth(), api.getHeight()) /
                                        2) *
                                    1.15,
                                startAngle: ((90 + -angle) * Math.PI) / 180,
                                endAngle: ((220 + -angle) * Math.PI) / 180,
                            },
                            style: {
                                stroke: "#29b2ff",
                                fill: "transparent",
                                lineWidth: 1.5,
                            },
                            silent: true,
                        };
                    },
                    data: [0],
                },
                {
                    name: "ring5",
                    type: "custom",
                    coordinateSystem: "none",
                    renderItem: (params, api) => {
                        let x0 = api.getWidth() / 2;
                        let y0 = api.getHeight() / 2;
                        let r =
                            (Math.min(api.getWidth(), api.getHeight()) / 2) *
                            1.15;
                        let point = getCirlPoint(x0, y0, r, 90 + -angle);
                        return {
                            type: "circle",
                            shape: {
                                cx: point.x,
                                cy: point.y,
                                r: 2,
                            },
                            style: {
                                stroke: "#29b2ff", //粉
                                fill: "#29b2ff",
                            },
                            silent: true,
                        };
                    },
                    data: [0],
                },
                {
                    name: "ring5", //绿点
                    type: "custom",
                    coordinateSystem: "none",
                    renderItem: (params, api) => {
                        let x0 = api.getWidth() / 2;
                        let y0 = api.getHeight() / 2;
                        let r =
                            (Math.min(api.getWidth(), api.getHeight()) / 2) *
                            1.15;
                        let point = getCirlPoint(x0, y0, r, 270 + -angle);
                        return {
                            type: "circle",
                            shape: {
                                cx: point.x,
                                cy: point.y,
                                r: 2,
                            },
                            style: {
                                stroke: "#29b2ff", //绿
                                fill: "#29b2ff",
                            },
                            silent: true,
                        };
                    },
                    data: [0],
                },
                {
                    type: "gauge",
                    radius: "100%",
                    startAngle: 200,
                    endAngle: -20,
                    splitNumber: 22,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: [
                                // 有数值的部分
                                [
                                    1,
                                    new echarts.graphic.LinearGradient(
                                        0,
                                        1,
                                        0,
                                        0,
                                        [
                                            {
                                                offset: 0,
                                                color: "#29b2ff",
                                            },
                                            {
                                                offset: 0.5,
                                                color: "#29b2ff", // 100% 处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: "#29b2ff",
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
                                                color: "rgba(41,178,255,0.4)", // 0% 处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: "rgba(41,178,255,0.4)", // 100% 处的颜色
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
                        length: 14,
                        lineStyle: {
                            color: "auto",
                            width: 6,
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
                            value: 299,
                            itemStyle: {
                                color: "#ffffff",
                                textShadowBlur: 20,
                                textShadowColor: "#0075ff",
                            },
                        },
                    ],
                },
            ],
        };

        setInterval(function () {
            //用setInterval做动画感觉有问题
            angle = angle + 3;
            myChart.setOption(options, true);
        }, 100);

        myChart.setOption(options);
    },
    methods: {},
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