import React, { useState, useEffect } from "react";
import Project from "./project";
import styled from "styled-components";

const CHeader = styled.h3`
  padding-left: 5rem;
  font-size: 2rem;
`;

const CContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
const HandleLeft = styled.button`
  border: none;
  border-radius: 1rem;
  flex-grow: 0;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.25);
  opacity: 10%;
  z-index: 10;
  margin: var(--img-gap) 0;
  width: var(--handle-size);
  cursor: pointer;
  /* font-size: 5rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  line-height: 0;
  transition: background-color 150ms ease-in-out;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  &:hover {
    opacity: 90%;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
const HandleRight = styled.button`
  border: none;
  border-radius: 1rem;
  flex-grow: 0;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.25);
  opacity: 10%;
  z-index: 10;
  margin: var(--img-gap) 0;
  width: var(--handle-size);
  cursor: pointer;
  /* font-size: 5rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  line-height: 0;
  transition: background-color 150ms ease-in-out;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  &:hover {
    opacity: 90%;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const BDiv = styled.div`
font-size: 7rem;
`

const Slider = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 0 var(--img-gap);
  transform: translateX(calc(var(--slider-index) * -100%));
  transition: transform 250ms ease-in-out;
`;

const projects = [
  {
    img: "./images/mfhf.PNG",
    name: "My Favorite Historical Figures",
    link: "https://bryandalton.github.io/my_favorite_historical_figure/",
    github: "https://github.com/Bryandalton/my_favorite_historical_figure",
    type: "Website: React",
    description:
      "React site that offers a list of historical figures, shows a map of a location important to the active figure, and has a collapsible profile for the active figure.",
  },
  {
    img: "./images/cryptsndbrd.PNG",
    name: "Cryptid Sound Board",
    link: "https://bryandalton.github.io/cryptidsoundboard/",
    github: "https://github.com/Bryandalton/cryptidsoundboard",
    type: "Website: React",
    description:
      "A fun and responsive site to see what sounds cryptids might make!",
  },
  {
    img: "./images/kandy-karma.JPG",
    name: "Kandy Karma",
    link: "https://bryandalton.github.io/kandykarmafrontend/",
    github: "https://github.com/Bryandalton/kandykarmafrontend",
    type: "Website: React ",
    description: "Mock market research site for candy.",
  },
  {
    img: "./images/WeatherServiceScreenshot.jpg",
    name: "Weather Service",
    link: "https://bryandalton.github.io/Weather-service/",
    github: "https://github.com/Bryandalton/Weather-service",
    type: "Website",
    description:
      "Displays the weather, five day forecast, and remembers last city selected.",
  },
  {
    img: "./images/Bigfootbutton.jpg",
    name: "Bigfoot Button",
    link: "https://codepen.io/Iwritebadcode/full/mdXdxpz",
    github: "https://codepen.io/Iwritebadcode/pen/mdXdxpz",
    type: "Website",
    description: 'Neon button that plays a "bigfoot" noise when clicked.',
  },
  {
    img: "./images/Paint Your Mood.png",
    name: "Paint your mood",
    link: "https://bryandalton.github.io/Paint-your-mood/",
    github: "https://github.com/Bryandalton/Paint-your-mood",
    type: "Website",
    description:
      "Website to display artwork from Chicago and Harvard art APIs.",
  },
];

export default function Carousel() {
  const [sliderIndex, setSliderIndex] = useState(0);
  useEffect(() => {
    document.documentElement.style.setProperty("--slider-index", sliderIndex);
  }, [sliderIndex]);

  const onNextClick = () => {
    setSliderIndex((prev) => prev + 1);
  };
  const onPrevClick = () => {
    setSliderIndex((prev) => prev - 1);
  };

  const projectCount = projects.length;

  const [itemsPerScreen, setItemsPerScreen] = useState(0);

  const getItemsPerScreen = () => {
    const itemsPerScreenValue = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--items-per-screen"
      )
    );
    setItemsPerScreen(itemsPerScreenValue);
  };

  useEffect(() => {
    getItemsPerScreen(); // Call the function to set initial state
  }, []); // Empty dependency array to run only on mount

  const progressBarValue = projectCount / itemsPerScreen;
  if (sliderIndex > progressBarValue - 1) {
    setSliderIndex(0);
  }
  if (sliderIndex < 0) {
    setSliderIndex(progressBarValue - 1);
  }
  return (
    <>
      <CHeader>My projects:</CHeader>
      <CContainer>
        <HandleLeft onClick={onPrevClick}><BDiv>&#8249;</BDiv></HandleLeft>
        <Slider>
          {projects.map((project) => {
            return (
              <Project
                key={project.name}
                link={project.link}
                img={project.img}
                name={project.name}
                github={project.github}
                type={project.type}
                description={project.description}
              />
            );
          })}
        </Slider>
        <HandleRight onClick={onNextClick}><BDiv>&#8250;</BDiv></HandleRight>
      </CContainer>
    </>
  );
}
