// 컴포넌트란, 특정 코드 뭉치를 다른 부분에서 이식하거나
// 재사용하기 위해 사용하는 코드 블록 단위를 말한다
// 컴포넌트를 파일 단위로 작성한 후 필요한 위치에서 임포트해 사용할 수 있다.
import React, { component } from "react";

class R003_ImportComponent extends React.Component {
  render() {
    return <h2>[THIS IS IMPORTED COMPONENT ]</h2>;
  }
}

export default R003_ImportComponent;
