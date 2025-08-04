// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

// Image path constants
const IMAGES = {
    UPWORK: {
        gray: '/images/brands/upwork_gray.webp',
        color: '/images/brands/upwork_color.webp'
    },
    FREELANCER: {
        gray: '/images/brands/freelancer_gray.webp',
        color: '/images/brands/freelancer_color.webp'
    },
    NEWDAY_AGENCY: {
        gray: '/images/brands/newdayagency_gray.webp',
        color: '/images/brands/newdayagency_color.webp'
    },
    BIG_INFORMATIQUE: {
        gray: '/images/brands/biginformatique_gray.webp',
        color: '/images/brands/biginformatique_color.webp'
    },
    IAUTO: {
        gray: '/images/brands/iauto_gray.webp',
        color: '/images/brands/iauto_color.webp'
    },
    MESNJA: {
        gray: '/images/brands/mesnja_gray.webp',
        color: '/images/brands/mesnja_color.webp'
    },
    INFO_GATE: {
        gray: '/images/brands/infogate_gray.webp',
        color: '/images/brands/infogate_color.webp'
    },
    FUTURIVA: {
        gray: '/images/brands/futuriva_gray.webp',
        color: '/images/brands/futuriva_color.webp'
    }
};

const clients = [
    // {
    //     id: 1,
    //     title: 'Fiverr',
    //     link: '',
    //     imgGray: '/images/brands/fiverr_gray.webp',
    //     imgColor: '/images/brands/fiverr_color.webp',
    // },
    {
        id: 2,
        title: 'Upwork',
        link: '',
        imgGray: IMAGES.UPWORK.gray,
        imgColor: IMAGES.UPWORK.color,
    },
    {
        id: 3,
        title: 'Freelancer',
        link: '',
        imgGray: IMAGES.FREELANCER.gray,
        imgColor: IMAGES.FREELANCER.color,
    },
    {
        id: 4,
        title: 'Newday Agency',
        link: '',
        imgGray: IMAGES.NEWDAY_AGENCY.gray,
        imgColor: IMAGES.NEWDAY_AGENCY.color,
    },
    {
        id: 5,
        title: 'Big Informatique',
        link: '',
        imgGray: IMAGES.BIG_INFORMATIQUE.gray,
        imgColor: IMAGES.BIG_INFORMATIQUE.color,
    },
    {
        id: 6,
        title: 'iAuto',
        link: '',
        imgGray: IMAGES.IAUTO.gray,
        imgColor: IMAGES.IAUTO.color,
    },
    {
        id: 7,
        title: 'Mesnja',
        link: '',
        imgGray: IMAGES.MESNJA.gray,
        imgColor: IMAGES.MESNJA.color,
    },
    {
        id: 8,
        title: 'Info Gate',
        link: '',
        imgGray: IMAGES.INFO_GATE.gray,
        imgColor: IMAGES.INFO_GATE.color,
    },
    {
        id: 9,
        title: 'Futuriva Marketing Agency',
        link: '',
        imgGray: IMAGES.FUTURIVA.gray,
        imgColor: IMAGES.FUTURIVA.color,
    },
];

export default clients;
