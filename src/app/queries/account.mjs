import { useQuery, useMutation } from '@tanstack/react-query';
import AccountService from '../services/AccountService.mjs';

export const QUERY_ACCOUNT = 'QUERY_ACCOUNT';
export const QUERY_ACCOUNT_CREATE = 'QUERY_ACCOUNT_CREATE';
export const QUERY_ACCOUNT_AUTHORIZE = 'QUERY_ACCOUNT_AUTHORIZE';
export const QUERY_ACCOUNT_LOGOUT = 'QUERY_ACCOUNT_LOGOUT';

export const useAccount = () => useQuery({
  queryKey: [QUERY_ACCOUNT],
  queryFn: () => AccountService.get(),
  staleTime: Infinity,
  gcTime: Infinity,
  placeholderData: {
    authenticated: false,
    authorized: {}
  }
});

export const useAccountCreate = (args = {}) => useMutation({
  mutationKey: [QUERY_ACCOUNT_CREATE, args],
  mutationFn: () => AccountService.create(args),
});

export const  useAccountAuthorize = (email, password) => useMutation({
  mutationKey: [QUERY_ACCOUNT_AUTHORIZE, email],
  mutationFn: () => AccountService.authorize(email, password)
});

export const  useAccountLogout = () => useMutation({
  mutationKey: [QUERY_ACCOUNT_LOGOUT],
  mutationFn: AccountService.logout
});
