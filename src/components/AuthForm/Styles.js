import styled from "styled-components";

// 'FormContainer' get props  automatic from 'ContainerFormStyle' if you send them.
const Div = styled.div`

  display: flex;
  flex-direction: ${props => props.$divDiraction || 'row'};
  justify-content: ${props => props.$justify || 'none'};
  align-items: ${props => props.align || 'center'}; 

  width: ${props => props.width || 'none'};
  height: ${props => props.height || '100vh'};

  margin-bottom: ${props => props.$marginBott || '8px'};

  gap: ${props => props.$gap || 'none'};

  color: ${props => props.color || 'none'};

  background-color: ${props => props.Backcolor || 'none'};

`;

const Form = styled.form`

  display: flex;
  flex-direction: ${props => props.$formDiraction || 'row'};
  align-items: ${props => props.$align || 'center'}; 

  font-family: roboto;

  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100vh'};

  gap: ${props => props.$gap || 'none'};

  background-color: ${props => props.color || 'transparent'};

`;

const Input = styled.input`

  width: ${props => props.width || '364px'};
  height: ${props => props.height || '20px'};

  font-family: roboto;
  font-size: ${props => props.$fontSize || '16px'};
  color: #407BFF;

  padding: 12px 10px;

  margin-bottom: ${props => props.$marginBott || '8px'};

  border-radius: ${props => props.$borderRadius || 'none'};
  background-color: ${props => props.color || 'transparent'};
  border: 1px solid ${props => props.$borderColor || '#D7E3FF'};
  outline: 'none';

`;

const Text = styled.p`

  font-family: roboto;
  font-weight: ${props => props.$fontWeight || '500'};
  font-size: ${props => props.$fontSize || '18px'};

  width: ${props => props.$width || '100%'};

  text-align: ${props => props.$textAlign || 'start'};

  margin-bottom: ${props => props.$fontSize || 'none'};

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
`;

const Link = styled.p`
  
  width: ${props => props.$width || '100%'};

  font-weight: ${props => props.$fontWeight || '500'};

  margin-bottom: ${props => props.$marginBott || '8px'};

  cursor: pointer;

  &:hover {
    color: #407BFF;
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
    </>
  )
};

export default Styles;