import { CheckCheck } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    return (
        <p className='flex mt-4'> <CheckCheck className='mr-2'></CheckCheck>{feature}</p>
    );
};

export default PricingFeatures;