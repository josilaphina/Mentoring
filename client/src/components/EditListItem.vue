<template>
  <div class="hello">
    <form>
      <div>
        <label for="decription">Description:</label>
        <input v-model="listItem.description" type="text" id="description" name="item_description">
      </div>
      <div>
        <label v-model="listItem.dueDate" for="duedate">Due Date:</label>
        <input type="text" id="dueDate" name="item_duedate">
      </div>
      <div>
        <label v-model="listItem.priority" for="priority">Priority:</label>
        <textarea id="priority" name="item_priority"></textarea>
      </div>
      <div>
        <input v-on:click="submitItem" type="button" value="submit" id="submit" name="item_submit">
      </div>
    </form>
    <h3>{{listItem.description}} </h3>
  </div>
</template>

<script>
import ListItem from './ListItem'



export default {
  name: 'HelloWorld',
  mounted: function () {
    let self = this

    this.$axios.get(`http://localhost:3000/lists/${this.$route.params.id}`, {
      crossdomain: true})
      .then(function (response) {
        // handle success
        self.listItem = response.data.results
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
    },
  methods: {
    submitItem: function () {
    let self = this
      this.$axios.put(`http://localhost:3000/lists/${this.$route.params.id}`, this.listItem, {
        crossdomain: true
      })
        .then(function (response) {
          // handle success
          console.log(response)
          self.$router.push({path:'/'})
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      }
  },
  data () {
    return {
      listItem: {
        description: null,
        dueDate: null,
        priority: null
      }
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
