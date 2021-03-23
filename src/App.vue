<template>
   <div id="app">
    <div class="wrapper">
       <div class="content-container">
       <Timer 
       v-bind:timerValue="timerValue"
        @add-blinking="addBlinking"
        />
        <router-view v-bind:isBlinking = "isBlinking"/>
    </div>

    </div>
   
     
  </div>
</template>

<script>


import Timer from '@/components/Timer';

export default {
  name: 'App',
  components: {
    Timer
  },
  data() {
    return {
      previousPath: '',
      redDelay: 10000,
      yellowDelay: 3000,
      greenDelay: 15000,
      timerValue: 0,
      isBlinking: false
    }
  },
  mounted() {
    this.switchColors(); 
  },
  updated() {
    let currentPath = window.location.pathname;
    if (currentPath !== this.previousPath) {
         this.switchColors(); 
    }
    
 
  },
  methods: {
    
    switchColors () {
      let currentPath = window.location.pathname;
      let router = this.$router;

      function redirect(path, delay) {
        setTimeout(() =>{
          router.push(path);
        }, delay)
      }

      if (currentPath === '/red' || currentPath === '/') {
        redirect('yellow', this.redDelay);
        this.timerValue = this.redDelay;
      }
       else if (currentPath === '/yellow') {
        this.timerValue = this.yellowDelay;

        switch (this.previousPath) {
          case '':
            redirect('green', this.yellowDelay);
            break;
          case '/':
            redirect('green', this.yellowDelay);
            break;
          case '/red':
            redirect('green', this.yellowDelay); 
            break;
          case '/green':
            redirect('red', this.yellowDelay);  
        }

      }
      else if (currentPath === '/green') {

          redirect('yellow', this.greenDelay);
          this.timerValue = this.greenDelay;   
      }

      this.previousPath = currentPath;
     
    },

    addBlinking(value) {
      this.isBlinking = value;
    },

  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

}

.content-container {
  display: flex;
}

</style>
