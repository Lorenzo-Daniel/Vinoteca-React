import React from "react";
import CardSelectWines from "./CardSelectWines";
import Carousel from "./Carousel";

const Home = () => {
    return (
        <div className="bg-light">
                <Carousel />
                <CardSelectWines/>
        </div>
    )
}


export default Home;