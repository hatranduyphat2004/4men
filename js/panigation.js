//
// *** DÙNG CHO PHÂN TRANG
let perPage = 12; // sp trên 1 trang
let currentPage = 1; // trang hiện tại
let totalPage = 0; // tổ ng trang
let perProducts = []; // sp trên trang hiện tai
//
function displayListPduct(productAll, perPage, currentPage, productsContainer) {
	let start = (currentPage - 1) * perPage;
	let end = (currentPage - 1) * perPage + perPage;
	productsCategoryNow = productAll;
	perProducts = productAll.slice(start, end);
	renderProducts(perProducts, productsContainer);
}
function handleChangePage(currentPage) {
	let listPani = document.querySelectorAll('.panigation-link');
	listPani.forEach((itemPagi) =>
		itemPagi.parentNode.classList.remove('active')
	);
	listPani[currentPage].parentNode.classList.add('active');
	//
	let start = (currentPage - 1) * perPage;
	let end = (currentPage - 1) * perPage + perPage;
	perProducts = productsCategoryNow.slice(start, end);
	let productsContainer = document.querySelector('.product-ls');
	renderProducts(perProducts, productsContainer);
	handleBackToTop();
}
function setupPagination(productAll, perPage) {
	const panigationList = document.querySelector('.panigation-list');
	panigationList.innerHTML = '';
	panigationList.innerHTML += `<div class="panigation-item --pani-prev" onclick="handlePrevPage()">
					<div class="panigation-link">
						<i class="fa fa-angle-left"></i>
					</div>
			</div>`;

	let page_count = Math.ceil(productAll.length / perPage);
	for (let i = 1; i <= page_count; i++) {
		panigationList.innerHTML += `
				<div class="panigation-item" onclick="handleChangePage(${i})">
						<div class="panigation-link" >${i}</div>
				</div>
	
			`;
	}
	panigationList.innerHTML += `<div class="panigation-item" onclick="handleNextPage()">
				<div class="panigation-link">
					<i class="fa fa-angle-right --pani-next"></i>
				</div>
			</div>`;
	//
	//active trang hiện tại
	document
		.querySelectorAll('.panigation-link')[1]
		.parentNode.classList.add('active');
}
function handlePrevPage() {
	let currentPage = document.querySelector(
		'.panigation-item.active'
	).innerText;
	if (currentPage === '1') return;
	//
	currentPage = parseInt(currentPage);
	let start = (currentPage - 1 - 1) * perPage;
	let end = (currentPage - 1 - 1) * perPage + perPage;
	perProducts = productsCategoryNow.slice(start, end);
	let productsContainer = document.querySelector('.product-ls');
	renderProducts(perProducts, productsContainer);
	//
	let listPani = document.querySelectorAll('.panigation-link');
	listPani.forEach((itemPagi) =>
		itemPagi.parentNode.classList.remove('active')
	);
	document
		.querySelectorAll('.panigation-link')
		[currentPage - 1].parentNode.classList.add('active');
	handleBackToTop();
}
function handleNextPage() {
	let currentPage = document.querySelector(
		'.panigation-item.active'
	).innerText;
	let page_count = Math.ceil(productsCategoryNow.length / perPage);
	if (currentPage === page_count.toString()) return;
	//
	currentPage = parseInt(currentPage);
	let start = (currentPage + 1 - 1) * perPage;
	let end = (currentPage + 1 - 1) * perPage + perPage;
	perProducts = productsCategoryNow.slice(start, end);
	let productsContainer = document.querySelector('.product-ls');
	renderProducts(perProducts, productsContainer);
	//
	let listPani = document.querySelectorAll('.panigation-link');
	listPani.forEach((itemPagi) =>
		itemPagi.parentNode.classList.remove('active')
	);
	document
		.querySelectorAll('.panigation-link')
		[currentPage + 1].parentNode.classList.add('active');
	handleBackToTop();
}
//
