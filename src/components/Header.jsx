import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className="header">
		<div className="container header__container">
			<Link className="header__logo" to="/">
				<img src="images/logo.svg" alt="Логотип Cup Time" />
			</Link>
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
			<Link className="header__link" to="cart">6</Link>
		</div>
	</header>
	);
}