import React from "react";

const NewsTicker = ({  }) => {
    
    const tickerItems = [
        "+++ CURRENTLY ON VIEW:",
        "THE RETURN OF THE AXUM OBELISK - The Metropolitan Museum of Art, NY / Museo Delle Civiltá, Rome",
        "//",
        "TILL DEATH US DO PART - MoMA Museum of Modern Art, NY",
        "//",
        "ATLAS FRACTURED - Montreal Museum of Fine Art, Canada",  
        "//",
        "ANIMA MUNDI - The Newark Museum of Art, New Jersey / Royal Ontario Museum, Toronto",
        "//",
        "CROCODILES ON A CEILING - Museo delle Culture di Milano - Mudec, Milano",
        "+++"

    ] 
    return (
        <div className="overflow-hidden text-sm whitespace-nowrap px-4 py-1  lg:mx-auto">
            <ul className="inline-block animate-ticker-mobile  lg:animate-ticker font-medium">
                {tickerItems.map((item, index) => (
                    <li className="inline-block px-4" key={index}>
                        {item}
                    </li>
                ))}
            </ul>

        </div>
    )

}

export default NewsTicker;