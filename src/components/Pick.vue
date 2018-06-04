<template>
  <div class="pick">
    <h3>{{ msg }}</h3>
    <div class="content">
      <div class="row">
        <div class="offset-md-4 col-md-4">
          <div class="form-group">
              <label for="">9 bolsas</label>
              <ul class="list-group">
                <li class="list-item" v-for="(bag, index) in bags"><b>{{index + 1}}</b>) {{bag}}</li>
              </ul>
            </div>
            <p class="lead">weigh : {{side1}}</p>
            <p class="lead">weigh : {{side2}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Chunk from 'array.chunk'

 let bags = [5.7,5.6,5.6,5.6,5.6,5.6,5.6,5.6,5.6]
var max1=0, max2=0

export default {
  name: 'Pick',
  methods: {
     pick: function(){
       return Chunk(bags,Math.floor(bags.length/2))
     },
     weigh: function(left,right){
         max1 = Math.max.apply(Math,left)
         max2 = Math.max.apply(Math,right)
         if(max1 > max2){
          return -1
         }else if(max1 < max2){
          return 1
         }else{
          return 0
         }
     }
  },
  data () {
    return {
      msg: 'App vue para encontrar la bolsa mas pesada con la paleta extra ',
      left: {},
      right: {},
      sides: [],
      side1: 0,
      side2: 0,
      bags: bags
    }
  },
  created(){
      this.sides=this.pick()
      this.side1=this.weigh(this.sides[0],this.sides[1])
      this.side2=this.weigh(this.sides[1+side],this.sides[2])
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
