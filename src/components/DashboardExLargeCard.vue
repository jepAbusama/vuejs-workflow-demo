<template>
  <v-card class="white" height="450">
    <v-card-title>
      
      Top Visitos by Country
    </v-card-title>
    <v-card-subtitle>
      Your year website traffic data
    </v-card-subtitle>
    
    <v-divider></v-divider>

    <v-simple-table fixed-header height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left subtitle-2">Country</th>
            <th class="text-right">Unique Visitors</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img :src="country.flag" alt="" width="32" height="32"> {{country.name}}</td>
            <td class="text-right">{{ country.uniqueVisitors }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {

  data() {
    return {
      country: {name: 'United Kingdom', flag: '/countries_flag/jp.svg', uniqueVisitors: 30000 },
      visitors: [
        {country: 'USA', isoCode:'us' ,flag: '/countries_flag/us.svg', uniqueVisitors: 30000 },
        {country: 'Armenia', isoCode:'am' ,flag: '/countries_flag/am.svg', uniqueVisitors: 30000 },
        {country: 'Austria', isoCode:'at' ,flag: '/countries_flag/at.svg', uniqueVisitors: 30000 },
        {country: 'Australia', isoCode:'au' ,flag: '/countries_flag/au.svg', uniqueVisitors: 30000 },
        {country: 'Bangladesh', isoCode:'bd' ,flag: '/countries_flag/bd.svg', uniqueVisitors: 30000 },
        {country: 'Belgium', isoCode:'be' ,flag: '/countries_flag/be.svg', uniqueVisitors: 30000 },
        {country: 'Bahrain', isoCode:'bh' ,flag: '/countries_flag/bh.svg', uniqueVisitors: 30000 },
        {country: 'Canada', isoCode:'ca' ,flag: '/countries_flag/ca.svg', uniqueVisitors: 30000 },
        {country: 'China', isoCode:'cn' ,flag: '/countries_flag/cn.svg', uniqueVisitors: 30000 },
        {country: 'Algeria', isoCode:'dz' ,flag: '/countries_flag/dz.svg', uniqueVisitors: 30000 },
        {country: 'Japan', isoCode:'jp' ,flag: '/countries_flag/jp.svg', uniqueVisitors: 30000 },
        {country: 'Malaysia', isoCode:'my' ,flag: '/countries_flag/my.svg', uniqueVisitors: 30000 },
        {country: 'Philippines', isoCode:'ph' ,flag: '/countries_flag/ph.svg', uniqueVisitors: 30000 },
        {country: 'Qatar', isoCode:'qa' ,flag: '/countries_flag/qa.svg', uniqueVisitors: 30000 },
        {country: 'Saudi Arabia', isoCode:'sa' ,flag: '/countries_flag/sa.svg', uniqueVisitors: 30000 },
        {country: 'Singapore', isoCode:'sg' ,flag: '/countries_flag/sg.svg', uniqueVisitors: 30000 },
        {country: 'Turkey', isoCode:'tr' ,flag: '/countries_flag/tr.svg', uniqueVisitors: 30000 },
        {country: 'United Kingdom', isoCode:'uk' ,flag: '/countries_flag/uk.svg', uniqueVisitors: 30000 },
       ]
    }
  }

}
</script>

<style>

</style>