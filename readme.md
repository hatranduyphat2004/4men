<div id="content">
				<div class="slider">
					<div class="slider-wp">
						<i class="fa fa-angle-left slider-prev"></i>
						<div class="slider-main-wp">
							<div class="slider-main">
								<div class="slider-item">
									<img
										src="./assets/img/banner/banner-1.jpg"
										alt="Banner 1"
										class="slider-img"
									/>
								</div>
								<div class="slider-item">
									<img
										src="./assets/img/banner/banner-2.jpg"
										alt="Banner 2"
										class="slider-img"
									/>
								</div>
								<div class="slider-item">
									<img
										src="./assets/img/banner/banner-3.jpg"
										alt="Banner 3"
										class="slider-img"
									/>
								</div>
							</div>
						</div>
						<ul class="slider-dots">
							<li data-index="0" class="slider-dot-item active"></li>
							<li data-index="1" class="slider-dot-item"></li>
							<li data-index="2" class="slider-dot-item"></li>
						</ul>
						<i class="fa fa-angle-right slider-next"></i>
					</div>
				</div>
				<div class="products-hot">
					<div class="container">
						<div class="products-heading">
							<h4>THỜI TRANG HOT NHẤT</h4>
						</div>
						<div class="products-list">
							<div class="products-item products-item-4">
								<div class="products-item-thump">
									<a href="#" class="products-item-link">
										<img
											src="./assets/img/aokhoac/aokhoac-1.jpg"
											alt="Áo Hoodie Nỉ Regular Minimalism AH001"
											class="products-item-img"
										/>
									</a>
									<div class="products-item-cart">
										<a href="#" class="products-item-circle">
											<i class="fa fa-cart-shopping"></i>
										</a>
									</div>
									<div class="products-item-tag">
										<p>-50%</p>
									</div>
								</div>
								<div class="products-item-info">
									<a href="" class="products-item-link">
										<h3 class="products-item-name">
											Áo Hoodie Nỉ Regular Minimalism AH001
										</h3>
										<p class="products-item-price">295.000</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="category">
					<div class="container">
						<div class="category-wp">
							<div class="category-left">
								<div class="category-item">
									<a href="" class="category-link">
										<img
											src="./assets/img/banner/category-polo.jpg"
											alt=""
											class="category-img"
										/>
									</a>
								</div>
							</div>
							<div class="category-mid">
								<div class="category-item">
									<a href="" class="category-link">
										<img
											src="./assets/img/banner/category-middle.jpg"
											alt=""
											class="category-img"
										/>
									</a>
								</div>
							</div>
							<div class="category-right">
								<div class="category-item">
									<a href="" class="category-link">
										<img
											src="./assets/img/banner/category-right.jpg"
											alt=""
											class="category-img"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="products-new">
					<div class="container">
						<div class="products-heading">
							<h4>THỜI TRANG MỚI NHẤT</h4>
						</div>
						<div class="products-list">
							<div class="products-item products-item-4">
								<div class="products-item-thump">
									<a href="#" class="products-item-link">
										<img
											src="./assets/img/aokhoac/aokhoac-1.jpg"
											alt="Áo Hoodie Nỉ Regular Minimalism AH001"
											class="products-item-img"
										/>
									</a>
									<div class="products-item-cart">
										<a href="#" class="products-item-circle">
											<i class="fa fa-cart-shopping"></i>
										</a>
									</div>
									<div class="products-item-tag --tag-red">
										<p>NEW</p>
									</div>
								</div>
								<div class="products-item-info">
									<a href="" class="products-item-link">
										<h3 class="products-item-name">
											Áo Hoodie Nỉ Regular Minimalism AH001
										</h3>
										<p class="products-item-price">295.000</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="products-best-seller">
					<div class="container">
						<div class="products-heading">
							<h4>THỜI TRANG BÁN CHẠY NHẤT</h4>
						</div>
						<div class="products-list">
							<div class="products-item products-item-4">
								<div class="products-item-thump">
									<a href="#" class="products-item-link">
										<img
											src="./assets/img/aokhoac/aokhoac-1.jpg"
											alt="Áo Hoodie Nỉ Regular Minimalism AH001"
											class="products-item-img"
										/>
									</a>
									<div class="products-item-cart">
										<a href="#" class="products-item-circle">
											<i class="fa fa-cart-shopping"></i>
										</a>
									</div>
									<div class="products-item-tag --tag-red">
										<p class="--best-seller">BEST SELLER</p>
									</div>
								</div>
								<div class="products-item-info">
									<a href="" class="products-item-link">
										<h3 class="products-item-name">
											Áo Hoodie Nỉ Regular Minimalism AH001
										</h3>
										<p class="products-item-price">295.000</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

let check = document.querySelector('.main-product') ? true : false;
if (!check) content.innerHTML = mainApp;

    	let producSearchtList = products.filter((pduct) =>
    		pduct.title.includes(searchVal.trim())
    	);
    	const productMain = document.querySelector('.product-ls');

    	renderProducts(producSearchtList, productMain);

function setupPagination(productAll, perPage) {
const panigationList = document.querySelector('.panigation-list').innerHTML = '';

    panigationList +=
    	`<div class="panigation-item --pani-prev">
    			<a href="#" class="panigation-link">
    				<i class="fa fa-angle-left"></i>
    			</a>
    	</div>`

    let page_count = Math.ceil(productAll.length / perPage);
    for (let i = 1; i <= page_count; i++) {
        panigationList+=
    	`
    		<div class="panigation-item active">
    				<a href="#" class="panigation-link">${i}</a>
    		</div>

    	`

    	let li = paginationChange(i, productAll, currentPage);
        document.querySelector('.page-nav-list').appendChild(li);
    }

    panigationList +=
    	`<div class="panigation-item">
    		<a href="#" class="panigation-link">
    			<i class="fa fa-angle-right --pani-next"></i>
    		</a>
    	</div>`

}

    		<div class="panigation-item --pani-prev">
    				<a href="#" class="panigation-link">
    					<i class="fa fa-angle-left"></i>
    				</a>
    		</div>
    		<div class="panigation-item active">
    				<a href="#" class="panigation-link">1</a>
    		</div>
    		<div class="panigation-item">
    			<a href="#" class="panigation-link">2</a>
    		</div>
    		<div class="panigation-item">
    			<a href="#" class="panigation-link">3</a>
    		</div>
    		<div class="panigation-item">
    			<a href="#" class="panigation-link">
    				<i class="fa fa-angle-right --pani-next"></i>
    			</a>
    		</div>



    								<div onclick="handleSelected(this)" class="ps-opt">S</div>
    								<div onclick="handleSelected(this)" class="ps-opt">M</div>
    								<div onclick="handleSelected(this)" class="ps-opt">L</div>
    								<div onclick="handleSelected(this)" class="ps-opt">XL</div>

.nb\_\_right-cart

<div onclick="handleSelected(this)" class="pq-opt">2</div>
<div onclick="handleSelected(this)" class="pq-opt">3</div>
<div onclick="handleSelected(this)" class="pq-opt">4</div>
<div onclick="handleSelected(this)" class="pq-opt">5</div>
<div onclick="handleSelected(this)" class="pq-opt">6</div>
<div onclick="handleSelected(this)" class="pq-opt">7</div>
<div onclick="handleSelected(this)" class="pq-opt">8</div>
<div onclick="handleSelected(this)" class="pq-opt">9</div>
<div onclick="handleSelected(this)" class="pq-opt">10</div>

            <form action="" class="form" id="form-1">

                <div class="form-header">
                    <i class="fa-solid fa-circle-user form-header-icon" ></i>
                    <p class="form-header__text">ĐĂNG NHẬP</p>
                </div>
                <div class="line"></div>
                <div class="form__wrapper">
                    <div class="form__input">
                        <input type="text" id="username" name="username" class="form__wrapper-input" placeholder="Nhập Số Điện Thoại">
                        <i class="fa-solid fa-phone form__icon" style="color: #292929;"></i>
                    </div>
    				<div class="form__message"><p></p></div>
                    <div class="form__input">
                        <input type="password" id="Password" name="password" class="form__wrapper-input" placeholder="Mật Khẩu">
                        <i class="fa-solid fa-eye form__icon" id="iconPWD_hide" style="color: #292929;"></i>
                        <i class="fa-solid fa-eye-slash form__icon" id="iconPWD" style="color: #292929;"></i>
                    </div>
    				<div class="form__message"> <p></p></div>
                </div>
                <div class="form__btn">
    				<button class="btn btn--primary ">Đăng nhập</button>
    			</div>

                <div class="footer-login">
                    <div >
                        <a href="form_ResetPwd.html" class="footer-login__sign" >Quên mật khẩu?</a>
                    </div>
                    <div>
                        <p class=" footer-login__text">Bạn chưa có tài khoản?</p>
                    </div>
                    <div>
                        <a href="form_Signup.html" class="footer-login__sign" >Đăng Kí</a>
                    </div>
                </div>
            </form>

<div class="auth-form">
						<div class="auth-wp">
							<div class="auth-form-header">
								<p class="auth-form-icon">
									<i class="fa fa-user-pen"></i>
								</p>
								<h3 class="auth-form-title">ĐĂNG KÝ</h3>
							</div>
							<p class="separate auth-form-separate">
								<span class="separate-main block"></span>
							</p>
							<div class="auth-form-body">
								<div class="w-50">
									<div class="auth-form-group">
										<label for="username" class="auth-form-label">
											Tài khoản <span class="--color-red">*</span>
										</label>
										<p
											class="auth-form-message --usr-psw --color-red"
										>
											Sai
										</p>
										<input
											type="text"
											class="auth-form-inp"
											id="username"
											placeholder=""
										/>
									</div>
									<div class="auth-form-group">
										<label for="password" class="auth-form-label">
											Mật khẩu <span class="--color-red">*</span>
										</label>
										<p
											class="auth-form-message --usr-psw --color-red"
										>
											Sai
										</p>
										<input
											type="password"
											class="auth-form-inp"
											id="password"
											placeholder=""
										/>
										<p class="auth-form-show-psw --sign-up">
											<i class="fa-solid fa-eye"></i>
										</p>
									</div>
								</div>

    							<div class="w-50">
    								<div class="auth-form-group">
    									<label for="email" class="auth-form-label">
    										Email <span class="--color-red">*</span>
    									</label>
    									<p
    										class="auth-form-message --usr-psw --color-red"
    									>
    										Sai
    									</p>
    									<input
    										type="text"
    										class="auth-form-inp"
    										id="email"
    										placeholder=""
    									/>
    								</div>

    								<div class="auth-form-group">
    									<label for="confirm-psw" class="auth-form-label">
    										Xác nhận mật nhẩu
    										<span class="--color-red">*</span>
    									</label>
    									<p
    										class="auth-form-message --usr-psw --color-red"
    									>
    										Sai
    									</p>
    									<input
    										type="password"
    										class="auth-form-inp"
    										id="confirm-psw"
    										placeholder=""
    									/>
    									<p class="auth-form-show-psw --sign-up">
    										<i class="fa-solid fa-eye"></i>
    									</p>
    								</div>
    							</div>

    							<!-- <p class="auth-form-miss-psw">Quên mật khẩu?</p> -->
    						</div>
    						<p class="separate auth-form-separate">
    							<span class="separate-main block"></span>
    						</p>

    						<div class="auth-form-bottom">
    							<div class="auth-form-group auth-form-policy">
    								<input
    									type="checkbox"
    									id="check-policy"
    									class="auth-form-inp auth-form-check"
    								/>
    								<label for="check-policy" class="auth-form-label">
    									Tôi đồng ý với
    									<span class="--color-red">điều khoản</span> và
    									<span class="--color-red">dịch vụ</span>
    								</label>
    							</div>
    							<p class="auth-form-message --usr-psw --color-red">
    								Chua check
    							</p>
    							<button class="btn btn--primary auth-form-btn">
    								Đăng ký
    							</button>
    							<!-- <div class="auth-form-create-acc">
    								Chưa có tài khoản?
    								<p class="auth-form-create-link">Đăng kí</p>
    							</div> -->
    						</div>
    					</div>
    				</div>

<div class="auth-form">
						<div class="auth-wp">
							<div class="auth-form__header">
								<p class="auth-form__header-icon">
									<i class="fa fa-user-circle"></i>
								</p>
								<h3 class="auth-form__header-title">ĐĂNG NHẬP</h3>
							</div>
							<p class="auth-form-line mt-24 mb-20"></p>
							<div class="auth-form__body">
								<div class="auth-form__body-group">
									<!-- <label for="username" class="auth-form-label">
										Tài khoản
									</label> -->
									<input
										type="text"
										class="auth-form__body-inp"
										id="username"
										placeholder="Tài khoản"
									/>
								</div>
								<div class="auth-form__body-group">
									<!-- <label for="username" class="auth-form-label">
										Tài khoản
									</label> -->
									<input
										type="password"
										class="auth-form__body-inp"
										id="password"
										placeholder="Mật khẩu"
									/>
									<p class="auth-form__body-icon">
										<i class="fa fa-eye"></i>
									</p>
								</div>
								<p class="auth-form-message --color-red"></p>
							</div>
							<p class="auth-form-line mb-8"></p>
							<p class="auth-form-miss-psw">Quên mật khẩu?</p>
							<div class="auth-form__bottom">
								<button class="btn btn--primary auth-form__bottom-btn">
									Đăng nhập
								</button>
								<div class="auth-form__bottom-create-acc">
									Chưa có tài khoản?
									<p class="auth-form__bottom-create-link">Đăng kí</p>
								</div>
							</div>
						</div>
					</div>

<div class="pay-right__cart-item">
													<div class="pay-right__cart-img">
														<img
															src="./assets/img/aopolo/polo-1.jpg"
															alt="
															Áo Sơ Mi Tay Ngắn Modal Trơn Chống Nhăn Form Slimfit SM136 Màu Trắng
															"
														/>
													</div>
													<div class="pay-right__cart-content">
														<p class="pay-right__cart-name">
															Áo Sơ Mi Tay Ngắn Modal Trơn Chống
															Nhăn Form Slimfit SM136 Màu Trắng
														</p>
														<div class="pay-right__cart-info">
															<div class="pay-right__cart-desc">
																<p
																	class="pay-right__cart-price"
																>
																	Giá: <span> 205.000đ </span>
																</p>
																<p class="pay-right__cart-size">
																	Size: <span>S</span>
																</p>
															</div>
															<div
																class="pay-right__cart-quantity-wp"
															>
																<div
																	class="pay-right__cart-quantity"
																>
																	<span
																		class="pay-right__cart-decrease"
																	>
																		<i
																			class="fa fa-circle-minus"
																		></i>
																	</span>
																	<!-- <p id="pay-right__cart-quantity-inp"></p> -->
																	<input
																		type="text"
																		min="1"
																		max="20"
																		id="pay-right__cart-quantity-inp"
																		value="1"
																	/>
																	<span
																		class="pay-right__cart-increase"
																	>
																		<i
																			class="fa fa-plus-circle"
																		></i>
																	</span>
																</div>
															</div>
															<div class="pay-right__cart-opt">
																<div
																	class="pay-right__cart-edit"
																>
																	Chỉnh sửa
																</div>
																<div
																	class="pay-right__cart-del"
																>
																	Xóa
																</div>
															</div>
														</div>
													</div>
												</div>

sizeLs[0]

    // cap nhat so luong san pham
    let currentAccount = JSON.parse(localStorage.getItem('currentAccount'));
    currentAccount.carts[index].quantity = quantityVal;
    localStorage.setItem('currentAccount', JSON.stringify(currentAccount));
    //
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    accounts.find((acc) => acc.id === currentAccount.id).carts =
    	currentAccount.carts;
    // cap nhat data
    localStorage.setItem('accounts', JSON.stringify(accounts));
    //cap nhat total thanh toan
    let totalPay = 0;
    currentAccount.carts.forEach(
    	(cart) => (totalPay += parseInt(cart.quantity) * parseInt(cart.price))
    );
    document.querySelector(
    	'.pay-bottom-price'
    ).innerText = `${convertFormatPrice(totalPay)}`;
    // cap nhat gio hang bé
    renderCarts(currentAccount.carts);

function showModalBuy(id) {
handleHideModal();
let pdBuy = products.filter((product) => product.id === id)[0];
let htmls = `
	<div class="pduct">
		<div class="pduct-wp">
			<div class="pduct-left">
				<img
					src="${pdBuy.img}"
					alt=""
					class="pduct-left__img"
				/>
			</div>
			<!--  -->
			<div class="pduct-right">
				<div class="pduct-info">
					<h3 class="pduct-name">
						${pdBuy.title}
					</h3>
					<p class="pduct-price">Giá: <span>${convertFormatPrice(pdBuy.price)}</span></p>
					<p class="pduct-status">
						Tình trạng: 
						<span>
							${pdBuy.status === 1 ? 'còn hàng' : 'hết hàng'}
						</span>
					</p>
				</div>
				<span class="pduct-separate"></span>
				<div class="pduct-desc">
					<h3>Mô tả sản phẩm:</h3>
					<p>
						${pdBuy.title}
					</p>
					<p>Loại sản phẩm: <span>${pdBuy.category}</span></p>
					<p>Size: ${pdBuy.sizeLs.join(' ')}</p>
				</div>
				<span class="pduct-separate"></span>
				<div class="pduct-selection">
					<div class="pduct-size">
						<div class="ps-wp">
							<h3>
								Lựa chọn size
								<span class="--color-red">*</span>
							</h3>
							<div class="ps-body">
								<div class="ps-selected" onclick="handleShowListSelection(this)">
									<span class="ps-content">${pdBuy.sizeLs[0]}</span>
									<span>
										<i class="fa fa-angle-down"></i>
									</span>
								</div>
								<div class="ps-ls">
									${showSizeList(pdBuy.sizeLs)}
								</div>
							</div>
						</div>
					</div>
					<!-- *** -->
					<div class="pduct-quantity">
						<div class="pq-wp">
							<h3>
								Số lượng sản phẩm
								<span class="--color-red">*</span>
							</h3>
							<div class="pq-body">
								<div class="pq-selected" onclick="handleShowListSelection(this)">
									<span class="pq-content">1</span>
									<span>
										<i class="fa fa-angle-down"></i>
									</span>
							</div>
							<div class="pq-ls">
								${renderQuantity(10)}
							</div>
						</div>
					</div>
				</div>
			</div>					
			<span class="pduct-separate"></span>
			<div class="pduct-bottom">
				<div class="pb-wp">
					<button class="btn btn--primary pduct-buy-btn" onclick="payNow()">
						<i class="fa fa-cart-shopping"></i>
						Thanh toán ngay
					</button>
					<button class="btn btn--primary pduct-add-btn" onclick="addCart(${pdBuy.id})">
						<i class="fa fa-plus"></i>
						Thêm giỏ hàng
					</button>
				</div>
			</div>
		</div>
	</div>	
	`;
modalBody.innerHTML = htmls;
handleShowModal();
}

<div class="account">
						<div class="account-wp">
							<div class="account-top">
								<h3 class="account-heading">THÔNG TIN TÀI KHOẢN</h3>
							</div>
							<div class="account-separate --separate-horizontal"></div>
							<div class="account-body">
								<div class="ab-wp">
									<!-- FULL NAME -->
									<div class="ab-info-group">
										<label for="fullname" class="ab-info-label"
											>Họ tên</label
										>
										<p class="ab-info-value">Hà Trần Duy Phát</p>
										<!-- <input
											type="text"
											id="full-name"
											class="ab-info-inp"
											value="Hà Trần Duy Phát"
										/> -->
									</div>
									<!-- PHONE -->
									<div class="ab-info-group">
										<label for="phone" class="ab-info-label"
											>Số điện thoại</label
										>
										<p class="ab-info-value">0799664334</p>
										<!-- <input
											type="text"
											id="phone"
											class="ab-info-inp"
											value="0799664334"
										/> -->
									</div>
									<!-- USER NAME -->
									<div class="ab-info-group">
										<label for="username" class="ab-info-label"
											>Tên tài khoản</label
										>
										<p class="ab-info-value" id="username">admin</p>
										<!-- <input
											type="text"
											id="username"
											class="ab-info-inp"
											value="admin"
										/> -->
									</div>
									<!-- MAIL -->
									<div class="ab-info-group">
										<label for="mail" class="ab-info-label"
											>Email</label
										>
										<p class="ab-info-value" id="mail">
											hatranduyphat2004@gmail.com
										</p>
										<!-- <input
											type="text"
											id="mail"
											class="ab-info-inp"
											value="hatranduyphat2004@gmail.com"
										/> -->
									</div>
								</div>
							</div>
							<div class="account-separate --separate-horizontal"></div>
							<div class="account-bottom">
								<button
									class="btn btn--primary"
									onclick="handleEditInfo(this)"
								>
									Chỉnh sửa
								</button>
								<button
									class="btn btn--primary"
									onclick="handleEditPassword()"
								>
									Đổi mật khẩu
								</button>
								<!-- <button class="btn btn--primary">Xác nhận</button> -->
							</div>
						</div>
					</div>

    <!-- <div class="overview">
    							<div class="overview-wp">
    								<div class="ow-ls">
    									<div class="ow-item item-3">
    										<div class="ow-top">
    											<h3 class="ow-heading ow-heading--customer">
    												0
    											</h3>
    										</div>
    										<div class="ow-thump">
    											<img
    												src="./assets/img/admin/s1.png"
    												alt="KHÁCH HÀNG"
    											/>
    										</div>
    										<div class="ow-bottom">
    											<h3 class="ow-title">Khách hàng</h3>
    											<p class="ow-desc">
    												Khách hàng mục tiêu là một nhóm đối tượng
    												khách hàng trong phân khúc thị trường mục
    												tiêu mà doanh nghiệp bạn đang hướng tới.
    											</p>
    										</div>
    									</div>
    									<div class="ow-item item-3">
    										<div class="ow-top">
    											<h3 class="ow-heading ow-heading--pduct">
    												0
    											</h3>
    										</div>
    										<div class="ow-thump">
    											<img
    												src="./assets/img/admin/s2.png"
    												alt="KHÁCH HÀNG"
    											/>
    										</div>
    										<div class="ow-bottom">
    											<h3 class="ow-title">Sản phẩm</h3>
    											<p class="ow-desc">
    												Sản phẩm là bất cứ cái gì có thể đưa vào
    												thị trường để tạo sự chú ý, mua sắm, sử
    												dụng hay tiêu dùng nhằm thỏa mãn một nhu
    												cầu hay ước muốn. Nó có thể là những vật
    												thể, dịch vụ, con người, địa điểm, tổ
    												chức hoặc một ý tưởng.
    											</p>
    										</div>
    									</div>
    									<div class="ow-item item-3">
    										<div class="ow-top">
    											<h3 class="ow-heading ow-heading--bills">
    												0
    											</h3>
    										</div>
    										<div class="ow-thump">
    											<img
    												src="./assets/img/admin/s3.png"
    												alt="DOANH THU"
    											/>
    										</div>
    										<div class="ow-bottom">
    											<h3 class="ow-title">Doanh thu</h3>
    											<p class="ow-desc">
    												Doanh thu của doanh nghiệp là toàn bộ số
    												tiền sẽ thu được do tiêu thụ sản phẩm,
    												cung cấp dịch vụ với sản lượng.
    											</p>
    										</div>
    									</div>
    								</div>
    							</div>
    						</div> -->

<div class='account-item'>
				<div class='account-info'>
					<div class='account-detail-ls'>
						<p class='account-detail-item min-w-20'>${account.id}</p>
						<p class='account-detail-item min-w-110'>${account.fullname}</p>
						<p class='account-detail-item min-w-40'>${account.role.toUpperCase()}</p>
						<p class='account-detail-item min-w-70'>${account.username}</p>
						<p class='account-detail-item min-w-70'>${account.phone}</p>
						<p class='account-detail-item min-w-150'>${account.mail}</p>
						<p class='account-detail-item min-w-100'>${formatDate(account.join)}</p>
					</div>
				</div>
				<div class='account-action'>${editEle}</div>
			</div>

<div class="ordered-item">
						<div class="ordered-item-top">
							<div class="ordered-item-product">
								<div class="ordered-item-img">
									<img src="${historyCarts.carts[0].img}"/>		
								</div>
								<div class="ordered-item-info">
									<p class="ordered-item-name">${historyCarts.carts[0].title}</p>
									<div class="ordered-item-desc">
										<p class="ordered-item-price">Giá:
											<span>
												${convertFormatPrice(historyCarts.carts[0].price)}	
											</span>
										</p>
										<p class="ordered-item-size">Size: 
											<span>
												${historyCarts.carts[0].size}
											</span>
										</p>
										<p class="ordered-item-quantity">Số lượng: 
											<span>
												${historyCarts.carts[0].quantity}
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="--separate-horizontal my-4"></div>
						<div class="ordered-item-bottom">
								<div class="ordered-item-action">
									<p class="ordered-item-status">Chua xu li</p>
									<div class="ordered-item-detail">
										<p class="ordered-item-detail-title">
											<i class="fa fa-eye"></i>
											Xem chi tiet
										</p>
										<div class="ordered-item-detail-ls">
											<p class="ordered-item-date">Ngay dat</p>
											<p class="ordered-item-price">gia san pham</p>
											<p class="ordered-item-size">Size: <span>size san pham</span></p>
											<p class="ordered-item-quantity">Số lượng: <span>sluong san pham</span></p>
										</div>
									</div>
								</div>
								<p class="ordered-item-total">Tong tien: <span>1.900.000đ</span></p>
						</div>
					</div>
/////
    <div class="slider">
    				<div class="slider-wp">
    					<i class="fa fa-angle-left slider-prev"></i>
    					<div class="slider-main-wp">
    						<div class="slider-main">
    							<div class="slider-item">
    								<img
    									src="./assets/img/banner/banner-1.jpg"
    									alt="Banner 1"
    									class="slider-img"
    								/>
    							</div>
    							<div class="slider-item">
    								<img
    									src="./assets/img/banner/banner-2.jpg"
    									alt="Banner 2"
    									class="slider-img"
    								/>
    							</div>
    							<div class="slider-item">
    								<img
    									src="./assets/img/banner/banner-3.jpg"
    									alt="Banner 3"
    									class="slider-img"
    								/>
    							</div>
    						</div>
    					</div>
    					<ul class="slider-dots">
    						<li data-index="0" class="slider-dot-item active"></li>
    						<li data-index="1" class="slider-dot-item"></li>
    						<li data-index="2" class="slider-dot-item"></li>
    					</ul>
    					<i class="fa fa-angle-right slider-next"></i>
    				</div>
    			</div>
    			<div class="products-hot">
    				<div class="container">
    					<div class="products-heading">
    						<h4>THỜI TRANG HOT NHẤT</h4>
    					</div>
    					<div class="products-list products-hot-list">
    						<!-- showModalBuy(${product.id}) -->
    					</div>
    				</div>
    			</div>
    			<div class="category">
    				<div class="container">
    					<div class="category-wp">
    						<div class="category-left">
    							<div class="category-item">
    								<!-- <a href="" class="category-link"> -->
    								<img
    									src="./assets/img/banner/category-polo.jpg"
    									alt=""
    									class="category-img"
    								/>
    								<!-- </a> -->
    							</div>
    						</div>
    						<div class="category-mid">
    							<div class="category-item">
    								<!-- <a href="" class="category-link"> -->
    								<img
    									src="./assets/img/banner/category-middle.jpg"
    									alt=""
    									class="category-img"
    								/>
    								<!-- </a> -->
    							</div>
    						</div>
    						<div class="category-right">
    							<div class="category-item">
    								<!-- <a href="" class="category-link"> -->
    								<img
    									src="./assets/img/banner/category-right.jpg"
    									alt=""
    									class="category-img"
    								/>
    								<!-- </a> -->
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div class="products-new">
    				<div class="container">
    					<div class="products-heading">
    						<h4>THỜI TRANG MỚI NHẤT</h4>
    					</div>
    					<div class="products-list products-new-list"></div>
    				</div>
    			</div>
    			<div class="products-best-seller">
    				<div class="container">
    					<div class="products-heading">
    						<h4>THỜI TRANG BÁN CHẠY NHẤT</h4>
    					</div>
    					<div class="products-list products-best-seller-list"></div>
    				</div>
    			</div>
