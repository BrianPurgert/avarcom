import { mount } from "@vue/test-utils";
// @ts-ignore
import Component from "@/components/common/TheTitle.vue";

describe("TheTitle", () => {
  it('renders props.title when different language', () => {
    const title = 'тест test テスト 测试 اختبار';
    const component = mount(Component, {
      props: {
        title: title,
      },
    });

    expect(component.text()).toContain(title);
  })
});
