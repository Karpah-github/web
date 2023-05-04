import DefaultLayoutVue from "@/layouts/DefaultLayout.vue";
import { mount } from "@vue/test-utils";

DefaultLayoutVue;
const buttonSelector = "[data-testid=navToggleTest]";
const sidebarSelector = "[data-testid=sidebarOpenTest]";
describe("toggleSidebar", () => {
  const wrapper = mount(DefaultLayoutVue, {});

  it("should open navbar", async () => {
    await wrapper.find(buttonSelector).trigger("click");
    expect(wrapper.find(sidebarSelector).exists()).toBe(true);
  });
});
