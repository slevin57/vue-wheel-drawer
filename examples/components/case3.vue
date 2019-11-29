<template>
    <div class="case" id="case2">
        <wheel-drawer
            ref="wheelRef"
            :prize-list="prizeList"
            @pointerClick="startHdl"
            :bg-img="require('../assets/img/zp2.png')"
            :bg-deg="30"
            @rotateOver="overHdl">
        </wheel-drawer>
        <ul>
            <li v-for="(prize, index) in prizes" :key="index">{{index+1}}.抽中了【{{prize.name}}】</li>
        </ul>
    </div>
</template>
<script>

export default {
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
            prizeIndex: 0,
            prizes: [],
        };
    },
    methods :{
        // 模拟异步数据请求
        fetchData () {
            return new Promise((res,rej) => {
                setTimeout(() => {
                    function getRndInteger(min, max) {
                        return Math.floor(Math.random() * (max - min + 1) ) + min;
                    }
                    // 生成随机礼物的下标
                    this.prizeIndex = getRndInteger(0, this.prizeList.length-1);
                    console.log('生成的奖品:',this.prizeList[this.prizeIndex].name);
                    res(true);
                }, 500);
            }).catch()
        },
        async startHdl(e) {
            await this.fetchData();
            // 调用组件开始方法，传入下标
            this.$refs.wheelRef.go(this.prizeIndex);
        },
        overHdl() {
            this.prizes.push(this.prizeList[this.prizeIndex]);
        }
    }
};
</script>

<style lang="scss" scoped>
.case {
    padding: 60px;
}
#case2 {
    display: flex;
    flex-direction: column;
}
ul {
    margin-top: 20px;
    width: 100%;
}
li {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
