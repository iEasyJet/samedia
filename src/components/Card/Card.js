import './Card.scss';
import { useState } from 'react';

function Card(props) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const cardStyle = {
        backgroundImage: !isHover ? `url(${props.img})` : `url(${props.imgHover})`,
    };

    return (
        <div
            className='card'
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='card__title'>{props.name}</h2>
        </div>
    );
}

export default Card;
