import styled from "styled-components";

export const LoaderSpinner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid var(--accent-color); /* Orange */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
