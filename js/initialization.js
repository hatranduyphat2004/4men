function createProducts() {
	if (localStorage.getItem('products') === null) {
		let products = [
			{
				id: 1,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Raglan In Basic Form Regular AT134',
				img: './assets/img/products/aothun-1.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 245000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 2,
				isBusiness: 1,
				status: 1,
				title: 'Áo thun cổ tròn trơn form regular AT135 màu đỏ',
				img: './assets/img/products/aothun-2.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 295000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 3,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Phối Raglan Gắn Nhãn AT036',
				img: './assets/img/products/aothun-3.png',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 195000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 4,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun In Moving On AT058 Thum 2',
				img: './assets/img/products/aothun-4.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 205000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 5,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun In Minimalist AT029',
				img: './assets/img/products/aothun-5.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 245000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 6,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Sọc Thêu Ngực 4M Original From Regular AT103',
				img: './assets/img/products/aothun-6.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 295000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 7,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun In Surfing Form Regular AT129',
				img: './assets/img/products/aothun-7.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 195000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 8,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Regular In Thêu AT088',
				img: './assets/img/products/aothun-8.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 205000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 9,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Slimfit Phối Sọc AT126',
				img: './assets/img/products/aothun-9.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 245000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 10,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun In Regular Catman AT123',
				img: './assets/img/products/aothun-10.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 295000,
				sizeLs: ['S', 'M', 'L', 'XL'],
				hotItem: true,
			},
			{
				id: 11,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Slimfit Teddy AT104',
				img: './assets/img/products/aothun-11.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 195000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 12,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun OversizeLs Number Four AT106',
				img: './assets/img/products/aothun-12.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 205000,
				sizeLs: ['S', 'M', 'L', 'XL'],
				newItem: true,
			},
			{
				id: 13,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Regular Graphic AT108',
				img: './assets/img/products/aothun-13.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 245000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 14,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun CVC Regular Elegant AT118',
				img: './assets/img/products/aothun-14.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 295000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 15,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Slimfit Faithfulness AT100',
				img: './assets/img/products/aothun-15.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 195000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 16,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Regular Friendly AT099',
				img: './assets/img/products/aothun-16.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 205000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 17,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Slimfit Tag Da AT098',
				img: './assets/img/products/aothun-17.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 245000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 18,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Slimfit 4M Limits Editon AT101 Màu Xám',
				img: './assets/img/products/aothun-18.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 295000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 19,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Regular Wash Text AT096',
				img: './assets/img/products/aothun-19.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 195000,
				sizeLs: ['S', 'M', 'L', 'XL'],
				newItem: true,
			},
			{
				id: 20,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Regular In Thêu AT087',
				img: './assets/img/products/aothun-20.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 205000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 21,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Regular Future AT091',
				img: './assets/img/products/aothun-21.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 245000,
				sizeLs: ['S', 'M', 'L', 'XL'],
				newItem: true,
			},
			{
				id: 22,
				isBusiness: 1,
				status: 1,
				title: 'ular Horse Race AT074',
				img: './assets/img/products/aothun-22.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 295000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 23,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Regular Best Dad Ever AT097',
				img: './assets/img/products/aothun-23.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 195000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 24,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Raglan In Basic Form Regular AT134',
				img: './assets/img/products/aothun-24.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 205000,
				sizeLs: ['S', 'M', 'L', 'XL'],
				hotItem: true,
			},
			{
				id: 25,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Regular PaPa AT093',
				img: './assets/img/products/aothun-25.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 245000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			{
				id: 26,
				isBusiness: 1,
				status: 1,
				title: 'Áo Thun Regular Racing AT084',
				img: './assets/img/products/aothun-26.jpg',
				category: 'áo thun',
				categoryMain: 'áo nam',
				price: 295000,
				sizeLs: ['S', 'M', 'L', 'XL'],
			},
			// !!
			// QUAN TAY
			// !!
			{
				id: 27,
				isBusiness: 1,
				status: 1,
				title: 'Quần Tây Slimfit Spike QT050',
				img: './assets/img/products/tay-1.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần tây',
				categoryMain: 'quần nam',
				price: 425000,
			},
			{
				id: 28,
				isBusiness: 1,
				status: 1,
				title: 'Quần Tây Trơn 4MEN Premium Form Slimfit QT031',
				img: './assets/img/products/tay-2.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần tây',
				categoryMain: 'quần nam',
				price: 475000,
				newItem: true,
			},
			{
				id: 29,
				isBusiness: 1,
				status: 1,
				title: 'Quần Tây Slimfit Detail QT051',
				img: './assets/img/products/tay-3.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần tây',
				categoryMain: 'quần nam',
				price: 545000,
			},
			{
				id: 30,
				isBusiness: 1,
				status: 1,
				title: 'Quần Tây Sidetab Regular Xếp Ly QT049',
				img: './assets/img/products/tay-4.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần tây',
				categoryMain: 'quần nam',
				price: 425000,
			},
			{
				id: 31,
				isBusiness: 1,
				status: 1,
				title: 'Quần Tây Regular Crop Túi Kiểu QT045',
				img: './assets/img/products/tay-5.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần tây',
				categoryMain: 'quần nam',
				price: 475000,
				newItem: true,
			},
			{
				id: 32,
				isBusiness: 1,
				status: 1,
				title: 'Quần Tây NAZAFU Slimfit QT1140',
				img: './assets/img/products/tay-6.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần tây',
				categoryMain: 'quần nam',
				price: 545000,
			},
			{
				id: 33,
				isBusiness: 1,
				status: 1,
				title: 'Quần Tây Nazafu Linen QT1137',
				img: './assets/img/products/tay-7.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần tây',
				categoryMain: 'quần nam',
				price: 425000,
				newItem: true,
			},
			{
				id: 34,
				isBusiness: 1,
				status: 1,
				title: 'Quần Tây NAZAFU QT004 Màu Xanh Đen',
				img: './assets/img/products/tay-8.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần tây',
				categoryMain: 'quần nam',
				price: 475000,
			},
			{
				id: 35,
				isBusiness: 1,
				status: 1,
				title: 'Quần Tây Túi Kiểu Form Slimfit QT052 Màu Đen',
				img: './assets/img/products/tay-9.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần tây',
				categoryMain: 'quần nam',
				price: 545000,
			},
			{
				id: 36,
				isBusiness: 1,
				status: 1,
				title: 'Quần Tây Trơn Basic Form Slimfit QT042 Màu Đen',
				img: './assets/img/products/tay-10.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần tây',
				categoryMain: 'quần nam',
				price: 425000,
				newItem: true,
			},
			{
				id: 37,
				isBusiness: 1,
				status: 1,
				title: 'Quần Tây Trơn Slimfit Tem Inox QT054',
				img: './assets/img/products/tay-11.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần tây',
				categoryMain: 'quần nam',
				price: 475000,
			},
			{
				id: 38,
				isBusiness: 1,
				status: 1,
				title: 'Quần Tây Xếp Li Thêu Form Slimfit Crop QT055',
				img: './assets/img/products/tay-12.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần tây',
				categoryMain: 'quần nam',
				price: 545000,
			},
			{
				id: 39,
				isBusiness: 1,
				status: 1,
				title: 'Quần Tây Slimfit Đỉa Đôi QT053',
				img: './assets/img/products/tay-13.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần tây',
				categoryMain: 'quần nam',
				price: 425000,
			},
			// !!
			// AO SO MI
			// !!
			{
				id: 40,
				isBusiness: 1,
				status: 1,
				title: 'Áo Sơ Mi Modal Trơn Chống Nhăn Form Regular SM137',
				img: './assets/img/products/somi-1.jpg',
				category: 'áo sơ mi',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 315000,
			},
			{
				id: 41,
				isBusiness: 1,
				status: 1,
				title: 'Áo Sơ Mi Tay Ngắn Modal Trơn Chống Nhăn Form Slimfit SM136 Màu Trắng',
				img: './assets/img/products/somi-2.jpg',
				category: 'áo sơ mi',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 345000,
				hotItem: true,
			},
			{
				id: 42,
				isBusiness: 1,
				status: 1,
				title: 'Áo Sơ Mi Tay Ngắn Nẹp Giấu Nút Regular SM138',
				img: './assets/img/products/somi-3.jpg',
				category: 'áo sơ mi',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 385000,
				newItem: true,
			},
			{
				id: 43,
				isBusiness: 1,
				status: 1,
				title: 'Áo Sơ Mi Denim Rã Tam Giác Form Regular SM134',
				img: './assets/img/products/somi-4.jpg',
				category: 'áo sơ mi',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 315000,
			},
			{
				id: 44,
				isBusiness: 1,
				status: 1,
				title: 'Áo Sơ Mi Trơn In Họa Tiết Form Regular SM133',
				img: './assets/img/products/somi-5.jpg',
				category: 'áo sơ mi',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 345000,
				newItem: true,
			},
			{
				id: 45,
				isBusiness: 1,
				status: 1,
				title: 'Áo Sơ Mi In Chữ SM082 Màu Trắng',
				img: './assets/img/products/somi-6.jpg',
				category: 'áo sơ mi',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 385000,
			},
			{
				id: 46,
				isBusiness: 1,
				status: 1,
				title: 'Áo Sơ Mi Linen Cổ Trụ Form Regular SM132',
				img: './assets/img/products/somi-7.jpg',
				category: 'áo sơ mi',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 315000,
			},
			{
				id: 47,
				isBusiness: 1,
				status: 1,
				title: 'Áo Sơ Mi Regular Cổ trụ SM111 Màu Trắng',
				img: './assets/img/products/somi-8.jpg',
				category: 'áo sơ mi',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 345000,
				newItem: true,
			},
			{
				id: 48,
				isBusiness: 1,
				status: 1,
				title: 'Áo Sơ Mi Slimfit Khuy Nổi SM130',
				img: './assets/img/products/somi-9.jpg',
				category: 'áo sơ mi',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 385000,
			},
			{
				id: 49,
				isBusiness: 1,
				status: 1,
				title: 'Áo Sơ Mi Regular Phối Màu SM129',
				img: './assets/img/products/somi-10.jpg',
				category: 'áo sơ mi',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 315000,
			},
			// !!
			//  QUAN SHORT
			// !!
			{
				id: 50,
				isBusiness: 1,
				status: 1,
				title: 'Quần Short Caro Lưng Thun Form Slimfit QS046',
				img: './assets/img/products/short-1.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần short',
				categoryMain: 'quần nam',
				price: 345000,
			},
			{
				id: 51,
				isBusiness: 1,
				status: 1,
				title: 'Quần Short Trơn Túi Xéo Basic Form Regular QS048',
				img: './assets/img/products/short-2.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần short',
				categoryMain: 'quần nam',
				price: 295000,
				newItem: true,
			},
			{
				id: 52,
				isBusiness: 1,
				status: 1,
				title: 'Quần Short Denim Túi Tam Giác Phom Regular QS044',
				img: './assets/img/products/short-3.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần short',
				categoryMain: 'quần nam',
				price: 315000,
			},
			{
				id: 53,
				isBusiness: 1,
				status: 1,
				title: 'Quần Short Kaki Thêu Triple X Form Regular QS047',
				img: './assets/img/products/short-4.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần short',
				categoryMain: 'quần nam',
				price: 295000,
				newItem: true,
			},
			{
				id: 54,
				isBusiness: 1,
				status: 1,
				title: 'Quần Short Kaki Túi Xéo Form Regular QS041',
				img: './assets/img/products/short-5.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần short',
				categoryMain: 'quần nam',
				price: 345000,
			},
			{
				id: 55,
				isBusiness: 1,
				status: 1,
				title: 'Quần Short Linen Form Regular QS042',
				img: './assets/img/products/short-6.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần short',
				categoryMain: 'quần nam',
				price: 315000,
			},
			{
				id: 56,
				isBusiness: 1,
				status: 1,
				title: 'Quần Short Jeans Thêu Wave Form Regular QS043',
				img: './assets/img/products/short-7.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần short',
				categoryMain: 'quần nam',
				price: 315000,
				newItem: true,
			},
			{
				id: 57,
				isBusiness: 1,
				status: 1,
				title: 'Quần Short Dù In Wave Form Regular QS045',
				img: './assets/img/products/short-8.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần short',
				categoryMain: 'quần nam',
				price: 345000,
			},
			{
				id: 58,
				isBusiness: 1,
				status: 1,
				title: 'Quần Short Regular Basic QS031',
				img: './assets/img/products/short-9.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần short',
				categoryMain: 'quần nam',
				price: 295000,
			},
			{
				id: 59,
				isBusiness: 1,
				status: 1,
				title: 'Quần Short Trơn Form Slimfit QS028',
				img: './assets/img/products/short-10.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần short',
				categoryMain: 'quần nam',
				price: 315000,
				newItem: true,
			},
			{
				id: 60,
				isBusiness: 1,
				status: 1,
				title: 'Quần Short Slimfit Lưng Vuông QS040',
				img: './assets/img/products/short-11.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần short',
				categoryMain: 'quần nam',
				price: 225000,
			},
			{
				id: 61,
				isBusiness: 1,
				status: 1,
				title: 'Quần Short Regular Túi Ẩn QS039',
				img: './assets/img/products/short-12.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần short',
				categoryMain: 'quần nam',
				price: 195000,
				newItem: true,
			},
			{
				id: 62,
				isBusiness: 1,
				status: 1,
				title: 'Quần Short Regular Phối Sóc QS038',
				img: './assets/img/products/short-13.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần short',
				categoryMain: 'quần nam',
				price: 275000,
			},
			{
				id: 63,
				isBusiness: 1,
				status: 1,
				title: 'Quần Short Slimfit Greywash QS034',
				img: './assets/img/products/short-14.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần short',
				categoryMain: 'quần nam',
				price: 295000,
			},
			// !!
			// AO POLO
			// !!
			{
				id: 64,
				isBusiness: 1,
				status: 1,
				title: 'Áo Polo Rã Phối Thêu C‘EST LA VIE Form SLimfit PO115 Thum 2',
				img: './assets/img/products/polo-1.jpg',
				category: 'áo polo',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 315000,
			},
			{
				id: 65,
				isBusiness: 1,
				status: 1,
				title: 'Áo Polo Tổ Ong Trụ Hai Màu Form Regular PO110',
				img: './assets/img/products/polo-2.jpg',
				category: 'áo polo',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 375000,
				newItem: true,
			},
			{
				id: 66,
				isBusiness: 1,
				status: 1,
				title: 'Áo Polo Color Block Form Slimfit PO082',
				img: './assets/img/products/polo-3.jpg',
				category: 'áo polo',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 345000,
			},
			{
				id: 67,
				isBusiness: 1,
				status: 1,
				title: 'Áo Polo In Sọc Phối Bo Compass Form Regular PO067',
				img: './assets/img/products/polo-4.jpg',
				category: 'áo polo',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 315000,
				newItem: true,
			},
			{
				id: 68,
				isBusiness: 1,
				status: 1,
				title: 'Áo Polo Phối Bo Stripes Form Regular PO070',
				img: './assets/img/products/polo-5.jpg',
				category: 'áo polo',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 275000,
			},
			{
				id: 69,
				isBusiness: 1,
				status: 1,
				title: 'Áo Polo Sọc Ngang Phối Cổ Form Regular PO114 Thum 2',
				img: './assets/img/products/polo-6.jpg',
				category: 'áo polo',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 295000,
				newItem: true,
			},
			{
				id: 70,
				isBusiness: 1,
				status: 1,
				title: 'Áo Polo Mắt Chim In Smile Flower Form Slimfit PO113',
				img: './assets/img/products/polo-7.jpg',
				category: 'áo polo',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 325000,
				hotItem: true,
			},
			{
				id: 71,
				isBusiness: 1,
				status: 1,
				title: 'Áo Polo Tổ Ong Cổ Dệt Form Slimfit PO109',
				img: './assets/img/products/polo-8.jpg',
				category: 'áo polo',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 305000,
			},
			{
				id: 72,
				isBusiness: 1,
				status: 1,
				title: 'Áo Polo Tổ Ong Phối Sọc Ngang Form Regular PO112',
				img: './assets/img/products/polo-9.jpg',
				category: 'áo polo',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 225000,
			},
			{
				id: 73,
				isBusiness: 1,
				status: 1,
				title: 'Áo Polo Tổ Ong Phối Màu Kẻ Form Regular PO111',
				img: './assets/img/products/polo-10.jpg',
				category: 'áo polo',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 375000,
			},
			{
				id: 74,
				isBusiness: 1,
				status: 1,
				title: 'Áo Polo Tổ Ong In Ombre Wave Form Slimfit PO108',
				img: './assets/img/products/polo-11.jpg',
				category: 'áo polo',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 345000,
				newItem: true,
			},
			{
				id: 75,
				isBusiness: 1,
				status: 1,
				title: 'Áo Polo Mắt Chim Cổ V Thêu Wave Form Slimfit PO107',
				img: './assets/img/products/polo-12.jpg',
				category: 'áo polo',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 255000,
			},
			{
				id: 76,
				isBusiness: 1,
				status: 1,
				title: 'Áo Polo Mắt Chim Phối Vai Form Regular PO106',
				img: './assets/img/products/polo-13.jpg',
				category: 'áo polo',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 215000,
			},
			{
				id: 77,
				isBusiness: 1,
				status: 1,
				title: 'Áo Polo Tổ Ong Thêu Phối Sọc Form Slimfit PO105',
				img: './assets/img/products/polo-14.jpg',
				category: 'áo polo',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 195000,
				newItem: true,
			},
			{
				id: 78,
				isBusiness: 1,
				status: 1,
				title: 'Áo Polo Tổ Ong Phối Sọc Ngang Form Slimfit PO104',
				img: './assets/img/products/polo-15.jpg',
				category: 'áo polo',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 335000,
			},
			{
				id: 79,
				isBusiness: 1,
				status: 1,
				title: 'Áo Polo Phối Sọc Form Slimfit PO103 Thum 2',
				img: './assets/img/products/polo-16.jpg',
				category: 'áo polo',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 375000,
				newItem: true,
			},
			{
				id: 80,
				isBusiness: 1,
				status: 1,
				title: 'Áo Polo Raglan Regular PO047',
				img: './assets/img/products/polo-17.jpg',
				category: 'áo polo',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 195000,
			},
			// !!!
			// AO KHOAC
			// !!!
			{
				id: 81,
				isBusiness: 1,
				status: 1,
				title: 'Áo Hoodie Nỉ Regular Minimalism AH001',
				img: './assets/img/products/aokhoac-1.jpg',
				category: 'áo khoác',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 395000,
				newItem: true,
			},
			{
				id: 82,
				isBusiness: 1,
				status: 1,
				title: 'Áo Hoodie Nỉ Regular Túi Đắp AH002',
				img: './assets/img/products/aokhoac-2.jpg',
				category: 'áo khoác',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 415000,
				bestSellerItem: true,
			},
			{
				id: 83,
				isBusiness: 1,
				status: 1,
				title: 'Áo Sweatshirt Tổ Ong Regular Túi Mổ AS003',
				img: './assets/img/products/aokhoac-3.jpg',
				category: 'áo khoác',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 295000,
			},
			{
				id: 84,
				isBusiness: 1,
				status: 1,
				title: 'Áo Sweatshirt Regular Sọc Gân AS002',
				img: './assets/img/products/aokhoac-4.jpg',
				category: 'áo khoác',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 325000,
			},
			{
				id: 85,
				isBusiness: 1,
				status: 1,
				title: 'Áo Khoác Nỉ Trơn AK013',
				img: './assets/img/products/aokhoac-5.jpg',
				category: 'áo khoác',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 385000,
			},
			{
				id: 86,
				isBusiness: 1,
				status: 1,
				title: 'Áo Sweatshirt Regular Phối Sọc AS001',
				img: './assets/img/products/aokhoac-6.jpg',
				category: 'áo khoác',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 405000,
			},
			{
				id: 87,
				isBusiness: 1,
				status: 1,
				title: 'Áo Hoodie Believe AK012',
				img: './assets/img/products/aokhoac-7.jpg',
				category: 'áo khoác',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 325000,
			},
			{
				id: 88,
				isBusiness: 1,
				status: 1,
				title: 'Áo Hoodie Sports Elegant AK011',
				img: './assets/img/products/aokhoac-8.jpg',
				category: 'áo khoác',
				sizeLs: ['S', 'M', 'L', 'XL'],
				categoryMain: 'áo nam',
				price: 455000,
			},
			// !!!
			// QUAN JOGGER
			// !!!
			{
				id: 89,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jogger Đũi Co Giãn Form Regular JO011',
				img: './assets/img/products/jog-1.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jogger',
				categoryMain: 'quần nam',
				price: 295000,
			},
			{
				id: 90,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jogger Nỉ Chân Cua Regular Minimalism J010',
				img: './assets/img/products/jog-2.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jogger',
				categoryMain: 'quần nam',
				price: 355000,
			},
			{
				id: 91,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jogger Regular Đũi Lưng Thun J008',
				img: './assets/img/products/jog-3.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jogger',
				categoryMain: 'quần nam',
				price: 315000,
			},
			{
				id: 92,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jogger Nỉ Bông Regular Rã Kiểu J009',
				img: './assets/img/products/jog-4.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jogger',
				categoryMain: 'quần nam',
				price: 425000,
			},
			{
				id: 93,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jogger Regular GoFuther J007',
				img: './assets/img/products/jog-5.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jogger',
				categoryMain: 'quần nam',
				price: 385000,
			},
			{
				id: 94,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jogger Túi Đắp J006',
				img: './assets/img/products/jog-6.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jogger',
				categoryMain: 'quần nam',
				price: 375000,
			},
			{
				id: 95,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jogger Lưng Thun Cài Nút J004',
				img: './assets/img/products/jog-7.png',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jogger',
				categoryMain: 'quần nam',
				price: 315000,
			},
			{
				id: 96,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jogger Túi Đắp J003',
				img: './assets/img/products/jog-8.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jogger',
				categoryMain: 'quần nam',
				price: 365000,
			},
			{
				id: 97,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jogger Túi Đắp J001 Màu Đen',
				img: './assets/img/products/jog-9.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jogger',
				categoryMain: 'quần nam',
				price: 295000,
			},
			{
				id: 98,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jogger Túi Đắp J001 Màu Đen',
				img: './assets/img/products/jog-10.png',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jogger',
				categoryMain: 'quần nam',
				price: 405000,
				bestSellerItem: true,
			},
			{
				id: 99,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jogger Kaki J12',
				img: './assets/img/products/jog-11.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jogger',
				categoryMain: 'quần nam',
				price: 445000,
			},
			{
				id: 100,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jogger Túi Hộp J11',
				img: './assets/img/products/jog-12.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jogger',
				categoryMain: 'quần nam',
				price: 395000,
			},
			{
				id: 101,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jogger Thun J809',
				img: './assets/img/products/jog-13.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jogger',
				categoryMain: 'quần nam',
				price: 195000,
			},
			{
				id: 102,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jogger Thun J811',
				img: './assets/img/products/jog-14.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jogger',
				categoryMain: 'quần nam',
				price: 415000,
			},
			// !!!
			// QUAN JEAN
			// !!!
			{
				id: 103,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jeans Rách Thêu Chéo Form Regular QJ075 Màu Xanh',
				img: './assets/img/products/jeans-1.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jeans',
				categoryMain: 'quần nam',
				price: 455000,
			},
			{
				id: 104,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jeans Rách Light Blue Form Regular QJ061 Màu Xanh',
				img: './assets/img/products/jeans-2.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jeans',
				categoryMain: 'quần nam',
				price: 405000,
			},
			{
				id: 105,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jean Trắng Trơn QJ025',
				img: './assets/img/products/jeans-3.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jeans',
				categoryMain: 'quần nam',
				price: 515000,
			},
			{
				id: 106,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jeans Xanh Slimfit Túi Xếp Li QJ076 Màu Xanh',
				img: './assets/img/products/jeans-4.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jeans',
				categoryMain: 'quần nam',
				price: 475000,
			},
			{
				id: 107,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jeans Xanh Regular Phối Dây Viền QJ074 Màu Xanh',
				img: './assets/img/products/jeans-5.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jeans',
				categoryMain: 'quần nam',
				price: 535000,
			},
			{
				id: 108,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jeans Wash Wave Form Slimfit QJ085',
				img: './assets/img/products/jeans-6.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jeans',
				categoryMain: 'quần nam',
				price: 585000,
			},
			{
				id: 109,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jeans Slimfit Basic QJ062 Màu Đen',
				img: './assets/img/products/jeans-7.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jeans',
				categoryMain: 'quần nam',
				price: 395000,
			},
			{
				id: 110,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jeans Wash Slimfit Xếp Li QJ083',
				img: './assets/img/products/jeans-8.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jeans',
				categoryMain: 'quần nam',
				price: 475000,
			},
			{
				id: 111,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jeans Đen Regular Xếp Li Xéo QJ081',
				img: './assets/img/products/jeans-9.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jeans',
				categoryMain: 'quần nam',
				price: 495000,
			},
			{
				id: 112,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jeans Xanh Slimfit Túi Thêu QJ078',
				img: './assets/img/products/jeans-10.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jeans',
				categoryMain: 'quần nam',
				price: 355000,
				bestSellerItem: true,
			},
			{
				id: 113,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jeans Xanh Regular Túi Thêu QJ072',
				img: './assets/img/products/jeans-11.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jeans',
				categoryMain: 'quần nam',
				price: 515000,
			},
			{
				id: 114,
				isBusiness: 1,
				status: 1,
				title: 'Quần Jeans Xanh Slimfit Rách QJ073 Màu Xanh',
				img: './assets/img/products/jeans-12.jpg',
				sizeLs: [28, 29, 30, 31, 32, 33, 34, 35],
				category: 'quần jeans',
				categoryMain: 'quần nam',
				price: 525000,
			},
			// !!!
			// DEP
			// !!!
			{
				id: 115,
				isBusiness: 1,
				status: 1,
				title: 'Dép Nam DE001 Màu Đen',
				img: './assets/img/products/dep-1.png',
				category: 'dép nam',
				categoryMain: 'giày dép',
				sizeLs: [38, 39, 40, 41, 42, 43, 44],
				price: 225000,
			},
			{
				id: 116,
				isBusiness: 1,
				status: 1,
				title: 'Dép Da Cao Cấp Nam 4Men',
				img: './assets/img/products/dep-2.jpg',
				category: 'dép nam',
				categoryMain: 'giày dép',
				price: 175000,
				sizeLs: [38, 39, 40, 41, 42, 43, 44],
			},
			// !!!
			// GIAY
			// !!!
			{
				id: 117,
				isBusiness: 1,
				status: 1,
				title: 'Giày Loafer Allblack G019 Màu Đen',
				img: './assets/img/products/giay-1.jpg',
				category: 'giày',
				categoryMain: 'giày dép',
				price: 525000,
				sizeLs: [38, 39, 40, 41, 42, 43, 44],
			},
			{
				id: 118,
				isBusiness: 1,
				status: 1,
				title: 'Giày Chelsea Boots All Black G018 Màu Đen',
				img: './assets/img/products/giay-2.jpg',
				category: 'giày',
				categoryMain: 'giày dép',
				price: 625000,
				sizeLs: [38, 39, 40, 41, 42, 43, 44],
			},
			{
				id: 119,
				isBusiness: 1,
				status: 1,
				title: 'Giày Tây Leather G017',
				img: './assets/img/products/giay-3.jpg',
				category: 'giày',
				categoryMain: 'giày dép',
				price: 425000,
				sizeLs: [38, 39, 40, 41, 42, 43, 44],
			},
			{
				id: 120,
				isBusiness: 1,
				status: 1,
				title: 'Giày Thể Thao Phối G011',
				img: './assets/img/products/giay-4.jpg',
				category: 'giày',
				categoryMain: 'giày dép',
				price: 425000,
				sizeLs: [38, 39, 40, 41, 42, 43, 44],
			},
			{
				id: 121,
				isBusiness: 1,
				status: 1,
				title: 'Giày Thể Thao Trơn G010',
				img: './assets/img/products/giay-5.jpg',
				category: 'giày',
				categoryMain: 'giày dép',
				price: 525000,
				sizeLs: [38, 39, 40, 41, 42, 43, 44],
			},
			{
				id: 122,
				isBusiness: 1,
				status: 1,
				title: 'Giày Slip On Jeans G016',
				img: './assets/img/products/giay-6.jpg',
				category: 'giày',
				categoryMain: 'giày dép',
				price: 325000,
				sizeLs: [38, 39, 40, 41, 42, 43, 44],
			},
			{
				id: 123,
				isBusiness: 1,
				status: 1,
				title: 'Giày Tây 4MEN G015',
				img: './assets/img/products/giay-7.jpg',
				category: 'giày',
				categoryMain: 'giày dép',
				price: 675000,
				sizeLs: [38, 39, 40, 41, 42, 43, 44],
				bestSellerItem: true,
			},
			{
				id: 124,
				isBusiness: 1,
				status: 1,
				title: 'Giày Tây 4MEN G014',
				img: './assets/img/products/giay-8.jpg',
				category: 'giày',
				categoryMain: 'giày dép',
				price: 655000,
				sizeLs: [38, 39, 40, 41, 42, 43, 44],
			},
			{
				id: 125,
				isBusiness: 1,
				status: 1,
				title: 'Giày Thể Thao 4MEN G013',
				img: './assets/img/products/giay-9.jpg',
				category: 'giày',
				categoryMain: 'giày dép',
				price: 425000,
				sizeLs: [38, 39, 40, 41, 42, 43, 44],
			},
			{
				id: 126,
				isBusiness: 1,
				status: 1,
				title: 'Giày Thể Thao 4MEN G012',
				img: './assets/img/products/giay-10.jpg',
				category: 'giày',
				categoryMain: 'giày dép',
				price: 525000,
				sizeLs: [38, 39, 40, 41, 42, 43, 44],
			},
			{
				id: 127,
				isBusiness: 1,
				status: 1,
				title: 'Giày thể thao phối kem G009',
				img: './assets/img/products/giay-11.jpg',
				category: 'giày',
				categoryMain: 'giày dép',
				price: 375000,
				sizeLs: [38, 39, 40, 41, 42, 43, 44],
			},
			// !!!
			// SANDAL
			// !!!
			{
				id: 128,
				isBusiness: 1,
				status: 1,
				title: 'Sandal Nam DE002 Màu Đen',
				img: './assets/img/products/sandal-1.png',
				category: 'sandal',
				categoryMain: 'giày dép',
				price: 325000,
				sizeLs: [38, 39, 40, 41, 42, 43, 44],
			},
			{
				id: 129,
				isBusiness: 1,
				status: 1,
				title: 'Sandal Nam 4Men BYM000200 Màu Đen',
				img: './assets/img/products/sandal-2.jpg',
				category: 'sandal',
				categoryMain: 'giày dép',
				price: 295000,
				sizeLs: [38, 39, 40, 41, 42, 43, 44],
			},
		];
		localStorage.setItem('products', JSON.stringify(products));
	}
}
function createAccounts() {
	if (localStorage.getItem('accounts') === null) {
		let accounts = [
			{
				id: 1,
				fullname: 'Hà Trần Duy Phát',
				phone: '0799664334',
				username: 'admin',
				password: 'Admin@2004',
				mail: 'hatranduyphat2004@gmail.com',
				role: 'admin',
				avt: './assets/img/admin/avt1.jpg',
				status: 1,
				carts: [],
				orderedCarts: [],
				join: new Date(),
			},
			{
				id: 2,
				fullname: 'Bùi Hữu Luân',
				phone: '0878678691',
				username: 'luan',
				password: 'Luan@2003',
				mail: 'buihuuluan2003@gmail.com',
				role: 'admin',
				avt: './assets/img/admin/avt1.jpg',
				status: 1,
				carts: [],
				orderedCarts: [],
				join: new Date(),
			},
			{
				id: 3,
				fullname: 'Nguyễn Hoàng Tuấn Kiệt',
				phone: '0928227537',
				username: 'kiet',
				password: 'Kiet@2004',
				mail: 'nguyenhoangtuankiet2004@gmail.com',
				role: 'admin',
				avt: './assets/img/admin/avt1.jpg',
				status: 1,
				carts: [],
				orderedCarts: [],
				join: new Date(),
			},
			{
				id: 4,
				fullname: 'Võ Thế Lực',
				phone: '0914721526',
				username: 'luc',
				password: 'Luc@2004',
				mail: 'votheluc2004@gmail.com',
				role: 'admin',
				avt: './assets/img/admin/avt1.jpg',
				status: 1,
				carts: [],
				orderedCarts: [],
				join: new Date(),
			},
			{
				id: 5,
				fullname: 'Mai Lê Mỹ Linh',
				phone: '0965445534',
				username: 'linh',
				password: 'Linh@2004',
				mail: 'mailemylinh2004@gmail.com',
				role: 'admin',
				avt: './assets/img/admin/avt1.jpg',
				status: 1,
				carts: [],
				orderedCarts: [],
				join: new Date(),
			},
		];
		localStorage.setItem('accounts', JSON.stringify(accounts));
	}
}

window.onload = createProducts();
window.onload = createAccounts();
