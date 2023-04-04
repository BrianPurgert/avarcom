import { mount } from '@vue/test-utils';
// @ts-ignore
import AboutSlider from '@/components/AboutSlider';
import SliderModal from '@/models/SliderModal';

describe("AboutSlider", () => {
    const slides: Array<SliderModal> = [
        {
            title: 'test title тест тайтл',
            points: [
                {
                    title: "test P title тест П тайтл",
                    description: "test P description тест П описание",
                },
                {
                    title: "test2 P2 title2 тест2 П2 тайтл2",
                    description: "test2 P2 description2 тест2 П2 описание2",
                },
            ]
        },
        {
            title: '2 test title тест тайтл',
            points: [
                {
                    title: "2 test P title тест П тайтл",
                    description: "test P description тест П описание",
                },
                {
                    title: "2 test2 P2 title2 тест2 П2 тайтл2",
                    description: "test2 P2 description2 тест2 П2 описание2",
                },
            ]
        }
    ];

    const component = mount(AboutSlider, {
        props: {
            slides: slides,
        }
    });
    const carousel = component.get('[data-test="carousel-item"]');

    it('check the number of slides', () => {
        expect(component.findAll('[data-test="carousel-item"]')).toHaveLength(slides.length);
    })

    it('renders with props.slides', () => {
        expect(carousel.text()).toContain(slides[0].title);
    })
})
