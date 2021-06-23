<template>
    <section class="profile">
        <div class="profile__elem profile__info">
            <div class="profile__avatar">
                <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="89" height="89" rx="44.5" stroke="#EAEAEA"/>
                    <rect x="5" y="5" width="80" height="80" rx="40" fill="#C4C4C4"/>
                </svg>
                <img class="profile__img" src="../../public/avatar.jpg" alt="avatar">
            </div>
            <div>
                <p class="profile__text">Алпатов Илья</p>
                <p class="profile__info__mail">alexgeov@mail.com</p>
            </div>
            <div>
                <p class="profile__text">BTC FIX</p>
                <p class="profile__text">Направление технической поддержки №5</p>
                <p class="profile__text">Инженер</p>
            </div>
        </div>
        <div class="profile__elem profile__indicators">
            <h3 class="profile__elem__title">Показатели</h3>
            <div class="profile__indicators__body">
                <p class="profile__text">Время диалога:</p>
                <p class="profile__text">NPS:</p>
                <p class="profile__text">FCR:</p>
                <p class="profile__text">Качество:</p>
            </div>
        </div>

        <div class="profile__elem profile__events">
            <div class="table__filters">
                <h3 class="table__title">Ближайшие события</h3>
                <b-field label="Период">
                    <b-select placeholder="Рейтинг за неделю">
                        <option value="1">События на неделю</option>
                        <option value="2">События на месяц</option>
                        <option value="1">События на квартал</option>
                    </b-select>
                </b-field>
                <b-field>
                    <b-input placeholder="Поиск событий"
                        type="search"
                        icon="magnify"
                        icon-clickable>
                    </b-input>
                </b-field>
            </div>
            <b-table
            :data="data"
            paginated
            per-page="5"
            detailed
            detail-key="id">
                <b-table-column field="name" label="Название" width="40" centered v-slot="props">
                {{props.row.name}}
                </b-table-column>
                <b-table-column field="place" label="Место" width="40" centered v-slot="props">
                {{props.row.place}}
                </b-table-column>
                <b-table-column field="date" label="Дата" width="40" sortable centered v-slot="props">
                <span class="tag is-success">
                        {{ new Date(props.row.date).toLocaleDateString() }}
                    </span>                
                </b-table-column>
                <b-table-column field="" label="" width="40" centered>
                        <div>
                            <b-dropdown
                                position="is-bottom-left"
                                append-to-body
                                aria-role="menu">
                                <template #trigger>
                                    <a
                                        class="navbar-item"
                                        role="button">
                                        <b-icon pack="mdi" :icon="'dots-horizontal'" class="">
                                        </b-icon>
                                    </a>
                                </template>
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
                </b-table-column>

                <template #detail="props">
                <article class="media">
                    <div class="media-content">
                        <div class="content">
                            <p>
                                {{props.row.desc}}
                            </p>
                        </div>
                    </div>
                </article>
            </template>
            </b-table>
        </div>

    </section>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { id: 1, 'name': 'Открытый диалог', 'place': 'Zoom', 'date': '06.04.2016', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'},
                { id: 2, 'name': 'Открытый диалог', 'place': 'Zoom', 'date': '06.04.2016', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'},
                { id: 3, 'name': 'Открытый диалог', 'place': 'Zoom', 'date': '06.04.2016', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'},
                { id: 4, 'name': 'Встреча', 'place': 'Zoom', 'date': '06.04.2016', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'},
                { id: 5, 'name': 'День связи', 'place': 'ЦПК Калуга', 'date': '06.04.2016', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'},
                { id: 6, 'name': 'Встреча', 'place': 'Zoom', 'date': '06.04.2016', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'},
                { id: 7, 'name': 'Встреча', 'place': 'ЦПК Калуга', 'date': '06.04.2016', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'},
                { id: 8, 'name': 'Встреча', 'place': 'Skype', 'date': '10.04.2016', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'},
                { id: 9, 'name': 'Встреча', 'place': 'ЦПК Калуга', 'date': '10.04.2016', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'},
                { id: 10, 'name': 'Встреча', 'place': 'Skype', 'date': '10.04.2016', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'},
            ],
        }
    },
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/_variables.scss';
@import '../assets/scss/_mixins.scss';

    .profile {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 30px;
        justify-self: center;
        margin: 20px;
    }

    .profile__elem {
        @include blockStyle;
        text-align: start;
        flex-wrap: wrap;
    }

    .profile__indicators {
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    .profile__indicators__body {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .profile__info {
        gap: 30px;
    }

    .profile__events {
        display: block;
    }

    .profile__avatar {
        position: relative;
    }

    .profile__img {
        position: absolute;
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 50%;
        top: 30%;
        left: 50%;
        transform: translate(-50%,-30%);
    }

    .profile__text {
        @include textStyle(500, 21px, 31px, $colorDark);
    }

    .profile__info__mail {
        @include textStyle(normal, 16px, 24px, $colorGray);
    }

    .profile__elem__title {
        @include textStyle(600, 24px, 36px, $colorDark);
    }
</style>