import React from "react";

const Dog = ({ name, age, srcImg, facts }) => {
    return (
        <div className="card">
            <img src={`/dog${srcImg}.jpg`} alt={`a dog named ${name}`} />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <div>
                    <span className="bold">Age:</span> {age}
                </div>
                <h4>Facts:</h4>
                <ul>
                    {facts.map(fact => <li>{fact}</li>)}
                </ul>

            </div>
        </div>
    )
}
export default Dog;