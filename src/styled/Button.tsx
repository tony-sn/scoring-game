import { Theme } from "interfaces/index";
import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
  font-size: 1rem;
  padding: 0.375rem;
  cursor: pointer;
  border-radius: 5px;
  border: 1.5px solid var(--button-border-color);

  &:hover svg {
    fill: var(--accent-color);
    transition: fill 0.5s;
  }
`;
