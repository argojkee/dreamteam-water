import styled from 'styled-components';

export const ToggleThemeStyles = styled.div`
  label {
    position: relative;
  }
  label input {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  label svg {
    width: 60px;
    height: auto;
    display: block;
  }

  label input + svg .light {
    transition: opacity 0.75s cubic-bezier(0.68, 0.25, 0.265, 1);
  }
  label input + svg .translate,
  label input + svg .rotate,
  label input + svg .background,
  label input + svg .astronaut,
  label input + svg .surfer {
    transition: transform 0.75s cubic-bezier(0.68, 0.25, 0.265, 1);
  }

  label input:checked + svg .light {
    opacity: 0;
  }

  label input:checked + svg .translate {
    transform: translateX(0px);
  }

  label input:checked + svg .rotate {
    transform: rotate(0deg);
  }

  label input:checked + svg .background {
    transform: translate(0px) scale(1);
  }

  label input {
    cursor: pointer;
  }
`;
