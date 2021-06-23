<template>
    <div class="authorization">
        <div class="authorization__wrapper">
            <div class="authorization__block">
                <h1 class="title is-3 authorization__text">Авторизация <span class="logo-bee">Bee</span>LK</h1>
                <form class="authorization__form" action="">
                <lk-input class="authorization__text"
                :label="'Почта'"
                :value="'beeline.ru'"
                :type="'email'"></lk-input>
                <b-field class="authorization__text" label="Пароль">
                    <b-input type="password"
                    value=""
                    password-reveal>
                    </b-input>
                </b-field>
                <lk-button class="authorization__text" :text="'Вход'"
                @click="success"></lk-button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import lkButton from '../components/elemsComponent/lkButton.vue';
import lkInput from '../components/elemsComponent/lkInput.vue';

export default {
    components: {
        lkButton,
        lkInput
    },
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

    .authorization__form {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .authorization__text {
        @include textStyle(500, 22px, 34px, $colorDark);
    }
</style>