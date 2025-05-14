import React from 'react';
import { useLocation } from 'react-router-dom';  // استيراد useLocation من React Router
import './ProductInfo.css';

const ProductInfo = () => {
    // استقبال البيانات المرسلة عبر props باستخدام useLocation
    const location = useLocation();
    const product = location.state?.product; // الحصول على المنتج من الـ state

    if (!product) {
        return <div className="product-info-container">No product available.</div>;
    }

    return (
        <div className="product-info-container">
            <div className="product-info">
                <div className="product-info__image-section">
                    <img src={product.image} alt={product.name} className="product-info__image" />
                </div>
                <div className="product-info__details-section">
                    <h1 className="product-info__name">{product.name}</h1>
                    <p className="product-info__description">{`Details about ${product.name}. This is a sample description. You can add more details in your data.js or fetch them.`}</p>
                    <div className="product-info__availability">
                        Availability:
                        <span className={`product-info__availability-status ${product.availability === 'In Stock' ? 'product-info__availability-status--in-stock' : 'product-info__availability-status--out-of-stock'}`}>
                            {product.availability}
                        </span>
                    </div>
                    <div className="product-info__price-section">
                        <span className="product-info__price-label">Price:</span>
                        <span className="product-info__current-price">{product.currency}{product.price}</span>
                        {product.originalPrice && (
                            <span className="product-info__original-price">{product.currency}{product.originalPrice}</span>
                        )}
                    </div>
                    <button className="product-info__add-to-cart-btn">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
