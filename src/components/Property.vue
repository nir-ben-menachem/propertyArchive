<template>
    <v-card class="mt-1" >
        <v-card-title class="text-break"> {{property.name}}</v-card-title>
        <v-divider/>
        <v-card-text>
            <v-chip-group  active-class="purple white--text">
                <v-chip >
                    {{price}}
                </v-chip>
                <v-chip>
                    <v-icon left>mdi-sign-real-estate</v-icon>
                    {{property.street ? property.street.id : ""}}
                </v-chip>
                <v-chip >
                    {{property.build.id}}
                </v-chip>
                <v-chip >
                    <v-icon left>mdi-bed</v-icon>
                    {{property.rooms.id}}
                </v-chip>
            </v-chip-group>
        </v-card-text>
        <v-card-actions>
            <v-btn target="_blank" :href="property.page" color="purple">
                Archive
            </v-btn>
            <v-btn target="_blank" :href="property.url" color="deep-purple">
                Active
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>

    export default {
        name: "Property",
        props: {
            property: {
                type: Object
            }
        },
        computed : {
            price : function() {
                return Number(this.property.price).toLocaleString('en-UK', {
                style: 'currency',
                currency: 'GBP',
            })}
        }
    }
</script>

<style scoped>
</style>