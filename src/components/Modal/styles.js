import Modal from 'styled-react-modal';
import styled from "styled-components";
import { BaseModalBackground } from 'styled-react-modal';

export const StyledModal = Modal.styled`
  max-width: 92%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition: opacity ease 500ms;
  border-radius: 30px;
`;

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: opacity ease 200ms;
`;
