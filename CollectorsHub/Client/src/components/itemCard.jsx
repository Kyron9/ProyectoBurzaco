import React from 'react';

const ItemCard = ({ title, description, image, price, onViewDetails }) => {
    return (
        <div className="item-card">
            <div className="item-card-image">
                <img src={image} alt={title} />
            </div>
            <div className="item-card-content">
                <h3 className="item-card-title">{title}</h3>
                <p className="item-card-description">{description}</p>
                <div className="item-card-footer">
                    <span className="item-card-price">${price}</span>
                    <button 
                        className="item-card-button"
                        onClick={onViewDetails}
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;