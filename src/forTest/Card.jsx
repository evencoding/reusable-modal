import * as styled from './Card.styled';

const Card = () => {
  const cardInfo = {
    firstCardNumbers: '1234',
    secondCardNumbers: '1234',
    thirdCardNumbers: '1234',
    fourthCardNumbers: '1234',
    ownerName: 'woody',
    expirationMonth: '12',
    expirationYear: '23',
  };
  return (
    <styled.Card>
      <styled.Rectangle />
      <styled.CardInfos>
        <styled.Bottom>
          <styled.CardNumbers>
            <div>{cardInfo.firstCardNumbers}</div>
            <div>{cardInfo.secondCardNumbers}</div>
            <styled.EllipseContainer>
              {Array.from({ length: cardInfo.thirdCardNumbers.length }).map((_, index) => (
                <styled.Ellipse key={index} />
              ))}
            </styled.EllipseContainer>
            <styled.EllipseContainer>
              {Array.from({ length: cardInfo.fourthCardNumbers.length }).map((_, index) => (
                <styled.Ellipse key={index} />
              ))}
            </styled.EllipseContainer>
          </styled.CardNumbers>
          <styled.ExtraInfos>
            <styled.CardOwnerName>
              {cardInfo.ownerName ? cardInfo.ownerName : 'NAME'}
            </styled.CardOwnerName>
            <styled.ExpirationDate>
              <styled.ExpirationMonth>
                <span>{cardInfo.expirationMonth ? cardInfo.expirationMonth : 'MM'}</span>
              </styled.ExpirationMonth>
              <span>/</span>
              <styled.ExpirationYear>
                <span>{cardInfo.expirationYear || 'YY'}</span>
              </styled.ExpirationYear>
            </styled.ExpirationDate>
          </styled.ExtraInfos>
        </styled.Bottom>
      </styled.CardInfos>
    </styled.Card>
  );
};

export default Card;
