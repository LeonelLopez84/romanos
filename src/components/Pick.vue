<template>
  <div class="pick">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>

 let object1 = {}
 let object2 = {}


export default {
  name: 'Pick',
  methods: {
     pick: function(){

     },
     weight: function(){

     }
  },
  data () {
    return {
      msg: 'App vue para encontrar la bolsa mas pesada con la paleta extra '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
