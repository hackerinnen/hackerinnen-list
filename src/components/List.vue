<template>
  <div class="box" v-for="(entry, index) in data" :key="index">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img :src="entry.logo" alt="Image" />
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ entry.title }}</strong> <small>@twitter</small>
            <br />
            {{ entry.description }}
            <br />
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="reply">
              <span class="icon is-small">
                <i class="fas fa-reply" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="retweet">
              <span class="icon is-small">
                <i class="fas fa-retweet" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="like">
              <span class="icon is-small">
                <i class="fas fa-heart" aria-hidden="true"></i>
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
}
</style>
