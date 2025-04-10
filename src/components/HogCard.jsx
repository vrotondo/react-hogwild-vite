import React, { useState } from "react";

const HogCard = ({ hog }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    if (isHidden) return null;

    return (
        <div aria-label="hog card" className="ui card">
            <div className="image">
                <img src={hog.image} alt={`Photo of ${hog.name}`} />
            </div>
            <div className="content">
                <h3 className="header">{hog.name}</h3>
                {showDetails && (
                    <div className="description">
                        {/* Render details as single text nodes */}
                        <p>{`Specialty: ${hog.specialty}`}</p>
                        <p>{`Weight: ${hog.weight}`}</p>
                        <p>{hog.greased ? "Greased" : "Nongreased"}</p>
                        <p>{`Highest Medal Achieved: ${hog["highest medal achieved"]}`}</p>
                    </div>
                )}
            </div>
            <div className="extra content">
                <button className="ui button" onClick={() => setShowDetails(!showDetails)}>
                    {showDetails ? "Hide Details" : "Show Details"}
                </button>
                <button className="ui button" onClick={() => setIsHidden(true)}>
                    Hide Me
                </button>
            </div>
        </div>
    );
};

export default HogCard;