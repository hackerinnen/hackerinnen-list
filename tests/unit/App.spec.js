import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  describe("matchTags method", () => {
    it("should return all rows if selection is empty", () => {
      const wrapper = shallowMount(App, {});
      const rows = [{title: "1"}, {title: "2"}]
      const filteredRows = wrapper.vm.matchTags(rows, []);
      expect(filteredRows).toEqual(rows);
    });
    it("should not break if row is missing tags prop", () => {
      const wrapper = shallowMount(App, {});
      const rows = [{title: "1"}, {title: "2", tags: ""}]
      const filteredRows = wrapper.vm.matchTags(rows, []);
      expect(filteredRows).toEqual([]);
    });
    it("should ignore selections that do not have tags", () => {});
    it("should return correct rows for selection", () => {});
  });
  describe("matchKeys method", () => {
    it("should return all rows if selection is empty", () => {})
    it("should ignore selections that have tags", () => {});
    it("should return correct rows for selection", () => {});
  });
});
