<template>
  <div class="romanos">
    <h3>{{ msg }}</h3>
    <div class="content">
      <div class="row">
        <div class="offset-md-4 col-md-4">
          <div class="form-group">
              <label for="">Arabigo</label>
              <input class="form-control"  v-on:keyup="convert" v-model="arabigo"   placeholder="Number" type="number">
            </div>
            <p class="lead">Romano: {{romano}}</p>
          </div>
        </div>
      </div>

  </div>
</template>

<script>

 let romanos = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},result = '',i=0


export default {
  name: 'Romanos',
  methods: {
    convert: function () {
     var value = this.arabigo
     var result=''
      for ( i in romanos ) {
        while ( value >= romanos[i] ) {
          result += i
          value-= romanos[i]
        }
      }
      this.romano = result
    }
  },
  data () {
    return {
      msg: 'App vue para convertir numeros arabigos a Romanos ',
      number: '',
      arabigo: '',
      romano: ''
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
