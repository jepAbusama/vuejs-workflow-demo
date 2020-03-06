<template>
  <div class="dahshboard d-flex justify-center">
    <v-container fluid>
      <v-row>
        <v-col
          cols="6"
        >
          <v-row>
            <v-col
              class="pb-0"
            >
              <DashboardMediumCard />
            </v-col>
            <v-col
              class=" pb-0"
            >
              <DashboardMediumCard />
            </v-col>
          </v-row>

          <v-row>
            <v-col 
              class="pb-0"
            >
              <DashboardLargeCard />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <DashboardExLargeCard />
            </v-col>
          </v-row>

          <v-row>
             <v-col
              class="pb-0"
            >
              <DashboardMediumCard />
            </v-col>
            <v-col
              class=" pb-0"
            >
              <DashboardMediumCard />
            </v-col>
          </v-row>
          
        </v-col>
        <v-col
          cols="6"
        >
          <v-row>
            <v-col
              class="pb-0"
            >
              <DashboardMediumCard />
            </v-col>
            <v-col
              class=" pb-0"
            >
              <DashboardMediumCard />
            </v-col>
          </v-row>

          <v-row>
            <v-col 
              class="pb-0"
            >
              <DashboardLargeCard />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <DashboardExLargeCard />
            </v-col>
          </v-row>

          <v-row>
             <v-col
              class="pb-0"
            >
              <DashboardMediumCard />
            </v-col>
            <v-col
              class=" pb-0"
            >
              <DashboardMediumCard />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

import DashboardMediumCard from '../components/DashboardMediumCard'
import DashboardLargeCard from '../components/DashboardLargeCard'
import DashboardExLargeCard from '../components/DashboardExLargeCard'

export default {
  name: 'Dashboard',
  components: {
    DashboardMediumCard,
    DashboardLargeCard,
    DashboardExLargeCard
  }
}
</script>
