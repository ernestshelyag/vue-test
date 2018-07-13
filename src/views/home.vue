<template lang="pug">
    include ../assets/bemto/bemto.pug

    +b.home.wrp
        +e.H1.title.h1
            | Тестовое задание - "интернет магазин"
        +e.H2.shop-title.h2
            | Список товаров:

        +e.UL.list
            +e.LI.item(v-for="(item, i) in products" :key="item.id")
                +e.box
                    +e.info-block
                        +e.H3.product-title.h3
                            | {{ item.name }}
                        +e.P.text
                            | {{ item.description }}
                    +e.img-block
                        img.home__img(:src="item.img")
                +e.SPAN.price
                    | Стоимость: {{ item.price }} руб.
                +e.BUTTON.btn.btn(
                    type="button"
                    @click="addProduct(i)"
                    )
                    | Добавить в корзину

</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        name: "home",
        data() {
            return {
                products: [
                    {
                        id: 1,
                        name: 'Карандаш',
                        img: 'https://ecs7.tokopedia.net/img/cache/300/product-1/2016/9/25/1005120/1005120_a86f97c1-9cdb-4588-95d3-0c523e7b8a2f.jpg',
                        description: 'Карандаш - описание: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam at deserunt.',
                        price: 10
                    },
                    {
                        id: 2,
                        name: 'Степлер',
                        img: "http://sidex.ru/images_offers/304/304713/stepler_kwtrio_5101_n10_do_20_listov_vstroennii_antistepler_asso.jpg",
                        description: 'Степлер - описание: Lorem ipsum dolor sit amet.',
                        price: 200
                    },
                    {
                        id: 3,
                        name: 'Линейка',
                        img: "https://avatars.mds.yandex.net/get-marketpic/171655/market_wh9rtSxK-Nmi8UK8jKTMGw/900x1200",
                        description: 'Линейка - описание: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam at deserunt excepturi facilis hic optio porro quo recusandae sunt.',
                        price: 50
                    },
                ]
            }
        },
        methods: {
            ...mapMutations(['ADD_PRODUCT']),

            // добавление товара в корзину
            addProduct(i) {
                let basketProduct = {id: '', name: '', price: ''};

                basketProduct.id = Math.random(); // рандомный id для transition-group
                basketProduct.name = this.products[i].name;
                basketProduct.price = this.products[i].price;

                this.ADD_PRODUCT(basketProduct)
            }
        }
    }
</script>

<style lang="sass">
    @import "@/sass/mixins.sass"

    .home
        &__shop-title
            margin: 40px 0
        &__list
            display: flex
            justify-content: space-between
        &__item
            width: 32%
            background: #fff
            border-radius: 5px
            padding: 20px 10px
            display: flex
            flex-direction: column
            justify-content: space-between
        &__box
            flex-grow: 1
            display: flex
        &__info-block
            flex-grow: 1
        &__text
            margin-top: 10px
        &__img-block
            min-width: 100px
            margin: 0 10px
            position: relative
        &__img
            +vcenter
            width: 100%
            height: auto
        &__price
            font-weight: 600
            font-size: 20px
            display: block
            margin: 10px auto
        &__btn
            margin: auto
    
</style>