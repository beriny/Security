var app = new Vue({
  el: '#app',
  data() {
    return {
      msg: "hello Vue",
      age: 18,
      name: "琼",
      x: 0,
      y: 0,
    }
  },
  methods: {
    add: function () {
      return this.age++;
    },
    substract: function () {
      return this.age--;
    },
    reset: function () {
      return this.age = 18;
    },
    updateXY: function (e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  }
});
