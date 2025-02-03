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
];
