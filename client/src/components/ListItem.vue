<template>
  <li>
    <span class="list-item-description">{{description}}</span>
    <span class="list-item-priority">{{priority}}</span>
    <span class="list-item-date">{{date}} </span>
    <div class="actions">
    <router-link :to="`/edit/${this.id}`">Edit</router-link>
    <a v-on:click.prevent="deleteItem" href="#"> Delete</a>
  </div>
  </li>
</template>

<script>
export default {
  name: 'listItem',
  props: {
    description: String,
    date: Date,
    priority: Number,
    id: String
  },
  methods: {
    deleteItem: function(){
      let self = this
      this.$axios.delete(`http://localhost:3000/lists/${this.id}`).then( (result) => {
        this.$router.go(this.$router.currentRoute)
      }).catch( (error) => {

      })
    }
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
  display: block;
  margin: 10px;
  width: 400px;
  min-height: 120px;
  background-color: #2346;
  position: relative;
  border: 1px solid black;
}
.list-item-description {
  text-align: left;
  display: block;
  width: 100%;
}

a {
  width: 40px;
  height: 40px;
  background: blue;
  color: #42b983;
}

.actions {
  position: absolute;
  top: 0px;
  right: 0px;
  overflow: hidden;
}
</style>
