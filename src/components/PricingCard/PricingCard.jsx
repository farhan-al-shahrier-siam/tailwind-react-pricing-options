import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {

    const {name, price, duration , features} = pricing

    return (
        <div className="border bg-amber-600 rounded-2xl p-4 flex flex-col">
            <div>
                <h1 className="text-7xl">{name}</h1>
                <h4 className="text-3xl">{price}</h4>
            </div>

            <div className="bg-amber-400 p-4 rounded-2xl mt-10 flex-1">
                <p className="text-2xl">{duration}</p>
                {
                    features.map((feature, index) =><PricingFeatures key={index} feature={feature}></PricingFeatures>)
                }
            </div>
            <button className="btn w-full mt-4">Subscribe</button>
        </div>
    );
};

export default PricingCard;
