import { mount } from "@vue/test-utils";
// @ts-ignore
import Component from "@/components/AboutDescription.vue";

describe("AboutDescription", () => {
    it('renders props.description when different language', () => {
        const title = 'тест test テスト 测试 اختبار';
        const component = mount(Component, {
            props: {
                description: title,
            },
        });

        expect(component.text()).toContain(title);
    })
});
