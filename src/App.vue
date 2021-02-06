<template>
  <div class="container is-fluid">
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-start">
        <h1 class="title">Hackerinnen List</h1>
      </div>
      <div class="navbar-end">
        <span class="button is-primary" @click="toggleFilter">Filter</span>
        <span class="button is-secondary">Neu</span>
      </div>
    </nav>

    <List :data="enabledRows" />

    <Filter :open="showFilter" @close="toggleFilter" />
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
          tags: row[3],
          website: row[4],
          facebook: row[5],
          twitter: row[6],
          instagram: row[7],
          newsletter: row[8],
          youtube: row[9],
          twitch: row[10],
          tiktok: row[11],
          telegram: row[12],
          email: row[13],
          region: row[14],
          cities: row[15],
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
