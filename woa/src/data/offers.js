//type=0 -> offer
//type=1 -> msg
const initialOffers = [
    {
        id: 1,
        image_src: '/2/0.jpg',
        type: 0,
        data: [
            { title: 'Stvaranje Adama', author: 'umetnik', user: 'Vanjos', description: 'opis'},
            { title: 'The Creation of Adam', author: 'umetnikENG', user: 'VanjosENG', description: 'opisENG' }
        ]
    },
    {
        id: 2,
        image_src: '/2/0.jpg',
        type: 1,
        data: [
            { title: 'Stvaranje Adama', author: 'Admin', user: 'Vanjos', description: 'message'},
            { title: 'The Creation of Adam', author: 'Admin', user: 'Vanjos', description: 'message' }
        ]
    },
    {
        id: 3,
        image_src: '/3/0.jpg',

        type: 0,
        data: [
            { title: 'Tajna večera', author: 'Artist', user: 'Vanjos', description: 'Check out this amazing artwork!' },
            { title: 'The Secret Supper', author: 'ArtistENG', user: 'VanjosENG', description: 'Check out this amazing artwork!' }
        ]
    },
    {
        id: 4,
        image_src: '/4/0.jpg',
        type: 1,
        data: [
            { title: 'Bista Nefertiti', author: 'Admin', user: 'Vanjos', description: 'message' },
            { title: 'Bista Nefertiti', author: 'Admin', user: 'Vanjos', description: 'message' }
        ]
    },
    {
        id: 5,
        image_src: '/1/0.jpg',
        type: 0,
        data: [
            { title: 'Mona Liza', author: 'aaaaa', user: 'aaaaaa', description: 'aaaaaa'},
            { title: 'Mona Lisa', author: 'aaaaaa', user: 'VanjosENG', description: 'aaaaaa' }
        ]
    },
    {
        id: 6,
        image_src: '/6/0.jpg',
        type: 0,
        data: [
            { title: 'Nika sa Samotrake', author: 'grgr', user: 'grgr', description: 'aaaaaa'},
            { title: 'Nike of Samothrace', author: 'aaaaaa', user: 'VanjosENG', description: 'aaaaaa' }
        ]
    },
    {
        id: 7,
        image_src: '/3/0.jpg',
        type: 0,
        data: [
            { title: 'Tajna večera', author: 'grgr', user: 'grgr', description: 'grgr'},
            { title: 'The Secret Supper', author: 'grgr', user: 'grgr', description: 'grgr' }
        ]
    }
];

export default initialOffers;