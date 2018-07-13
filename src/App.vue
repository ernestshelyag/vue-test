<template lang="pug">

    #app
        header-block
        router-view
        footer-block

</template>

<script>

    import headerBlock from "./components/headerBlock"
    import footerBlock from "./components/footerBlock";

    export default {
        name: 'App',
        components: {footerBlock, headerBlock}
    }
</script>

<style lang="sass">

    // общие стили
    @import "sass/reset"
    @import "sass/fonts"
    @import "sass/mixins"
    @import "sass/base"
    @import "sass/common"

    #app
        color:
        background: rgba(cadetblue, .3)
        display: flex
        flex-direction: column
        min-height: 100vh
        & > div
            flex-grow: 1
            width: 100%

</style>
