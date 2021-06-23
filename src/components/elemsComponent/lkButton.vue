<template>
    <b-button class="btn" type="is-primary is-light"
    @click="$emit('click')">{{text}}</b-button>
</template>

<script>
export default {
    props: [
        'text',
    ]
}
</script>

<style lang="scss" scoped>

@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_mixins.scss';

.btn {
    color: $colorMenuActive !important;
    @include textStyle(500, 18px, 23px, $colorMenuActive);
    background-color: rgba(246, 111, 77, 0.15) !important;
}

.btn:hover {
    background-color: rgba(246, 111, 77, 0.185) !important;;
}

</style>