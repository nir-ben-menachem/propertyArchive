<template>
<router-view/>
<!--  <v-app>-->
<!--    <Bar v-on:handleSearch="updateProperty($event)"/>-->
<!--    <v-main>-->
<!--      &lt;!&ndash;            <Property v-bind:property="property"/>&ndash;&gt;-->
<!--      <v-container >-->
<!--        <template v-for="(prop,i) in properties">-->
<!--          <Property v-bind:property="prop" :key="i"/>-->
<!--        </template>-->
<!--      </v-container>-->
<!--    </v-main>-->
<!--    -->
<!--  </v-app>-->
</template>

<script>
  // import Property from './components/Property';
  import {Auth,Hub} from 'aws-amplify';
  // import {listPropertys} from '@/graphql/queries'
  // import Bar from './components/Bar'

  export default {
    name: 'App',

    components: {
      // Property,
      // Bar
    },

    data() {
      return {
        signedIn: false,
        // properties: [],
        // property: {
        //   name: "6 bed semi-detached house for sale in Sinclair Grove, London NW11 - Zoopla",
        //   link: "https://www.zoopla.co.uk/for-sale/details/49386377?search_identifier=37d2e6e439b882ed42f3d559224562e7",
        //   archive: "public/6 bed semi-detached house for sale in Sinclair Grove, London NW11 - Zoopla/page.html",
        //   price: "1300000",
        //   rooms: "6",
        //   build: "semi-detached",
        //   street: "Sinclair Grove"
        // }

      }
    },
    beforeCreate() {
      Hub.listen('auth', data => {
        console.log('data:', data)
        const {payload} = data
        if (payload.event === 'signIn') {
          this.signedIn = true
          this.$router.push('/')
        }
        if (payload.event === 'signOut') {
          this.$router.push('/login')
          this.signedIn = false
        }
      })
      Auth.currentAuthenticatedUser()
              .then(() => {
                this.signedIn = true
              })
              .catch(() => this.signedIn = false)
    },
    // methods: {
      // updateProperty(property) {
      //   this.property = property;
      //   this.findProperty()
      // },
      // async findProperty() {
      //   const properties = await API.graphql({
      //     query: listPropertys,
      //     variables: {
      //       filter:this.property
      //     }
      //   })
      //   for (const item of properties.data.listPropertys.items) {
      //     this.properties.push(item)
      //   }
      // }
    // }
  };
</script>
<style>
    :root {
        --amplify-primary-color: rgba(90, 0, 128, 0.89);
    }
</style>