import { Route, Routes } from "react-router-dom";
import { First } from "./First";
import { Products } from "./Products";
import { Order } from "./Order";
import { Cart } from "./Cart";
import { Delivery } from "./Delivery";

export const Main = () => {
	return (
		<main className="main">
			<Routes>
				<Route path='/' element={
					<>
						<First />
						<Products />
					</>

				} />
				<Route path='cart' element={
					<>
						<div className="main__cart container">
							<Order />
							<Cart />
							<Delivery />
						</div>
					</>
				} />
			</Routes>

		</main>
	);
}