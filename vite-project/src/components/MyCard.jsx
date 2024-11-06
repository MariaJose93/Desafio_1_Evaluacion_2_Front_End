import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({ image, title, paragraph, tagColor, tagText }) => {
    return (
        <>
            <Card style={{ width: "18rem", height:"38rem"}}>
                <Card.Img variant="top" src={image} className='imgCard'/>
                <Card.Body>
                    <h5 className="titulo-card">{title}</h5>
                    <p>{paragraph}</p>
                    <Tags tagColor={tagColor} tagText={tagText} />
                </Card.Body>
            </Card>
        </>
    );
};
export default MyCard;