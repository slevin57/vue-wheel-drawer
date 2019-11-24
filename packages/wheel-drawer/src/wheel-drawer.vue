<template>
    <div class="comp-wheel-drawer">
        <div class="wheel-container" :style="[rotateStyle]">
            <!-- 用于设置自定义背景图及调整角度 -->
            <div
                v-if="bgImg"
                class="wheel-bg"
                :style="[bgStyle]">
            </div>
            <!-- 转盘主体 -->
            <canvas
                id="canvasWheel"
                ref="canvasRef"
                :width="cw"
                :height="ch">
            </canvas>
        </div>
        <!-- 按钮插槽 -->
        <div class="pointer-container" @click="_startClick">
            <slot>
                <div class="pointer-main pointer-main-interaction1">指针</div>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "wheelDrawer",
    props: {
        // 奖品列表
        prizeList: {
            type: Array,
            required: true,
            default: () => [
                { name: "一等奖", id: 234, bgColor: "#fff" },
                { name: "er等奖", id: 334, bgColor: "pink" },
                { name: "san等奖", id: 434, bgColor: "#fff" },
                { name: "shi等奖", id: 534, bgColor: "pink" },
            ]
        },
        // 转盘的直径
        diam: {
            type: Number,
            default: () => 478,
        },
        // 自定义转盘图片
        bgImg: {
            type: String,
            default: "",
        },
        // 自定义转盘图片的旋转角度
        bgDeg: {
            type: Number,
            default: 0,
        },
        // 字体颜色
        fontColor: {
            type: String,
            default: () => "#FF69B4"
        },
        /**
         * 用于设置canvas的font属性，也就是文字的大小及样式种类等，
         * 通过传递这个属性，可以【更全面】得设置字体样式。
         * 同时如果传递了这个属性，则会【忽略】下面三个属性值：fonWeight, fontSize, fontFamily。
         * font属性用于设置或返回画布上文本内容的当前字体属性，
         * 与css中的font属性语法相同，
         * 参考：https://www.runoob.com/cssref/pr-font-font.html
         * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font
         */
        fontStyle: {
            type: String,
            default: "",
        },
        fontWeight: {
            type: String,
            default: () => "bold"
        },
        fontSize: {
            type: String,
            default: () => "17px"
        },
        fontFamily: {
            type: String,
            default: () => "Microsoft Yahei,Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,sans-serif"
        },
        // 奖品名称（第一行）的宽度
        fontLineWidth: {
            type: Number,
            default: () => 100
        },
        // 每个扇形中文字距离扇形弧边的距离
        sectorPadding: {
            type: Number,
            default: () => 65,
        },
        // 扇形中每行文字垂直方向的间隔
        fontGap: {
            type: Number,
            default: () => 20
        },
        // 旋转圈数
        rounds: {
            type: Number,
            default: 10,
        },
        // 旋转时长
        duration: {
            type: Number,
            default: 5,
        },
        // 旋转动画函数
        timingFn: {
            type: String,
            default: () => "cubic-bezier(0.11, 0.77, 0.2, 0.94)"
        },
    },
    data() {
        return {
            preIndex: -1,
            targetDeg: 0,
            isRotating: false, // 是否正在抽奖
        };
    },
    computed: {
        rotateStyle() {
            return {
                "transform": `rotate(${this.targetDeg}deg)`,
                "transition-duration": `${this.duration}s`,
                "transition-timing-function": `${this.timingFn}`,
                "transition-property": "transform",
                "transition-delay": "0s",
            };
        },
        bgStyle() {
            return {
                "background-image": `url(${this.bgImg})`,
                "transform": `rotate(${this.bgDeg}deg)`,
            };
        },
        customFontStyle() {
            return `${this.fontWeight} ${this.fontSize} ${this.fontFamily}`;
        },
        // canvas画布的宽度
        cw() {
            return this.diam;
        },
        // canvas画布的高度
        ch() {
            return this.diam;
        },
        // targetDeg1() {

        //     let baseDeg = 360 / this.prizeList.length;
        //     let middleLineDeg = this.prizeIndex * baseDeg + baseDeg / 2;
        //     let _targetDeg;

        //     if (this.preIndex === "") {
        //         if (middleLineDeg >= 270) {
        //             _targetDeg = 360 - (middleLineDeg - 270);
        //         } else {
        //             _targetDeg = this.prizeIndex === "" ? 0 : 270 - middleLineDeg;
        //         }
        //     } else {
        //         if (this.prizeIndex > this.preIndex) {
        //             _targetDeg = 360 - (this.prizeIndex - this.preIndex) * baseDeg;
        //         } else {
        //             _targetDeg = (this.preIndex - this.prizeIndex) * baseDeg;
        //         }
        //     }
        //     this.preIndex = this.prizeIndex;
        //     return this.prizeIndex === "" ? 0 : _targetDeg;
        // }
    },
    mounted() {
        this.renderWheel();
    },
    methods: {
        _startClick(e) {
            this.$emit("pointerClick", e);
        },
        /**
         * 根据奖品在列表中的下表生成对应的旋转值，开始旋转
         */
        go(targetIndex) {
            if (this.isRotating) return;
            this.isRotating = true;

            let baseDeg = 360 / this.prizeList.length;
            // 初始状态时每个扇形的中线角度
            // ps.初始状态指还未旋转的状态，canvas作图默认第一个扇形是与x轴水平对齐的，然后沿顺时针旋转
            let middleLineDeg = targetIndex * baseDeg + baseDeg / 2;
            let _targetDeg = 0;

            //  第一次旋转，targetDeg为0
            if (this.preIndex === -1) {
                // 360 - (90 + middleLineDeg)
                _targetDeg = 270 - middleLineDeg;
            } else {
                _targetDeg = 360 - (targetIndex - this.preIndex) * baseDeg;
            }

            this.targetDeg += _targetDeg + this.rounds * 360;
            this.preIndex = targetIndex;

            setTimeout(() => {
                this.isRotating = false;
                this.$emit("rotateOver");
            }, this.duration * 1000 + 500);
        },
        /**
         * 根据奖品列表绘制转盘及内容
         */
        renderWheel() {
            // 设置随机色
            let randomColor = () => {
                var r = Math.floor(Math.random() * 256);
                var g = Math.floor(Math.random() * 256);
                var b = Math.floor(Math.random() * 256);
                return `rgb(${r}, ${g}, ${b})`;
            };

            // 根据指定长度将字符串切割为数组
            function getLineTextList(context, text, linMaxWidth) {
                let wordList = text.split(""), tempLine = "", lineList = [];
                for (let i = 0; i < wordList.length; i++) {
                    // measureText方法是测量文本的宽度的,这个宽度相当于我们设置的
                    // font-size的大小,所以基于这个,我们将linMaxWidth设置为当前字体大小的倍数
                    if (context.measureText(tempLine).width >= linMaxWidth) {
                        lineList.push(tempLine);
                        linMaxWidth -= context.measureText(text[0]).width;
                        tempLine = "";
                    }
                    tempLine += wordList[i];
                }
                lineList.push(tempLine);
                return lineList;
            }

            const slices = this.prizeList.length;
            let canvas = this.$refs.canvasRef;
            let ctx = canvas.getContext("2d");

            // var canvasW = canvas.width; // 画板的高度
            // var canvasH = canvas.height; // 画板的宽度
            let originX = this.cw / 2; // 转盘圆心x坐标
            let originY = this.ch / 2; // 转盘圆心y坐标
            let circleRadius = originX > originY ? originY : originX;  // 转盘半径
            var baseRadian = Math.PI * 2 / slices;  // 每一个扇形的弧度

            for (let i = 0; i < slices; i++) {

                const prize = this.prizeList[i]; // 数组中每个奖品
                let startRadian = i * baseRadian; // 绘制扇形的起点弧度
                let endRadian = (i + 1) * baseRadian; // 绘制扇形的终点弧度

                // 1. 开始绘制转盘
                ctx.beginPath();
                ctx.moveTo(originX, originY);
                ctx.arc(originX, originY, circleRadius, startRadian, endRadian);
                ctx.closePath();
                // 如果有自定义背景图，canvas背景设置为透明 => 没有的话，自定义每个扇形的背景色 => 没有自定义颜色的话每个扇形用随机色填充
                ctx.fillStyle = this.bgImg ? "rgba(255, 255, 255, 0)" : prize.bgColor || randomColor();
                ctx.fill();
                ctx.save();//保存当前环境的状态

                // 2. 给绘制好的转盘的每个扇形中填充文字
                let text = prize.name;
                ctx.fillStyle = this.fontColor;
                ctx.font = this.fontStyle || this.customFontStyle;
                // 把画布的坐标原点移动到扇形弧边的中心
                ctx.translate(
                    originX + Math.cos(startRadian + baseRadian / 2) * circleRadius,
                    originY + Math.sin(startRadian + baseRadian / 2) * circleRadius,
                );
                // 旋转文字的绘图至于当前扇形中线垂直
                // ps：rotate(startRadian+baseRadian / 2)之后于扇形中线完全垂直，所以再多一个Math.PI/2的弧度，相当于90度的垂直角度
                ctx.rotate(startRadian + baseRadian / 2 + Math.PI / 2);

                getLineTextList(ctx, text, this.fontLineWidth).forEach((line, index) => {
                    // 填充文字并且设置为居中
                    ctx.fillText(line, -ctx.measureText(line).width / 2, (index * this.fontGap) + this.sectorPadding);
                });
                ctx.restore();
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.comp-wheel-drawer {
    position: relative;
    display: inline-block;
}
.wheel-container {
    display: inline-block;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    pointer-events: none;
}
.wheel-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
#canvasWheel {
    pointer-events: none;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}
.pointer-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
}
.pointer-main {
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: #fff;
    // background: skyblue;
    background: #00ddeb;
    border-radius: 50%;
    position: relative;
    &::before {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border-right: 30px solid transparent;
        border-left: 30px solid transparent;
        border-bottom: 30px solid #00ddeb;
        position: absolute;
        top: -38%;
        left: 50%;
        transform: translate(-50%, 50%);
        z-index: -1;
    }
}
// 按钮交互动效1
.pointer-main-interaction1 {
    box-shadow: 0px 5px #028d96;
    transition: all 0.2s ease;
    user-select: none;
    top: 0;
    &:hover {
        box-shadow: 0px 4px #006066;
    }
    &:active {
        top: 4px;
        box-shadow: 0px 0px #d3545d;
    }
}
// 按钮交互动效2
.pointer-main-interaction2 {
    background-color: #3bb3e0;
    background-image: linear-gradient(to bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
    box-shadow: inset 0px 1px 0px #7fd2f1, 0px 1px 0px #fff;
    padding: 10px;
    top: 0;
    &:active {
        padding-bottom: 9px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 11px;
        top: 1px;
        background-image: linear-gradient(to bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
    }
}
// 按钮交互动效3
.pointer-main-interaction3 {
    overflow: hidden;
    font-weight: bold;
    // color: #303030;
    color: #fff;
    background: #444;
    box-shadow: inset 0 0 2px 2px hsla(0,0%,0%,.2), inset 0 0 2px 4px hsla(0,0%,0%,.2), inset 0 0 2px 6px hsla(0,0%,0%,.2), inset 0 0 1px 8px hsla(0,0%,0%,.5), inset 0 -4px 2px 4px hsla(0,0%,0%,.5), inset 0 1px 1px 8px hsla(0,0%,100%,.25), inset 0 -30px 30px hsla(0,0%,0%,.2), 0 -4px 8px 4px hsla(0,0%,0%,.5), 0 10px 10px hsla(0,0%,0%,.25), 0 0 2px 2px hsla(0,0%,0%,.2), 0 0 2px 4px hsla(0,0%,0%,.2), 0 0 2px 6px hsla(0,0%,0%,.2), 0 0 2px 8px hsla(0,0%,0%,.5), 0 1px 2px 8px hsla(0,0%,100%,.25), 0 -1px 2px 8px hsla(0,0%,0%,.5);
    text-shadow: 0 1px 1px hsla(0,0%,100%,.25), 0 -1px 1px hsla(0,0%,0%,.75);
    &:hover {
        color: #0ab;
        text-shadow: 0 0 20px hsla(240,75%,75%,.5), 0 1px 1px hsla(0,0%,100%,.25), 0 -1px 1px hsla(0,0%,0%,.75);
    }
    &:active {
        box-shadow: inset 0 0 2px 2px hsla(0,0%,0%,.2), inset 0 0 2px 4px hsla(0,0%,0%,.2), inset 0 0 2px 6px hsla(0,0%,0%,.2), inset 0 0 1px 7px hsla(0,0%,0%,.5), inset 0 5px 15px 7px hsla(0,0%,0%,.15), inset 0 -4px 2px 3px hsla(0,0%,0%,.5), inset 0 1px 1px 7px hsla(0,0%,100%,.25), inset 0 -30px 30px hsla(0,0%,0%,.1), inset 0 30px 30px hsla(0,0%,0%,.2), 0 -4px 8px 4px hsla(0,0%,0%,.5), 0 5px 10px hsla(0,0%,0%,.25), 0 0 2px 2px hsla(0,0%,0%,.2), 0 0 2px 4px hsla(0,0%,0%,.2), 0 0 2px 6px hsla(0,0%,0%,.2), 0 0 2px 8px hsla(0,0%,0%,.5), 0 1px 2px 8px hsla(0,0%,100%,.25), 0 -1px 2px 8px hsla(0,0%,0%,.5);
        line-height: 86px;
    }
}
</style>
