<template>
    <v-app-bar dark :prominent=$vuetify.breakpoint.smAndDown color="purple white--text"  app>

        <v-row>
            <v-col sm="4" md="2">
                <v-toolbar-title>PropertyTracker</v-toolbar-title>
            </v-col>
            <v-col sm="2" md="1">
                <v-select
                        v-model="selectRooms"
                        :items="itemsRooms"
                        item-text="id"
                        item-value="number"
                        label="selectRooms"
                        return-object
                        single-line
                        dense
                        hint="rooms"
                        persistent-hint
                ></v-select>
            </v-col>
            <v-col sm="2" md="1">
                <v-select
                        v-model="selectRooms2"
                        :items="itemsRooms2"
                        item-text="name"
                        item-value="id"
                        label="selectRooms"
                        return-object
                        single-line
                        dense
                ></v-select>
            </v-col>
            <v-col sm="4" md="3">
                <v-select
                        v-model="selectBuild"
                        :items="itemsBuild"
                        item-text="name"
                        item-value="name"
                        label="SelectBuild"
                        return-object
                        single-line
                        dense
                        hint="Build type"
                        persistent-hint
                ></v-select>
            </v-col>

            <v-col sm="7" md="4">
                <v-autocomplete
                        v-model="selectStreet"
                        :items="itemsStreet"
                        item-text="name"
                        item-value="name"
                        label="selectStreet"
                        return-object
                        single-line
                        dense
                        hint="Street"
                        persistent-hint
                ></v-autocomplete>
            </v-col>
            <v-col sm="5" md="1">
            <v-btn light v-on:click="handleSearch">Search</v-btn>
         </v-col>
        </v-row>
        <v-spacer/>

<!--        {{selectRooms.id }}, {{selectRooms2.id }},{{selectBuild.id}} ,{{selectStreet.id}}-->
    </v-app-bar>
</template>

<script>
    import {API} from 'aws-amplify';
    import {listBuilds, listRoomss, listStreets} from '@/graphql/queries'

    export default {
        name: "Bar",
        data() {
            return {
                title: 'zooplaTracker',
                selectBuild: {id: undefined, name: 'All'},
                itemsBuild: [{id: undefined, name: 'All'}],
                selectRooms: {id: 1, number: '1'},
                itemsRooms: [],
                selectRooms2: {id: 'eq', name: '='},
                itemsRooms2: [{id: 'eq', name: '='}, {id: 'gte', name: '+'}, {id: 'lte', name: '-'}],
                selectStreet: {id: undefined, name: 'All'},
                itemsStreet: [{id: undefined, name: 'All'}],
                selectProperty: {id: 'Property', name: 'name'},
                itemsProperties: [{id: undefined, name: 'All'}]
            }
        },
        methods: {
            handleSearch() {
                this.$emit("handleSearch",
                    {
                        ...(this.selectRooms.id ? {propertyRoomsId: {[this.selectRooms2.id]: this.selectRooms.id}} : {}),
                        ...(this.selectBuild.id ? {propertyBuildId: {eq: this.selectBuild.id}} : {}),
                        ...(this.selectStreet.id ? {propertyStreetId: {eq: this.selectStreet.id}} : {})
                    })
            }
        },
            async created() {
                const buildData = await API.graphql({
                    query: listBuilds
                });
                for (const item of buildData.data.listBuilds.items) {
                    this.itemsBuild.push(item)
                }
                const roomsData = await API.graphql({
                    query: listRoomss,
                });
                for (const item of roomsData.data.listRoomss.items) {
                    this.itemsRooms.push(item)
                }
                this.itemsRooms.sort((a, b) => (a.number < b.number) ? -1 : 1)
                const streetData = await API.graphql({
                    query: listStreets,
                });
                for (const item of streetData.data.listStreets.items) {
                    this.itemsStreet.push(item)
                }

            }

    }
</script>

<style scoped>

</style>