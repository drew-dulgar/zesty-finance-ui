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
    isSuccess: acountAuthenticate.isSuccess && account.isSuccess && account?.data?.authenticated === true,
    isPending: acountAuthenticate.isPending || account.isPending,
    isError: acountAuthenticate.isError || account.isError,
    error: acountAuthenticate.error || account.error
  };
};

export default useLogin;