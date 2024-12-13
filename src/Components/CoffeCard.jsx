import { useLoaderData } from "react-router-dom";
import CoffeCurt from "./CoffeCurt";
import { useState } from "react";


const CoffeCard = () => {
    const coffies = useLoaderData()
    const [coffeData, setCoffeData] = useState(coffies)

    return (
        <div className="max-w-6xl mx-auto my-10">
            <h2 className="text-5xl font-bold text-center">Our pupular products</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    coffeData.map(coffe => <CoffeCurt
                        key={coffe._id}
                        coffe={coffe}
                        coffeData={coffeData}
                        setCoffeData={setCoffeData}
                        >

                    </CoffeCurt>)
                }
            </div>
        </div>
    );
};

export default CoffeCard;