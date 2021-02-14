<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container is-fullhd">
      <div class="navbar-brand">
        <span class="title is-3 is-size-4-mobile ml-3">
          Hackerinnen Liste
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
        <span class="button is-primary" @click="$emit('showForm')">
          <i class="fas fa-plus"></i
        ></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  emits: ["showForm"],
};
</script>

<style lang="scss" scoped>
.title {
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
}
</style>
