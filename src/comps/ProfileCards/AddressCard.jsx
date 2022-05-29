import React from "react";
import "./AddressCard.css";
import { AiOutlineEdit, AiOutlineDelete } from "../../utils/getIcons";

function AddressCard({
  initialAddressState,
  address,
  setAddress,
  setIsAddress,
}) {
  const addDeleteHandler = () => {
    setIsAddress(false);
    setAddress(initialAddressState);
    localStorage.removeItem("address");
  };

  return (
    <div className="AddressCard">
      <h2 className="AddressCard-title flex justify-space-between">
        <p>Address Details</p>
        <span className="add-icons">
          <AiOutlineDelete
            onClick={addDeleteHandler}
            className="icon-add"
            size="1em"
          />
          <AiOutlineEdit
            onClick={() => setIsAddress(false)}
            className="icon-add"
            size="1em"
          />
        </span>
      </h2>
      <div className="AddressCard-main">
        <ul className="AddressCard-list">
          <li className="AddressCard-list-item name flex-centered justify-start">
            <p className="AddressCard-list-item-title">{address.title}</p>
            <p className="AddressCard-list-item-title name-title">
              {address.firstname}
            </p>
            <p className="AddressCard-list-item-title">{address.lastname}</p>
          </li>

          <li className="AddressCard-list-item">
            <p className="AddressCard-list-item-title">{address.company}</p>
          </li>

          <li className="AddressCard-list-item add">
            <p className="AddressCard-list-item-title">{address.address}</p>
            <p className="AddressCard-list-item-title">{`${address.state}, ${address.city}`}</p>
            <p className="AddressCard-list-item-title">{`${address.country}, ${address.zip}`}</p>
          </li>

          <li className="AddressCard-list-item">
            <p className="AddressCard-list-item-title">{address.number}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AddressCard;
