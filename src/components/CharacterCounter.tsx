// https://emotion.sh/docs/css-prop#jsx-pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEvent, useCallback } from "react";
import { useRecoilState } from "recoil";
import { textState } from "../recoil_state";
import { CharacterCount } from "./CharacterCount"

export const CharacterCounter: React.FC = () => {
  return (
    <div css={divStyle}>
      <TextInput/>
      <CharacterCount/>
    </div>
  );
};

const TextInput: React.FC = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }, [setText]);

  return (
    <div>
      <input type="text" value={text} onChange={onChange}/>
      <br/>
      Echo: {text}
    </div>
  );
}

const divStyle = css`
  margin: 20px;
`
