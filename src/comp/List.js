import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

export default function List({ listData, searchVal }) {
    const [activeAudio, setActiveAudio] = useState(null);
    
    function filter (val = "") {
        if (Array.isArray(listData) && val.length) {
            return listData.filter(item => item.Category.toLowerCase().includes(val.toLowerCase()));
        } else {
            return listData
        }
    }
    
    function handlePlayAudio(audioUrl) {
        if (activeAudio === audioUrl) {
            setActiveAudio(null);
        } else {
            setActiveAudio(audioUrl);
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
                            <Card.Img loading="lazy" variant="top" src={`https://arthurfrost.qflo.co.za/Images/${item.Image}`} />
                        ) : (
                            <div className="placeholder">placeholder</div>
                        )}
                        
                        <Card.Body>
                            <Card.Title>{item.Title}</Card.Title>
                            <ul>
                                <li>Category: {item.Category}</li>
                                <li>Created: {item.CreateDate}</li>
                                <li>ID: {item.Id}</li>
                            </ul>
                            {item.Audio ? (
                                <>
                                    <Button className="mb-2" variant="primary" onClick={() => handlePlayAudio(item.Audio)}>
                                        Play Sermon
                                    </Button>
                                    {activeAudio === item.Audio && (
                                        <audio className="w-100" controls autoPlay>
                                            <source src={`https://arthurfrost.qflo.co.za/${item.Audio}`} type="audio/mpeg" />
                                        </audio>
                                    )}
                                </>
                            ) : (
                                <Button className="mb-2" disabled variant="primary" >
                                    No audio
                                </Button>
                            )}
                        </Card.Body>
                    </Card>
                </Col>  
            ))}
        </Row>
    );
}