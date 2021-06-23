<template>
    <header class="header">
        <b-navbar>
            <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <h2 class="header__title">Название раздела</h2>
            </b-navbar-item>
            </template>
            <template #start>
                <b-navbar-item href="#">
                    <b-field class="header__search">
                        <b-input placeholder="Поиск"
                            type="search"
                            icon="magnify"
                            icon-clickable>
                        </b-input>
                    </b-field>
                </b-navbar-item>
                <b-navbar-item href="#">
                        <span v-if="!notifications.length">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.95996 22.0013C9.48121 23.1735 10.6371 24 12.0012 24C13.3654 24 14.5212 23.1735 15.0425 22.0013C14.0806 22.0484 13.0803 22.08 12.0012 22.08C10.9222 22.08 9.92189 22.0483 8.95996 22.0013Z" fill="#717579"/>
                                <path d="M22.5887 16.92C21.3234 15.3245 19.1999 12.1882 19.1999 9.12C19.1999 6.07776 17.2454 3.34078 14.3999 2.3347C14.3654 1.04062 13.3017 0 12.0009 0C10.6991 0 9.63641 1.04062 9.60182 2.3347C6.75543 3.34078 4.80088 6.07776 4.80088 9.12C4.80088 12.1891 2.67833 15.3245 1.4121 16.92C0.989708 17.4528 0.859114 18.1565 1.06363 18.8025C1.26332 19.4332 1.76057 19.9219 2.39418 20.1082C3.50394 20.4355 5.32311 20.8042 8.09755 20.9923C9.29849 21.0729 10.5897 21.12 12.0009 21.12C13.4112 21.12 14.7024 21.0729 15.9033 20.9923C18.6787 20.8042 20.4969 20.4355 21.6076 20.1082C22.2412 19.9219 22.7376 19.4333 22.9372 18.8025C23.1417 18.1565 23.0102 17.4528 22.5887 16.92Z" fill="#717579"/>
                            </svg>
                        </span>
                        <span v-else>
                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.95996 29.0013C9.48121 30.1735 10.6371 31 12.0012 31C13.3654 31 14.5212 30.1735 15.0425 29.0013C14.0806 29.0484 13.0803 29.08 12.0012 29.08C10.9222 29.08 9.92189 29.0483 8.95996 29.0013Z" fill="#717579"/>
                                <path d="M22.5887 23.92C21.3234 22.3245 19.1999 19.1882 19.1999 16.12C19.1999 13.0778 17.2454 10.3408 14.3999 9.3347C14.3654 8.04062 13.3017 7 12.0009 7C10.6991 7 9.63641 8.04062 9.60182 9.3347C6.75543 10.3408 4.80088 13.0778 4.80088 16.12C4.80088 19.1891 2.67833 22.3245 1.4121 23.92C0.989708 24.4528 0.859114 25.1565 1.06363 25.8025C1.26332 26.4332 1.76057 26.9219 2.39418 27.1082C3.50394 27.4355 5.32311 27.8042 8.09755 27.9923C9.29849 28.0729 10.5897 28.12 12.0009 28.12C13.4112 28.12 14.7024 28.0729 15.9033 27.9923C18.6787 27.8042 20.4969 27.4355 21.6076 27.1082C22.2412 26.9219 22.7376 26.4333 22.9372 25.8025C23.1417 25.1565 23.0102 24.4528 22.5887 23.92Z" fill="#717579"/>
                                <circle cx="22" cy="9" r="8" fill="#F66F4D" stroke="white" stroke-width="2"/>
                            </svg>
                        </span>
                        <span>Напоминания</span>
                </b-navbar-item>
            </template>

            <template #end>
                <b-navbar-item tag="div">
                        <div>
                            <b-dropdown
                                position="is-bottom-left"
                                append-to-body
                                aria-role="menu">
                                <template #trigger>
                                    <a
                                        class="navbar-item"
                                        role="button">
                                            <div class="header__profile">
                                                <div class="header__employee">
                                                    <p class="employee__name">Alex Geovanny</p>
                                                    <p class="employee__dep">ТП2</p>
                                                </div>
                                                <img class="profile__img" src="../../public/avatar.jpg" alt="avatar">
                                            </div>
                                        <b-icon icon="menu-down"></b-icon>
                                    </a>
                                </template>

                                <hr class="dropdown-divider" aria-role="menuitem">
                                <b-dropdown-item value="settings">
                                    <b-icon icon="settings"></b-icon>
                                    Настройки
                                </b-dropdown-item>
                                <b-dropdown-item value="logout" aria-role="menuitem">
                                    <b-icon icon="logout"></b-icon>
                                    Выход
                                </b-dropdown-item>
                            </b-dropdown>
                        </div>
                </b-navbar-item>
            </template>
        </b-navbar>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            notifications: [],
        }
    },
    methods: {
        // Тип: сообщения или напоминания
        changeIcons() {

        }
    }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/_variables.scss';
@import '../assets/scss/_mixins.scss';

    .header__title {
        @include textStyle(600, 32px, 48px, $colorDark);
    }

    .header__profile {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .employee__name {
        @include textStyle(500, 14px, 16px, $colorDark);
    }

    .employee__mail {
        @include textStyle(normal, 12px, 14px, $colorGray);
    }

    .profile__img {
        width: 28px;
        height: 28px;
        object-fit: cover;
        border-radius: 50%;
    }

    .navbar {
        background-color: $backColorBody;
    }

    a.navbar-item,
    .navbar-link {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    a.navbar-item:hover,
    .navbar-link:hover,
    a.navbar-item:visited,
    .navbar-link:visited,
    a.navbar-item:active,
    .navbar-link:active {
        background-color: $backColorBody;
    }

    @media screen and (max-width: 576px) {
        .header__title {
            max-width: 150px;
            @include textStyle(600, 24px, 26px, $colorDark);
        }
    }
</style>