import React from "react";

export const ColorfulMessage = (props) => {
  // 分割代入によって、props.colorといった指定が不要となる
  const { color, children } = props;

  const contentStyle = {
    color,
    fontSize: "18px"
    // Reactではfont-sizeではなくcamelケース
  };

  // タグの中身を取りたい場合はchildrenを使用
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
