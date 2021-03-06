import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  // console.log(robots);
  return (
    <div>
      {robots.length ? (
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        })
      ) : (
        <h2 className="f1">No robots</h2>
      )}
    </div>
  );
};

export default CardList;
