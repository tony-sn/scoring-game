import { Link } from "react-router-dom";
import styled from "styled-components";

export default styled(Link)`
  display: block;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
