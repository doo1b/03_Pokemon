import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DungGeunMo';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  // 전체선택자가 가끔 놓치기도 함 *, body 같이 써줘야 확실함!
  *, body {
  font-family: 'DungGeunMo';
  }
`;

export const NameP = styled.p`
  font-size: 17px;
`;

export const NumP = styled.p`
  font-size: 14px;
  color: rgb(147, 147, 147);
`;

export default GlobalStyle;
