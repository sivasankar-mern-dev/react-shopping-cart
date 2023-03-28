import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";

type Props = {
	id: number;
	title: string;
	price: number;
	brand: string;
	thumbnail: string;
};

const Product = ({ id, title, price, brand, thumbnail }: Props) => {
	const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
	const quantity = getItemQuantity(id);

	return (
		<Card>
			<Card.Img variant="top" src={thumbnail} height="250px" style={{ objectFit: "cover" }} />
			<Card.Body className="d-flex flex-column">
				<Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
					<div>
						<p className="fs-2 mb-2">{title}</p>
						<p className="text-muted">{brand}</p>
					</div>
					<span className="ms-2 text-muted">{formatCurrency(price)}</span>
				</Card.Title>
				<div className="mt-auto">
					{quantity === 0 ? (
						<Button className="w-100" onClick={() => increaseCartQuantity(id)}>
							+ Add To Cart
						</Button>
					) : (
						<div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
							<div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
								<Button onClick={() => decreaseCartQuantity(id)}>-</Button>
								<div>
									<span className="fs-3">{quantity}</span>
								</div>
								<Button onClick={() => increaseCartQuantity(id)}>+</Button>
							</div>
							<Button onClick={() => removeFromCart(id)} variant="danger" size="sm">
								Remove
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	);
};

export default Product;
