
interface SubEvent {
    name: string;
    description?: string;
    programList?: string[];
}

interface Festival {
    id: string;
    name: string;
    date: string;
    description: string;
    detailDesc: string;
    subEvent?:SubEvent[];
    image: string;
}

// List of festivals
export const festivals: Festival[] = [
    {
        id: 'yeshey-goenpi-drubchen',
        name: "Yeshey Goenpi Drubchen",
        date: "Lunar Month 9, Dates 23-25 (3 Days)",
        description:
            "A powerful three-day Mahakala festival for purification and spiritual awakening.",
        detailDesc:"Initiated in 1988, this three-day festival sees the monks of Trongsa Dzong perform sacred rituals that eliminate obstacles and negative forces from one's spiritual path. Witness Mahakala's swift response to heartfelt prayers as these ancient ceremonies work to transform anger, depression, confusion, and ignorance into wisdom and clarity.",
        image:
            "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/IMG_0322.jpeg",
    },
    {
        id: 'trongsa-tshechu',
        name: "Trongsa Tshechu",
        date: "Lunar Month 11, Date 8",
        description:
            "Honoring Guru Rimpoche with Cham dances and a large thangka display.",
        detailDesc:"Held at the historic Trongsa Dzong, this Tshechu honors Guru Rimpoche (Padma Sambhawa), who introduced Tantric Buddhism to the Himalayas. Monks in traditional brocade costumes perform masked dances accompanied by Buddhist chants and scripture readings. The festival culminates with the display of a large thangka - a sacred scroll depicting Padma Sambhawa and Buddhist deities.",
        image:
            "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/IMG_0336.jpeg",
    },
    {
        id: 'pelden-lhamoi-drupchen',
        name: "Pelden Lhamoi Drupchen",
        date: "Lunar Month 12, Dates 23-25",
        description:
            "A sacred festival honoring Pelden Lhamo, with traditional monk dances and secret Nangcham dance.",
        detailDesc: "Introduced in 1988, this significant festival honors Pelden Lhamo (Mahakali), Bhutan's female protective deity. At its heart is the captivating Nangcham, a secret dance performed exclusively in the shrine where dancers circle the sacred mandala. Traditional monk dances showcase the rich tapestry of Bhutan's spiritual heritage.",
        image:
            "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/wang.jpg",
    },
    {
        id: 'korphu-drubchen',
        name: "Korphu Drubchen Festival",
        date: "Lunar Month 11, Dates 11-14 (4 Days)",
        description:
            "Peling religious dances showcasing Bhutan's spiritual heritage and devotion.",
        detailDesc:"At Korphu Lhakhang, experience the beautiful Peling religious dances introduced by Pema Lingpa and Trulku Chogden Gonpo in the 16th century. These dances are modeled after Bumthang's Jampa Lhakhang and Nabji Drup. The villagers gather in devotion, believing these sacred performances bring protection from disasters, abundant wealth, bountiful crops, and harmony to their village and Bhutan.",
        image:
            "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/IMG_0322.jpeg",
    },
    {
        id: 'nabji-lhakhang-drup',
        name: "Nabji Lhakhang Drup Festival",
        date: "Lunar Month 11, Dates 15-20 (6 Days)",
        description:
            "A sacred festival with Tercham and Mewang dances, honoring Terton Pema Lingpa.",
        detailDesc:"In the serene setting of Nabji village, explore a festival that dates back to the 14th century. Originally established by Dorji Lingpa (1346–1405) and enhanced by Pema Lingpa (1450–1521) and Trulku Chogden Gonpo (1497–1530), this festival features the breathtaking Tercham (Dance of the Treasure) and Mewang (Fire Dance), as well as sacred mask dances associated with Terton Pema Lingpa.",
        image:
            "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/IMG_0336.jpeg",
    },
    {
        id: 'yundrocholing-tshechu',
        name: "Yundrocholing Tshechu",
        date: "Lunar Month 11, Dates 15-17",
        description:
            "A special Tshechu featuring rare Pema Lingpa dance traditions at Yungdrung Choling Palace.",
        detailDesc:"At the historic Yungdrung Choling Palace in Langthel Gewog, 27 kilometers from Trongsa, experience a unique festival that bridges past and present. Built around 1839 by Trongsa Penlop Ugyen Phuntsho, this private palace, owned by descendants of King Ugyen Wangchuck's daughter, hosts a special Tshechu where monks and laypeople together perform rare Pema Lingpa dance traditions.",
        image:
            "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/trongsa-tsechu.jpg",
    },
    {
        id: 'black-mountain-festival',
        name: "Black Mountain Festival",
        date: "October 5-6, 2024",
        description:
            "A vibrant celebration of culture, food, and local crafts, with a 100km cycling challenge.",
        detailDesc:"A vibrant showcase of culture and livelihoods from five gewogs in Trongsa, offering visitors an opportunity to immerse themselves in the region's heritage and diverse lifestyles.",
        subEvent:[
            {
                name:"Cultural Exhibits",
                programList:[
                    "Arts and Crafts: Display and sale of local handicrafts",
                    "Food Items: Traditional dishes and farm produce",
                    "Cultural Artifacts: Authentic items and lifestyle exhibits from the dzongkhag",
                    "Traditional Attire and Cooking Styles: Experience the unique customs of Wangling, Jangbi, and Phumzur"
                ],
                description:"The festival highlights Trongsa's cultural and natural treasures, promotes tourism, and fosters appreciation of the region's unique heritage and environment."
            },
            {
                name:"Cycling Challenge during the Black Mountain Festival",
                description:"On the second day, a 100km cycling challenge takes place along the Jigme Singye Wangchuck National Park highway. Riders traverse scenic routes offering views of the park's diverse flora and fauna, with potential sightings of various bird species and natural landscapes. Awards are presented to top finishers and participants."
            }
        ],
        image:
            "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/IMG_5448.jpeg",
    },
    {
        id: 'farmers-festival',
        name: "Farmer's Festival",
        date: "November 8 (Annual Event)",
        description:
            "A festival that promotes local agriculture, sustainable living, and Bhutanese farming traditions.",
        detailDesc:"Local entrepreneur Mr. Pema Namgyel has been instrumental in fostering community engagement since establishing Willing Waterfall Café and Willing Resort two years ago.",
        subEvent:[
            {
                name:"Local Youth Employment and Sourcing",
                programList:[
                    "Employment opportunities at Willing Café and Willing Resort",
                    "Sourcing of farm products from local communities",
                ],
            },
            {
                name:"Annual Farmer's Festival",
                programList:[
                    "Inaugurated in November 2022 by Willing Resort",
                    "Community gatherings strengthen social bonds",
                    "Showcase of agricultural products and cultural heritage",
                    "Local folk dance performances",
                    "Environmental awards for village waste management initiatives",
                    "Annual celebration every November 8"
                ],
            }
        ],
        image:
            "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/IMG_6456.jpeg",
    },
    {
        id: 'moenlam-chhenmo',
        name: "Moenlam Chhenmo",
        date: "Annual Event (5 Days)",
        description:
            "A five-day festival led by Tshugla Lopon Rinpoche, praying for world peace and prosperity.",
        detailDesc:"The five-day Annual Moenlam Chhenmo, led by His Eminence Tshugla Lopon Rinpoche, includes prayers for world peace, the happiness and prosperity of our country and its people, and the long and healthy lives of His Majesty and the Royal Family.",
        image:
            "https://willingresort.github.io/assests-hosting/images/festivals-and-religious-events/IMG_0322.jpeg",
    },
];
