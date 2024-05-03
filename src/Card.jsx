function Card({ type, children }) {
  return (
    <div className={`card ${type}`}>
      <img src={`/images/icon-${type}.svg`} alt="" className="card__img" />
      <h2 className="card__heading">{type}</h2>
      <p className="card__description">{children}</p>
      <a href="" className={`card__link ${type}-text`}>
        Learn More
      </a>
    </div>
  );
}

export default Card;
