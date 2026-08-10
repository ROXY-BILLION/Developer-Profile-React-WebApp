import profileImage from "../assets/profile.jpg";

function ProfileCard() {
    return (
      
    <section className="profile-card">
        <div className="top">
            <div className="image">
                    <img src={profileImage} alt="Divine Gift" />
            </div>

            <div className="writeup">
                     <h1>Divine Gift</h1>
                     <h2 className="blu">Frontend Developer</h2>

                    <p>
                        I’m a passionate software developer focused on building modern, responsive, and user-centered digital experiences. I enjoy turning ideas into functional web applications and exploring technologies across frontend development, full-stack engineering, AI, and cybersecurity. I’m constantly learning, experimenting, and improving my skills with the goal of creating technology that is not only visually appealing, but also practical, scalable, and impactful.
                    </p>
           </div>
       </div>
       <div className="social-links">
        <a href="" className="btn">
          <i className="fa-brands fa-github"></i> <h3> Github</h3>
        </a>

        <a href="" className="btn">
          <i className="fa-brands fa-linkedin"></i> <h3> Linkedln</h3>
        </a>

        <a href="" className="btn" >
          <i className="fa-solid fa-envelope"></i> <h3> Email</h3>
        </a>
      </div>   
    </section>
  );
}

export default ProfileCard;