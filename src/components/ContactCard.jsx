function ContactCard() {
    return (
        <div className="contactcard">
            <div className="contact">
                <div className="left">
                 <div className="contactplus">
                    <div className="name">
                        {/* Contact us */}
                       <i class="fa-solid fa-message"></i>
                       <u><h2>Contact</h2></u>
                  </div>
                </div>
                <div className="skillpl">
                   <div className="skill">
                        {/*  Phone */}
                        <i class="fa-solid fa-phone"></i>
                        <span>081-070-748-43</span>
                    </div>
                    <div className="name">
                        {/* Email */}
                       <i class="fa-solid fa-envelope"></i>
                       <u><h2>giftdivine787@gmail.com</h2></u>
                    </div>
                    <div className="skill">
                        {/*  Location  */}
                        <i class="fa-solid fa-location-dot"></i>
                        <span>Lagos, Nigeria</span>
                    </div>

                    <div className="skill">
                        {/* Website  */}
                        <i class="fa-solid fa-globe"></i>
                        <span>www.giftdivine.com</span>
                    </div>
                </div>
                </div>
                <div className="glance">
                    <div className="topbox">
                            <i className="fa-solid fa-chart-line"></i>
                            <u><h2>At a glance</h2></u>
                    </div>
                    <div className="glance-list">
                    <div className="skill-s">
                        <div className="box1">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>4+</span>
                        </div>
                        <div className="box2">
                            <p>Years Experience</p>
                        </div>
                    </div>

                    <div className="skill-s">
                        <div className="box1">
                            <i className="fa-solid fa-trophy"></i>
                            <span>10+</span>
                        </div>
                        <div className="box2">
                            <p>Technologies</p>
                        </div>
                    </div>

                    <div className="skill-s">
                        <div className="box1">
                            <i className="fa-solid fa-file"></i>
                            <span>45+</span>
                        </div>
                        <div className="box2">
                            <p>Projects Completed</p>
                        </div>
                    </div>

                    <div className="skill-s">
                        <div className="box1">
                            <i className="fa-solid fa-users"></i>
                            <span>40+</span>
                        </div>
                        <div className="box2">
                            <p>Happy Clients</p>
                        </div>
                    </div>
                   </div>     
              </div>
            </div>
       </div> 
    )
}
export default ContactCard;