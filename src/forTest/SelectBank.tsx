import { BANKS } from './constants';

import * as styled from './SelectBank.styled';

const SelectBank = () => {
  const onClick = (e: any) => {
    console.log('a');
  };

  return (
    <styled.SelectBank>
      <styled.Banks>
        {Object.entries(BANKS).map(([key, bank]) => (
          <styled.Bank className="bank" key={key} id={key} onClick={onClick}>
            <styled.Icon>
              <img src={bank.logo} alt={`${bank.name}_logo`} />
            </styled.Icon>
            <styled.Name>{bank.name}</styled.Name>
          </styled.Bank>
        ))}
      </styled.Banks>
    </styled.SelectBank>
  );
};

export default SelectBank;
