import {ApiEndPoint} from './endpont';
import {makeRequest} from '@utils/makeRequest';
import {IRegister, IVerifyRegisterAccount} from 'types/auth';

class AuthApiClass {
  register = async (data: IRegister) => {
    const res = await makeRequest({
      url: ApiEndPoint.register,
      method: 'POST',
      data,
    });

    return res;
  };

  verifyRegisterAccount = async (data: IVerifyRegisterAccount) => {
    const res = await makeRequest({
      url: ApiEndPoint.verifyUser,
      method: 'POST',
      data,
    });
    return res;
  };
}

const AuthApi = new AuthApiClass();

export {AuthApi};
