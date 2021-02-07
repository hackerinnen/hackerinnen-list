<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container is-fullhd">
      <div class="navbar-start">
        <h1 class="title">Hackerinnen List</h1>
      </div>
      <div class="navbar-end">
        <span class="button is-primary" @click="toggleFilter">Filter</span>
        <span class="button is-secondary">Neu</span>
      </div>
    </div>
  </nav>
  <div class="container is-fullhd">
    <div class="columns">
      <div class="column is-two-thirds">
        <List :data="enabledRows" />
      </div>
      <div class="column">
        <Filter :open="showFilter" @close="toggleFilter" />
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/components/List.vue";
import Filter from "@/components/Filter.vue";

export default {
  name: "App",
  components: {
    List,
    Filter,
  },
  data: function() {
    return {
      data: [],
      showFilter: false,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    toggleFilter: function() {
      this.showFilter = !this.showFilter;
    },
    fetchData: async function() {
      try {
        const gapi = await this.$gapi.getGapiClient();
        const res = await gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: process.env.VUE_APP_SPREADSHEET_ID,
          range: "Initiativen!A2:P100",
        });
        const body = JSON.parse(res.body);
        this.data = body.values;
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    enabledRows: function() {
      const enabledRows = this.data.filter((entry) => {
        return entry[0] === "TRUE";
      });

      //change row data into object
      return enabledRows.map((row) => {
        // ignore row[0]
        return {
          title: row[1],
          logo: row[2],
          description: row[3],
          tags: row[4],
          website: row[5],
          facebook: row[6],
          twitter: row[7],
          instagram: row[8],
          newsletter: row[9],
          youtube: row[10],
          twitch: row[11],
          tiktok: row[12],
          telegram: row[13],
          email: row[14],
          region: row[15],
          cities: row[16],
        };
      });
    },
  },
};
</script>

<style lang="scss">
// $title-color: white;
$box-shadow: 0 0.1em 0.5em -0.125em rgb(10 10 10 / 10%),
  0 0px 0 1px rgb(10 10 10 / 2%);
@import "./../node_modules/bulma/bulma.sass";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
