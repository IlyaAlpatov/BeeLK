<template>
    <header class="header">
        <h2 class="header__title">Название раздела</h2>
        <b-field>
            <b-input class="header__search" placeholder="Search..."
                type="search"
                icon="magnify"
                icon-clickable>
            </b-input>
        </b-field>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 30px;
        background-color: #EDEDED;
    }

    .header__title {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 48px;
        color: #2D3134;
    }
</style>