<template>
    <b-field :label="label">
        <b-input :type="type"
        :value="value">
        </b-input>
    </b-field>
</template>

<script>
export default {
    props: [
        'value',
        'label',
        'type',
    ]
}
</script>

<style lang="scss" scoped>

@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_mixins.scss';



</style>