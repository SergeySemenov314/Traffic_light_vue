<template>
      <div class="traffic-light">
          <div
          v-bind:class='{ "traffic-light__part_red-tr" : !colorRed, "traffic-light__part_blinking" : isBlinking && colorRed,}' 
          class="traffic-light__part traffic-light__part_red"
          ></div>
          <div
          v-bind:class='{ "traffic-light__part_yellow-tr" : !colorYellow, "traffic-light__part_blinking" : isBlinking && colorYellow,}'   class="traffic-light__part traffic-light__part_yellow "
          ></div>
          <div 
          v-bind:class='{ "traffic-light__part_green-tr" : !colorGreen, "traffic-light__part_blinking" : isBlinking && colorGreen,}'   class="traffic-light__part traffic-light__part_green "></div>
          </div>
</template>

<script>
export default {
    props:{
        colorRed:{
            type: Boolean,
            required: true
        },
        colorYellow:{
            type: Boolean,
            required: true
        },
        colorGreen:{
            type: Boolean,
            required: true
        },
        isBlinking:{
            type: Boolean,
        },
    },

}

</script>

<style scoped>

.traffic-light {
  width: 150px;
  height: 500px;
  display: flex;
  flex-direction: column;
}

.traffic-light__part {
  flex-grow: 1;
  width: 100%;
  border:2px solid grey;
}

.traffic-light__part_red {
  background-color: red;
}

.traffic-light__part_yellow {
  background-color: yellow;
}

.traffic-light__part_green {
  background-color: green;
}
.traffic-light__part_red-tr{
        background-color: rgba(255, 0, 0, 0.4);
}

.traffic-light__part_yellow-tr {
      background-color: rgba(255, 255, 0, 0.4);
}

.traffic-light__part_green-tr {
    background-color: rgba(0, 128, 0, 0.4);
  
}

.traffic-light__part_blinking {
  animation: blinking 0.7s infinite;

}

@keyframes blinking {
 0% { opacity: 1; }
 25% {  opacity: .6; }
 50% {  opacity: 1; }
 100% {  opacity: 1; }
}

</style>
