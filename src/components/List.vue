<template>
  <div class="box" v-for="(entry, index) in data" :key="index">
    <div class="columns">
      <div
        class="column is-three-quarters"
        :style="`border-left: 2px solid ${entry.color}`"
      >
        <article class="media">
          <div class="media-left">
            <figure class="image is-16x16" :style="`color: ${entry.color}`">
              <i class="far fa-heart"></i>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ entry.title }}</strong>
                <span
                  v-if="entry.language"
                  class="tag language-tag is-light ml-2"
                  >{{ entry.language }}</span
                >
                <br />
                {{ entry.description }}
                <br />
                <small v-if="entry.book === 'TRUE'">
                  <a v-if="entry.website" :href="entry.website" target="_blank"
                    >Buch auf Thalia anschauen</a
                  >
                </small>
                <small v-else>
                  <a
                    v-if="entry.website"
                    :href="entry.website"
                    target="_blank"
                    >{{ entry.website }}</a
                  >
                </small>
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
                <a
                  v-if="entry.newsletter"
                  :href="entry.newsletter"
                  target="_blank"
                  class="level-item"
                  aria-label="newsletter"
                >
                  <span class="icon is-small has-text-primary">
                    <i class="fas fa-inbox" aria-hidden="true"></i>
                  </span>
                </a>
                <a
                  v-if="entry.podcast"
                  :href="entry.podcast"
                  target="_blank"
                  class="level-item"
                  aria-label="podcast"
                >
                  <span class="icon is-small has-text-primary">
                    <i class="fas fa-podcast" aria-hidden="true"></i>
                  </span>
                </a>
                <a
                  v-if="entry.meetup"
                  :href="entry.meetup"
                  target="_blank"
                  class="level-item"
                  aria-label="meetup"
                >
                  <span class="icon is-small has-text-primary">
                    <i class="fab fa-meetup" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
      <div class="column">
        <span class="column-separator is-pulled-left is-hidden-mobile"></span>
        <span
          class="tag is-info is-light ml-2 mb-2"
          v-for="tag in formatTags(entry.tags)"
          :key="tag"
          >{{ tag }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["data"],
  methods: {
    formatTags: function(tags) {
      const tagsArray = tags.split(",").map((tag) => {
        return tag.trim();
      });
      return tagsArray;
    },
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
}
.media-content {
  text-align: left;
}
.column-separator {
  border-left: 1px solid rgb(10 10 10 / 5%);
  height: 100%;
}
.language-tag {
  height: 1.5em;
}
</style>
