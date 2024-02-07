import styled, { css } from 'styled-components';

// 'FormContainer' get props  automatic from 'ContainerFormStyle' if you send them.
const Div = styled.div`
  display: flex;
  flex-direction: ${props => props.$divDiraction || 'row'};
  justify-content: ${props => props.$justify || 'center'};

  width: ${props => props.width || '0'};
  height: ${props => props.height || 'fit-content'};

  margin: ${props => props.$marginTop || '0'}
    ${props => props.$marginRight || '0'} ${props => props.$marginBott || '0'} 0;

  margin: ${props => props.$marginTop || '0'}
    ${props => props.$marginRight || '0'} ${props => props.$marginBott || '0'} 0;

  padding: ${props => props.$inputPadding || '0'};

  gap: ${props => props.$gap || '0'};

  color: ${props => props.color || '#2F2F2F'};

  background-color: ${props => props.$backColor || 'transparent'};

  border-radius: ${props => props.$borderRadius || 'none'};

  border: ${props => props.$border || 'none'}
    ${props => props.$borderColor || 'white'};
  border: ${props => props.$border || 'none'}
    ${props => props.$borderColor || 'white'};

  ${props =>
    props.$pass &&
    css`
      width: 280px;

      @media screen and (min-width: 768px) and (max-width: 1439px) {
        width: 336px;
      }

      @media screen and (min-width: 1440px) {
        width: 384px;
      }
    `};

  ${props =>
    props.$contentBlock &&
    css`
      @media screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: ${props => props.$divDiraction || 'column'};
        align-items: center;
      }

      @media screen and (min-width: 768px) and (max-width: 1439px) {
        justify-content: left;
      }

      @media screen and (min-width: 1440px) {
        flex-direction: row-reverse;
      }
    `};

  ${props =>
    props.$divDiraction &&
    css`
      @media screen and (min-width: 320px) and (max-width: 767px) {
        margin: 30px 0 10px 0;
      }

      @media screen and (min-width: 768px) and (max-width: 1439px) {
        margin: 50px 0 0 0;
      }

      @media screen and (min-width: 1440px) {
        margin: auto 100px auto 0;
      }
    `};
`;

const Form = styled.form`
  display: flex;
  flex-direction: ${props => props.$formDiraction || 'row'};
  align-items: ${props => props.$align || 'center'};

  font-family: roboto;

  color: ${props => props.color || '#2F2F2F'};

  width: ${props => props.width || '100%'};

  margin-bottom: ${props => props.$marginBott || '8px'};
  background-color: ${props => props.backcolor || 'transparent'};
`;

const Input = styled.input`
  width: ${props => props.width || '280px'};
  height: ${props => props.height || '44px'};

  font-family: roboto;
  font-size: ${props => props.$fontSize || '16px'};
  color: ${props => props.$inputColor || 'none'};

  padding: ${props => props.$inputPadding || '12px 10px'};

  margin-bottom: ${props => props.$marginBott || '8px'};

  border-radius: ${props => props.$borderRadius || 'none'};
  background-color: ${props => props.color || 'white'};
  border: ${props => props.$border || '1px solid'};
  border-color: ${props => props.$borderColor || '#D7E3FF'};
  outline: 'none';

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
  }

  &::-ms-reveal {
    display: none;
  }
`;

const Text = styled.p`
  font-family: roboto;
  line-height: ${props => props.$lineHeight || '24px'};
  font-weight: ${props => props.$fontWeight || '500'};
  font-size: ${props => props.$fontSize || '18px'};

  width: ${props => props.$width || '100%'};

  text-align: ${props => props.$textAlign || 'start'};

  margin-bottom: ${props => props.$marginBott || '0'};
`;

const Label = styled.label`
  width: ${props => props.$width || '100%'};

  font-weight: ${props => props.$fontWeight || '500'};

  margin-bottom: ${props => props.$marginBott || '8px'};
`;

const Button = styled.button`
  width: ${props => props.$width || '100%'};
  height: ${props => props.height || '44px'};

  font-family: roboto;
  font-weight: ${props => props.$fontWeight || '600'};
  font-size: ${props => props.$fontSize || '18px'};

  color: white;

  margin-bottom: ${props => props.$marginBott || '8px'};

  border: none;

  border-radius: ${props => props.$borderRadius || 'none'};

  background-color: ${props => props.color || 'var(--primary-color) '};

  box-shadow: 0px 5px 8px rgba(64, 123, 255, 0.34);

  &:hover {
    box-shadow: 0px 5px 14px rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }
  cursor: pointer;
`;

const Link = styled.p`
  width: ${props => props.$width || 'fit-content'};

  font-weight: ${props => props.$fontWeight || '500'};

  margin-bottom: ${props => props.$marginBott || '0'};

  color: ${props => props.color || '#2F2F2F'};

  cursor: pointer;

  &:hover {
    color: #ff9d43;
  }
`;

const Main = styled.main`
  width: 100 %;
  object-fit: contain;
`;

const Styles = props => {
  return (
    <>
      {props.$div ? <Div {...props} /> : ''}
      {props.$form ? <Form {...props} /> : ''}
      {props.$input ? <Input {...props} /> : ''}
      {props.$p ? <Text {...props} /> : ''}
      {props.$label ? <Label {...props} /> : ''}
      {props.$button ? <Button {...props} /> : ''}
      {props.$link ? <Link {...props} /> : ''}
      {props.$main ? <Main {...props} /> : ''}
    </>
  );
};

export default Styles;
