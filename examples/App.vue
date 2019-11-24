<template>
    <div>
        <wheel-drawer
            ref="wheelRef"
            :prize-list="prizeList"
            :bg-deg="30"
            :bg-img="require('./assets/img/zp2.png')"
            @pointerClick="startClick"
            @rotateOver="overHdl">
            <img src="./assets/img/pointer.png" alt="">
        </wheel-drawer>

        <!-- <img src="../../assets/img/1111/pointer.png" alt="">
        <img src="../../static/assets/zp.png" alt="">
        <img :src="require('../../static/assets/zp.png')" alt=""> -->
    </div>
</template>
<script>
// :
export default {
    data(){
        return {
            prizeList: [
                {
                    name: "我是奖品法定发送到发大沙发等发达送到发送到",
                    id: 12,
                    bgColor: "#fff"
                },
                {
                    name: "打发大水发收待发放",
                    id: 12,
                },
                {
                    name: "案发生的发达",
                    id: 12,
                    bgColor: "#fff"
                },
                {
                    name: "打发打发发啊",
                    id: 12,
                },
                {
                    name: "打发打发发啊",
                    id: 12,
                },
                {
                    name: "打发打发发啊",
                    id: 12,
                },
                {
                    name: "我大",
                    id: 12,
                },
                {
                    name: "我大",
                    id: 12,
                },
                {
                    name: "我大",
                    id: 12,
                },
            ],
            prizeIndex: 4,
        };
    },
    mounted(){

    },
    methods :{
        startClick(e) {
            function getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
            }
            this.prizeIndex = getRndInteger(0, this.prizeList.length-1);
            this.$refs.wheelRef.go(this.prizeIndex);
            console.log("this.prizeIndex:", this.prizeIndex, this.prizeList[this.prizeIndex].name);
        },
        overHdl() {
            alert(`抽中了【 ${this.prizeList[this.prizeIndex].name} 】`);
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
