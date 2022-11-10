import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const textState = atom({
  key: 'textState',
  default: '',
});

const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);
    return text.length
  },
});

export const globalState = {
  useText: () => useRecoilState(textState),
  useTextCount: () => useRecoilValue(charCountState),
}
