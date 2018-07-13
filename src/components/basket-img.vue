<template lang="pug">

    .basket-img
        .basket-img__cont
            img.basket-img__img(src="@/assets/img/basket.svg")
            span.basket-img__num(v-if="inBasket.length") {{ countProds }}

</template>

<script>
    import { mapGetters, mapState } from 'vuex'

    export default {
        name: "basket",
        computed: {
            ...mapGetters(['countProds']),
            ...mapState(['inBasket']),
        }
    }
</script>

<style lang="sass">

    .basket-img
        &__cont
            position: relative
        &__img
            width: 40px
            height: 40px
        &__num
            position: absolute
            background: #fff
            width: 25px
            height: 25px
            line-height: 25px
            text-align: center
            border-radius: 50%
            right: -10px
            bottom: 0

</style>

