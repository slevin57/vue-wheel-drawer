<template>
    <div class="page">
        <case1></case1>
        <case2></case2>
        <case3></case3>
        <case4></case4>
        <case5></case5>
    </div>
</template>
<script>

export default {
    components: {
        case1: () => import('./components/case1'),
        case2: () => import('./components/case2'),
        case3: () => import('./components/case3'),
        case4: () => import('./components/case4'),
        case5: () => import('./components/case5'),
    },
    data(){ 
        return {

        }
    },
    methods :{  }
};
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 50px;
}
</style>
