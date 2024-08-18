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

    const bio = `
      3 years ago, I started Pangea with the goal of inspiring global culture through democratizing the influencer marketing industry for creators and brands alike. 
      Since beginning as a service company, we have expanded to a multi-service and software solution company, with newfound goals to accelerate equitable outcomes for creativity 
      and humanity throughout different software offerings paired with a service component. I am from and based in Houston, Texas. Our company is remote, with team members in New York, 
      Chicago, Colombia, Brazil, and elsewhere. I hold two bachelor's degrees, one in computer science and the other one in economics. Other than that, I travel quite a bit to conferences 
      like this and when I find the time, I travel for fun!

      When I first entered the creator economy in 2021, it was an emerging industry, almost like the wild-wild west. Everyone wanted in, but there was no standardization—pricing, engagement 
      strategies, and even basic marketing principles were all over the place. Brands were throwing money at creators, sometimes succeeding but often failing. This led to a bubble from 
      2020 to 2023, which I believe is now stabilizing as brands have become more cautious and strategic with their investments. Creators, feeling the shift, have diversified their income 
      streams beyond brand deals, increasingly turning to platform and fan monetization, or even launching their own brands.

      At Pangea, our mission has always been to democratize this space. The creator economy has often been reserved for big spenders and top creators, leaving small to medium businesses and 
      mid-tier creators—those without PR teams but still pulling millions of views—without the means to collaborate effectively. We’ve addressed this by developing software that enables these 
      creators and brands to manage everything through our Blitz platform, which is free to use. Our platform includes AI integrations for brand recommendations and creator career management, 
      allowing creators to manage their financials, collaborations, and more.

      A specific success story that stands out is our impact on the music industry. Think of all the viral top 100 tracks that originate from TikTok dances—many of these are organic, but others 
      are amplified by music labels using creators. However, the challenge was that most music labels operate under net30 to net60 payment systems, making it difficult to work with international 
      creators, like a dancer in Brazil, who might not have the paperwork to register as a corporate vendor. We’ve bridged this gap, enabling creators worldwide to work with major labels and gain 
      exposure they previously couldn’t access. Talent knows no bounds; we are only limited by the systems we create to engage people, and we are breaking down those barriers.

      Our mission at Pangea is to remove any barriers to entry that exist for creators to build careers and for businesses to engage with creators at any size or price point. That’s why we made the 
      base version of our platform free. Our approach to AI is centered around "disrupting the creativity space." We aim to automate uninspired tasks—like sourcing, recommendations, creative processes, 
      reminders, and data reporting—so that our users, whether they are individual creators, businesses, or corporate teams, can focus on what truly matters: creativity.

      Looking ahead, I predict a revolution in the creative space driven by AI advancements. We’re already seeing the rise of faceless or "AI" channels, and I believe this will continue as AI technology 
      enhances creative processes. We will train models to assist with generative functions across copy, video, photo, and audio, making creativity more accessible and democratizing the content distribution 
      landscape. Brands must adapt by embracing these AI-driven changes and prioritizing support for diverse creators. By doing so, they will not only stay relevant but also contribute to a more equitable 
      and innovative creator economy.
    `;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
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
