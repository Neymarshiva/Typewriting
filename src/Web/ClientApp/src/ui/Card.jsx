import styled from "styled-components";

const StyledCard = styled.div`
  ${(props) =>  props.flexstyles && props.flexstyles};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  width: ${(props) => props.width || "100%"};
  min-width: ${(props) => props.minWidth || "275px"};
  height: ${(props) => props.height || "auto"};
  min-height: ${(props) => props.minHeight || "400px"};
  padding: ${(props) => props.padding || " 0"};
  margin: ${(props) => props.margin || "0"};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderradius};
`;

const Card = ({
  children,
  
  flexstyles,
  justifycontent,
  alignitems,
  flexdirection,
  background,
  color,
  width,
  minWidth,
  height,
  minHeight,
  padding,
  margin,
  border,
  borderradius
}) => {
  return (
    <StyledCard      
    flexdirection={flexdirection}
      alignitems={alignitems}
      justifycontent={justifycontent}
      background={background}
      color={color}
      width={width}
      minWidth={minWidth}
      height={height}
      minHeight={minHeight}
      padding={padding}
      margin={margin}
      border={border}
      borderradius={borderradius}
      flexstyles={flexstyles}
    >
      {children}
    </StyledCard>
  );
};

export default Card;