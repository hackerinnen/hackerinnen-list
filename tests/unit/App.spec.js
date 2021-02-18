import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  describe("matchTags method", () => {
    it("should return no rows if no rows are given", () => {
      const wrapper = shallowMount(App, {});
      const rows = [];
      const selection = [
        {
          key: "mailingliste",
          title: "Mailingliste",
          selected: true,
          tags: ["Mailingliste"],
        },
      ];
      const filteredRows = wrapper.vm.matchTags(rows, selection);
      expect(filteredRows).toEqual(rows);
    });

    it("should return all rows if selection is empty", () => {
      const wrapper = shallowMount(App, {});
      const rows = [{ title: "1" }, { title: "2" }];
      const filteredRows = wrapper.vm.matchTags(rows, []);
      expect(filteredRows).toEqual(rows);
    });

    it("should ignore selections that do not have tags", () => {
      const wrapper = shallowMount(App, {});
      const selection = [
        {
          key: "newsletter",
          title: "Newsletter",
          icon: "fas fa-inbox",
          selected: true,
        },
      ];
      const rows = [{ title: "1", newsletter: "https://" }, { title: "2" }];
      const filteredRows = wrapper.vm.matchTags(rows, selection);
      expect(filteredRows).toEqual(rows);
    });

    it("should skip row if row doesn't have tags prop", () => {
      const wrapper = shallowMount(App, {});
      const selection = [
        {
          key: "conference",
          title: "Konferenzen",
          selected: true,
          tags: ["Konferenz"],
        },
      ];
      const rows = [{ title: "2" }];
      const filteredRows = wrapper.vm.matchTags(rows, selection);
      expect(filteredRows).toEqual([]);
    });

    it("should skip row if row has empty tags prop", () => {
      const wrapper = shallowMount(App, {});
      const selection = [
        {
          key: "conference",
          title: "Konferenzen",
          selected: true,
          tags: ["Konferenz"],
        },
      ];
      const rows = [{ title: "2", tags: "" }];
      const filteredRows = wrapper.vm.matchTags(rows, selection);
      expect(filteredRows).toEqual([]);
    });

    it("should return correct rows for 1:1 tags", () => {
      const wrapper = shallowMount(App, {});
      const selection = [
        {
          key: "conference",
          title: "Konferenzen",
          selected: true,
          tags: ["Konferenz"],
        },
      ];
      const rows = [{ title: "1", tags: "Konferenz" }, { title: "2" }];
      const filteredRows = wrapper.vm.matchTags(rows, selection);
      expect(filteredRows).toEqual([rows[0]]);
    });

    it("should return correct rows for 1:n tags", () => {
      const wrapper = shallowMount(App, {});
      const selection = [
        {
          key: "code",
          title: "Programmieren lernen",
          selected: true,
          tags: ["Workshops", "Tutorial", "Kurse", "Bootcamp"],
        },
      ];
      const rows = [
        { title: "1", tags: "Kurse" },
        { title: "2", tags: "Konferenz" },
      ];
      const filteredRows = wrapper.vm.matchTags(rows, selection);
      expect(filteredRows).toEqual([rows[0]]);
    });

    it("should return correct rows with n:1 tags", () => {
      const wrapper = shallowMount(App, {});
      const selection = [
        {
          key: "conference",
          title: "Konferenzen",
          selected: true,
          tags: ["Konferenz"],
        },
      ];
      const rows = [
        { title: "1", tags: "Konferenz, Mentoring" },
        { title: "2", tags: "Kurse" },
      ];
      const filteredRows = wrapper.vm.matchTags(rows, selection);
      expect(filteredRows).toEqual([rows[0]]);
    });

    it("should return correct rows with n:n tags", () => {
      const wrapper = shallowMount(App, {});
      const selection = [
        {
          key: "conference",
          title: "Konferenzen",
          selected: true,
          tags: ["Konferenz", "Speaker"],
        },
      ];
      const rows = [
        { title: "1", tags: "Konferenz, Kurse" },
        { title: "2", tags: "Speaker, Mentoring" },
      ];
      const filteredRows = wrapper.vm.matchTags(rows, selection);
      expect(filteredRows).toEqual(rows);
    });
  });

  describe("matchKeys method", () => {
    it("should return all rows if selection is empty", () => {
      const wrapper = shallowMount(App, {});
      const rows = [];
      const selection = [
        {
          key: "newsletter",
          title: "Newsletter",
          icon: "fas fa-inbox",
          selected: true,
        },
      ];
      const filteredRows = wrapper.vm.matchKeys(rows, selection);
      expect(filteredRows).toEqual(rows);
    });

    it("should ignore selections that have tags", () => {
      const wrapper = shallowMount(App, {});
      const rows = [{ title: "1", mailingliste: true }, { title: "2" }];
      const selection = [
        {
          key: "mailingliste",
          title: "Mailingliste",
          selected: true,
          tags: ["Mailingliste"],
        },
      ];
      const filteredRows = wrapper.vm.matchKeys(rows, selection);
      expect(filteredRows).toEqual(rows);
    });

    it("should ignore rows with empty key", () => {
      const wrapper = shallowMount(App, {});
      const rows = [{ title: "1", newsletter: "" }];
      const selection = [
        {
          key: "newsletter",
          title: "Newsletter",
          icon: "fas fa-inbox",
          selected: true,
        },
      ];
      const filteredRows = wrapper.vm.matchKeys(rows, selection);
      expect(filteredRows).toEqual([]);
    });

    it("should return correct rows for 1:n keys", () => {
      const wrapper = shallowMount(App, {});
      const rows = [
        { title: "1", newsletter: "https://" },
        { title: "2", telegram: "https://" },
      ];
      const selection = [
        {
          key: "newsletter",
          title: "Newsletter",
          icon: "fas fa-inbox",
          selected: true,
        },
        {
          key: "telegram",
          title: "Telegram Gruppe",
          icon: "fab fa-telegram",
          selected: false,
        },
      ];
      const filteredRows = wrapper.vm.matchKeys(rows, selection);
      expect(filteredRows).toEqual([]);
    });

    it("should return correct rows for 1:1 keys", () => {
      const wrapper = shallowMount(App, {});
      const rows = [{ title: "1", newsletter: "https://" }, { title: "2" }];
      const selection = [
        {
          key: "newsletter",
          title: "Newsletter",
          icon: "fas fa-inbox",
          selected: true,
        },
      ];
      const filteredRows = wrapper.vm.matchKeys(rows, selection);
      expect(filteredRows).toEqual([rows[0]]);
    });

    it("should return correct rows for n:1 keys", () => {
      const wrapper = shallowMount(App, {});
      const rows = [
        { title: "1", newsletter: "https://", twitch: "https://" },
        { title: "2", youtube: "https://", podcast: "https://" },
      ];
      const selection = [
        {
          key: "newsletter",
          title: "Newsletter",
          icon: "fas fa-inbox",
          selected: true,
        },
      ];
      const filteredRows = wrapper.vm.matchKeys(rows, selection);
      expect(filteredRows).toEqual([rows[0]]);
    });

    it("should return correct rows for n:n keys", () => {
      const wrapper = shallowMount(App, {});
      const rows = [
        { title: "1", newsletter: "https://", podcast: "https://" },
        { title: "2", youtube: "https://", twitch: "https://" },
      ];
      const selection = [
        {
          key: "newsletter",
          title: "Newsletter",
          icon: "fas fa-inbox",
          selected: true,
        },
        {
          key: "podcast",
          title: "Podcast",
          icon: "fas fa-podcast",
          selected: false,
        },
      ];
      const filteredRows = wrapper.vm.matchKeys(rows, selection);
      expect(filteredRows).toEqual([rows[0]]);
    });
  });
});
