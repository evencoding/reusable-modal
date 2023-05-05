import styled from 'styled-components';

import Card from './Card';

export const StyledCardPreview = styled.div`
  display: flex;
  justify-content: center;

  margin: 30px 0;

  cursor: pointer;
`;

const CardPreview = () => {
  return (
    <StyledCardPreview>
      <Card />
    </StyledCardPreview>
  );
};

export default CardPreview;
