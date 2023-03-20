import React, { useEffect, useState } from "react";
// import ColorfulMessage from "./components/ColorfulMessage";
// import元がexport　defaultを使用しない場合は、以下のように分割代入でimportする。以下は名称が統一される
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  // num:Stateの変数名(今回は初期値0)、setNum:Stateを変更する関数
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const oncClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // useEffectの第２引数に関心を指定
  useEffect(() => {
    if (num > 0) {
      if (num % 3 == 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={oncClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(＃＾ω＾)ﾋﾟｷﾋﾟｷ</p>}
    </>
    // <React.Fragment>は<>で省略可
    // JavaScript内でHTMLタグを書く記法をJSX記法という
    // Reactではonclickイベントなどもcamelケースにする
  );
};

// App関数を外部からの使用可能とする
export default App;
