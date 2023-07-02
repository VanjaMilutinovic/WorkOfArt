//type=0 -> offer
//type=1 -> msg
const initialOffers = [
    {
        id: 1,
        image_src: '/2/0.jpg',
        type: 0,
        data: [
            { title: 'Stvaranje Adama', author: 'Mikelanđelo', user: 'Milica Banjac', description: '500$'},
            { title: 'The Creation of Adam', author: 'Michelangelo', user: 'Milica Banjac', description: '500$' }
        ]
    },
    {
        id: 2,
        image_src: '/2/0.jpg',
        type: 1,
        data: [
            { title: 'Stvaranje Adama', author: 'Mikelanđelo', user: 'Milica Banjac', description: 'Pogledajte ovo1'},
            { title: 'The Creation of Adam', author: 'Michelangelo', user: 'Milica Banjac', description: 'Check out this amazing artwork!' }
        ]
    },
    {
        id: 3,
        image_src: '/3/0.jpg',

        type: 0,
        data: [
            { title: 'Tajna večera', author: 'Leonardo da Vinči', user: 'Milica Banjac', description: '500$' },
            { title: 'The Secret Supper', author: 'Leonardo da Vinci', user: 'Milica Banjac', description: '500$' }
        ]
    },
    {
        id: 4,
        image_src: '/4/0.jpg',
        type: 1,
        data: [
            { title: 'Bista Nefertiti', author: 'Nepoznati autor', user: 'Milica Banjac', description: 'message text' },
            { title: 'Bista Nefertiti', author: 'Unknown artist', user: 'Milica Banjac', description: 'message text' }
        ]
    },
    {
        id: 5,
        image_src: '/1/0.jpg',
        type: 0,
        data: [
            { title: 'Mona Liza', author: 'Leonardo da Vinči', user: 'Milica Banjac', description: '150 000 RSD'},
            { title: 'Mona Lisa', author: 'Leonardo da Vinci', user: 'Milica Banjac', description: '150 000 RSD' }
        ]
    },
    {
        id: 6,
        image_src: '/6/0.jpg',
        type: 0,
        data: [
            { title: 'Nika sa Samotrake', author: 'Nepoznati autor', user: 'Milica Banjac', description: '1500 EUR'},
            { title: 'Nike of Samothrace', author: 'Unknown author', user: 'Milica Banjac', description: '1500 EUR' }
        ]
    },
    {
        id: 7,
        image_src: '/3/0.jpg',
        type: 0,
        data: [
            { title: 'Tajna večera', author: 'Leonardo da Vinči', user: 'Natalija Bogdanovic', description: '65 000 RSD'},
            { title: 'The Secret Supper', author: 'Leonardo da Vinci', user: 'Natalija Bogdanovic', description: '65 000 RSD' }
        ]
    }
];

export default initialOffers;