export const Delivery = () => {
	return (
		<section className="delivery">
			<h2 className="section-title delivery__title">Доставка</h2>
			<form className="delivery__form form" action="#">
				<div className="form__input-box">
					<input className="form__input" type="text" name="name" placeholder="Имя" />
					<input className="form__input" type="phone" name="phone" placeholder="Телефон" />
					<input className="form__input form__input--wide" type="text" name="address" placeholder="Адрес" />
				</div>
				<div className="form__payment-box">
					<p className="form__text">
						Оплата:
					</p>
					<ul className="form__payment-list">
						<li className="form__payment-item">
							<input className="form__radio" id="payment-card" type="radio" name="payment" value="card" />
							<label className="form__label" htmlFor="payment-card">Картой</label>
						</li>
						<li className="form__payment-item">
							<input className="form__radio" id="payment-cash" type="radio" name="payment" value="cash" defaultChecked />
							<label className="form__label" htmlFor="payment-cash">Наличными</label>
						</li>
					</ul>


				</div>

			</form>
		</section>
	);
}