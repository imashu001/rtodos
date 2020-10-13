import React from "react";
import "./ListItem.css";

function ListItems(props) {
  const items = props.items;
  const ListIt = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />

          <span>
            <button onClick={() => props.deleteItem(item.key)}>Del</button>
          </span>
        </p>
      </div>
    );
  });
  return <div>{ListIt}</div>;
}
export default ListItems;
