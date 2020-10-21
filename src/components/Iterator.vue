<template>
    <v-data-iterator
            :items-per-page.sync="itemsPerPage"
        :search="search"
        :items="properties"
        :page="page"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
            hide-default-footer
        >
        <template v-slot:header>
            <v-toolbar dark color="purple lighten-2" class="mb-1">
            <v-text-field v-model="search" clearable flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Search"/>


            <template v-if="$vuetify.breakpoint.mdAndUp">
                <v-spacer></v-spacer>
                <v-select
                        v-model="sortBy"
                        flat
                        solo-inverted
                        hide-details
                        :items="keys"
                        prepend-inner-icon="mdi-magnify"
                        label="Sort by"
                ></v-select>
                <v-spacer></v-spacer>
                <v-btn-toggle
                        v-model="sortDesc"
                        mandatory
                >
                    <v-btn
                            large
                            depressed
                            light
                            :value="false"
                    >
                        <v-icon color="purple">mdi-arrow-up</v-icon>
                    </v-btn>
                    <v-btn
                            large
                            depressed
                            light
                            :value="true"
                    >
                        <v-icon color="purple">mdi-arrow-down</v-icon>
                    </v-btn>
                </v-btn-toggle>
            </template>
            </v-toolbar>
        </template>
        <template  v-slot:default="props">
            <Property v-for="item in props.items"  v-bind:property="item" :key="item.id"/>
        </template>
        <template v-slot:footer>

            <v-row
                    class="mt-2"
                    align="center"
                    justify="center"
            >
                <span class="grey--text">Items per page</span>
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                                dark
                                text
                                color="purple"
                                class="ml-2"
                                v-bind="attrs"
                                v-on="on"
                        >
                            {{ itemsPerPage }}
                            <v-icon>mdi-chevron-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                                v-for="(number, index) in itemsPerPageArray"
                                :key="index"
                                @click="updateItemsPerPage(number)"
                        >
                            <v-list-item-title>{{ number }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-spacer></v-spacer>

                <span
                        class="mr-4 grey--text"
                >
              Page {{ page }} of {{ numberOfPages }}
            </span>
                <v-btn
                        fab
                        dark
                        color="deep-purple"
                        class="mr-1"
                        @click="formerPage"
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn
                        fab
                        dark
                        color="deep-purple"
                        class="ml-1"
                        @click="nextPage"
                >
                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
            </v-row>
        </template>
    </v-data-iterator>
</template>

<script>
    import Property from './Property'
    export default {
        name: "Iterator",
        components : {
            Property
        },
        props : {
            properties : {
                type : Array
            }
        },
        data () {
            return {
                search : '',
                keys : ['Price',{text : 'Street',value :'Street.id'},
                    {value : 'Build.id',text : 'Build'}, {text : 'Rooms',value :'rooms.id'}],
                page : 1,
                itemsPerPage : 4,
                itemsPerPageArray: [4, 8, 12],
                sortBy : 'Street',
                sortDesc : false

            }
        },
        computed: {
            numberOfPages : function () {
                return Math.ceil(this.properties.length / this.itemsPerPage)
            },
            // filteredKeys () {
            //     return this.keys.filter(key => key !== 'Name')
            // },
        },
        watch : {
          properties : function() {this.page = 1}
        },
        methods : {
            nextPage : function() {
                if (this.page + 1 <= this.numberOfPages) this.page += 1
            },
            formerPage : function() {
                if (this.page - 1 >= 1) this.page -= 1
            },
            updateItemsPerPage (number) {
                this.itemsPerPage = number
            },
        }
    }
</script>

<style scoped>

</style>