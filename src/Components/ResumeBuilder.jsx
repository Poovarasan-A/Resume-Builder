import propTypes from "prop-types";

const userData = [
  {
    profile: "/public/images/Coolboy.jpeg",
    name: "Poovarasan",
    designation: "web Developer",
    about:
      "A Web Developer with three years of experience specializing in HTML5, JavaScript, PHP, MySQL, database design, and front-end development. Adept at collaborating with dynamic teams to build high-quality websites and identify opportunities to enhance the user experience.",
    mobile: 9500276714,
    mail: "poovarasan1030@gmail.com",
    address: "185 Vallur, Pauparapatti, Dharmapuri - 636809",
    university: "Uttaranchal University",
    course: "Bsc Agriculture",
    studiedYear: "2017 - 2021",
    college: "School of Agriculture",
    skills: ["UI UX", "HTML & CSS", "JavaScript", "React Js"],
    company: "Livixius",
    InternPeriod: "3 Months",
    project: "Company website development",
    languages: ["Tamil", "English", "Hindi"],
  },
];

function Resume(props) {
  return (
    <div className="container">
      <div className="bgcolor"></div>
      <div className="header">
        <img src={props.profile} alt="" />
        <div className="hcontent">
          <h1>{props.name}</h1>
          <p>Designation</p>
        </div>
      </div>
      <div className="body">
        <div className="profile">
          <h2>ABOUT ME</h2>
          <p className="about">{props.about}</p>

          <h2>CONTACT ME</h2>
          <a href="#">{props.mobile}</a>
          <br />
          <a href="#">{props.mail}</a>
          <p>{props.address}</p>
        </div>
        <div className="edu-details">
          <h2>EDUCATION</h2>
          <small>{props.studiedYear}</small>
          <h4>{props.university}</h4>
          <p>{props.course}</p>
          <p>{props.college}</p>
          {/* ---------------- */}
          <h2>SKILLS</h2>
          <ul>
            {props.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          {/* ----------------------------- */}
          <h2>INTERNSHIPS</h2>
          <small>{props.InternPeriod}</small>
          <h4>{props.company}</h4>
          <p>{props.project}</p>
          {/* ---------------------------------- */}
          <h2>LANGUAGE</h2>
          <ul>
            {props.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export const ResumeBuilder = () => {
  return (
    <>
      {userData.map((user, index) => (
        <Resume
          key={index}
          profile={user.profile}
          name={user.name}
          designation={user.designation}
          about={user.about}
          mobile={user.mobile}
          mail={user.mail}
          address={user.address}
          university={user.university}
          course={user.course}
          college={user.college}
          studiedYear={user.studiedYear}
          skills={user.skills}
          company={user.company}
          InternPeriod={user.InternPeriod}
          project={user.project}
          languages={user.languages}
        />
      ))}
    </>
  );
};

Resume.propTypes = {
  name: propTypes.string.isRequired,
  profile: propTypes.string.isRequired,
  designation: propTypes.string.isRequired,
  about: propTypes.string.isRequired,
  mobile: propTypes.number.isRequired,
  mail: propTypes.string.isRequired,
  address: propTypes.string.isRequired,
  university: propTypes.string.isRequired,
  course: propTypes.string.isRequired,
  college: propTypes.string.isRequired,
  studiedYear: propTypes.string.isRequired,
  skills: propTypes.string.isRequired,
  company: propTypes.string.isRequired,
  InternPeriod: propTypes.string.isRequired,
  project: propTypes.string.isRequired,
  languages: propTypes.string.isRequired,
};
