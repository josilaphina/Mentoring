<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="#">Link to add</a>
    <ul v-if="loaded">
    <list-item v-for="item in listItems"
    :description="item.description" :date="item.date" :priority="item.priority" :id="item.id"/>
  </ul>
  </div>
</template>

<script>
import ListItem from './ListItem'



export default {
  name: 'HelloWorld',
  mounted: function (){

    let self = this

    this.$axios.get('http://localhost:3000/lists', {
      crossdomain: true
    })
      .then(function (response) {
        // handle success
        self.loaded = true
        self.listItems = response.data.results

      })
      .catch(function (error) {
        // handle error
        //console.log(error);
      })
  },
  data () {
    return {
    listItems: null,
    loaded: false
    }
  },
  props: {
    msg: String
  },
  components: {
    ListItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 10px;
}
a {
  color: #42b983;
}
</style>
