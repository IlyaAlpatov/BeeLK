<template>
    <aside class="sidebar-page">
        <section class="sidebar-layout">
            <b-sidebar
                position="static"
                :mobile="mobile"
                :expand-on-hover="expandOnHover"
                :reduce="reduce"
                type="is-light"
                open
            >
                <div>
                    <h2 class="title is-2"><span class="logo-bee">Bee</span>LK</h2>
                    <b-menu class="is-custom-mobile">
                        <b-menu-list class="sidebar__list" label="Меню">
                            <b-menu-item icon="account" class="menu-elem" label="Профиль"></b-menu-item>
                            <b-menu-item icon="account" class="menu-elem" label="Рейтинги"></b-menu-item>
                        </b-menu-list>
                    </b-menu>
                </div>

            </b-sidebar>
        </section>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            // Свойства для сайдбара
            expandOnHover: true,
            mobile: "reduce",
            reduce: true,
        }
    }

}
</script>

<style lang="scss" scoped>

@import '../assets/scss/_variables.scss';
@import '../assets/scss/_mixins.scss';

    .avatar {
        position: relative;
    }

    .avatar__settings {
        position: absolute;
        bottom: 0;
        left: 55%;
    }
    
    .sidebar__menu {
        margin-top: 32px;
    }
</style>