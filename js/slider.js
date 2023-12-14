const slider = document.querySelector('.slider');
if (slider) {
	const sliderMain = document.querySelector('.slider-main');
	const sliderItems = document.querySelectorAll('.slider-item');
	const dots = document.querySelectorAll('.slider-dot-item');
	const nextBtn = document.querySelector('.slider-next');
	const prevBtn = document.querySelector('.slider-prev');
	//số lượng slide
	const lengthItems = sliderItems.length;
	//độ rộng của 1 slide
	const sliderItemWidth = sliderItems[0].offsetWidth;
	//biến vị trí slide đang hiển thị
	let active = 0;
	//vị trí slide theo chiều ngang
	let posX = 0;
	//
	// direction: hướng chuyển (=-1 chuyển về trước) (=1 chuyển về sau)
	function handleChangeSlide(direction) {
		//chuyển slide phía sau
		if (direction === 1) {
			//nếu vị trí slide là cuối cùng thì chuyển về slide đầu
			if (active >= lengthItems - 1) {
				//set lại biến vị trí
				active = 0;
				posX = 0;
				sliderMain.style = `transform: translateX(${posX}px)`;
				// css theo slide
				activeDot();
				return;
			}
			//ngược lại thì chuyển sang slide típ
			posX -= sliderItemWidth;
			sliderMain.style = `transform: translateX(${posX}px)`;
			//tăng biến vị trí slide sau khi chuyển slide
			active++;
		}
		//chuyển slide phía trước
		else if (direction === -1) {
			//nếu vị trí slide là đầu tiên thì chuyển về slide cúi
			if (active <= 0) {
				//set lại biến vị trí
				active = lengthItems - 1;
				posX = -1 * active * sliderItemWidth;
				sliderMain.style = `transform: translateX(${posX}px)`;
				activeDot();
				return;
			}
			//ngược lại thì chuyển về slide trước
			posX += sliderItemWidth;
			sliderMain.style = `transform: translateX(${posX}px)`;
			active--;
		}
		activeDot();
	}

	nextBtn.addEventListener('click', () => {
		//khi ấn nút next thì phải clearInterval
		//=>để tránh trường hợp nhấn vào lúc 4s(tự động chuyển) thì slide sẽ nhảy 2 lần
		clearInterval(myInterval);
		handleChangeSlide(1);
		//sau đó set tự động chuyển lại
		myInterval = setInterval(handleAutoChangeSlide, 4000);
	});
	// tương tự như next
	prevBtn.addEventListener('click', () => {
		clearInterval(myInterval);
		handleChangeSlide(-1);
		myInterval = setInterval(handleAutoChangeSlide, 4000);
	});
	//tự động chuyển slide típ theo
	function handleAutoChangeSlide() {
		//níu là slide cúi thì chuyển về slide đầu
		if (active >= lengthItems - 1) {
			active = 0;
			posX = -1 * active * sliderItemWidth;
			sliderMain.style = `transform: translateX(${posX}px)`;
			activeDot();
		} else handleChangeSlide(1);
	}
	//slide tự động chuyển sau 4s
	let myInterval = setInterval(handleAutoChangeSlide, 4000);
	//xử lí khi bấm nút thứ tự hiện slide tương ứng
	[...dots].forEach((dot) => {
		dot.addEventListener('click', (e) => {
			//khi ấn 1 dot bất kì thì sẽ bỏ css hết all nút
			[...dots].forEach((dot) => dot.classList.remove('active'));
			//set lại nút nào được ấn thì có css
			e.target.classList.add('active');
			//mỗi nút có data-index = 0,1,2,.. tương ứng với slide0,1,2..
			const indexSlide = parseInt(e.target.dataset.index);
			//set biến vị trí slide theo data-set
			active = indexSlide;
			posX = -1 * active * sliderItemWidth;
			sliderMain.style = `transform: translateX(${posX}px)`;
			// tránh trường hợp như 2 nút next và prev
			clearInterval(myInterval);
			myInterval = setInterval(handleAutoChangeSlide, 4000);
		});
	});

	//thêm css cho dot của slide ddang hiện
	function activeDot() {
		[...dots].forEach((dot) => dot.classList.remove('active'));
		dots[active].classList.add('active');
	}
}
