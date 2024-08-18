import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  render() {
    if (!this.props.data) return null;

    const work = [
      {
        company: "Pangea, Inc",
        title: "President/Principal Engineer",
        years: "Aug 2018 - Present",
        description: `Leading Pangea in its mission to democratize the creator economy by developing software that enables creators and brands to manage everything through our Blitz platform. 
        We focus on lowering barriers to entry and advancing financial equity through tools like BlitzPay.pro, and enhancing deal flow with Alito Champion Conversational AI.`,
      },
      {
        company: "The Culture Club",
        title: "Founder/CEO",
        years: "Jun 2021 - Present",
        description: `Inspiring global culture through creator marketing services and helping creators build long-term careers. Expanded the company from a service provider to a software platform 
        with products like BlitzPay.pro to advance financial equity for creators and streamline the deal-making process.`,
      },
      {
        company: "Rahra Co",
        title: "Co-Founder",
        years: "Aug 2023 - Present",
        description: `Co-founded Rahra Co to create the future of food, focusing on sustainable and climate-conscious food solutions. 
        Collaborating with Heartland to introduce vital nutrients into global diets, making healthy options more affordable and accessible.`,
      },
      {
        company: "RΩA Ventures",
        title: "General Manager",
        years: "Mar 2024 - Present",
        description: `Overseeing RΩA Ventures, a real estate collective focused on building community spaces of tomorrow. Leading projects that emphasize sustainability, 
        modern design, and community-focused amenities.`,
      },
      {
        company: "Culture Club Records",
        title: "President",
        years: "Sep 2022 - Sep 2023",
        description: `Led Culture Club Records in developing global artists, aiming to be a top contender in global sounds. 
        Although now on pause, the label was integrated into the broader Culture Club ecosystem.`,
      },
    ];

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {work.map((job, index) => (
                <div key={index}>
                  <h3>{job.company}</h3>
                  <p className="info">
                    {job.title}
                    <span>&bull;</span> <em className="date">{job.years}</em>
                  </p>
                  <p>{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
