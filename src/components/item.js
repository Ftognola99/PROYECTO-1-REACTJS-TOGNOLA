import{card, button} from 'react-bootstrap'
export default function item({product}){
    return (
        <Card style={{width:"18 rem", border: "1px solid #ccc"}}>
            <Card.img varient="top" src ={product.image} classname="img-fluid"></Card.img>
            <Card.Body>
            <Card.title>{product.title}</Card.title>
            <Card.text>
                <p>Stock: {product.stock}</p>
                <p>price: {product.Price}</p>
            </Card.text>
            <Button variant="primary">Ver mas!</Button>
            </Card.Body>
        </Card>
    );
}


