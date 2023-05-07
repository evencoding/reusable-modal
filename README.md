# 모달 (Modal)

이 패키지는 모달 기능을 제공하는 React 컴포넌트입니다

## 설치

npm을 사용하여 패키지를 설치합니다.

```bash
npm i react-reusable-modal
```

## 사용법

### Modal 컴포넌트

Modal 컴포넌트는 특정 트리거를 클릭하여 모달을 열고 닫을 수 있는 기능을 제공합니다.

```jsx
import React from 'react';
import { Modal } from 'modal-package';

const App = () => {
  return (
    <div>
      <Modal trigger={<button>모달 열기</button>}>
        <h2>안녕하세요!</h2>
        <p>모달 컨텐츠입니다.</p>
      </Modal>
    </div>
  );
};

export default App;
```

### ModalOptions

ModalOptions는 모달의 옵션을 설정할 수 있는 인터페이스입니다.

| 속성                               | 타입                   | 설명                                                          |
| ---------------------------------- | ---------------------- | ------------------------------------------------------------- |
| position                           | 'middle' 또는 'bottom' | 모달의 위치를 설정합니다. 기본값은 'middle'입니다.            |
| initState                          | boolean                | 모달의 초기 상태를 설정합니다.                                |
| 기본값은 false입니다. closeTrigger | string                 | 모달을 닫는 트리거로 사용할 요소의 CSS 클래스명을 설정합니다. |

### 사용 예시

```jsx
import React from 'react';
import { Modal } from 'modal-package';

const App = () => {
  return (
    <div>
      <Modal
        trigger={<button>모달 열기</button>}
        options={{ position: 'bottom', closeTrigger: 'close-button' }}
      >
        <h2>안녕하세요!</h2>
        <p>모달 컨텐츠입니다.</p>
        <button className="close-button">닫기</button>
      </Modal>
    </div>
  );
};

export default App;
```

## 컴포넌트 구성

### Modal

Modal 컴포넌트는 다음과 같은 속성을 가집니다.

| 속성     | 타입           | 필수 | 설명                                    |
| -------- | -------------- | ---- | --------------------------------------- |
| trigger  | React 엘리먼트 |      | 모달을 열기 위한 트리거 엘리먼트입니다. |
| options  | ModalOptions   |      | 모달의 옵션을 설정하는 객체입니다.      |
| children | ReactNode      |      | 모달 내부에 표시될 컨텐츠입니다.        |

## 라이센스

이 패키지는 MIT 라이선스에 따라 라이선스가 부여됩니다.
