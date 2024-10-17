import { useEffect } from 'react';
import { useAccount, useAccountLogin} from '../../queries';


const useLogin = () => {
  const account = useAccount();
  const accountLogin = useAccountLogin();

  const login = () => {
    accountLogin.mutate();
  };

  useEffect(() => {
    if (accountLogin.isSuccess && accountLogin.data.success) {
      accountLogin.refetch();
    }
  }, [accountLogin.isSuccess]);

  return {
    login,
    isLoading: account.isLoading || accountLogin.isLoading,
  };
};

export default useLogin;