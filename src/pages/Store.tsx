import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../data/items.json';

type Props = {}

const Store = (props: Props) => {
	return (
		<>
			<h1>Store</h1>
			<Row md={2} xs={1} lg={3} className="g-3">
				{
					products.map((product) => (
						<Col key={product.id}>
							<Product {...product} />
						</Col>
					))
				}
			</Row>
		</>
	)
}

export default Store