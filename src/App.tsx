import CardPreview from './forTest/CardPreview';
import SelectBank from './forTest/SelectBank';
import { useModal } from './useModal';

const App = () => {
  const { isModalOpen, Modal } = useModal();

  const modalOptions = {
    position: 'bottom',
  } as const;

  return (
    <div>
      <CardPreview />
      {isModalOpen && (
        <Modal options={modalOptions}>
          <SelectBank />
        </Modal>
      )}
    </div>
  );
};

export default App;
