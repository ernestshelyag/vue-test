<template lang="pug">
    include ../assets/bemto/bemto.pug

    +b.HEADER.header
        +e.wrp.wrp
            router-link(to="/")
                +e.logo-block
                    +e.IMG.logo(src="@/assets/img/logo.png")
                    +e.H1.title.font
                        span Vue
                        | Test task
            +e.cont
                router-link(to="/about")
                    +e.A.link Описание работы
                router-link(to="/")
                    +e.A.link Товары
                router-link(to="/basket")
                    +e.A.link_basket Корзина
                        basket-img

</template>

<script>
    import BasketImg from "../components/basket-img";

    export default {
        name: "header-block",
        components: {BasketImg}
    }
</script>

<style lang="sass">
    @import "@/sass/mixins.sass"

    .header
        display: block
        border-bottom: solid 1px rgba($font-col, 0.2)
        padding: 5px 0
        margin-bottom: 20px
        &__wrp
            display: flex
            align-items: center
            justify-content: space-between
        &__logo-block
            display: flex
            align-items: center
        &__logo
            width: 50px
            height: 50px
        &__title
            font-size: 30px
            color: $font-col
            margin-left: 10px
            span
                color: $main-col
        &__link
            color: $font-col
            text-transform: uppercase
            font-weight: 300
            margin-left: 30px
            &:hover
                color: $main-col
            &_basket
                padding-right: 45px
                position: relative
                & > div
                    height: 40px
                    position: absolute
                    top: 0
                    bottom: 0
                    margin: auto
                    right: 0

</style>