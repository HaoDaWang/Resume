import React, { Component, ReactNode } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/fontawesome-free-solid";
import { button } from "src/ui";

const Wrapper = styled.div`
  width: 100%;
  height: 4.5rem;
  background: ${props => props.theme.primaryColor};
  box-shadow: 0px 0px 2px ${props => props.theme.shadowColor};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0rem 1rem;
  display: none;
  position: absolute;
  top: 0px;
  left: 0px;

  @media (max-width: ${props => props.theme.mobileWidth}) {
    & {
      display: flex;
    }
  }
`;

const Drawer = styled(button)`
  width: 3.5rem;
  height: 3rem;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
`;

export class HeaderBar extends Component {
  render(): ReactNode {
    return (
      <Wrapper>
        <Drawer>
          <FontAwesomeIcon icon={faHashtag} />
        </Drawer>
      </Wrapper>
    );
  }
}