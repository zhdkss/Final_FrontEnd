// src/features/games/components/CarouselGameCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// import DecorativeShape from '../../components/DecorativeShape'; // Если нужен декор

// Импортируем стили для этой специфичной карточки
import '../styles/CarouselGameCard.css'; // Создайте этот файл: src/styles/CarouselGameCard.css

const CarouselGameCard = ({ game }) => {
    if (!game) {
        return <div className="carousel-game-card-placeholder">Нет данных</div>;
    }

    const {
        id,
        title = 'Название игры',
        imageUrl,
        price,
        currency = 'USD',
        discountPrice,
        // Можно добавить shortDescription или 1-2 категории/платформы, если нужно
        // shortDescription = '',
        // categories,
    } = game;

    // const displayPrimaryCategory = categories && Array.isArray(categories) && categories.length > 0 ? categories[0] : '';

    return (
        <div className="carousel-game-card">
            <Link to={`/game/${id}`} className="carousel-card-link-area"> {/* Обертка-ссылка для всей карточки */}
                <div className="carousel-card-image-wrapper">
                    <img
                        src={imageUrl || 'https://via.placeholder.com/150x200/1c1c1c/333333?text=No+Img'}
                        alt={`Обложка ${title}`}
                        className="carousel-card-image"
                    />
                </div>
                <div className="carousel-card-info">
                    <h4 className="carousel-card-title" title={title}>{title}</h4>
                    {/* {displayPrimaryCategory && <p className="carousel-card-category">{displayPrimaryCategory}</p>} */}
                    {typeof price === 'number' ? (
                        <p className="carousel-card-price">
                            {discountPrice && typeof discountPrice === 'number' && discountPrice < price ? (
                                <>
                                    <span className="carousel-card-price-original">{price.toFixed(2)}</span>
                                    <span className="carousel-card-price-discounted"> {discountPrice.toFixed(2)} {currency}</span>
                                </>
                            ) : (
                                `${price.toFixed(2)} ${currency}`
                            )}
                        </p>
                    ) : (
                        <p className="carousel-card-price-unavailable">Цена не указана</p>
                    )}
                    <span className="carousel-card-details-link-text">Подробнее...</span>
                </div>
            </Link>
            {/* Кнопки Y&LIST и Корзина здесь, скорее всего, будут лишними, чтобы не перегружать слайд.
                Но если очень нужно, их можно добавить, стилизовав очень компактно. */}
        </div>
    );
};

export default CarouselGameCard;