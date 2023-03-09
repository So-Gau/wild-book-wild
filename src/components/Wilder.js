import Skill from "./Skill"
import blank_profile from "../Assets/profil.png";
import axios from "axios";

const Wilder = ({ name, skills, id, city }) => {
    const handleDelete = () => {
        axios.delete("http://localhost:3000/api/wilder/" + id);
    };
    return (
        <article className="card">
            <img src={blank_profile} alt=""/>
            <h3>{name}</h3>
            {/* condition ternaire */}
            {city ? <h4>{city}</h4> : null} 
            <button className="styleButton" onClick={() => handleDelete(id)}>
                Delete Wilder
                <br />
                -( ºΔº )-
            </button>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
            <h4>Wild Skills</h4>
            <ul className="skills">
                {/* <Skill name={skills} /> */}
                {skills.map((skill) => (
                    <Skill name={skill.name} votes={skill.votes} />
                ))}
            </ul>
        </article>
    );
};

export default Wilder;