# 모달 (Modal)

이 패키지는 모달 기능을 제공하는 React 컴포넌트입니다

## 설치

npm을 사용하여 패키지를 설치합니다.

```bash
npm i react-reusable-modal
```

## 사용법

라이브러리에서 `useModal`훅을 import하세요:

```jsx
import { useModal } from 'react-reusable-modal';
```

`useModal`훅을 사용하여 모달 상태를 관리하고 컴포넌트에서 모달을 렌더링할 수 있습니다.

```jsx
const MyComponent = () => {
  const { isModalOpen, openModal, closeModal, Modal } = useModal();

  return (
    <div>
      <button onClick={openModal}>모달 열기</button>

      {isModalOpen && (
        <Modal>
          <h2>모달 내용</h2>
          <p>이것은 모달의 내용입니다.</p>
          <button onClick={closeModal}>모달 닫기</button>
        </Modal>
      )}
    </div>
  );
};
```

### useModal

`useModal`훅은 다음과 같은 속성과 메서드를 제공합니다.

- `isModalOpen` (boolean): 현재 모달이 열려 있는지 여부를 나타냅니다.
- `openModal` (function): 모달을 엽니다.
- `closeModal` (function): 모달을 닫습니다.
- `Modal` (component): 모달을 렌더링합니다.

### Modal

`Modal` 컴포넌트에 options 속성을 적용할 수 있습니다.

```ts
interface ModalProps {
  options?: ModalOptions;
}

interface ModalOptions {
  position?: 'middle' | 'bottom';
}
```

```tsx
const MyComponent = () => {
  const { isModalOpen, openModal, closeModal, Modal } = useModal();

  const modalOptions = {
    position: 'bottom',
  } as const;

  return (
    <div>
      <button onClick={openModal}>모달 열기</button>

      {isModalOpen && (
        <Modal options={modalOptions}>
          <h2>모달 내용</h2>
          <p>이것은 모달의 내용입니다.</p>
          <button onClick={closeModal}>모달 닫기</button>
        </Modal>
      )}
    </div>
  );
};
```

- position
  - middle: 모달의 위치를 중앙에 배치합니다. (Default)
  - bottom: 모달의 위치를 하단에 배치합니다.
