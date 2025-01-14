import styled from 'styled-components';

export default function ProductCard({
  index,
  product,
  isFavourite,
  onAddToFavourites,
}) {
  return (
    <Card
      className={'area' + (index < 10 ? index + 1 : '')}
      style={index > 9 ? { gridRowStart: Math.floor((index - 2) / 4) + 3 } : {}}
    >
      <h3>{product.name}</h3>
      <p>
        {product.category} // {product.price} €
      </p>
      <FavouriteIcon onClick={() => onAddToFavourites(product)}>
        {isFavourite ? '⭐️' : '✩'}
      </FavouriteIcon>
    </Card>
  );
}

const Card = styled.article`
  background: var(--secondary-color);
  border-radius: 8px;
  grid-column: span 2;
  padding: 0.5rem 1rem 0.5rem;
  position: relative;

  &:hover {
    background: var(--primary-color);
    color: var(--secondary-color);
  }
`;

const FavouriteIcon = styled.span`
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
`;
