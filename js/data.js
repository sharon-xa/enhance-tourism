export const places = [
	{
		name: "geli ali beg waterfall",
		image: "../assets/places/geli_ali_beg.jpg",
		location: "Erbil",
		description: "A stunning natural waterfall located near Erbil.",
		detaildDescription:
			"Geli Ali Beg Waterfall is a stunning natural waterfall located near Erbil. The waterfall is surrounded by lush greenery and is a popular spot for locals and tourists alike. The waterfall is a great place to relax and enjoy the beauty of nature. The waterfall is also a great spot for photography, with many beautiful views to capture. The waterfall is a must-visit destination for anyone visiting Erbil.",
		rating: 4.5,
		alwaysOpen: true,
		touristsNum: "6M",
		PriceOfEntrance: 0,
		category: "natural",
		reviews: [
			{
				user: "John Doe",
				rating: 5,
				comment:
					"An absolutely stunning place! Highly recommend visiting early in the morning.",
			},
			{
				user: "Jane Smith",
				rating: 4,
				comment:
					"Beautiful waterfall but can get crowded on weekends. Still worth the trip!",
			},
		],
		gallery: [
			"../assets/places/geli_ali_beg.jpg",
			"../assets/places/geli_ali_beg_view_1.jpg",
			"../assets/places/geli_ali_beg_view_2.jpeg",
			"../assets/places/geli_ali_beg_view_2.jpeg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200.1116332005802!2d44.44638941779097!3d36.631534313026876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400683ae4e1fd4ef%3A0xbf9021078d801a9d!2sGeli%20Ali%20Bag%20Waterfall!5e0!3m2!1sen!2siq!4v1736181398682!5m2!1sen!2siq",
	},
	{
		name: "Ahwar of Southern Iraq",
		image: "../assets/places/ahwar.jpg",
		location: "Dhi Qar",
		description:
			"A UNESCO World Heritage Site, known for its vast marshlands and biodiversity.",
		detaildDescription:
			"The Ahwar of Southern Iraq, also known as the Mesopotamian Marshes, is a breathtaking UNESCO World Heritage Site. It features vast marshlands, rich biodiversity, and significant cultural history. These wetlands are home to numerous bird species, lush vegetation, and a way of life that has been preserved for millennia. Visitors can explore the marshes by boat, witness traditional reed houses, and enjoy the serene beauty of this natural wonder. The Ahwar holds great historical significance as the ancient landscape of the Sumerians and is a must-visit destination for nature lovers and history enthusiasts.",
		rating: 4.7,
		alwaysOpen: true,
		touristsNum: "2M",
		PriceOfEntrance: 5,
		category: "natural",
		reviews: [
			{
				user: "Ali Hassan",
				rating: 5,
				comment:
					"A serene and magical place. The boat ride through the marshes is unforgettable!",
			},
			{
				user: "Sarah Ahmed",
				rating: 4,
				comment:
					"A unique destination with incredible wildlife. However, the facilities could be improved.",
			},
		],
		gallery: [
			"../assets/places/ahwar.jpg",
			"../assets/places/ahwar_view_1.jpg",
			"../assets/places/ahwar_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38702.60591390331!2d47.010594295787435!3d30.97440399917129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fdd1d08fa72f82d%3A0x8e134bee032912d7!2z2YXZhtiq2KzYuSDYp9mE2KPZh9mI2KfYsdmKINin2YTYs9mK2KfYrdmK!5e0!3m2!1sen!2siq!4v1736460633881!5m2!1sen!2siq",
	},
	{
		name: "Erbil Castle",
		image: "../assets/places/erbil_castle_card.jpg",
		location: "Erbil",
		description: "A historic fortress located in the heart of Erbil.",
		detaildDescription:
			"Erbil Castle is one of the oldest continuously inhabited sites in the world, standing as a historic fortress in the heart of Erbil. The castle is a UNESCO World Heritage site and offers visitors a glimpse into the region’s rich history. It is home to traditional Kurdish architecture and several museums. A must-visit for history enthusiasts and travelers exploring Kurdistan.",
		rating: 4.4,
		openTime: "9:00 AM",
		closeTime: "5:00 PM",
		touristsNum: "1.75M",
		PriceOfEntrance: 0, // Assuming entrance is free, modify if needed
		category: "historical",
		reviews: [
			{
				user: "Ali Hassan",
				rating: 5,
				comment:
					"Amazing historical site! The views from the top are breathtaking.",
			},
			{
				user: "Sarah Ahmed",
				rating: 4,
				comment:
					"Very interesting place with a lot of history, but some areas are under renovation.",
			},
		],
		gallery: [
			"../assets/places/erbil_castle_card.jpg",
			"../assets/places/erbil_castle_view_1.jpg",
			"../assets/places/erbil_castle_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.832412173448!2d44.0086207152373!3d36.19180018008614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400722616060091d%3A0x987c5b7c1d1915b9!2sErbil%20Castle!5e0!3m2!1sen!2siq!4v1736181398682!5m2!1sen!2siq",
	},
	{
		name: "Virgin Mary's Chaldean Catholic Church",
		image: "../assets/places/virgin_mary_church.jpg",
		location: "Baghdad",
		description: "A historic Chaldean Catholic church in Baghdad.",
		detaildDescription:
			"Virgin Mary's Chaldean Catholic Church is an important religious and historical landmark in Baghdad. It serves as a place of worship for the Chaldean Catholic community and is known for its beautiful architecture and spiritual significance. The church stands as a symbol of faith and resilience, attracting both worshippers and visitors interested in religious heritage.",
		rating: 4.6,
		alwaysOpen: true,
		touristsNum: "5K",
		PriceOfEntrance: 0, // Assuming entrance is free, modify if needed
		category: "religious",
		reviews: [
			{
				user: "Michael Yousif",
				rating: 5,
				comment:
					"A peaceful and spiritual place. The architecture is stunning and full of history.",
			},
			{
				user: "Layla Kareem",
				rating: 4,
				comment:
					"A wonderful place for reflection and prayer. A must-visit for those interested in religious history.",
			},
		],
		gallery: [
			"../assets/places/virgin_mary_church.jpg",
			"../assets/places/virgin_mary_church_view_1.jpg",
			"../assets/places/virgin_mary_church_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1605.080110790259!2d44.41893614848151!3d33.29330785618098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155781b7b54d0d07%3A0x810ed37394d76666!2sVirgin%20Mary's%20Chaldean%20Catholic%20Church!5e0!3m2!1sen!2siq!4v1738553784565!5m2!1sen!2siq",
	},
	{
		name: "Malwiya Mosque",
		image: "../assets/places/malwiya.jpg",
		location: "Saladin",
		description: "A historic mosque famous for its unique spiral minaret.",
		detaildDescription:
			"Malwiya Mosque, also known as the Great Mosque of Samarra, is an iconic historical and architectural landmark located in Saladin province. Built in the 9th century during the Abbasid era, the mosque is best known for its massive spiral minaret, which was originally used for the call to prayer. The mosque's unique design and historical significance make it a must-visit for history enthusiasts and architecture lovers alike.",
		rating: 4.4,
		openTime: "8:00 AM",
		closeTime: "6:00 PM",
		touristsNum: "8K",
		PriceOfEntrance: 0, // Assuming entrance is free, modify if needed
		category: "historical",
		reviews: [
			{
				user: "Omar Al-Tikriti",
				rating: 5,
				comment:
					"An amazing historical site! The spiral minaret is truly one of a kind.",
			},
			{
				user: "Nadia Hussein",
				rating: 4,
				comment:
					"A fascinating place to visit, but be prepared for a bit of a climb if you want to reach the top!",
			},
		],
		gallery: [
			"../assets/places/malwiya.jpg",
			"../assets/places/malwiya_view_1.jpg",
			"../assets/places/malwiya_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.6689476165316!2d43.879813999999996!3d34.20593399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1556d1f298bc71f7%3A0xafe839c5ce96d40c!2sMalwiya%20Mosque!5e0!3m2!1sen!2siq!4v1738554487638!5m2!1sen!2siq",
	},
	{
		name: "Ancient Babylon",
		image: "../assets/places/ancient_babylon.jpg",
		location: "Babylon",
		description: "The legendary city of Babylon, home to ancient wonders.",
		detaildDescription:
			"Ancient Babylon is one of the most significant historical sites in the world, known for its rich history and influence on civilization. Once the center of the Babylonian Empire, the city was home to the famous Hanging Gardens, one of the Seven Wonders of the Ancient World. Visitors can explore the ruins of the great walls, temples, and the renowned Ishtar Gate. This UNESCO World Heritage site is a must-visit for history lovers and those fascinated by Mesopotamian culture.",
		rating: 4.4,
		openTime: "8:00 AM",
		closeTime: "5:00 PM",
		touristsNum: "25.7K",
		PriceOfEntrance: 0,
		category: "historical",
		reviews: [
			{
				user: "Hassan Al-Mansoori",
				rating: 5,
				comment:
					"An incredible historical site! Walking through Babylon feels like stepping back in time.",
			},
			{
				user: "Layla Karim",
				rating: 4,
				comment:
					"A fascinating place filled with history, but I wish there were more guides available.",
			},
		],
		gallery: [
			"../assets/places/ancient_babylon.jpg",
			"../assets/places/ancient_babylon_view_1.jpg",
			"../assets/places/ancient_babylon_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14259.343248897008!2d44.4207747!3d32.5423812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155e786bcecd9f67%3A0x4f8e0d0f3c05b07e!2sAncient%20Babylon!5e0!3m2!1sen!2siq!4v1736181398682!5m2!1sen!2siq",
	},
	{
		name: "Abu Hanifa Mosque",
		image: "../assets/places/abu_hanifa_mosque.jpg",
		location: "Baghdad",
		description: "A historic mosque and religious landmark in Baghdad.",
		detaildDescription:
			"Abu Hanifa Mosque is one of the most important religious and historical landmarks in Baghdad. It is dedicated to the great Islamic scholar Imam Abu Hanifa, the founder of the Hanafi school of thought in Sunni Islam. The mosque is known for its beautiful architecture, peaceful ambiance, and significance as a center of Islamic learning. It attracts worshippers and visitors interested in Iraq’s rich religious heritage.",
		rating: 4.4,
		alwaysOpen: true,
		touristsNum: "2K",
		PriceOfEntrance: 0, // Assuming entrance is free, modify if needed
		category: "religious",
		reviews: [
			{
				user: "Yusuf Al-Dulaimi",
				rating: 5,
				comment:
					"A spiritually uplifting place with deep historical significance. A must-visit for those interested in Islamic history.",
			},
			{
				user: "Aisha Kareem",
				rating: 4,
				comment:
					"Beautiful mosque with a rich history. The surrounding area is also worth exploring.",
			},
		],
		gallery: [
			"../assets/places/abu_hanifa_mosque.jpg",
			"../assets/places/abu_hanifa_mosque_view_1.jpg",
			"../assets/places/abu_hanifa_mosque_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13455.678429732894!2d44.3773227!3d33.3485921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155781ad9c26fd2b%3A0x7a81f75f5e93f66b!2sAbu%20Hanifa%20Mosque!5e0!3m2!1sen!2siq!4v1736181398682!5m2!1sen!2siq",
	},
	{
		name: "Imam Ali Holy Shrine",
		image: "../assets/places/imam_ali.jpeg",
		location: "Najaf",
		description: "One of the most sacred sites in Islam, located in Najaf.",
		detaildDescription:
			"Imam Ali Holy Shrine, located in Najaf, Iraq, is one of the most revered religious sites in Islam. It is the final resting place of Imam Ali, the cousin and son-in-law of Prophet Muhammad and the first Imam of Shia Islam. The shrine is renowned for its stunning golden dome, intricate calligraphy, and spiritual significance. Millions of pilgrims visit this sacred site annually, seeking blessings and paying their respects.",
		rating: 4.8,
		alwaysOpen: true,
		touristsNum: "18M",
		PriceOfEntrance: 0, // Assuming entrance is free, modify if needed
		category: "religious",
		reviews: [
			{
				user: "Hassan Al-Jaf",
				rating: 5,
				comment:
					"A truly spiritual and breathtaking place. The atmosphere is full of peace and devotion.",
			},
			{
				user: "Fatima Hussein",
				rating: 5,
				comment:
					"One of the holiest sites in the world. The architecture and history make this a must-visit destination.",
			},
		],
		gallery: [
			"../assets/places/imam_ali.jpeg",
			"../assets/places/imam_ali_view_1.jpeg",
			"../assets/places/imam_ali_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.7080882656564!2d44.312006975630666!3d31.99592787399976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155ed0af64727395%3A0x251a9f2647c1efbb!2sImam%20Ali%20Holy%20Shrine!5e0!3m2!1sen!2siq!4v1738554999350!5m2!1sen!2siq",
	},
	{
		name: "Ziggurat of Ur",
		image: "../assets/places/ziggurat_ur.webp",
		location: "Dhi Qar",
		description: "An ancient Sumerian ziggurat in southern Iraq.",
		detaildDescription:
			"The Ziggurat of Ur is a magnificent ancient structure built around 2100 BCE by King Ur-Nammu in the city of Ur, one of the oldest cities in Mesopotamian history. This step-pyramid was dedicated to the moon god Nanna and remains one of the best-preserved ziggurats in the world. It provides a glimpse into the rich history of Sumerian civilization and attracts archaeologists and history enthusiasts worldwide.",
		rating: 4.7,
		alwaysOpen: true,
		touristsNum: "500K",
		PriceOfEntrance: 3,
		category: "historical",
		reviews: [
			{
				user: "Archaeology Enthusiast",
				rating: 5,
				comment:
					"A breathtaking experience to walk among the ruins of one of the world's oldest civilizations!",
			},
			{
				user: "Sami Al-Dulaimi",
				rating: 4,
				comment:
					"A must-visit for history lovers. The structure is impressive, but more preservation efforts are needed.",
			},
		],
		gallery: [
			"../assets/places/ziggurat_ur.webp",
			"../assets/places/ziggurat_ur_view_1.webp",
			"../assets/places/ziggurat_ur_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30517.580788463528!2d46.10372913829065!3d30.963805785953217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fded823f6c1f1e1%3A0x836b1b68d248b8c5!2sZiggurat%20of%20Ur!5e0!3m2!1sen!2siq!4v1738576949341!5m2!1sen!2siq",
	},
	{
		name: "Lake Habbaniyah",
		image: "../assets/places/lake_habbaniyah.jpg",
		location: "Anbar",
		description: "A scenic lake popular for picnics and water activities.",
		detaildDescription:
			"Lake Habbaniyah is a stunning natural lake in Anbar province, known for its clear blue waters and beautiful surroundings. It serves as a recreational spot for families, tourists, and locals who enjoy fishing, boating, and camping. The lake is a great escape for relaxation and offers picturesque views, especially during sunrise and sunset.",
		rating: 4.3,
		alwaysOpen: true,
		touristsNum: "1.2M",
		PriceOfEntrance: 2,
		category: "natural",
		reviews: [
			{
				user: "Ahmed Kareem",
				rating: 5,
				comment:
					"A peaceful place to spend the weekend. The water is beautiful, and the atmosphere is relaxing!",
			},
			{
				user: "Layla Hassan",
				rating: 4,
				comment:
					"A great spot for a picnic with family, though it can get crowded on holidays.",
			},
		],
		gallery: [
			"../assets/places/lake_habbaniyah.jpg",
			"../assets/places/lake_habbaniyah_view_1.webp",
			"../assets/places/lake_habbaniyah_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34960.89482007897!2d43.57363115360329!3d33.34492508382466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1556f177a4b8672b%3A0x7bf76f20f2f9fd29!2sLake%20Habbaniyah!5e0!3m2!1sen!2siq!4v1738577109643!5m2!1sen!2siq",
	},
	{
		name: "Al-Mustansiriya School",
		image: "../assets/places/al_mustansiriya.jpg",
		location: "Baghdad",
		description: "One of the oldest Islamic universities in the world.",
		detaildDescription:
			"Al-Mustansiriya School is a historic Islamic educational institution dating back to the Abbasid era in the 13th century. Located in Baghdad, this architectural masterpiece once served as a major center of learning in the Islamic world. Visitors can explore its well-preserved arches, inscriptions, and courtyards that reflect the grandeur of medieval Islamic education.",
		rating: 4.6,
		openTime: "8:00 AM",
		closeTime: "3:00 PM",
		touristsNum: "300K",
		PriceOfEntrance: 1,
		category: "historical",
		reviews: [
			{
				user: "Yusuf Al-Mansour",
				rating: 5,
				comment:
					"A beautiful historical site that showcases the golden age of Islamic scholarship!",
			},
			{
				user: "Nadia Kareem",
				rating: 4,
				comment:
					"The structure is stunning, though some areas need better restoration.",
			},
		],
		gallery: [
			"../assets/places/al_mustansiriya.jpg",
			"../assets/places/al_mustansiriya_view_1.jpg",
			"../assets/places/al_mustansiriya_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d661.4015720979328!2d44.389305815150564!3d33.338287098134316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577fb666bcd29d%3A0xebd18fe848507bc7!2sMustansiriyah%20Madrasah!5e0!3m2!1sen!2siq!4v1740774264723!5m2!1sen!2siq",
	},
	{
		name: "Imam Hussein Shrine",
		image: "../assets/places/imam_hussein_shrine.webp",
		location: "Karbala",
		description: "The shrine of Imam Hussein, a major pilgrimage site.",
		detaildDescription:
			"The Imam Hussein Shrine in Karbala is one of the holiest sites in Islam, particularly for Shia Muslims. It is the burial site of Imam Hussein, the grandson of Prophet Muhammad, who was martyred in the Battle of Karbala. The shrine features a magnificent golden dome, intricate Islamic calligraphy, and a deeply spiritual atmosphere that draws millions of pilgrims annually.",
		rating: 4.8,
		alwaysOpen: true,
		touristsNum: "20M",
		PriceOfEntrance: 0,
		category: "religious",
		reviews: [
			{
				user: "Zainab Alawi",
				rating: 5,
				comment:
					"A place of immense spiritual power and peace. Words cannot describe the experience!",
			},
			{
				user: "Ali Abbas",
				rating: 5,
				comment:
					"A sacred and emotional place that every Muslim should visit at least once.",
			},
		],
		gallery: [
			"../assets/places/imam_hussein_shrine.webp",
			"../assets/places/imam_hussein_view_1.jpg",
			"../assets/places/imam_hussein_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.619055523986!2d44.03253360000001!3d32.6163341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15596bc263a72c73%3A0xf7f3a3cbf5c0fd0e!2sHoly%20Shrine%20Of%20Imam%20Hossain!5e0!3m2!1sen!2siq!4v1740774837782!5m2!1sen!2siq",
	},
	{
		name: "Al-Kadhimayn Shrine",
		image: "../assets/places/kadhimayn_shrine.jpeg",
		location: "Baghdad",
		description:
			"A magnificent shrine in Baghdad housing the tombs of two Shia Imams.",
		detaildDescription:
			"The Al-Kadhimayn Shrine, located in Baghdad, Iraq, is one of the most sacred sites in Shia Islam. It is the resting place of Imam Musa al-Kadhim and Imam Muhammad al-Jawad. The shrine is adorned with golden domes and intricate Islamic art, attracting millions of pilgrims every year.",
		rating: 4.9,
		alwaysOpen: true,
		touristsNum: "10M",
		PriceOfEntrance: 0,
		category: "religious",
		reviews: [
			{
				user: "Ahmed Kareem",
				rating: 5,
				comment:
					"A deeply spiritual experience. The atmosphere of peace and devotion is incredible.",
			},
			{
				user: "Zahraa Alwan",
				rating: 5,
				comment:
					"The architecture and the golden domes are breathtaking!",
			},
		],
		gallery: [
			"../assets/places/kadhimayn_shrine.jpeg",
			"../assets/places/kadhimayn_shrine_view_1.jpg",
			"../assets/places/kadhimayn_shrine_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2223.6228119629495!2d44.33822330143011!3d33.37968696079467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1557796ba5f9b45d%3A0xd32d12c8a78f6393!2sImam%20al-Kazim%20%26%20Imam%20al-Jawad%20Shrine!5e0!3m2!1sen!2siq!4v1740776099004!5m2!1sen!2siq",
	},
	{
		name: "Al-Askari Shrine",
		image: "../assets/places/al_askari_shrine.jpg",
		location: "Samarra",
		description: "A sacred Shia shrine in Samarra, Iraq.",
		detaildDescription:
			"The Al-Askari Shrine is one of the holiest sites for Shia Muslims. It houses the tombs of Imam Ali al-Hadi and Imam Hasan al-Askari. The shrine, known for its golden dome, is a place of pilgrimage and spiritual significance.",
		rating: 4.8,
		alwaysOpen: true,
		touristsNum: "7M",
		PriceOfEntrance: 0,
		category: "religious",
		reviews: [
			{
				user: "Hussain Abbas",
				rating: 5,
				comment:
					"A place full of spirituality and peace. A must-visit.",
			},
			{
				user: "Layla Hussein",
				rating: 5,
				comment:
					"The golden dome is mesmerizing, and the history behind it is deeply moving.",
			},
		],
		gallery: [
			"../assets/places/al_askari_shrine.jpg",
			"../assets/places/al_askari_shrine_view_1.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.943882837979!2d43.8735564!3d34.19891019999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1556d1f3388aab47%3A0x9f03090e093ce102!2sHaram%20of%20Imam%20Ali%20al-Hadi!5e0!3m2!1sen!2siq!4v1740776672896!5m2!1sen!2siq",
	},
	{
		name: "Halgurd Mountain",
		image: "../assets/places/halgurd_mountain.jpg",
		location: "Erbil",
		description:
			"The highest peak in Iraq, offering breathtaking views and challenging hikes.",
		detaildDescription:
			"Halgurd Mountain is Iraq’s highest peak, reaching over 3,600 meters. Located in the Kurdistan region, it is a popular destination for hikers and adventure seekers. The mountain provides breathtaking views, alpine landscapes, and a sense of untouched natural beauty.",
		rating: 4.8,
		alwaysOpen: true,
		touristsNum: "100K",
		PriceOfEntrance: 0,
		category: "natural",
		reviews: [
			{
				user: "Omar Hassan",
				rating: 5,
				comment:
					"An incredible place for adventure lovers. The view from the top is worth the climb!",
			},
			{
				user: "Emily Carter",
				rating: 5,
				comment:
					"A truly breathtaking and peaceful place. Would love to return!",
			},
		],
		gallery: [
			"../assets/places/halgurd_mountain.jpg",
			"../assets/places/halgurd_mountain_view_1.jpg",
			"../assets/places/halgurd_mountain_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.6418254635296!2d44.86170310000001!3d36.731162499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4004391e925aab5f%3A0xbe659c7d8463a1e2!2sHalgurd%20Mountain!5e0!3m2!1sen!2siq!4v1740776771264!5m2!1sen!2siq",
	},
	{
		name: "Iraqi National Museum",
		image: "../assets/places/iraqi_national_museum.jpg",
		location: "Baghdad",
		description:
			"The largest museum in Iraq, housing artifacts from Mesopotamian civilizations.",
		detaildDescription:
			"The Iraqi National Museum in Baghdad is home to thousands of priceless artifacts from the ancient civilizations of Mesopotamia, including Sumerian, Akkadian, Babylonian, and Assyrian artifacts. It showcases the history of Iraq from prehistoric times through the Islamic era, featuring relics such as the Code of Hammurabi, Assyrian statues, and gold treasures from the Royal Cemetery of Ur.",
		rating: 4.7,
		openTime: "9:00 AM",
		closeTime: "2:00 PM",
		touristsNum: "500K",
		PriceOfEntrance: 5,
		category: "historical",
		reviews: [
			{
				user: "Ali Mahdi",
				rating: 5,
				comment:
					"A must-visit for anyone interested in the history of civilization. The exhibits are breathtaking!",
			},
			{
				user: "Samantha Lee",
				rating: 4,
				comment:
					"Amazing collection, but I wish there were more English descriptions.",
			},
		],
		gallery: [
			"../assets/places/iraqi_national_museum.jpg",
			"../assets/places/iraqi_national_museum_view_1.avif",
			"../assets/places/iraqi_national_museum_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.645437447912!2d44.385019299999996!3d33.3280838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f3ca63dfed7%3A0x4de176fc6d87d795!2sIraqi%20National%20Museum!5e0!3m2!1sen!2siq!4v1740780500547!5m2!1sen!2siq",
	},
	{
		name: "Mutanabbi Street",
		image: "../assets/places/mutanabbi_street.jpg",
		location: "Baghdad",
		description:
			"A historic street famous for bookselling and intellectual gatherings.",
		detaildDescription:
			"Mutanabbi Street, located in the heart of Baghdad, is known as the cultural and intellectual hub of Iraq. Named after the famous Arab poet Al-Mutanabbi, the street has been a center for bookselling, poetry readings, and scholarly discussions for centuries. Every Friday, the street comes to life with book vendors, artists, and coffee shops filled with writers and intellectuals. It stands as a symbol of Baghdad's resilience and love for knowledge.",
		rating: 4.8,
		openTime: "10:00 AM",
		closeTime: "10:00 PM",
		touristsNum: "700K",
		PriceOfEntrance: 0,
		category: "cultural",
		reviews: [
			{
				user: "Ahmed Kareem",
				rating: 5,
				comment:
					"An incredible place for book lovers! The atmosphere is vibrant and full of history.",
			},
			{
				user: "Nour Al-Saadi",
				rating: 4.5,
				comment:
					"Great place to find rare books and meet intellectuals. Gets crowded on weekends.",
			},
		],
		gallery: [
			"../assets/places/mutanabbi_street.jpg",
			"../assets/places/mutanabbi_street_view_1.jpg",
			"../assets/places/mutanabbi_street_view_2.webp",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.1609436020367!2d44.38617707568627!3d33.340744873433216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155778b22f08f005%3A0xef1c13260d19b50f!2sMutanabbi%20St%2C%20Baghdad%2C%20Baghdad%20Governorate!5e0!3m2!1sen!2siq!4v1740781444251!5m2!1sen!2siq",
	},
	{
		name: "Souk al-Safafeer",
		image: "../assets/places/souk_al_safafeer.jpg",
		location: "Baghdad",
		description:
			"An ancient copper market in Baghdad, known for its handmade copperwork and historical significance.",
		detaildDescription:
			"Souk al-Safafeer is a historic marketplace in Baghdad that has existed since the Abbasid period. It is famous for its handmade copperwork crafted using traditional techniques. Located near the Tigris River, the market was a cultural and commercial hub for centuries. The constant sound of hammering echoed throughout the souk, symbolizing its rich craftsmanship. However, after the US invasion in 2003, the market suffered a decline due to economic hardships, government neglect, and a decrease in coppersmiths. Today, only a few artisans remain, struggling to preserve this ancient tradition.",
		rating: 4.2,
		openTime: "6:00 AM",
		closeTime: "3:00 PM",
		touristsNum: "250K",
		PriceOfEntrance: 0,
		category: "cultural",
		reviews: [
			{
				user: "Hassan Al-Dulaimi",
				rating: 4.5,
				comment:
					"A fascinating place with a rich history. It's sad to see fewer coppersmiths now, but the remaining ones still craft amazing pieces.",
			},
			{
				user: "Zainab Ali",
				rating: 4,
				comment:
					"The craftsmanship is impressive, but the market has lost much of its former glory. Worth visiting for history lovers.",
			},
		],
		gallery: [
			"../assets/places/souk_al_safafeer.jpg",
			"../assets/places/souk_al_safafeer_view_1.webp",
			"../assets/places/souk_al_safafeer_view_2.webp",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.194994545421!2d44.38920627568623!3d33.33985517343346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155778ae7887882b%3A0x3ffca46fc31c0a9e!2sCopper%20Market%20(Safafeer)!5e0!3m2!1sen!2siq!4v1740782624876!5m2!1sen!2siq",
	},
	{
		name: "Qushla",
		image: "../assets/places/qushla.jpg",
		location: "Baghdad",
		description:
			"A historic Ottoman-era site in Baghdad, now a cultural hub near al-Mutanabbi Street.",
		detaildDescription:
			"The Qushla, also known as The Qishleh, is an Ottoman-era site in Baghdad, Iraq. It was initially constructed in 1861 by Ottoman governor Mehmed Namık Pasha and completed by his successor, Midhat Pasha. Originally built as military barracks to house Ottoman soldiers, the site played a significant role in Baghdad's governance. A clock tower was later added to regulate military activities. Today, the Qushla serves as a cultural and social gathering place, hosting art exhibitions, literary events, and public activities. It is a popular destination for visitors to al-Mutanabbi Street.",
		rating: 4.5,
		openTime: "9:00 AM",
		closeTime: "9:00 PM",
		touristsNum: "300K",
		PriceOfEntrance: 0,
		category: "historical",
		reviews: [
			{
				user: "Ahmed Kareem",
				rating: 5,
				comment:
					"A beautiful historic site with an amazing atmosphere. Perfect for history lovers and those looking to enjoy cultural activities.",
			},
			{
				user: "Layla Hassan",
				rating: 4.3,
				comment:
					"A peaceful place with deep historical roots. The clock tower is a must-see, and the cultural events are a great experience.",
			},
		],
		gallery: [
			"../assets/places/qushla.jpg",
			"../assets/places/qushla_view_1.webp",
			"../assets/places/qushla_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.168325397093!2d44.3869626!3d33.340551999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155778b3bb6ea7db%3A0xc681b5c77e274771!2sQishla%20building!5e0!3m2!1sen!2siq!4v1740784567356!5m2!1sen!2siq",
	},
	{
		name: "Qasr al-'Ashiq",
		image: "../assets/places/qasr_al_ashiq.jpg",
		location: "Samarra",
		description:
			"An Abbasid-era palace known for its unique architectural style, located near the city of Samarra.",
		detaildDescription:
			"Qasr al-'Ashiq is a historical palace from the Abbasid era, built between 877–882 under the rule of the 15th Abbasid caliph Al-Mu'tamid. It is located 16 km west of Samarra, on the western bank of the Tigris River. The palace is notable for its grand rectangular structure, two floors, catacombs, and surrounding walls. A moat fed by an underground channel adds to its distinctive design. Originally referred to as 'al-Ma'shuq' (the beloved), it was excavated in the 1960s and underwent restoration in the 1980s.",
		rating: 4.3,
		alwaysOpen: true,
		touristsNum: "100K",
		PriceOfEntrance: 0,
		category: "historical",
		reviews: [
			{
				user: "Hassan Ali",
				rating: 4.5,
				comment:
					"A magnificent piece of Abbasid architecture! The historical significance of this place is incredible.",
			},
			{
				user: "Nour Abdulrahman",
				rating: 4.2,
				comment:
					"Beautiful ruins with a fascinating history. The moat and underground water system are particularly interesting.",
			},
		],
		gallery: [
			"../assets/places/qasr_al_ashiq.jpg",
			"../assets/places/qasr_al_ashiq_view_1.JPG",
			"../assets/places/qasr_al_ashiq_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.2800716547927!2d43.806260575724565!3d34.241396423086314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1556d2a190709a0b%3A0x2a37c177d3a75f7f!2sArchaeological%20Aashiq%20palace!5e0!3m2!1sen!2siq!4v1740785432960!5m2!1sen!2siq",
	},
	{
		name: "Bekhal Waterfall",
		image: "../assets/places/bekhal_waterfall.JPG",
		location: "Erbil",
		description:
			"A stunning natural waterfall located in the mountainous northern part of Iraq, popular among tourists.",
		detaildDescription:
			"Bekhal Waterfall (Kurdish: تاڤگەی بێخاڵ) is a breathtaking natural attraction in the Kurdistan Region of Iraq. Situated 10 km west of Rawandiz and 135 km from Erbil, it is one of the most visited waterfalls in the region. The lush greenery, refreshing water, and picturesque surroundings make it a perfect destination for nature lovers and tourists seeking relaxation. The waterfall is particularly popular during summer when visitors escape the heat to enjoy its cool, misty air.",
		rating: 4.2,
		alwaysOpen: true,
		touristsNum: "200K",
		PriceOfEntrance: 0,
		category: "nature",
		reviews: [
			{
				user: "Sara Ahmed",
				rating: 4.8,
				comment:
					"Absolutely mesmerizing! The sound of the waterfall and the fresh air make it a perfect getaway.",
			},
			{
				user: "Omar Hadi",
				rating: 4.5,
				comment:
					"A must-visit in Kurdistan! The surrounding scenery is breathtaking, and it's a great place to relax with family.",
			},
		],
		gallery: [
			"../assets/places/bekhal_waterfall.JPG",
			"../assets/places/bekhal_waterfall_view_1.jpg",
			"../assets/places/bekhal_waterfall_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d952.0674386143571!2d44.49706405049617!3d36.61771419050467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400682d697cb9b5f%3A0x5b9be050e3e6b25b!2sBekhal%20Waterfalls!5e0!3m2!1sen!2siq!4v1740786722649!5m2!1sen!2siq",
	},
	{
		name: "Al-Abbas Shrine",
		image: "../assets/places/al_abbas_shrine.jpg",
		location: "Karbala",
		description:
			"The revered mausoleum of Abbas ibn Ali, located near the Imam Husayn Mosque in Karbala, visited by millions of Shia pilgrims annually.",
		detailedDescription:
			"The Al-Abbas Shrine (Arabic: حَرَم أَبا الْفَضْل الْعَبَّاس) is the final resting place of Abbas ibn Ali, the half-brother of Imam Husayn and the standard-bearer in the Battle of Karbala. The shrine is a sacred place for Shia Muslims and attracts millions of visitors, especially during Muharram and Arba'een. Over the centuries, environmental factors have caused the Euphrates River to shift, and it now encircles Abbas’s grave. The shrine has undergone extensive renovations, including the re-gilding of its dome and expansions to better accommodate pilgrims.",
		rating: 4.9,
		alwaysOpen: true,
		touristsNum: "10M+",
		PriceOfEntrance: 0,
		category: "religious",
		reviews: [
			{
				user: "Hassan Ali",
				rating: 5.0,
				comment:
					"A deeply spiritual experience. The atmosphere here is unlike anywhere else.",
			},
			{
				user: "Fatima Zahra",
				rating: 4.8,
				comment:
					"The shrine is beautifully maintained, and the sense of peace is overwhelming.",
			},
		],
		gallery: [
			"../assets/places/al_abbas_shrine.jpg",
			"../assets/places/al_abbas_shrine_view_1.JPG",
			"../assets/places/al_abbas_shrine_view_2.jpg",
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.5893252875626!2d44.033855275656094!3d32.61712617373083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15596be40449bf49%3A0x327c2783e20809a4!2sHoly%20Shrine%20Of%20Abu%20Fadhl%20Al-Abbas!5e0!3m2!1sen!2siq!4v1740787744209!5m2!1sen!2siq",
	},
];
