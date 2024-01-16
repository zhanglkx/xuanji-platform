<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <h1>mixin</h1>
  </div>
</template>

<script>
import demoMixin from './mixin/demoMixin.js'
import demoMixin2 from './mixin/demoMixin2.js'
import demoExtends from './mixin/demoExtends.js'


export default {
  name: 'mixinLearn',
  mixins: [demoMixin, demoMixin2],
  extends: demoExtends,
  data () {
    return {
      msg: '我显示的是主mixin',
    }
  },
  created() {
    console.log('我叫mixin,我来了！')
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
