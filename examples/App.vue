<template>
    <div class="page">
        <!-- <wheel-drawer
            ref="wheelRef"
            :prize-list="prizeList"
            :bg-deg="30"
            :bg-img="require('./assets/img/zp2.png')"
            @pointerClick="startHdl"
            @rotateOver="overHdl">
            <img src="./assets/img/pointer.png" alt="">
        </wheel-drawer> -->
        
        <wheel-drawer
            ref="wheelRef"
            :prize-list="prizeList"
            :bg-img="require('./assets/img/zp2.png')"
            :bg-deg="30"
            :font-color="'#333'"
            @pointerClick="startHdl"
            @rotateOver="overHdl">
            <img src="./assets/img/pointer.png" alt="">
        </wheel-drawer>
    </div>
</template>
<script>

export default {
    components: {
        wheelDrawer: () => import('../packages/wheel-drawer/src/wheel-drawer'),
    },
    data(){
        return {
            prizeList: [
                {
                    name: "一等奖冰箱冰箱冰箱冰箱冰箱",
                    id: 1,
                    bgColor: "#fff"
                },
                {
                    name: "二等奖：彩电",
                    id: 2,
                    bgColor: "#000"
                },
                {
                    name: "二等奖：彩电",
                    id: 2,
                    bgColor: "#fff"
                },
                {
                    name: "三等奖：洗衣机",
                    id: 3,
                    bgColor: "#000"
                },
                {
                    name: "一等奖：冰箱冰箱冰箱冰箱冰箱",
                    id: 1,
                    bgColor: "#fff"
                },
                {
                    name: "二等奖：彩电",
                    id: 2,
                    bgColor: "#000"
                },
                {
                    name: "二等奖：彩电",
                    id: 2,
                    bgColor: "#fff"
                },
                {
                    name: "三等奖：洗衣机",
                    id: 3,
                    bgColor: "#000"
                },
                {
                    name: "三等奖：洗衣机",
                    id: 3,
                    bgColor: "#000"
                },
            ],
            prizeIndex: 4,
        };
    },
    methods :{
        startHdl(e) {
            function getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
            }
            // 生成随机礼物的下标
            this.prizeIndex = getRndInteger(0, this.prizeList.length-1);

            // 调用组件开始方法，传入下标
            this.$refs.wheelRef.go(this.prizeIndex);
        },
        overHdl() {
            alert(`抽中了【 ${this.prizeList[this.prizeIndex].name} 】`);
        }
    }
};
</script>

<style lang="scss" scoped>
.page {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
