import PropTypes from "prop-types";

const  UserData = [
  {
  name:"nanda",
  city:"Coimbatore",
  description: "Mobile App Developer",
  skills : ["UI/IX", "Front-End-Developers", "HTML", "CSS", "JAVA", "REACT", "NODE-js"],
  profile :"/images/img1.jpg",
  status : true,
},
{
  name:"Hari",
  city:"Vadapalani",
  description : "Backend Developer",
  skills : ["UI/IX", "Front-End-Developers", "HTML", "CSS", "JAVA", "REACT", "Express-js"],
  profile :"/images/img2.jpg",
  status : false,
},
{
  name:"Bumrah",
  city:"Pune",
  description : "UI/UX",
  skills : ["UI/IX", "Front-End-Developers", "HTML", "CSS", "JAVA", "REACT", "Mongo-db"],
  profile:"/images/img1.jpg",
  status : true,
},
{
  name:"james",
  city:"Bombay",
  description : "UI/UX",
  skills : ["UI/IX", "Front-End-Developers", "HTML", "CSS", "JAVA", "REACT", "Mongo-db"],
  profile:"/images/img4.jpg",
  status : false,
},
{
  name:"Ram",
  city:"Dubai",
  description : "Manager",
  skills : ["UI/IX", "Front-End-Developers", "HTML", "CSS", "JAVA", "REACT", "Mongo-db"],
  profile:"/images/img4.jpg",
  status : true,
},
{
  name:"Sham",
  city:"Kolkata",
  description : "Pune",
  skills : ["UI/IX", "Front-End-Developers", "CSS", "JAVA", "REACT", "Mongo-db"],
  profile:"/images/img4.jpg",
  status : false,
}
]

function User(props){
    return (
    <div className="card-container">
        <span className={props.status ? "pro online" : "pro offline"}> 
          {props.status ? "ONLINE" : "OFFLINE"}
        </span>
        <img className="img" style={{height: "200px", width: "150px"}} src= {props.profile} alt="" />
        <h3>{props.name}</h3>
        <h2>{props.city}</h2>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            {props.skills.map((skill,index) => (
                 <li key = {index}>{skill}</li>
            )
            )}
          </ul>
        </div>
    </div>)
}

export const UserCard = () => {
  return (
    <>
      {UserData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          skills={user.skills}
          profile={user.profile}
          status={user.status}
        />
      ))}
    </>
  );
};

// name = "james" city ="Chennai" description = "FrontEnd-Developer" 
//     skills = {["UI/IX", "Front-End-Developers", "HTML", "CSS", "JAVA", "REACT", "NODE"]}
//     profile="/images/img1.jpg"  status = {true}

User.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  profile:PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired


}
