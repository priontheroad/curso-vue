<template>

    <div>
        
        <div class="container">

            <div class="row mt-5">
                <h3>Você está vendo notícias do: {{ championship }}</h3>
            </div>

        </div>
        <router-view></router-view>
        
        <div class="container">

            <div class="row my-club mt-5">

                <div class="col-6">
                    <h2>Seu clube é: {{ myClub }}</h2>
                </div>

                <div class="col-6">
                    <Input  />
                </div>

            </div>

        </div>

    </div>

</template>

<script>
import Input from './Input'

import { mapGetters } from 'vuex'

export default {
    components: {
        Input
    },
    data() {
        return {
        }
    },
    props: {
        currentComponent: String
    },
    computed: {
        ...mapGetters({
            championship: 'getChampionShip',
            myClub: 'getClubName'
        })

        // ...mapState(['championship']),
        // ...mapState({ myClub: 'clubName'})
    } 

}
</script>

<style scoped>

</style>