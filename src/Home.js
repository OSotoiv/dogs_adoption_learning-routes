import React from "react";

const Home = ({ dogs }) => {
    return (
        <div>
            <h1>Adopt a Dog Today!</h1>
            <div className="home-page-dogs">
                {dogs.map(dog => <img src={`/dog${dog.src}.jpg`} alt={`a dog named ${dog.name}`} />)}
            </div>
        </div>
    )
}
export default Home;
