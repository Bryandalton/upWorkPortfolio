import React from "react";
import styled from "styled-components";

const ProjectDiv = styled.div`
  margin: 0.5rem;
  flex: 0 0 calc((100% / var(--items-per-screen)) - 1rem);
  max-width: calc((100% / var(--items-per-screen)) - 1rem);
  /* border: solid 2px white; */
  &:hover {
    box-shadow: 4px 4px 5px darkgray;
    border-radius: 1rem;
    background: linear-gradient(
      152deg,
      rgb(0% 0% 0%) 0%,
      rgb(0.008% 0.008% 0.008%) 6.25%,
      rgb(0.067% 0.065% 0.064%) 12.5%,
      rgb(0.225% 0.22% 0.217%) 18.75%,
      rgb(0.533% 0.521% 0.515%) 25%,
      rgb(1.041% 1.017% 1.005%) 31.25%,
      rgb(1.799% 1.758% 1.737%) 37.5%,
      rgb(2.857% 2.791% 2.759%) 43.75%,
      rgb(4.265% 4.167% 4.118%) 50%,
      rgb(6.072% 5.933% 5.863%) 56.25%,
      rgb(8.33% 8.138% 8.042%) 62.5%,
      rgb(11.087% 10.832% 10.704%) 68.75%,
      rgb(14.393% 14.063% 13.897%) 75%,
      rgb(18.3% 17.879% 17.669%) 81.25%,
      rgb(22.856% 22.331% 22.068%) 87.5%,
      rgb(28.112% 27.466% 27.143%) 93.75%,
      rgb(34.118% 33.333% 32.941%) 100%
    );
  }
`;

const ProjectLink = styled.a`
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.3rem;
  img {
    max-width: 100%;
    padding: var(--img-gap);
    border-radius: 1rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Type = styled.p`
  text-align: center;
  font-size: 1.5rem;
`;

const Description = styled.p`
  text-align: center;
`;

export default function Project(props) {
  return (
    <ProjectDiv>
      <ProjectLink href={props.link}>
        <img src={props.img} alt={props.name} />
        <p>{props.name}</p>
      </ProjectLink>
      <Type>{props.type}</Type>
      <Description>{props.description}</Description>
    </ProjectDiv>
  );
}
