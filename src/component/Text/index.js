import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-size: ${(props) => props.fSize};
  color: ${(props) => (props.fcolor ? props.fcolor : "black")};
  font-weight: ${(props) => props.fWeight};
  padding-left: 10px;
  line-height: 200%;
`;

const TextBox = (props) => {
  return (
    <StyledText
      fcolor={props.color}
      fSize={props.fontSize}
      fWeight={props.fontWeight}
    >
      {props.children}
    </StyledText>
  );
};

export default TextBox;
