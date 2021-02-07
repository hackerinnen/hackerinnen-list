<template>
  <div v-if="open" class="sidebar">
    <div class="content p-4">
      <button class="delete" @click="$emit('close')"></button>
      <h1 class="title">Filter</h1>

      <p>
        Ich möchte Coding-Initiativen kennenlernen, Intiativen auf Social Media
        folgen, YouTube Channels abonnieren, programmieren lernen, Technik
        verstehen, an Meetups teilnehmen, networken, Hackerinnen treffen,
        Hackerspaces besuchen, Newsletter abonnieren, mentorn, vernetzen
      </p>

      <h2 class="subtitle">Ich suche:</h2>
      <div class="tags are-medium">
        <span class="tag is-primary is-light is-rounded">Meetups</span>
        <span class="tag is-primary is-light is-rounded">Konferenzen</span>
        <span class="tag is-primary is-light is-rounded">Initiativen</span>
        <span class="tag is-primary is-light is-rounded">Hackspaces</span>
        <span class="tag is-primary is-light is-rounded">Workshops</span>
        <span class="tag is-primary is-light is-rounded">Mentor sein</span>
        <span class="tag is-primary is-light is-rounded"
          >Andere Hackerinnen</span
        >
        <span class="tag is-primary is-light is-rounded">Networken</span>
        <span class="tag is-primary is-light is-rounded">Coden lernen</span>
        <span class="tag is-primary is-light is-rounded"
          >Technik verstehen</span
        >
        <span class="tag is-primary is-light is-rounded">Bücher</span>
        <span class="tag is-primary is-light is-rounded">Lernen</span>
        <span class="tag is-primary is-light is-rounded">Unterstützen</span>
        <span class="tag is-primary is-light is-rounded"
          >Suche Angebote für Frauen</span
        >
        <span class="tag is-primary is-light is-rounded"
          >Newsletter abonnieren</span
        >
      </div>

      <h2 class="subtitle">Ich folge:</h2>
      <div class="tags are-medium">
        <span class="tag is-primary is-light is-rounded">
          <span class="icon mr-1">
            <i class="fab fa-facebook"></i>
          </span>
          Facebook
        </span>
        <span class="tag is-primary is-light is-rounded">
          <span class="icon mr-1">
            <i class="fab fa-twitter"></i>
          </span>
          Twitter
        </span>
        <span class="tag is-primary is-light is-rounded">
          <span class="icon mr-1">
            <i class="fab fa-instagram"></i>
          </span>
          Instagram
        </span>
        <span class="tag is-primary is-light is-rounded">
          <span class="icon mr-1">
            <i class="fab fa-youtube"></i>
          </span>
          YouTube
        </span>
        <span class="tag is-primary is-light is-rounded">
          <span class="icon mr-1">
            <i class="fab fa-telegram"></i>
          </span>
          Telegram Gruppen
        </span>
        <span class="tag is-primary is-light is-rounded">
          <span class="icon mr-1">
            <i class="fab fa-tiktok"></i>
          </span>
          TikTok
        </span>
      </div>

      <h2 class="subtitle">Ich bin:</h2>
      <div class="tags are-medium">
        <span class="tag is-primary is-light is-rounded">Schüler</span>
        <span class="tag is-primary is-light is-rounded">Student</span>
        <span class="tag is-primary is-light is-rounded">Älter als 16</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filter",
  props: ["open"],
  data: function() {
    return {
      search: ["Meetups", "Konferenzen", "Initiativen"],
      selectedFilter: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
  height: 100vh;
  background-color: #00d1b2;

  .tag {
    cursor: pointer;
  }
  .tag:hover {
    background-color: white;
  }
}
</style>
