import Skill from "./Skill"
import blank_profile from "../Assets/profil.png";

const Wilder = ({ name, skills }) => {
    return (
        <article className="card">
            <img src={blank_profile} alt=""/>
            <h3>{name}</h3>
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
                    <Skill name={skill.title} votes={skill.votes} />
                ))}
            </ul>
        </article>
    );
};

export default Wilder;