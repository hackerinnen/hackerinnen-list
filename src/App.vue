<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container is-fullhd">
      <div class="navbar-brand">
        <span class="title is-3 is-size-4-mobile ml-3">
          Die Hackerinnen Liste
        </span>
      </div>
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link is-arrowless">
            <i class="far fa-question-circle is-medium has-text-primary"></i>
          </a>
          <div class="navbar-dropdown p-3" style="width: 200px;">
            Hallo! Schön das hier bist.
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <span class="button is-primary" @click="toggleFilter">
          <i class="fas fa-filter mr-2"></i>Filter</span
        >
      </div>
    </div>
  </nav>
  <div v-if="enabledRows.length > 0" class="container is-fullhd pt-5">
    <div class="columns">
      <div v-if="showFilter" class="column">
        <Filter
          :open="showFilter"
          @close="toggleFilter"
          @updated="onFilterChange"
        />
      </div>
      <div :class="['column', showFilter ? 'is-two-thirds' : 'is-full']">
        <List :data="filteredRows" />

        <p class="p-4 is-size-7">
          Coding-Initiativen kennenlernen, auf Social Media folgen, YouTube
          Channels abonnieren, programmieren lernen, Technik verstehen, an
          Meetups teilnehmen, networken, Hackerinnen treffen, Hackerspaces
          besuchen, Newsletter abonnieren, vernetzen, Frauen und Technik, MINT
        </p>
      </div>
    </div>
  </div>
  <div v-else class="pt-5">
    Loading...
  </div>
</template>

<script>
import List from "@/components/List.vue";
import Filter from "@/components/Filter.vue";
import { pick, omitBy, isEmpty } from "lodash";

export default {
  name: "App",
  components: {
    List,
    Filter,
  },
  data: function() {
    return {
      data: [],
      selection: [],
      showFilter: true,
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
    onFilterChange: function(selection) {
      this.selection = selection;
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
        // meetup
        return {
          title: row[1],
          color: row[2],
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
    filteredRows: function() {
      // only show rows that have keys (e.g. meetup, newsletter) that match the selection keys
      return this.enabledRows.filter((row) => {
        // get selected Keys
        const selectedKeys = this.selection.map((item) => {
          return item.key;
        });
        console.log(selectedKeys);
        // omit empty keys
        const rowWithoutEmpty = omitBy(row, isEmpty);
        // check if row has keys that match selected Keys
        console.log(pick(rowWithoutEmpty, selectedKeys));
        // if (rowWithoutEmpty.pick(selectedKeys))
        return true;
      });
    },
  },
};
</script>

<style lang="scss">
$box-shadow: 0 0.1em 0.5em -0.125em rgb(10 10 10 / 10%),
  0 0px 0 1px rgb(10 10 10 / 2%);
@import "./../node_modules/bulma/bulma.sass";

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $primary;
  background-color: rgba(0, 209, 178, 0.06);
  min-height: 100vh;
}

#app {
  margin-top: 52px;
}
</style>
