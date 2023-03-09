import axios from "axios";
import { useState } from "react";

const Form = () => {
    const [wilderName, setName] = useState("");
    const [city, setCity] = useState("");
    return (
        <form className="form-container"
            onSubmit={(e) => {
                e.preventDefault();
                axios.post("http://localhost:3000/api/wilder", {
                    name: wilderName,
                    city: city
                });
            }}>
            <label>Name:</label>
            <input
                type="text"
                value={wilderName}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <br />
            <label>City:</label>
            <input
                type="text"
                value={city}
                onChange={(e) => {
                    setCity(e.target.value);
                }}
            />
            <br />
            <button className="styleButton">
                Add Wilder
                <br />
                ~(˘▾˘~)
            </button>
        </form>
    );
};
export default Form;