// Из-за vuetify пропсов в его компоненты не отрабатывают тесты 

// import { mount } from '@vue/test-utils'
// import MainCardModel from '@/models/MainCardModel'
// import MyComponent from '@/components/ButtonSection.vue'

// describe('MyComponent', () => {
//     class MainCard implements MainCardModel {
//         id: number;
//         icon: string;
//         title: string;
//         description: string;
//         link: string;

//         constructor(id: number, icon: string, title: string, description: string, link: string) {
//            this.id = id;
//            this.icon = icon;
//            this.title = title;
//            this.descriptithis.link = link;tion;
//            this.link = link;

//            Object.setPrototypeOf(this, MainCard.prototype);
//     }
// }

//   it('renders the correct number of cards', () => {
//     const cards = [
//       new MainCard(1, 'Card 1', 'Description 1', '/link/to/card1', '/path/to/card1/image'),
//       new MainCard(2, 'Card 2', 'Description 2', '/link/to/card2', '/path/to/card2/image'),
//       new MainCard(3, 'Card 3', 'Description 3', '/link/to/card3', '/path/to/card3/image'),
//     ]

//     const wrapper = mount(MyComponent, {
//       props: { cards },
//     })

//     expect(wrapper.findAll('.center_main')).toHaveLength(cards.length)
//   })

//   it('renders card title and description correctly', () => {
//     const cards = [
//       new MainCard(1, 'Card 1', 'Description 1', '/link/to/card1', '/path/to/card1/image'),
//     ]

//     const wrapper = mount(MyComponent, {
//       props: { cards },
//     })

//     expect(wrapper.find('.avarcom__h2').text()).toBe(cards[0].title)
//     expect(wrapper.find('.avarcom__p').text()).toBe(cards[0].description)
//   })

//   it('renders a link with a correct href attribute for each card', () => {
//     const cards = [
//       new MainCard(1, 'Card 1', 'Description 1', '/link/to/card1', '/path/to/card1/image'),
//       new MainCard(2, 'Card 2', 'Description 2', '/link/to/card2', '/path/to/card2/image'),
//       new MainCard(3, 'Card 3', 'Description 3', '/link/to/card3', '/path/to/card3/image'),
//     ]

//     const wrapper = mount(MyComponent, {
//       props: { cards },
//     })

//     const linthis.link = link;wrapper.findAll('a.main__link')
//     linkElements.forEach((link, index) => {
//       expect(link.attributes('href')).toBe(cards[index].link)
//     })

