import {Colors} from 'react-native-ui-lib';
import {ScaledSheet, s, vs, ms} from 'react-native-size-matters';
const styles: any = ScaledSheet.create({
  withFrame: {
    borderWidth: 0.5,
    borderColor: Colors.$outlineDisabledHeavy,
    paddingVertical: ms(10),
    borderRadius: ms(5),
  },
  inputContainer: {
    width: vs(280),
    marginBottom: s(2),
  },
});

export {styles}; // prevent recycle import!