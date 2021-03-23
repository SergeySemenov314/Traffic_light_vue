<template>
  <div class="timer">
      <div class="timer__value">{{currentTime}}</div>     
  </div>
</template>

<script>
export default {
    props:{
        timerValue:{
            type: Number,
            required: true
        },
    },
    data() {
        return {
            currentTime: 0,
        }
    },
    watch: {
         timerValue(value) {
            this.$emit('add-blinking', false);
            this.currentTime = value / 1000;
            let delay = 1000;

            if(this.currentTime === 3){
                this.$emit('add-blinking', true);
            }
         
            for(let i = this.currentTime - 1; i > 0; i--){
                setTimeout(() => {
                    this.currentTime = i;

                    if(this.currentTime === 3){
                        this.$emit('add-blinking', true);
                    }
                }, delay)  
                delay +=1000;
            }
         }
    }
}

</script>

<style scoped>

.timer {
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    padding: 10px;
    border-radius: 50%;
    border: 2px solid grey;
    margin-right: 10px;
}

.timer__value {
    font-size: 50px;
    font-weight: bold;
}



</style>

