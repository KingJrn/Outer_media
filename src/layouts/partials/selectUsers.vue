<template>
    <div class="select-users">
        <div class="select">
            <form class="search" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <img src="@/assets/images/vectors/search.svg" alt="search-icon">
            </form>
            <form action="select-form">
                <select class="form-select" aria-label="Default select example">
                    <option selected><span>Display: 8</span></option>
                    <option value="1">Display: 7</option>

                </select>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SelectUsers',
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.select-users {
    @include flexed-Container(row, space-between);
}

.select {
    @include flexed-Container(row, space-between);
    gap: calculate-value(18px);

    .search {
        position: relative;

        input {
            border: $default-border-1 $body-border-color-3;
            border-radius: $default-spacing * 2;
            width: calculate-value(240.55px);
            padding-left:  calculate-value(44.4px);
            background: $body-input;

            &::placeholder {
                @include textStyles('Poppins', 400, 12px, 18px);
                letter-spacing: $default-letter-sapcing;
                color: $body-text-primary-lighter;
            }
        }

        img {
            position: absolute;
            bottom: 6px;
            left: 16px;
        }

    }

    select {

        width: calculate-value(118px);
        padding-left: calculate-value(17.5px);
        background: $body-input;
        @include textStyles('Poppins', 400, 12px, 18px);
        letter-spacing: $default-letter-sapcing;
        color: $body-small-text;
        border-radius: $default-spacing * 2;
    }
}
</style>
