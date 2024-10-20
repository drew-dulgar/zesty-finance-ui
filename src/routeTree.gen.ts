/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as AccountRegisterImport } from './routes/account/register'
import { Route as AccountLoginImport } from './routes/account/login'
import { Route as AccountForgotPasswordImport } from './routes/account/forgot-password'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AccountRegisterRoute = AccountRegisterImport.update({
  id: '/account/register',
  path: '/account/register',
  getParentRoute: () => rootRoute,
} as any)

const AccountLoginRoute = AccountLoginImport.update({
  id: '/account/login',
  path: '/account/login',
  getParentRoute: () => rootRoute,
} as any)

const AccountForgotPasswordRoute = AccountForgotPasswordImport.update({
  id: '/account/forgot-password',
  path: '/account/forgot-password',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/account/forgot-password': {
      id: '/account/forgot-password'
      path: '/account/forgot-password'
      fullPath: '/account/forgot-password'
      preLoaderRoute: typeof AccountForgotPasswordImport
      parentRoute: typeof rootRoute
    }
    '/account/login': {
      id: '/account/login'
      path: '/account/login'
      fullPath: '/account/login'
      preLoaderRoute: typeof AccountLoginImport
      parentRoute: typeof rootRoute
    }
    '/account/register': {
      id: '/account/register'
      path: '/account/register'
      fullPath: '/account/register'
      preLoaderRoute: typeof AccountRegisterImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/account/forgot-password': typeof AccountForgotPasswordRoute
  '/account/login': typeof AccountLoginRoute
  '/account/register': typeof AccountRegisterRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/account/forgot-password': typeof AccountForgotPasswordRoute
  '/account/login': typeof AccountLoginRoute
  '/account/register': typeof AccountRegisterRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/account/forgot-password': typeof AccountForgotPasswordRoute
  '/account/login': typeof AccountLoginRoute
  '/account/register': typeof AccountRegisterRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/account/forgot-password'
    | '/account/login'
    | '/account/register'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/account/forgot-password' | '/account/login' | '/account/register'
  id:
    | '__root__'
    | '/'
    | '/account/forgot-password'
    | '/account/login'
    | '/account/register'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AccountForgotPasswordRoute: typeof AccountForgotPasswordRoute
  AccountLoginRoute: typeof AccountLoginRoute
  AccountRegisterRoute: typeof AccountRegisterRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AccountForgotPasswordRoute: AccountForgotPasswordRoute,
  AccountLoginRoute: AccountLoginRoute,
  AccountRegisterRoute: AccountRegisterRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/account/forgot-password",
        "/account/login",
        "/account/register"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/account/forgot-password": {
      "filePath": "account/forgot-password.jsx"
    },
    "/account/login": {
      "filePath": "account/login.jsx"
    },
    "/account/register": {
      "filePath": "account/register.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
