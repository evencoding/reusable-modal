import SelectBank from './forTest/SelectBank';
import Modal from './Modal';

const App = () => {
  const modalOptions = {
    closeTrigger: 'bank',
    position: 'bottom' as const,
    initState: true,
  };
  return (
    <Modal trigger={<div>열기</div>} options={modalOptions}>
      <SelectBank />
    </Modal>
  );
};

export default App;
