<template>
    <section class="rating block-elem">
        <div class="rating__wrapper ">
            <b-field grouped group-multiline>
                <!-- <div class="control">
                <b-switch v-model="showDetailIcon">Show detail icon</b-switch>
                </div> -->
            </b-field>
            <b-table class="rating__table"
            :data="data"
            paginated
            per-page="5">
                <b-table-column field="id" label="" width="40" centered v-slot="props">
                {{props.row.id}}
                </b-table-column>
                <b-table-column field="first_name" label="" width="40" centered v-slot="props">
                {{props.row.first_name}}
                </b-table-column>
                <b-table-column field="rating" label="" width="40" centered v-slot="props">
                {{props.row.rating}}
                </b-table-column>
                <b-table-column field="changes" label="" width="40" centered>
                    <b-icon pack="mdi" :icon="'arrow-up-thick'" class="ratingUp">
                    </b-icon>
                </b-table-column>
            </b-table>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Ratings',
    data() {
        return {
            data: [
                { 'id': 1, 'first_name': 'Abbie', 'rating': 126, 'changes': 2},
                { 'id': 2, 'first_name': 'Abbie', 'rating': 2486, 'changes': 0},
                { 'id': 3, 'first_name': 'Jones', 'rating': 2145, 'changes': -2},
                { 'id': 4, 'first_name': 'Abbie', 'rating': 156, 'changes': 5},
                { 'id': 5, 'first_name': 'Abbie', 'rating': 126, 'changes': 2},
                { 'id': 6, 'first_name': 'Abbie', 'rating': 2486, 'changes': 0},
                { 'id': 7, 'first_name': 'Jones', 'rating': 2145, 'changes': -2},
                { 'id': 8, 'first_name': 'Abbie', 'rating': 156, 'changes': 5},
                { 'id': 9, 'first_name': 'Abbie', 'rating': 126, 'changes': 2},
                { 'id': 10, 'first_name': 'Abbie', 'rating': 2486, 'changes': 0},
                { 'id': 11, 'first_name': 'Jones', 'rating': 2145, 'changes': -2},
                { 'id': 12, 'first_name': 'Abbie', 'rating': 156, 'changes': 5},
                { 'id': 13, 'first_name': 'Abbie', 'rating': 126, 'changes': 2},
                { 'id': 14, 'first_name': 'Abbie', 'rating': 2486, 'changes': 0},
                { 'id': 15, 'first_name': 'Jones', 'rating': 2145, 'changes': -2},
                { 'id': 16, 'first_name': 'Abbie', 'rating': 156, 'changes': 5},
                { 'id': 17, 'first_name': 'Abbie', 'rating': 126, 'changes': 2},
                { 'id': 18, 'first_name': 'Abbie', 'rating': 2486, 'changes': 0},
                { 'id': 19, 'first_name': 'Jones', 'rating': 2145, 'changes': -2},
                { 'id': 20, 'first_name': 'Abbie', 'rating': 156, 'changes': 5},
                { 'id': 21, 'first_name': 'Abbie', 'rating': 126, 'changes': 2},
                { 'id': 22, 'first_name': 'Abbie', 'rating': 2486, 'changes': 0},
                { 'id': 23, 'first_name': 'Jones', 'rating': 2145, 'changes': -2},
                { 'id': 24, 'first_name': 'Abbie', 'rating': 156, 'changes': 5}
            ],
        }
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/_variables.scss';
@import '../assets/scss/mixins.scss';

    .rating {
        margin: 20px;
        justify-self: center;
        display: block;
        max-width: 800px;
    }

    .rating__wrapper {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    /* Стили для стрелок при разном рейтинге */

    .ratingUp {
        // color: #99ff99;
        color: $body-color;
    }

    .ratingDown {
        color: #ff0000;
        transform: rotate(180deg);
    }

    .ratingRight {
        color: #808080;
        transform: rotate(90deg);
    }
</style>