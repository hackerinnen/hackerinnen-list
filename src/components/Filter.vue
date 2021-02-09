<template>
  <div v-if="open" class="sidebar has-background-primary has-text-left">
    <div class="content p-4">
      <button class="delete is-pulled-right" @click="$emit('close')"></button>
      <h2
        v-if="selectedFilter.length > 0"
        class="subtitle is-size-6 mb-3 has-text-white"
      >
        Deine Auswahl
      </h2>
      <div class="tags are-medium">
        <span
          v-for="item in selectedFilter"
          :key="`selected-${item.key}`"
          :class="[
            'tag',
            'is-primary',
            'is-light',
            'is-rounded',
            'is-normal',
            'selection',
          ]"
        >
          <span v-if="item.icon" class="icon mr-1">
            <i :class="item.icon"></i>
          </span>
          {{ item.title }}
          <button @click="onSelect(item)" class="delete is-small"></button>
        </span>
      </div>
      <h2 class="subtitle is-size-6 mb-3 has-text-white">
        Interessen
      </h2>
      <div class="tags are-medium">
        <span
          v-for="item in interests"
          :key="item.key"
          :class="[
            'tag',
            'is-primary',
            'is-light',
            'is-rounded',
            'is-normal',
            item.selected ? 'hide' : '',
          ]"
          @click="onSelect(item)"
          >{{ item.title }}</span
        >
      </div>

      <h2 class="subtitle is-size-6 mb-3 has-text-white">
        Format
      </h2>
      <div class="tags are-medium">
        <span
          v-for="item in format"
          :key="item.key"
          :class="[
            'tag',
            'is-primary',
            'is-rounded',
            'is-normal',
            item.selected ? 'hide' : 'is-light',
          ]"
          @click="onSelect(item)"
        >
          <span class="icon mr-1">
            <i :class="item.icon"></i>
          </span>
          {{ item.title }}
        </span>
      </div>

      <h2 class="subtitle is-size-6 mb-3 has-text-white">
        Social Media
      </h2>
      <div class="tags are-medium">
        <span
          v-for="item in social"
          :key="item.key"
          :class="[
            'tag',
            'is-primary',
            'is-light',
            'is-rounded',
            'is-normal',
            item.selected ? 'hide' : '',
          ]"
          @click="onSelect(item)"
        >
          <span class="icon mr-1">
            <i :class="item.icon"></i>
          </span>
          {{ item.title }}
        </span>
      </div>

      <h2 class="subtitle is-size-6 mb-3 has-text-white">
        Zielgruppe
      </h2>
      <div class="tags are-medium">
        <span
          v-for="item in audience"
          :key="item.key"
          :class="[
            'tag',
            'is-primary',
            'is-light',
            'is-rounded',
            'is-normal',
            item.selected ? 'hide' : '',
          ]"
          @click="onSelect(item)"
          >{{ item.title }}</span
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
      interests: [
        { key: "meetup", title: "Meetup", selected: false },
        { key: "conference", title: "Konferenzen", selected: false },
        { key: "initiative", title: "Initiativen", selected: false },
        { key: "hackspace", title: "Hackerspace", selected: false },
        { key: "workshop", title: "Workshop", selected: false },
        { key: "network", title: "Netzwerk", selected: false },
        { key: "community", title: "Communities", selected: false },
        { key: "code", title: "Programmieren lernen", selected: false },
        { key: "learn", title: "Technik verstehen", selected: false },
        { key: "mentorship", title: "Mentoring", selected: false },
        { key: "support", title: "Unterstützen", selected: false },
      ],
      format: [
        { key: "blog", title: "Blog", icon: "fas fa-blog", selected: false },
        {
          key: "news",
          title: "Newsletter",
          icon: "fas fa-inbox",
          selected: false,
        },
        {
          key: "telegram",
          title: "Telegram Gruppe",
          icon: "fab fa-telegram",
          selected: false,
        },
        {
          key: "youtube",
          title: "YouTube",
          icon: "fab fa-youtube",
          selected: false,
        },
        {
          key: "twitch",
          title: "Twitch",
          icon: "fab fa-twitch",
          selected: false,
        },
        // {
        //   key: "tiktok",
        //   title: "TikTok",
        //   icon: "fab fa-tiktok",
        //   selected: false,
        // },
        { key: "books", title: "Book", icon: "fas fa-book", selected: false },
      ],
      social: [
        {
          key: "twitter",
          title: "Twitter",
          icon: "fab fa-twitter",
          selected: false,
        },
        {
          key: "instagram",
          title: "Instagram",
          icon: "fab fa-instagram",
          selected: false,
        },
        {
          key: "facebook",
          title: "Facebook",
          icon: "fab fa-facebook",
          selected: false,
        },
      ],
      audience: [
        { key: "pupil", title: "Schüler", selected: false },
        { key: "student", title: "Student", selected: false },
        { key: "adult", title: "Über 16", selected: false },
      ],
    };
  },
  methods: {
    onSelect: function(item) {
      item.selected = !item.selected;
      this.$emit("updated", this.selectedFilter);
    },
  },
  computed: {
    selectedFilter: function() {
      const all = this.interests
        .concat(this.format)
        .concat(this.social)
        .concat(this.audience);
      return all.filter((item) => {
        return item.selected === true;
      });
    },
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

  .tag.selection {
    background-color: #ebfffc;
    cursor: inherit;
  }

  .tag.hide,
  .tag.hide:hover {
    display: none;
  }
}
</style>
