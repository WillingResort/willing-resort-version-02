interface Festival {
    id: string;
    name: string;
    date: string;
    description: string;
    detailsDescription?: string;
    image: string;
}

// List of festivals
export const festivals: Festival[] = [
    {
        id: 'trongsa-tshechu',
        name: "Trongsa Tshechu",
        date: "Lunar Month 11 | 5 Days",
        description:
            "One of Bhutan’s most significant religious festivals, featuring Cham dances and blessings.",
        detailsDescription: "Held at the historic Trongsa Dzong, this Tshechu honors Guru Rimpoche (Padma Sambhawa), who introduced Tantric Buddhism to the Himalayas. Monks in traditional brocade costumes perform masked dances accompanied by Buddhist chants and scripture readings. The festival culminates with the display of a large thangka - a sacred scroll depicting Padma Sambhawa and Buddhist deities.",
        image:
            "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/IMG_0336.jpeg",
    },
    {
        id: 'black-mountain-festival',
        name: "Black Mountain Festival",
        date: "October 5-6, 2024",
        description:
            "A vibrant celebration of culture, food, and local crafts, with a 100km cycling challenge.",
        detailsDescription:"",
        image:
            "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/IMG_5448.jpeg",
    },
    {
        id: 'farmers-festival',
        name: "Farmer's Festival",
        date: "November 8 (Annual Event)",
        description:
            "A festival that promotes local agriculture, sustainable living, and Bhutanese farming traditions.",
        detailsDescription:"",
        image:
            "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/IMG_6456.jpeg",
    },
    {
        id: 'yeshey-goenpi-drubchen',
        name: "Yeshey Goenpi Drubchen",
        date: "Lunar Month 9, Dates 23-25",
        description:
            "A powerful three-day Mahakala festival for purification and spiritual awakening.",
        detailsDescription:"",
        image:
            "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/IMG_0322.jpeg",
    },
    {
        id: 'pelden-lhamoi-drupchen',
        name: "Pelden Lhamoi Drupchen",
        date: "Lunar Month 12, Dates 23-25",
        description:
            "A sacred festival dedicated to Pelden Lhamo, featuring traditional monk dances and rituals.",
        detailsDescription:"",
        image:
            "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/wang.jpg",
    },
    {
        id: 'yundrocholing-tshechu',
        name: "Yundrocholing Tshechu",
        date: "Lunar Month 11, Dates 15-17",
        description:
            "A historic festival at Yundrocholing Palace, preserving ancient spiritual dances.",
        detailsDescription:"",
        image:
            "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/trongsa-tsechu.jpg",
    },
];
