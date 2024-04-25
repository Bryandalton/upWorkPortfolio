import React from "react";
import styled from "styled-components";

const Header = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  color: white;
`;

function header() {
  return (
    <Header>
      <h1>&lt;Web Design By: Bryan Dalton /&gt; </h1>
    </Header>
  );
}

export default header;
