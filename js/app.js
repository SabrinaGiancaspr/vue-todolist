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
    };
  },
}).mount('#app');
