import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";
import DaisyPricingCard from "../DaisyPricingCard/DaisyPricingCard";

const PricingOptions = ({ pricingPromise }) => {
    const pricingData1 = use(pricingPromise);
    const pricingData = pricingData1.pricingPlans;
    return (
        <div>
            <h2 className="text-5xl">Get Our Membership</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* {pricingData.map((pricing) => (
                    <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
                ))} */}

                {
                    pricingData.map(pricing => <DaisyPricingCard key={pricing.id} pricing={pricing}></DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;
