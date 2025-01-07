function ModalCartItem({ item }) {
  const { id, name, price, amount, image } = item;

  return (
    <li className="modal-item flex" key={id}>
      <div className="modal-item-content flex">
        <img src={image.thumbnail} alt={name} />
        <div className="item-desc flex">
          <p className="name">{name}</p>
          <p className="flex light-text">
            <span className="accent-text">{amount}x</span> @${price.toFixed(2)}
          </p>
        </div>
      </div>
      <p className="name">${(amount * price).toFixed(2)}</p>
    </li>
  );
}

export default ModalCartItem;
