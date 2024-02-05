import styled from 'styled-components';

export const PopoverButton = styled.button`
  border: none;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2f2f2f;
  width: 32px;
  height: 32px;
  padding: 7px;
  cursor: pointer;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border-radius: 50%;

  &[data-fulfilled='false'] {
    border: 1px solid #ff9d43;
  }

  &:disabled {
    border: none;
    cursor: auto;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 34px;
    height: 34px;
  }
`;
