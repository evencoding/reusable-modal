import styled from 'styled-components';
import { useModal } from '../useModal';

import Card from './Card';

export const StyledCardPreview = styled.div`
  display: flex;
  justify-content: center;

  margin: 30px 0;

  cursor: pointer;
`;

const CardPreview = () => {
  const { openModal } = useModal();

  return (
    <StyledCardPreview onClick={openModal}>
      <Card />
    </StyledCardPreview>
  );
};

export default CardPreview;
