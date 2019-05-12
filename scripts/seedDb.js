const { Hotel, Destination, Bar, Review } = require('../models');

async function seed() {
  await Hotel.destroy({ where: {}});
  await Destination.destroy({where: {}});
  await Bar.destroy({where: {}});
  await Review.destroy({where: {}});

  // 1. Create  Hotels
 const CasaBlanca =  await Hotel.create({
     name: 'CasaBlanca Hotel',
     location: 'Puerto Rico',
     description: ' Is a quirky property in the heart of Old San Juan with an unbeatable location, a moderate price tag, and funky amenities, like tubs on its rooftop.'
})

const Fairmont =   await Hotel.create({
    name: 'Fairmont Le Chateau Frontenac',
    location: 'Canada',
    description: 'Overlook the wintry landscape of Quebec City at the Fairmont Le Chateau Frontenac. Located in close proximity to the festivities, the hotel is inside the walls of Old Quebec.'
})
const Hyatt =   await Hotel.create({
    name: 'Hyatt Regency Trinidad',
    location: 'Trinidad',
    description: 'The Hyatt Regency Trinidad is a newly renovated, luxurious waterfront resort located in the heart of the party.'
})
const Poblanos =  await Hotel.create({
    name: 'Los Poblanos Ranch & Inn',
    location: 'New Mexico',
    description: 'Los Poblanos Ranch & Inn in Albuquerque offers a quiet escape on a beautiful lavender farm. Relax here, or use it as a starting point for a New Mexico road trip.'
})
const Sandy =  await Hotel.create({
    name: 'Sandy Pines Campground',
    location: 'Maine',
    description: 'Glamping is a trendy form of accommodation for 2019, especially in outdoor destinations, like Maine. Sandy Pines Campground in Kennebunkport offers carriage houses, campsites, and safari tents to rent, and its season kicks off in early May.'
})
const Omaha =  await Hotel.create({
    name: 'Mercure Hotel Omaha Beach',
    location: 'France',
    description: 'The location of Mercure Hotel Omaha Beach can’t be beaten for the anniversary celebrations. It’s situated close to the coastline as well as Port-en-Bessin, Bayeux, and the American War Cemetery.'
})
const Buenos = await Hotel.create({
    name: 'Home Hotel Buenos Aires',
    location: 'Argentina',
    description: 'The Home Hotel Buenos Aires is an award-winning hotel with an outdoor heated pool, a spa, and a garden that climbs on the exterior walls of some rooms—and it’s located right in the middle of the city.'
})
const Indigo =  await Hotel.create({
    name: 'Hotel Indigo',
    location: 'California',
    description: 'The whole family will love the Hotel Indigo, Anaheim’s first upscale boutique property. Its location is both safe and convenient, with the Disneyland park entrance only a 10-minute walk away.'
})
const Lumiares =   await Hotel.create({
    name: 'Lumiares',
    location: 'Portugal',
    description: 'The Lumiares in Lisbon’s trendy Bairro Alto area has apartment-style rooms that are ideal for group or family travel. This boutique hotel also has a rooftop restaurant and bar.'
})
const Concorde =  await Hotel.create({
    name: 'The Concorde Old Bucharest Hotel',
    location: 'Romania',
    description: 'The Concorde Old Bucharest Hotel offers Eastern European architecture and hospitality with an affordable price tag'
})
const Select =  await Hotel.create({
    name: 'Select Hotel Berlin The Wall',
    location: 'Germany',
    description: 'Centrally located for museums, shopping, nightlife, and entertainment. Plus, it’s within walking distance of many of the wall’s landmarks, including Checkpoint Charlie.'
})
const Claridge =  await Hotel.create({
    name: `Claridge's`,
    location: 'England',
    description: 'Nothing beats Christmas at Claridge’s. Located in London’s posh Mayfair neighborhood, the hotel has its tree decorated by a famous designer every year.'
})
  // 2. Create  Destination
  await Destination.create({
    photo: 'https://www.smartertravel.com/uploads/2018/12/follow-the-white-hat-to-the-party_t20_wQyW8m.jpg',
    description: 'This January, escape the widespread wintry cold in most of the U.S. and head to Puerto Rico. A trip here supports the island’s tourist industry, which in turn helps hurricane-relief efforts as Puerto Rico continues to recover from the devastating effects of Hurricane Maria.'
})
await Destination.create({
  photo: 'https://www.smartertravel.com/uploads/2018/12/Quebec-City-Winter-Carnival.jpg',
  description: 'Yes, it’s cold, but Canadians embrace this fact of life with wonderful winter festivals in February.Quebec City’s famous Winter Carnival, now in its 65th year, will also be held this month, featuring an ice canoe race and night parades.'
})
await Destination.create({
    photo: 'https://www.smartertravel.com/uploads/2018/12/Trinidad.jpg',
    description: 'For a warm-weather carnival destination, Trinidad and Tobago is one of the best places to travel in 2019 for March. The first full week of the month is the island’s biggest party in the capital, Port of Spain.'
  })
  await Destination.create({
    photo: 'https://www.smartertravel.com/uploads/2018/12/New-Mexico.jpg',
    description: ' Its two main cities, Santa Fe and Albuquerque, are only an hour apart and offer a variety of experiences, from fine dining at one of the top 10 restaurants in the U.S., Geronimo.'
  })
  await Destination.create({
    photo: 'https://www.smartertravel.com/uploads/2018/12/Maine.jpg',
    description: 'From its culinary cities to a world-renowned national park, Maine is a popular New England summer destination.'
  })
  await Destination.create({
    photo: 'https://www.smartertravel.com/uploads/2018/12/Normandy.jpg',
    description: 'June 6th marks the 75th anniversary of the D-Day landings and the Battle of Normandy. To honor fallen soldiers and to commemorate the world-changing event, Normandy will host events all summer long, including fireworks displays, airdrops, concerts, giant picnics, concerts, and military parades.'
  })
  await Destination.create({
    photo: 'https://www.smartertravel.com/uploads/2018/12/Chile-Solar-Eclipse.jpg',
    description: 'South America will see its own solar eclipse this year, with the path of totality marked just south of Buenos Aires. The event occurs on July 2nd and is the perfect excuse to plan a trip to the region this month.'
  })
  await Destination.create({
    photo: 'https://www.smartertravel.com/uploads/2018/12/Star-Wars.jpg',
    description: 'Summer 2019 brings the much-anticipated opening of Star Wars: Galaxy’s Edge at Disneyland. While the attraction could see record-breaking attendance numbers, August might be your best bet for fewer crowds'
  })
  await Destination.create({
    photo: 'https://www.smartertravel.com/uploads/2018/12/palace-of-pena-in-sintra-portugal_t20_4bynW2.jpg',
    description: 'After a year of increasing popularity, Portugal may no longer be Europe’s best-kept secret—but its colorful palaces, historic towns, and fertile vineyards still deserve a spot on your bucket list.'
  })
  await Destination.create({
    photo: 'https://www.smartertravel.com/uploads/2018/12/Urban-Adventures-Romania_Transylvania_streetview_birdseyeview_church.jpg',
    description: 'Spend Halloween with werewolves, haunted castles, and, yes, Count Dracula in Transylvania. Intrepid Travel’s Halloween in Transylvania tour takes you to the vampire’s birthplace, as well as other must-see Romanian stops.'
  })
  await Destination.create({
    photo: 'https://www.smartertravel.com/uploads/2018/12/the-berlin-wall_t20_wlBQpK.jpg',
    description: 'November 9th marks the 30th anniversary of the fall of the Berlin Wall, which divided West and East Germany for 28 years. The city will mark this momentous event with museum exhibits, concerts, performances, and even bike tours that run the length of the original wall.'
  })
  await Destination.create({
    photo: 'https://www.smartertravel.com/uploads/2018/12/England.jpg',
    description: 'Book early to take advantage of the savings and celebrate the holidays in England, Scotland, or Wales. It’s hard to compare other cities to London’s cultural blend of old-fashioned Victorian and modern-day glamour, which is especially celebrated during the Christmas season.'
  })

//   create Reviews

const review01 = await Review.create({
    user_name: 'Sage9',
    caption:'Amazing atmosphere! Fantastic staff!',
    experience:'Great location in Old San Juan, within easy walking distance of everything. Could not believe how friendly and knowledgeable every one of the employees are - extremely helpful!',
    trip_type:'Traveled with family',
})
const review02 =await Review.create({
    user_name: 'FLBtraveler62',
    caption:'Elegant but Antiquated',
    experience:' Unbelievable, historic Hotel in a great location to see old Quebec City. Attentive staff, good restaurants and a Starbucks.',
    trip_type:'Traveled as a couple',
})
const review03 =await Review.create({
    user_name: 'Juliet B ',
    caption:'Superb service',
    experience:'As always the Hyatt experience never disappoints. Im always greeted with wine. Luggage is taken straight to my room. Club Regency is also a bonus experience. Staff is exceptionally polite! Keep it up!',
    trip_type:'Traveled as a couple',
})
const review04 = await Review.create({
    user_name: 'BobM1969',
    caption:'A short trip for work will have me coming back',
    experience:'From the road the property does not seem like much. If you look past the field of Lavender you will see the historic silo and out-buildings from the original farm.',
    trip_type:'Traveled on business',
})
const review05 = await Review.create({
    user_name: 'Crissy J',
    caption:'Summer Getaway',
    experience:'Sandy Pines is immaculate. We stayed in a Camp Carriage and loved it. The entire campground is clean, staff are friendly and it was overall a great experience. It is welcoming for families as well as those traveling with dogs.',
    trip_type:'Traveled with pet',
})
const review06 =await Review.create({
    user_name: 'Paul V',
    caption:'Golf trip',
    experience:'A group of 14 male golfers stayed for 3 nights at this hotel, playing 4 rounds of golf on the 2 courses. Hard to fault anything really with staff being friendly and welcoming, the golf course being in good condition and the breakfasts being ample and of a good quality.',
    trip_type:'Traveled with friends',
})
const review07 =await Review.create({
    user_name: 'Will',
    caption:'A Tranquil Escape, with Top-Notch Service',
    experience:'Home Hotel is a beautifully curated property that captures anew the things we love from times past – vintage wallpapers and furniture, reverence for nature at every turn, exceptional service and bold strokes of color',
    trip_type:'Traveled solo',
})
const review08 = await Review.create({
    user_name: 'TravellingGs ',
    caption:'Repeat Visitor',
    experience:'Hotel Indigo is a step above most of the other properties near Disneyland. Excellent location close to main entrance of the park. Our well maintained, clean room with a big bathroom and a large shower was very comfortable.',
    trip_type:'Traveled with family',
})
const review09 = await Review.create({
    user_name: 'Ross_Travels',
    caption:'The best hotel ever....It could well be!',
    experience:'The Lumiares definately had the wow factor in terms of decor, the reception is simply stunning! But what really sets The Lumiares apart is its staff - I can honestly say, hand on heart, ',
    trip_type:'Traveled as a couple',
})
const review10 = await Review.create({
    user_name: 'LynnNancy ',
    caption:'Extremely nice hotel in a pretty cool location!',
    experience:'Sleek and modern hotel, with the firmest, most comfortable mattress I’ve ever slept on! Convenient location, very polite staff. A bit pricier overall than other hotels but not a bad deal. Would stay again',
    trip_type:'Traveled as a couple',
})
const review11 =await Review.create({
    user_name: 'SHORTYMAM',
    caption:'ROOMS REALLY NICE MINI BAR LOVELY BATHROOM FLUFFY TOWELS',
    experience:'The hotel is a stones throw from Checkpoint Charlie there are lots of historic information on bill boards to read and for transport .. tour bus was great it was 15 euro each for a party of 6. ',
    trip_type:'not listed',
})
const review12 = await Review.create({
    user_name: '469theoc',
    caption:'Stay at Claridges',
    experience:'We loved our stay at Claridges. Wonderful staff and very friendly and professional service. Location is perfect near to shops and sights. We look forward to our next visit.',
    trip_type:'Traveled with family',
})
  
//   Create Bars

await Bar.create({
    name: 'La Factoría',
    address:'148 Calle San Sebastián',
    zip_code:'00901',
    phone_number:'1-787-412-4251',
    type:'casual'
})
await Bar.create({
    name: 'El Quinqué Bar',
    address:'114 Calle San Sebastián',
    zip_code:'00901',
    phone_number:'1-787-344-3859',
    type:'cozy'
})
await Bar.create({
    name: '1608 Bar à vin & fromage',
    address:'Fairmont Le Château Frontenac',
    zip_code:'G1R 5J5',
    phone_number:'1-418-692-3861',
    type:'groups'
})
await Bar.create({
    name: 'Pub St-Patrick',
    address:'1200 Rue Saint-Jean',
    zip_code:'G1R 1S8',
    phone_number:' 1-418-694-0618',
    type:'irish pub'
})
await Bar.create({
    name: 'Luce',
    address:'Hilton Trinidad and Conference Center Lady Young Road',
    zip_code:'Trinidad Trinidad',
    phone_number:'1-868-285-5823',
    type:'cozy'
})
await Bar.create({
    name: 'Trotters',
    address:'Maraval Road',
    zip_code:'Port of Spain',
    phone_number:'1-868-627-8768',
    type:'sports bar'
})
await Bar.create({
    name: `Vernon's Speakeasy`,
    address:'6855 4th St NW, Albuquerque',
    zip_code:'87107',
    phone_number:'505-341-0831',
    type:'steak house'
})
await Bar.create({
    name: 'Left Turn Distilling',
    address:'2924 Girard Blvd NE',
    zip_code:'87107',
    phone_number:'1-787-412-4251',
    type:'bar'
})
await Bar.create({
    name: 'Arundel Wharf - Seafood - Cocktail Bar - Craft Beer - Wine Bar - Lobster Rolls',
    address:'43 Ocean Ave',
    zip_code:'04046',
    phone_number:'207-967-3444',
    type:'seafood restaurant'
})
await Bar.create({
    name: 'Bandaloop',
    address:'Cross St',
    zip_code:' 04046',
    phone_number:'207-967-4994',
    type:'organic restaurant'
})
await Bar.create({
    name: 'Snc Mbl',
    address:'10 Quai Félix Faure',
    zip_code:'14520 Port-en-Bessin-Huppain',
    phone_number:'33-2-31-21-70-44',
    type:'bar'
})
await Bar.create({
    name: 'La Rotonde',
    address:'11 Rue de Bayeux',
    zip_code:'14520 Port-en-Bessin-Huppain',
    phone_number:' 33-2-31-21-72-25',
    type:'bar'
})
await Bar.create({
    name: 'Florería Atlántico',
    address:'Arroyo 872',
    zip_code:'Buenos Aires',
    phone_number:'54-11-4313-6093',
    type:'chic'
})
await Bar.create({
    name: 'Bar 878',
    address:'Thames 878',
    zip_code:'Buenos Aires',
    phone_number:'54-11-4773-1098',
    type:'bar'
})
await Bar.create({
    name: 'The Blind Rabbit',
    address:'440 S Anaheim Blvd',
    zip_code:'92805',
    phone_number:'not listed',
    type:'casual'
})
await Bar.create({
    name: 'Trader Sam’s Enchanted Tiki Bar',
    address:'1150 Magic Way',
    zip_code:'92802',
    phone_number:'714-781-3463',
    type:'tiki bar'
})
await Bar.create({
    name: 'Lumni - Restaurante & Bar',
    address:' R. de São Pedro de Alcântara 35',
    zip_code:' 1250-237',
    phone_number:'351-21-116-0210',
    type:'restaurant'
})
await Bar.create({
    name: 'Alto do Bairro - Tapas Bar',
    address:'Tv. da Boa Hora N 39',
    zip_code:'1200-063',
    phone_number:'351-961-499-060',
    type:'tapas restaurant'
})

await Bar.create({
    name: 'Romanian Craft Beer',
    address:'Calea Victoriei 91',
    zip_code:'010091',
    phone_number:'40 770 550 234',
    type:'bar'
})
await Bar.create({
    name: `Caru' cu Bere`,
    address:'Strada Stavropoleos 5',
    zip_code:'030081',
    phone_number:'40 726 282 373',
    type:'romanian restaurant'
})
await Bar.create({
    name: 'Beereau',
    address:' Claire-Waldoff-Straße 4',
    zip_code:'10117',
    phone_number:'49 30 31176081',
    type:'bar'
})
await Bar.create({
    name: 'Vincent Piano Bar',
    address:'Schiffbauerdamm 6/7',
    zip_code:'10117',
    phone_number:'49 30 27582305',
    type:'cocktail bar'
})
await Bar.create({
    name: `Claridge's Bar`,
    price:'$$',
    address:`Claridge's, Brook St, Mayfai`,
    zip_code:'W1K 4HR, ',
    phone_number:'44 20 7629 8860',
    type:'casual'
})
await Bar.create({
    name: 'Wine Unearthed - London Wine Tasting',
    price:'$$',
    address:'Finos Wine Cellar, 123 Mount St, Mayfair148 Calle San Sebastián',
    zip_code:'W1K 3NP',
    phone_number:'44 345 299 8652',
    type:'wine bar'
})
  //  Set the relationship between the  bar hotel, review and destination
//   Destination.hasMany(Hotel); 
//   Hotel.belongsTo(Destination);

//   Hotel.hasMany(Review); 
//   Review.belongsTo(Hotel);

//   Bar.belongsTo(Hotel);
//   Hotel.hasMany(Bar);
//   process.exit();
  await review01.setHotel(CasaBlanca)
  await review02.setHotel(Fairmont)
  await review03.setHotel(Hyatt)
  await review04.setHotel(Poblanos)
  await review05.setHotel(Sandy)
  await review06.setHotel(Omaha)
  await review07.setHotel(Buenos)
  await review08.setHotel(Indigo)
  await review09.setHotel(Lumiares)
  await review10.setHotel(Concorde)
  await review11.setHotel(Select)
  await review12.setHotel(Claridge)
}
async function run() {
    try {
      await seed();
    } catch (e) {
      console.error(e);
    } finally {
      await process.exit()
    }
  }
  
  run();

