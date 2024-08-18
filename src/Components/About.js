import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                3 years ago, I started Pangea with the goal of inspiring global culture through democratizing the influencer marketing industry for creators and brands alike. 
                Since beginning as a service company, we have expanded to a multi-service and software solution company, with newfound goals to accelerate equitable outcomes for creativity 
                and humanity throughout different software offerings paired with a service component. I am from and based in Houston, Texas. Our company is remote, with team members in New York, 
                Chicago, Colombia, Brazil, and elsewhere. I hold two bachelor's degrees, one in computer science and the other one in economics. Other than that, I travel quite a bit to conferences 
                like this and when I find the time, I travel for fun!
              </p>
              
              <h3>Pangea</h3>
              <p>
                At Pangea, our mission has always been to democratize the creator economy. The creator economy has often been reserved for big spenders and top creators, leaving small to medium businesses 
                and mid-tier creators—those without PR teams but still pulling millions of views—without the means to collaborate effectively. We’ve addressed this by developing software that enables these 
                creators and brands to manage everything through our Blitz platform, which is free to use. Our platform includes AI integrations for brand recommendations and creator career management, 
                allowing creators to manage their financials, collaborations, and more.
              </p>
              <p>
                A specific success story that stands out is our impact on the music industry. Think of all the viral top 100 tracks that originate from TikTok dances—many of these are organic, but others 
                are amplified by music labels using creators. We’ve bridged the gap between international creators and major labels, enabling creators worldwide to gain exposure they previously couldn’t access. 
                Our mission at Pangea is to remove any barriers to entry that exist for creators to build careers and for businesses to engage with creators at any size or price point. That’s why we made the 
                base version of our platform free.
              </p>

              <h3>The Culture Club</h3>
              <p>
                The Culture Club focuses on inspiring global culture. We work with the world's most creative minds to curate captivating content that generates excitement and passion for brands and products alike. 
                Our mission is to provide world-leading creator marketing services for the most affordable price possible. We aim to inspire global culture not only through our marketing services but also by helping 
                our creators build long-term careers through our expansive partnership network.
              </p>
              <p>
                During my tenure at the Culture Club, we have expanded from a service company to include software products for both brands and creators alike. Our BlitzPay.pro platform advances financial equity for creators 
                and gig workers, while our Alito Champion Conversational AI enhances the deal flow process, helping creators see a 5-10x increase in brand deal revenue.
              </p>

              <h3>Rahra Co</h3>
              <p>
                Rahra Co, home to the Protein Party Co brand, is creating the future of food. In collaboration with the Heartland team, we are accelerating the introduction of sustainable vital nutrients into diets 
                worldwide. Our mission is to make climate-conscious food solutions that are not only better for your health but also more affordable and accessible than leading food manufacturing processes.
              </p>

              <h3>RΩA Ventures</h3>
              <p>
                RΩA Ventures is a real estate collective focused on building the community spaces of tomorrow. We aim to create sustainable and innovative real estate solutions that foster community development and inclusivity.
              </p>

              <h3>Culture Club Records</h3>
              <p>
                Culture Club Records, in a distribution agreement with Sony Music's The Orchard, aspired to develop global artists. Inspired by developments in international and emerging markets, we aimed to be a top contender 
                in the next decade of global sounds. Although now incorporated into the Culture Club ecosystem of companies, Culture Club Records is currently on pause.
              </p>

              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
