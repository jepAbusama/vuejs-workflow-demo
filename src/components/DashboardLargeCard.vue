<template>
  <v-card class="white" height="">

    <v-card-text>

    <v-sparkline
      :fill="fill"
      :gradient="gradient"
      :line-width="width"
      :padding="padding"
      :smooth="radius || false"
      :value="value"
      auto-draw
    ></v-sparkline>

    <v-divider></v-divider>

          <v-item-group v-model="gradient" mandatory>
            <v-container>
            <v-row>
              <v-item
                v-for="(gradient, i) in gradients"
                :key="i"
                v-slot:default="{ active, toggle }"
                :value="gradient"
              >
                <v-card
                  :style="{
                    background: gradient.length > 1
                      ? `linear-gradient(0deg, ${gradient})`
                      : gradient[0],
                    border: '2px solid',
                    borderColor: active ? '#222' : 'white'
                  }"
                  width="20"
                  height="20"
                  class="mr-2"
                  @click.native="toggle"
                ></v-card>
              </v-item>
              
            </v-row>
            <v-card-actions>
            Traffic Overview
          </v-card-actions>
            </v-container>
          </v-item-group>

          </v-card-text>

          
  </v-card>
</template>

<script>

 const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

export default {

  data: () => ({
      fill: true,
      gradient: gradients[4],
      gradients,
      padding: 8,
      radius: 10,
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 5, 9, 7, 8, 10],
      width: 2,
    }),

}
</script>

<style>

</style>