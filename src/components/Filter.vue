<template>
  <div v-if="open" class="sidebar has-background-primary has-text-left">
    <div class="content p-4">
      <button class="delete is-pulled-right" @click="$emit('close')"></button>
      <h2 class="subtitle is-size-6 mb-3 has-text-white">
        Interessen
      </h2>
      <div class="tags are-medium">
        <span class="tag is-primary is-light is-rounded is-normal"
          >Meetups</span
        >
        <span class="tag is-primary is-light is-rounded is-normal"
          >Konferenzen</span
        >
        <span class="tag is-primary is-light is-rounded is-normal"
          >Initiativen</span
        >
        <span class="tag is-primary is-light is-rounded is-normal"
          >Hackspaces</span
        >
        <span class="tag is-primary is-light is-rounded is-normal"
          >Workshops</span
        >
        <span class="tag is-primary is-light is-rounded is-normal"
          >Mentor/in sein</span
        >
        <span class="tag is-primary is-light is-rounded is-normal"
          >Hackerinnen</span
        >
        <span class="tag is-primary is-light is-rounded is-normal"
          >Networken</span
        >
        <span class="tag is-primary is-light is-rounded is-normal"
          >Programmieren lernen</span
        >
        <span class="tag is-primary is-light is-rounded is-normal"
          >Technik verstehen</span
        >
        <span class="tag is-primary is-light is-rounded is-normal">Bücher</span>
        <span class="tag is-primary is-light is-rounded is-normal"
          >Unterstützen</span
        >
      </div>

      <h2 class="subtitle is-size-6 mb-3 has-text-white">
        Format
      </h2>
      <div class="tags are-medium">
        <span class="tag is-primary is-light is-rounded is-normal">
          <span class="icon mr-1">
            <i class="fas fa-blog"></i>
          </span>
          Blog
        </span>
        <span class="tag is-primary is-light is-rounded is-normal">
          <span class="icon mr-1">
            <i class="fas fa-inbox"></i>
          </span>
          Newsletter
        </span>
        <span class="tag is-primary is-light is-rounded is-normal">
          <span class="icon mr-1">
            <i class="fab fa-telegram"></i>
          </span>
          Telegram Gruppen
        </span>
        <span class="tag is-primary is-light is-rounded is-normal">
          <span class="icon mr-1">
            <i class="fab fa-youtube"></i>
          </span>
          YouTube
        </span>
        <span class="tag is-primary is-light is-rounded is-normal">
          <span class="icon mr-1">
            <i class="fab fa-tiktok"></i>
          </span>
          TikTok
        </span>
      </div>

      <h2 class="subtitle is-size-6 mb-3 has-text-white">
        Social Media
      </h2>
      <div class="tags are-medium">
        <span class="tag is-primary is-light is-rounded is-normal">
          <span class="icon mr-1">
            <i class="fab fa-twitter"></i>
          </span>
          Twitter
        </span>
        <span class="tag is-primary is-light is-rounded is-normal">
          <span class="icon mr-1">
            <i class="fab fa-facebook"></i>
          </span>
          Facebook
        </span>
        <span class="tag is-primary is-light is-rounded is-normal">
          <span class="icon mr-1">
            <i class="fab fa-instagram"></i>
          </span>
          Instagram
        </span>
      </div>

      <h2 class="subtitle is-size-6 mb-3 has-text-white">
        Zielgruppe
      </h2>
      <div class="tags are-medium">
        <span class="tag is-primary is-light is-rounded is-normal"
          >Schüler</span
        >
        <span class="tag is-primary is-light is-rounded is-normal"
          >Student</span
        >
        <span class="tag is-primary is-light is-rounded is-normal"
          >Über 16</span
        >
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
  border-radius: 12px;

  .tag {
    cursor: pointer;
  }
  .tag:hover {
    background-color: white;
  }
}
</style>
