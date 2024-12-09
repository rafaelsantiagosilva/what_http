import styled from "styled-components";

interface AlertStylesProps {
  alertType: "DEPRECATED" | "EXPERIMENTAL" | "UNOFFICIAL",
}

export const AlertStyles = styled.aside<AlertStylesProps>`
  .icon {
    font-size: 150%;
  }

  .alert-text {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 0.2rem;
    flex-wrap: wrap;
  }
 
  font-size: 110%;
  width: 90%;
  max-width: 90%;
  min-width: 90%;
  padding: 1.5rem 1rem;
  border: 2px solid black;
  border-radius: 15px;
  color: #fefefe;
  margin: 1rem;

  border-color: ${({ alertType }) => {
    switch (alertType) {
      case "DEPRECATED":
        return "#57292B";
      case "EXPERIMENTAL":
        return "#574f29";
      case "UNOFFICIAL":
        return "#293857";
    }
  }};

  background-color: ${({ alertType }) => {
    switch (alertType) {
      case "DEPRECATED":
        return "#b42f35f0";
      case "EXPERIMENTAL":
        return "#e2ba0af0";
      case "UNOFFICIAL":
        return "#0a7ae2f0";
    }
  }};
`;