import React from 'react';
import Card from 'react-bootstrap/Card';

function ImageGrid({ images }) {
    return (
        <div className="image-grid">
            {images.map((image) => (
                // <div key={image.id}>
                //     <img src={image.src.medium} width={500} height={500} alt={image.alt} />
                //     <br />
                // </div>

                <Card key={image.id} className='my-5'>
                    <Card.Img variant="top" src={image.src.medium} />
                    <Card.Body>
                        <Card.Title>{image.alt}</Card.Title>
                    </Card.Body>
                </Card>
            ))}
        </div>



    );
}

export default ImageGrid;