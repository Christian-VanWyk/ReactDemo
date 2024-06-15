import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function List({ listData, searchVal }) {

    function filter (val = "") {
        console.log('value ', val)
        if (Array.isArray(listData) && val.length) {
            return listData.filter(item => item.Category.toLowerCase().includes(val.toLowerCase()));
        } else {
            return listData
        }
    }

    return (
        <Row xs={1} md={3} className="g-4">
            {listData.length && filter(searchVal).map((item, index) => (
                <Col key={index}>
                    <Card id={item.Id}>
                        { item.Image.includes("Images") ? (
                            <Card.Img variant="top" src={`https://arthurfrost.qflo.co.za/${item.Image}`} />
                        ) : item.Image.length ? (
                            <Card.Img variant="top" src={`https://arthurfrost.qflo.co.za/Images/${item.Image}`} />
                        ) : (
                            <Card.Img className="h-25" variant="top" src={`https://walker-web.imgix.net/cms/Gradient_builder_2.jpg?auto=format,compress&w=1920&h=1200&fit=crop&dpr=1.5`} />
                        )}
                        
                        <Card.Body>
                            <Card.Title>{item.Title}</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Category: {item.Category}</li>
                                    <li>Created: {item.CreateDate}</li>
                                    <li>ID: {item.Id}</li>
                                </ul>
                            </Card.Text>
                            <audio className="w-100" controls>
                                <source src={`https://arthurfrost.qflo.co.za/${item.Audio}`} type="audio/mpeg" />
                            </audio>
                        </Card.Body>
                    </Card>
                </Col>  
            ))}
        </Row>
    );
}