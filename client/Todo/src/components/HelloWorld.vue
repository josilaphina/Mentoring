<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    
  </div>
</template>

<script>

import axios from 'axios'


export default {
  name: 'HelloWorld',
  mounted: function (){
    axios.get('localhost:3000/lists', {
      crossdomain: true
    })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  },
  props: {
    msg: String
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
