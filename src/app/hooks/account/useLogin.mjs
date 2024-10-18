import { useEffect } from 'react';
import { useAccount, useAccountAuthenticate } from '../../queries';


const useLogin = () => {
  const account = useAccount();
  const acountAuthenticate = useAccountAuthenticate();

  const login = (email, password) => {
    acountAuthenticate.mutate({ email, password });
  };

  useEffect(() => {
    if (acountAuthenticate.isSuccess && acountAuthenticate.data.success) {
      account.refetch();
    }
  }, [acountAuthenticate.isSuccess]);

  return {
    login,
    isLoading: account.isLoading || acountAuthenticate.isLoading,
  };
};

export default useLogin;