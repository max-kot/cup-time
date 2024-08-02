export const CartItem = ({ data }) => {
	return (
		<li className="cart__item">
			<article className="product product--cart">
				<div className="product__image">
					<img src={data.image} alt={data.title} />
				</div>
				<div className="product__content">
					<h3 className="product__title">
						{data.title}
					</h3>
					<div className="product__counter counter">
						<button className="counter__button" type="button">+</button>
						<input className="counter__input" type="number" value={1}/>
						<button className="counter__button" type="button">-</button>
					</div>
					<p className="product__price">
						{data.price}&nbsp;₽
					</p>
				</div>
			</article>
		</li>
	)
}