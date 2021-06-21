<template>
    <div class="authorization">
        <div class="authorization__wrapper">
            <div class="authorization__block">
                <h1 class="title is-3 authorization__text">Авторизация BeeLK</h1>
                <form action="">
                <b-field class="authorization__text" label="Почта">
                    <b-input type="email"
                    value="beeline.ru">
                    </b-input>
                </b-field>
                <b-field class="authorization__text" label="Пароль">
                    <b-input type="password"
                    value=""
                    password-reveal>
                    </b-input>
                </b-field>
                <b-button class="authorization__text" type="is-primary is-light"
                @click="success">Вход</b-button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {

        // Тосты
        danger() {
        this.$buefy.toast.open({
            duration: 1000,
            message: 'Вы ввели неверный пароль',
            type: 'is-danger',
            position: 'is-bottom',
        });
        },
        success() {
        this.$buefy.toast.open({
            duration: 1000,
            message: 'Вы успешно авторизовались',
            type: 'is-success',
            position: 'is-bottom',
        });
        },

    },
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/_variables.scss';
@import '../assets/scss/_mixins.scss';

    .authorization__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .authorization__block {
        @include blockStyle;
        flex-direction: column;
        max-width: 287px;
    }

    .authorization__text {
        @include textStyle(500, 22px, 34px, $colorAuth);
    }
</style>