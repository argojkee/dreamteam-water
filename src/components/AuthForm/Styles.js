import styled from "styled-components";

// 'FormContainer' get props  automatic from 'ContainerFormStyle' if you send them.
const Div = styled.div`

  display: flex;
  flex-direction: ${props => props.$divDiraction || 'row'};
  justify-content: ${props => props.$justify || 'center'};
  align-items: ${props => props.$align || 'center'}; 

  width: ${props => props.width || 'none'};
  height: ${props => props.height || 'none'};

  margin-bottom: ${props => props.$marginBott || '0'};

  gap: ${props => props.$gap || 'none'};

  color: ${props => props.color || '2F2F2F'};

  background-color: ${props => props.Backcolor || 'white'};

`;

const Form = styled.form`

  display: flex;
  flex-direction: ${props => props.$formDiraction || 'row'};
  align-items: ${props => props.$align || 'center'}; 

  font-family: roboto;

  width: ${props => props.width || '100%'};
  

  background-color: ${props => props.color || 'transparent'};

`;

const Input = styled.input`

  width: ${props => props.width || '384px'};
  height: ${props => props.height || '44px'};

  font-family: roboto;
  font-size: ${props => props.$fontSize || '16px'};
  color: ${props => props.$inputColor || 'none'};

  padding: 12px 10px;

  margin-bottom: ${props => props.$marginBott || '8px'};

  border-radius: ${props => props.$borderRadius || 'none'};
  background-color: ${props => props.color || 'transparent'};
  border: 1px solid ${props => props.$borderColor || '#D7E3FF'};
  outline: 'none';

  &:focus {
    border: 1px solid ${props => props.$borderColor || '#D7E3FF'};
    outline: none;
  }

`;

const Text = styled.p`

  font-family: roboto;
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

  background-color: ${props => props.color || '#407BFF'};

  box-shadow: 0px 5px 8px rgba(64, 123, 255, 0.34);

  &:hover {
    box-shadow: 0px 5px 14px rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }
`;

const Link = styled.p`
  
  width: ${props => props.$width || 'fit-content'};

  font-weight: ${props => props.$fontWeight || '500'};

  margin-bottom: ${props => props.$marginBott || '0'};

  cursor: pointer;

  &:hover {
    color: #FF9D43;
  }
  
`;

const Main = styled.main`

  width: 100%;
  object-fit: contain;

  background-image: url(../../images/signIn-signUp/back/mobile/desktop_tablet@1x.png);
  background-image: url(../../images/signIn-signUp/back/mobile/desktop_tablet@1x.png);

  @media screen and (min-width: 320px) and (max-width: 768px) { 
    max-width: 767px;
    background-image: url(../../images/signIn-signUp/back/mobile/back_mobile@1x.png);

    @media (min-device-pixel-ratio: 2),(min-resolution: 192dpi),(min-resolution: 2dppx) {
      background-image: url(../../images/signIn-signUp/back/mobile/back_mobile@2x.png);
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) { 
    max-width: 1439px;
    background-image: url(../../images/signIn-signUp/back/mobile/back_tablet@1x.png);

    @media (min-device-pixel-ratio: 2),(min-resolution: 192dpi),(min-resolution: 2dppx) {
      background-image: url(../../images/signIn-signUp/back/mobile/back_tablet@2x.png);
    }
  }

`;

const Styles = (props) => {

  return( 
    <>
      {props.$div ? <Div {...props}/> : ''}
      {props.$form ? <Form {...props}/> : ''}
      {props.$input ? <Input {...props}/> : ''}
      {props.$p ? <Text {...props}/> : ''}
      {props.$label ? <Label {...props}/> : ''}
      {props.$button ? <Button {...props}/> : ''}
      {props.$link ? <Link {...props}/> : ''}
      {props.$main ? <Main {...props}/> : ''}
    </>
  )
};

export default Styles;