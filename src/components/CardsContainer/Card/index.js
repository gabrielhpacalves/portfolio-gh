import './styles.css';

function Card({ image, alt }) {
  return (
    <div className="card">
      <img src={image} alt={alt} />
    </div>
  )
}

export default Card;