<template>
    <section class="profile">
        <div class="profile__info block-elem">
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="89" height="89" rx="44.5" stroke="#EAEAEA"/>
                <rect x="5" y="5" width="80" height="80" rx="40" fill="#C4C4C4"/>
            </svg>
            <div>
                <p class="profile__text">Alex Geovanny</p>
                <p class="profile__info__mail">alexgeov@mail.com</p>
            </div>
        </div>

        <div class="block-elem">
            <div>
                <p class="profile__text">Отдел:</p>
                <p class="profile__text">Группа:</p>
                <p class="profile__text">Должность:</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    .profile {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        justify-self: center;
        padding-top: 30px;
    }

    .profile__info {
        gap: 30px;
    }

    .profile__text {
        font-weight: 500;
        font-size: 21px;
        line-height: 31px;
        color: #2D3134;
    }

    .profile__info__mail {
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #717579;
    }
</style>