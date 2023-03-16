import React from "react";
import Card from "./Card.js";
import { robots } from "../robots.js";

const CardList = ({ robots }) => {
    for (let i = robots.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [robots[i], robots[j]] = [robots[j], robots[i]];
}
    const cardComponent = robots.map((user, i) => {
        return <Card key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email} 

        />
    })
    // if (true) {
        // throw new Error("Nooooo!");
    // }
    return (
        <div>
            {cardComponent}
        </div>
    );
    }

export default CardList;