<template>
    <aside class="sidebar">
        <div class="sidebar__employee employee">
            <h2 class="title is-2">BeeLK</h2>
            <div class="employee__avatar avatar">
                <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M130 65C130 100.899 100.899 130 65 130C29.1015 130 0 100.899 0 65C0 29.1015 29.1015 0 65 0C100.899 0 130 29.1015 130 65ZM4.99306 65C4.99306 98.1409 31.8591 125.007 65 125.007C98.1409 125.007 125.007 98.1409 125.007 65C125.007 31.8591 98.1409 4.99306 65 4.99306C31.8591 4.99306 4.99306 31.8591 4.99306 65Z" fill="#FFD482"/>
                    <path d="M65 2.49653C65 1.11774 66.1182 -0.00500592 67.496 0.0479365C76.3746 0.389105 85.0984 2.54751 93.1247 6.39966C101.902 10.6123 109.621 16.7428 115.711 24.3385C121.802 31.9341 126.108 40.8009 128.312 50.284C130.516 59.7671 130.562 69.6242 128.446 79.1274C126.33 88.6305 122.106 97.5369 116.087 105.189C110.067 112.841 102.406 119.043 93.6677 123.337C84.9299 127.631 75.3391 129.907 65.6037 129.997C56.7012 130.08 47.8858 128.333 39.7012 124.875C38.4312 124.338 37.895 122.847 38.48 121.598C39.065 120.35 40.5495 119.817 41.8213 120.35C49.3273 123.493 57.4027 125.08 65.5573 125.004C74.5449 124.921 83.399 122.819 91.4656 118.855C99.5322 114.891 106.605 109.166 112.162 102.102C117.72 95.0375 121.619 86.8153 123.572 78.0421C125.526 69.269 125.484 60.1691 123.449 51.4145C121.414 42.6598 117.438 34.4741 111.816 27.4619C106.193 20.4497 99.0674 14.7901 90.9643 10.9011C83.6123 7.3726 75.6263 5.38343 67.4958 5.04499C66.1182 4.98764 65 3.87533 65 2.49653Z" fill="#F66F4D"/>
                    <rect x="9.66919" y="9.66942" width="110.661" height="110.661" rx="55.3306" fill="#C4C4C4"/>
                </svg>
                <a class="avatar__settings" href="##">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="56" height="56" rx="28" fill="#F4F4F4"/>
                        <g clip-path="url(#clip0)">
                            <path d="M23.025 32.5567L27.447 36.9762L36.2478 28.1704L31.8258 23.7509L23.025 32.5567Z" fill="#2D3134"/>
                            <path d="M39.6339 23.0176L36.9825 20.3662C36.7399 20.1236 36.4225 20.0016 36.1049 20H36.0917C35.7741 20.0016 35.4571 20.1236 35.2151 20.3662L33.4451 22.1338L37.8663 26.5526L39.6339 24.785C39.8765 24.5424 39.9985 24.2254 40.0001 23.9078V23.8946C39.9985 23.5772 39.8765 23.2602 39.6339 23.0176Z" fill="#2D3134"/>
                            <path d="M20 40L25.745 38.6738L21.3238 34.255L20 40Z" fill="#2D3134"/>
                        </g>
                        <rect x="2" y="2" width="56" height="56" rx="28" stroke="white" stroke-width="4"/>
                        <defs>
                            <clipPath id="clip0">
                            <rect width="20" height="20" fill="white" transform="translate(20 20)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
            <p class="employee__name">Alex Geovanny</p>
            <p class="employee__mail">alexgeov@mail.com</p>
        </div>
        <b-menu class="sidebar__menu">
            <b-menu-list label="Основное меню">
                <b-menu-item class="menu-elem" label="Профиль"></b-menu-item>
                <b-menu-item class="menu-elem" label="Рейтинги"></b-menu-item>
                <b-menu-item class="menu-elem" label="Info"></b-menu-item>
            </b-menu-list>
        </b-menu>
    </aside>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .sidebar {
        font-family: Poppins;
        padding-right: 15px;
        padding-left: 15px;
        font-style: normal;
        background-color: #FFFFFF;
        min-height: 100vh;
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    }

    .avatar {
        position: relative;
    }

    .avatar__settings {
        position: absolute;
        bottom: 0;
        left: 55%;
    }

    .employee__name {
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #2D3134;
        margin-top: 22px;
        margin-bottom: 6px;
    }

    .employee__mail {
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #717579;
    }

    .menu-elem {
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
    }
    
    .sidebar__menu {
        margin-top: 32px;
    }
</style>