<template lang="pug">
    include ../assets/bemto/bemto.pug

    +b.FOOTER.footer
        +e.P.text.wrp.font
            | (c) Ernest
            span Shelyag
            | 2018

</template>

<script>
    export default {
        name: "footerBlock"
    }
</script>

<style lang="sass">
    @import "@/sass/mixins.sass"

    .footer
        display: block
        padding: 5px 0
        width: 100%
        text-align: center
        &__text span
            color: $main-col

</style>