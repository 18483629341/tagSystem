<template>
    <div>
        <HomeHeaderView></HomeHeaderView>
        <Banner :data="data"></Banner>
        <HomeNavView></HomeNavView>
        <HomeMainView></HomeMainView>
    </div>
</template>

<script>
import Banner from './banner'
import HomeHeaderView from './HomeHeader';
import HomeNavView from './HomeNav';
import HomeMainView from './HomeMain';
import list from './list'
export default { 
    data() {
        return {
           data:  [require('../assets/img/banner1.jpg'),
                    require('../assets/img/banner2.jpg'),
                    require('../assets/img/banner3.jpg'),
                    require('../assets/img/banner4.jpg'),
                    require('../assets/img/banner5.jpg'),]
        }
    },
    components: {
       Banner,
        HomeHeaderView,
        HomeNavView,
        HomeMainView
    }
}
</script>
