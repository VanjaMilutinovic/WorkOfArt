//type=0 -> offer
//type=1 -> msg
const initialOffers = [
    {
        id: 1,
        image_src: '/2/0.jpg',
        type: 0,
        data: [
            { title: 'naziv', author: 'umetnik', user: 'Vanjos', description: 'opis'},
            { title: 'nazivENG', author: 'umetnikENG', user: 'VanjosENG', description: 'opisENG' }
        ]
    },
    {
        id: 2,
        image_src: '/2/0.jpg',
        type: 1,
        data: [
            { title: 'Welcome to our platform!', author: 'Admin', user: 'Vanjos', description: 'message'},
            { title: 'We have new features available. Check them out!', author: 'Admin', user: 'Vanjos', description: 'message' }
        ]
    },
    {
        id: 3,
        image_src: '/3/0.jpg',

        type: 0,
        data: [
            { title: 'Another Offer', author: 'Artist', user: 'Vanjos', description: 'Check out this amazing artwork!' },
            { title: 'Another Offer - ENG', author: 'ArtistENG', user: 'VanjosENG', description: 'Check out this amazing artwork!' }
        ]
    },
    {
        id: 4,
        image_src: '/4/0.jpg',
        type: 1,
        data: [
            { title: 'Special discount available for a limited time!', author: 'Admin', user: 'Vanjos', description: 'message' },
            { title: 'Get 20% off on your next purchase!', author: 'Admin', user: 'Vanjos', description: 'message' }
        ]
    },
    {
        id: 5,
        image_src: '/1/0.jpg',
        type: 0,
        data: [
            { title: 'aaaaaaaaaaa', author: 'aaaaa', user: 'aaaaaa', description: 'aaaaaa'},
            { title: 'aaaaaaa', author: 'aaaaaa', user: 'VanjosENG', description: 'aaaaaa' }
        ]
    },
    {
        id: 6,
        image_src: '/6/0.jpg',
        type: 0,
        data: [
            { title: 'aaaaaaaaaaa', author: 'grgr', user: 'grgr', description: 'aaaaaa'},
            { title: 'aaaaaaa', author: 'aaaaaa', user: 'VanjosENG', description: 'aaaaaa' }
        ]
    },
    {
        id: 7,
        image_src: '/3/0.jpg',
        type: 0,
        data: [
            { title: 'grgr', author: 'grgr', user: 'grgr', description: 'grgr'},
            { title: 'grgr', author: 'grgr', user: 'grgr', description: 'grgr' }
        ]
    }
];

export default initialOffers;