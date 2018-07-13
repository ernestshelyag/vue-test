<template lang="pug">

    .basket.wrp
        h1.basket__title.h1 Корзина
        .basket__cont
            .basket__product-block
                p.basket__text(v-if="inBasket.length")
                    | Товары в корзине:
                p.basket__text(v-else)
                    | В корзине нет товаров.
                ul.basket__list
                    transition-group(name="del")
                        li.basket__item(v-for="(item, i) in inBasket" :key="item.id")
                            span.basket__name {{ item.name }}
                            span.basket__price {{ item.price }} руб.
                            button.basket__rm-btn(type="button" @click="rmProduct(i)")
                                | удалить
            .basket__info-block(v-if="inBasket.length")
                p.basket__text
                    | Товаров в корзине:
                    span {{ countProds }}
                span.basket__total
                    | общая стоимость: {{ sum }} руб.
                button.basket__btn.btn(type="button" @click="order")
                    | Заказать
                button.basket__btn.basket__btn_light.btn(type="button" @click="rmAll")
                    | Очистить корзину

</template>

<script>
    import { mapState, mapMutations, mapGetters } from 'vuex'

    export default {
        name: "basket",
        computed: {
            ...mapState(['inBasket']),
            ...mapGetters(['countProds']),

            // Общая стоимость товаров
            sum() {
                let sum = 0;
                for(let i = 0; i < this.inBasket.length; i++) {
                    sum += this.inBasket[i].price;
                }
                return sum;
            }
        },
        methods: {
            ...mapMutations([
                'RM_PRODUCT',
                'RM_ALL'
            ]),
            // Удалить элемент из корзины
            rmProduct(i) {
                this.RM_PRODUCT(i);
            },
            // Удалить все из корзины
            rmAll() {
                this.RM_ALL();
            },
            order() {
                alert('эта кнопка для красоты, она ничего не делает')
            }
        }
    }
</script>

<style lang="sass">
    @import "@/sass/mixins.sass"

    .basket
        &__title
            margin-bottom: 20px
        &__cont
            display: flex
            justify-content: space-between
            margin-bottom: 80px
            & > div
                width: 50%
        &__text
            text-transform: uppercase
            font-weight: 300
            font-size: 20px
            span
                font-size: 30px
                padding-left: 10px
                font-weight: 500
        &__list > span
            display: block
        &__item
            background: #fff
            margin-top: 10px
            padding: 10px
            border-radius: 5px
            +flex
            width: 100%
        &__name
            width: 200px
            text-transform: uppercase
        &__rm-btn
            border-radius: 5px
            color: #fff
            background: $font-col
            text-transform: uppercase
            font-size: 10px
            padding: 5px 10px
        &__info-block
            text-align: center
        &__total
            font-size: 30px
            margin: 30px 0
        &__btn
            margin: 20px auto 0
            &_light
                background: transparent
                border: solid 2px $main-col
                color: $font-col
                &:hover
                    color: $font-col

    .del-leave-active
        transition: all .5s
    .del-leave-to
        opacity: 0
        transform: scale(.5)
    
</style>