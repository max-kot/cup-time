export const Header = () => {
	return (
		<header className="header">
		<div className="container header__container">
			<a className="header__logo" href="#">
				<img src="images/logo.svg" alt="Логотип Cup Time" />
			</a>
			<nav className="header__nav">
				<ul className="header__menu menu">
					<li className="menu__item">
						<a className="menu__link" href="#">Чай</a>
					</li>
					<li className="menu__item">
						<a className="menu__link" href="#">Кофе</a>
					</li>
					<li className="menu__item">
						<a className="menu__link" href="#">Чайники</a>
					</li>
					<li className="menu__item">
						<a className="menu__link" href="#">Турки</a>
					</li>
					<li className="menu__item">
						<a className="menu__link" href="#">Прочее</a>
					</li>
				</ul>
			</nav>
			<a className="header__link" href="cart.html">6</a>
		</div>
	</header>
	);
}