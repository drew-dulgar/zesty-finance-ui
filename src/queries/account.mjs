import { useQuery, useSuspenseQuery, useMutation } from '@tanstack/react-query';
import AccountService from '../services/AccountService.mjs';

export const QUERY_ACCOUNT = 'QUERY_ACCOUNT';
export const QUERY_ACCOUNT_CREATE = 'QUERY_ACCOUNT_CREATE';
export const QUERY_ACCOUNT_AUTHORIZE = 'QUERY_ACCOUNT_AUTHORIZE';
export const QUERY_ACCOUNT_LOGOUT = 'QUERY_ACCOUNT_LOGOUT';

export const MUTATION_ACCOUNT_EMAIL_VERIFICATION_CODE = 'MUTATION_ACCOUNT_EMAIL_VERIFICATION_CODE';

export const useAccount = (options = {}) => useSuspenseQuery({
  ...options,
  queryKey: [QUERY_ACCOUNT],
  queryFn: () => AccountService.get(),
  staleTime: Infinity,
  gcTime: Infinity,
  placeholderData: {
    authenticated: false,
    authorized: {}
  },
});

export const useAccountEmailVerificationCode = (options = {}) => useMutation({
  ...options,
  mutationKey: [MUTATION_ACCOUNT_EMAIL_VERIFICATION_CODE],
  mutationFn: AccountService.emailVerificationCode
})

export const useAccountCreate = (options = {}) => useMutation({
  ...options,
  mutationKey: [QUERY_ACCOUNT_CREATE],
  mutationFn: AccountService.create
});

export const useAccountAuthenticate = (options = {}) => useMutation({
  ...options,
  mutationKey: [QUERY_ACCOUNT_AUTHORIZE],
  mutationFn: AccountService.authenticate,
});

export const useAccountLogout = (options = {}) => useMutation({
  ...options,
  mutationKey: [QUERY_ACCOUNT_LOGOUT],
  mutationFn: AccountService.logout
});
