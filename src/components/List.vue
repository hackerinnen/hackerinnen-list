<template>
  <div class="box" v-for="(entry, index) in data" :key="index">
    <article class="media">
      <div class="media-left">
        <figure class="image is-16x16">
          <!-- <img :src="entry.logo" alt="Image" /> -->
          <i class="far fa-heart"></i>
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ entry.title }}</strong> <small>@twitter</small>
            <br />
            {{ entry.description }}
            <br />
            <small
              ><a v-if="entry.website" :href="entry.website" target="_blank">{{
                entry.website
              }}</a></small
            >
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a
              v-if="entry.youtube"
              :href="entry.youtube"
              target="_blank"
              class="level-item"
              aria-label="youtube"
            >
              <span class="icon is-small has-text-primary">
                <i class="fab fa-youtube" aria-hidden="true"></i>
              </span>
            </a>
            <a
              v-if="entry.twitch"
              :href="entry.twitch"
              target="_blank"
              class="level-item"
              aria-label="twitch"
            >
              <span class="icon is-small has-text-primary">
                <i class="fab fa-twitch" aria-hidden="true"></i>
              </span>
            </a>
            <a
              v-if="entry.telegram"
              :href="entry.telegram"
              target="_blank"
              class="level-item"
              aria-label="teleram"
            >
              <span class="icon is-small has-text-primary">
                <i class="fab fa-telegram" aria-hidden="true"></i>
              </span>
            </a>
            <a
              v-if="entry.instagram"
              :href="entry.instagram"
              target="_blank"
              class="level-item"
              aria-label="instagram"
            >
              <span class="icon is-small has-text-primary">
                <i class="fab fa-instagram" aria-hidden="true"></i>
              </span>
            </a>
            <a
              v-if="entry.twitter"
              :href="entry.twitter"
              target="_blank"
              class="level-item"
              aria-label="twitter"
            >
              <span class="icon is-small has-text-primary">
                <i class="fab fa-twitter" aria-hidden="true"></i>
              </span>
            </a>
            <a
              v-if="entry.facebook"
              :href="entry.facebook"
              target="_blank"
              class="level-item"
              aria-label="facebook"
            >
              <span class="icon is-small has-text-primary">
                <i class="fab fa-facebook" aria-hidden="true"></i>
              </span>
            </a>
            <a
              v-if="entry.email"
              :href="`mailto:${entry.email}`"
              target="_blank"
              class="level-item"
              aria-label="email"
            >
              <span class="icon is-small has-text-primary">
                <i class="fas fa-envelope" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["data"],
};
</script>

<style scoped>
li {
  list-style-type: none;
}
.media-content {
  text-align: left;
  max-width: 800px;
}
</style>
