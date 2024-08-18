import React, { Component } from "react";
import Slide from "react-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Resume extends Component {
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

    // Image URLs for the slider
    const images = [
      "url_to_image1.jpg",
      "url_to_image2.jpg",
      "url_to_image3.jpg",
      // Add more image URLs as needed
    ];

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

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
                <span>Visuals</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <Slider {...sliderSettings}>
                {images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`slide-${index}`} style={{ width: "100%", height: "auto" }} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
