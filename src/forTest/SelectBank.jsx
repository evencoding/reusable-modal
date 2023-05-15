import { useModal } from '../useModal';

import * as styled from './SelectBank.styled';

const BANKS = {
  bc: {
    name: 'BC카드',
    bgColor: '#DE5356',
    color: '#FFFFFF',
  },
  sinhan: {
    name: '신한카드',
    bgColor: '#1B45F5',
    color: '#FFFFFF',
  },
  kakao: {
    name: '카카오뱅크',
    bgColor: '#FBE74D',
    color: '#333333',
  },
  hyundai: {
    name: '현대카드',
    bgColor: '#000000',
    color: '#FFFFFF',
  },
  woori: {
    name: '우리카드',
    bgColor: '#3579C2',
    color: '#FFFFFF',
  },
  lotte: {
    name: '롯데카드',
    bgColor: '#DA3832',
    color: '#FFFFFF',
  },
  hana: {
    name: '하나카드',
    bgColor: '#41928F',
    color: '#FFFFFF',
  },
  kookmin: {
    name: '국민카드',
    bgColor: '#6D655C',
    color: '#F7CF47',
  },
};

const SelectBank = () => {
  //   const onClick = ({ currentTarget: { id } }: MouseEvent<HTMLDivElement>) => {
  //     setCardInfo((prev) => ({ ...prev, bank: id }));
  //   };
  const { closeModal } = useModal();

  return (
    <styled.SelectBank>
      <styled.Banks>
        {Object.entries(BANKS).map(([key, bank]) => (
          <styled.Bank key={key} id={key} onClick={() => closeModal()} className="bank">
            <styled.Icon>
              {/* <img src={bank.logo} alt={`${bank.name}_logo`} /> */}
              <div>O</div>
            </styled.Icon>
            <styled.Name>{bank.name}</styled.Name>
          </styled.Bank>
        ))}
      </styled.Banks>
    </styled.SelectBank>
  );
};

export default SelectBank;
