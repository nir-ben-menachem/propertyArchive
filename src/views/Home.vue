<template>
  <v-app>
    <Bar v-on:handleSearch="updateProperty($event)"/>
    <v-main>
      <!--            <Property v-bind:property="property"/>-->
      <v-container fluid>

        <Iterator v-bind:properties="properties"/>
<!--        <template v-for="(prop,i) in properties">-->
<!--          <Property v-bind:property="prop" :key="i"/>-->
<!--        </template>-->
      </v-container>
    </v-main>
    <amplify-sign-out ></amplify-sign-out>
  </v-app>
</template>

<script>
  // import Property from '@/components/Property';
  import Iterator from '@/components/Iterator';
  import {API} from 'aws-amplify';
  import {searchPropertys} from '@/graphql/queries'
  import Bar from '@/components/Bar'
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      properties: [],
      property: undefined
    }
  },
  methods : {
    updateProperty(property) {
      this.property = property;
      this.properties.length = 0;
      this.findProperty()
    },
    async findProperty() {
      const properties = await API.graphql({
        query: searchPropertys,
        variables: {
          filter:this.property
        }
      })
      console.log(properties)
      for (const item of properties.data.searchPropertys.items) {
   this.properties.push(item)
      }
    }
  },
  components: {
    // Property,
    Iterator,
    Bar
  }
}
</script>
<style scoped >
</style>