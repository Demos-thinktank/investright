import React from "react";
import styled from "styled-components";

const Title = styled.div`
  width: min-content;
`;

const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;

const Span = styled.span`
  font-weight: 900;
  margin-right: 0.5rem;
`;

const P = styled.p`
  text-align: center;
  font-size: "2rem";
`;

const HomeTitle = () => {
  return (
    <Title>
      <H1>
        <Span>%</Span>
        Investright
      </H1>
      <P>
        Helping you use your pension and investments to tackle climate change
      </P>
    </Title>
  );
};

export default HomeTitle;
