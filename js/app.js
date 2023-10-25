const app = Vue.createApp;
app({
  data() {
    return {
      todo: [
        {
          text: 'Fare i compiti',
          done: false,
        },
        {
          text: 'Fare la spesa',
          done: true,
        },
        {
          text: 'Fare il bucato',
          done: false,
        },
      ],
      newList: '',
      newText: '',
    };
  },

  methods: {
    remove(index) {
      this.todo.splice(index, 1);
    },
    addTodoList() {
      this.newList = {
        text: this.newText,
        done: false,
      };
      this.todo.unshift(this.newList);
      this.newText = ' ';
    },
  },
}).mount('#app');
