import {ReturnKeyType} from 'react-native';
export interface IRefKey {
  ref: string;
  nextRef?: string;
  returnKeyType: ReturnKeyType;
  blurOnSubmit?: boolean;
}
const generateOnSubmitRef = (
  index: number,
  refKeys: IRefKey[],
  setRef: any,
  getRef: any,
): Object => {
  const refInfo = refKeys[index];

  return {
    ref: setRef(refInfo.ref),
    //@ts-ignore
    onSubmitEditing: refInfo.nextRef
      ? () => getRef(refInfo.nextRef)?.current?.focus()
      : undefined,
    returnKeyType: refInfo.returnKeyType,
    blurOnSubmit: refInfo.blurOnSubmit,
  };
};

export default generateOnSubmitRef;
