import PropTypes from 'prop-types'
const ProductCard = ({glass}) => {
    const {name, image, description, price} = glass;
  return (
    <div className="card bg-base-100 w-96 border-2 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={name}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <h2>{price}</h2>
        <div className="card-actions flex">
          <button className="btn btn-warning text-white">Add To Cart</button>
          <button className="btn btn-warning text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
    glass: PropTypes.object
}

export default ProductCard;
