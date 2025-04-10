import React, { useState } from "react";

const AddHogForm = ({ onAddHog }) => {
    const [formData, setFormData] = useState({
        name: "",
        specialty: "",
        greased: false,
        weight: "",
        "highest medal achieved": "",
        image: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddHog(formData);
        setFormData({
            name: "",
            specialty: "",
            greased: false,
            weight: "",
            "highest medal achieved": "",
            image: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor="specialty">Specialty:</label>
            <input
                type="text"
                id="specialty"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
            />
            <label htmlFor="greased">
                <input
                    type="checkbox"
                    id="greased"
                    name="greased"
                    checked={formData.greased}
                    onChange={handleChange}
                />
                Greased?
            </label>
            <label htmlFor="weight">Weight:</label>
            <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
            />
            <label htmlFor="highest-medal">Highest Medal Achieved:</label>
            <input
                type="text"
                id="highest-medal"
                name="highest medal achieved"
                value={formData["highest medal achieved"]}
                onChange={handleChange}
            />
            <label htmlFor="image">Image URL:</label>
            <input
                type="text"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
            />
            <button type="submit" className="ui button">
                Add Hog
            </button>
        </form>
    );
};

export default AddHogForm;