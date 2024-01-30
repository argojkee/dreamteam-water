import styled, { css } from "styled-components";

import BackMobile1 from '../../images/signIn-signUp/back/mobile/back_mobile@1x.png';
import BackMobile2 from '../../images/signIn-signUp/back/mobile/back_mobile@2x.png';

import BackTablet1 from '../../images/signIn-signUp/back/tablet/back_tablet@1x.png';
import BackTablet2 from '../../images/signIn-signUp/back/tablet/back_tablet@2x.png';

import BackDesk1 from '../../images/signIn-signUp/back/desktop/back__desktop@1x.png';
import BackDesk2 from '../../images/signIn-signUp/back/desktop/back__desktop@2x.png';

// 'FormContainer' get props  automatic from 'ContainerFormStyle' if you send them.
const Div = styled.div`

  display: flex;
  flex-direction: ${props => props.$divDiraction || 'row'};
  justify-content: ${props => props.$justify || 'center'};
  align-items: ${props => props.$align || 'center'}; 

  width: ${props => props.width || '0'};
  height: ${props => props.height || 'fit-content'};

  margin-bottom: ${props => props.$marginBott || '0'};

  padding: ${props => props.$inputPadding ||'0'};

  gap: ${props => props.$gap || '0'};

  color: ${props => props.color || '2F2F2F'};

  background-color: ${props => props.$backColor || 'transparent'};

  border-radius: ${props => props.$borderRadius || 'none'};

  border: ${props => props.$border || 'none'} ${props => props.$borderColor || 'white'};

  ${props => props.$back && css `

    background-size: contain;

    background: url(${BackMobile1});
    background: url(${BackMobile2});

    @media screen and (min-width: 320px) and (max-width: 768px) { 
      max-width: 767px;
      background: url(${BackTablet1});

      @media (min-device-pixel-ratio: 2),(min-resolution: 192dpi),(min-resolution: 2dppx) {
        background: url(${BackTablet2});
      }
    }

    @media screen and (min-width: 768px) and (max-width: 1440px) { 
      max-width: 1439px;
      background: url(${BackDesk1});

      @media (min-device-pixel-ratio: 2),(min-resolution: 192dpi),(min-resolution: 2dppx) {
        background: url(${BackDesk2});
      }
    }

  `}

  ${props => props.$pass && css `

    width: 280px;

    @media screen and (min-width: 768px) and (max-width: 1440px) { 
      width: 336px;
    }
  
    @media screen and (min-width: 1440px) { 
      width: 384px;
    }

  `};
  
`;

const Form = styled.form`

  display: flex;
  flex-direction: ${props => props.$formDiraction || 'row'};
  align-items: ${props => props.$align || 'center'}; 

  font-family: roboto;

  width: ${props => props.width || '100%'};
  
  margin-bottom: ${props => props.$marginBott || '8px'};
  background-color: ${props => props.Backcolor || 'transparent'};

`;

const Input = styled.input`

  width: ${props => props.width || '280px'};
  height: ${props => props.height || '44px'};

  font-family: roboto;
  font-size: ${props => props.$fontSize || '16px'};
  color: ${props => props.$inputColor || 'none'};

  padding: ${props => props.$inputPadding ||'12px 10px'};

  margin-bottom: ${props => props.$marginBott || '8px'};

  border-radius: ${props => props.$borderRadius || 'none'};
  background-color: ${props => props.color || 'transparent'};
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