/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * crypto alert
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  Alert,
  GetAlertId404,
  GetCrypto200,
  GetCrypto404,
  GetCryptoParams,
  GetUserMe404,
  PostAlertBody,
  PostAuthLogin200,
  PostAuthLogin400,
  PostAuthLoginBody,
  PostAuthLogout200,
  PostAuthRegister200,
  PostAuthRegister400,
  PostAuthRegisterBody,
  User
} from '.././model'
import { fetcher } from '../../lib/fetcher';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


export type postAuthRegisterResponse = {
  data: PostAuthRegister200;
  status: number;
  headers: Headers;
}

export const getPostAuthRegisterUrl = () => {


  return `http://localhost:4003/auth/register`
}

export const postAuthRegister = async (postAuthRegisterBody: PostAuthRegisterBody, options?: RequestInit): Promise<postAuthRegisterResponse> => {
  
  return fetcher<Promise<postAuthRegisterResponse>>(getPostAuthRegisterUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      postAuthRegisterBody,)
  }
);}




export const getPostAuthRegisterMutationOptions = <TError = PostAuthRegister400,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postAuthRegister>>, TError,{data: PostAuthRegisterBody}, TContext>, request?: SecondParameter<typeof fetcher>}
): UseMutationOptions<Awaited<ReturnType<typeof postAuthRegister>>, TError,{data: PostAuthRegisterBody}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postAuthRegister>>, {data: PostAuthRegisterBody}> = (props) => {
          const {data} = props ?? {};

          return  postAuthRegister(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostAuthRegisterMutationResult = NonNullable<Awaited<ReturnType<typeof postAuthRegister>>>
    export type PostAuthRegisterMutationBody = PostAuthRegisterBody
    export type PostAuthRegisterMutationError = PostAuthRegister400

    export const usePostAuthRegister = <TError = PostAuthRegister400,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postAuthRegister>>, TError,{data: PostAuthRegisterBody}, TContext>, request?: SecondParameter<typeof fetcher>}
): UseMutationResult<
        Awaited<ReturnType<typeof postAuthRegister>>,
        TError,
        {data: PostAuthRegisterBody},
        TContext
      > => {

      const mutationOptions = getPostAuthRegisterMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export type postAuthLoginResponse = {
  data: PostAuthLogin200;
  status: number;
  headers: Headers;
}

export const getPostAuthLoginUrl = () => {


  return `http://localhost:4003/auth/login`
}

export const postAuthLogin = async (postAuthLoginBody: PostAuthLoginBody, options?: RequestInit): Promise<postAuthLoginResponse> => {
  
  return fetcher<Promise<postAuthLoginResponse>>(getPostAuthLoginUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      postAuthLoginBody,)
  }
);}




export const getPostAuthLoginMutationOptions = <TError = PostAuthLogin400,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postAuthLogin>>, TError,{data: PostAuthLoginBody}, TContext>, request?: SecondParameter<typeof fetcher>}
): UseMutationOptions<Awaited<ReturnType<typeof postAuthLogin>>, TError,{data: PostAuthLoginBody}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postAuthLogin>>, {data: PostAuthLoginBody}> = (props) => {
          const {data} = props ?? {};

          return  postAuthLogin(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostAuthLoginMutationResult = NonNullable<Awaited<ReturnType<typeof postAuthLogin>>>
    export type PostAuthLoginMutationBody = PostAuthLoginBody
    export type PostAuthLoginMutationError = PostAuthLogin400

    export const usePostAuthLogin = <TError = PostAuthLogin400,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postAuthLogin>>, TError,{data: PostAuthLoginBody}, TContext>, request?: SecondParameter<typeof fetcher>}
): UseMutationResult<
        Awaited<ReturnType<typeof postAuthLogin>>,
        TError,
        {data: PostAuthLoginBody},
        TContext
      > => {

      const mutationOptions = getPostAuthLoginMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export type postAuthLogoutResponse = {
  data: PostAuthLogout200;
  status: number;
  headers: Headers;
}

export const getPostAuthLogoutUrl = () => {


  return `http://localhost:4003/auth/logout`
}

export const postAuthLogout = async ( options?: RequestInit): Promise<postAuthLogoutResponse> => {
  
  return fetcher<Promise<postAuthLogoutResponse>>(getPostAuthLogoutUrl(),
  {      
    ...options,
    method: 'POST'
    
    
  }
);}




export const getPostAuthLogoutMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postAuthLogout>>, TError,void, TContext>, request?: SecondParameter<typeof fetcher>}
): UseMutationOptions<Awaited<ReturnType<typeof postAuthLogout>>, TError,void, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postAuthLogout>>, void> = () => {
          

          return  postAuthLogout(requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostAuthLogoutMutationResult = NonNullable<Awaited<ReturnType<typeof postAuthLogout>>>
    
    export type PostAuthLogoutMutationError = unknown

    export const usePostAuthLogout = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postAuthLogout>>, TError,void, TContext>, request?: SecondParameter<typeof fetcher>}
): UseMutationResult<
        Awaited<ReturnType<typeof postAuthLogout>>,
        TError,
        void,
        TContext
      > => {

      const mutationOptions = getPostAuthLogoutMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export type postAlertResponse = {
  data: Alert;
  status: number;
  headers: Headers;
}

export const getPostAlertUrl = () => {


  return `http://localhost:4003/alert`
}

export const postAlert = async (postAlertBody: PostAlertBody, options?: RequestInit): Promise<postAlertResponse> => {
  
  return fetcher<Promise<postAlertResponse>>(getPostAlertUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      postAlertBody,)
  }
);}




export const getPostAlertMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postAlert>>, TError,{data: PostAlertBody}, TContext>, request?: SecondParameter<typeof fetcher>}
): UseMutationOptions<Awaited<ReturnType<typeof postAlert>>, TError,{data: PostAlertBody}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postAlert>>, {data: PostAlertBody}> = (props) => {
          const {data} = props ?? {};

          return  postAlert(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostAlertMutationResult = NonNullable<Awaited<ReturnType<typeof postAlert>>>
    export type PostAlertMutationBody = PostAlertBody
    export type PostAlertMutationError = unknown

    export const usePostAlert = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postAlert>>, TError,{data: PostAlertBody}, TContext>, request?: SecondParameter<typeof fetcher>}
): UseMutationResult<
        Awaited<ReturnType<typeof postAlert>>,
        TError,
        {data: PostAlertBody},
        TContext
      > => {

      const mutationOptions = getPostAlertMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export type getAlertIdResponse = {
  data: Alert;
  status: number;
  headers: Headers;
}

export const getGetAlertIdUrl = (id: string,) => {


  return `http://localhost:4003/alert/${id}`
}

export const getAlertId = async (id: string, options?: RequestInit): Promise<getAlertIdResponse> => {
  
  return fetcher<Promise<getAlertIdResponse>>(getGetAlertIdUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}



export const getGetAlertIdQueryKey = (id: string,) => {
    return [`http://localhost:4003/alert/${id}`] as const;
    }

    
export const getGetAlertIdQueryOptions = <TData = Awaited<ReturnType<typeof getAlertId>>, TError = GetAlertId404>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAlertId>>, TError, TData>>, request?: SecondParameter<typeof fetcher>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetAlertIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getAlertId>>> = ({ signal }) => getAlertId(id, { signal, ...requestOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getAlertId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetAlertIdQueryResult = NonNullable<Awaited<ReturnType<typeof getAlertId>>>
export type GetAlertIdQueryError = GetAlertId404


export function useGetAlertId<TData = Awaited<ReturnType<typeof getAlertId>>, TError = GetAlertId404>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAlertId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAlertId>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof fetcher>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetAlertId<TData = Awaited<ReturnType<typeof getAlertId>>, TError = GetAlertId404>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAlertId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAlertId>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof fetcher>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetAlertId<TData = Awaited<ReturnType<typeof getAlertId>>, TError = GetAlertId404>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAlertId>>, TError, TData>>, request?: SecondParameter<typeof fetcher>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetAlertId<TData = Awaited<ReturnType<typeof getAlertId>>, TError = GetAlertId404>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getAlertId>>, TError, TData>>, request?: SecondParameter<typeof fetcher>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetAlertIdQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export type getCryptoResponse = {
  data: GetCrypto200;
  status: number;
  headers: Headers;
}

export const getGetCryptoUrl = (params?: GetCryptoParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  return normalizedParams.size ? `http://localhost:4003/crypto?${normalizedParams.toString()}` : `http://localhost:4003/crypto`
}

export const getCrypto = async (params?: GetCryptoParams, options?: RequestInit): Promise<getCryptoResponse> => {
  
  return fetcher<Promise<getCryptoResponse>>(getGetCryptoUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}



export const getGetCryptoQueryKey = (params?: GetCryptoParams,) => {
    return [`http://localhost:4003/crypto`, ...(params ? [params]: [])] as const;
    }

    
export const getGetCryptoQueryOptions = <TData = Awaited<ReturnType<typeof getCrypto>>, TError = GetCrypto404>(params?: GetCryptoParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCrypto>>, TError, TData>>, request?: SecondParameter<typeof fetcher>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetCryptoQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getCrypto>>> = ({ signal }) => getCrypto(params, { signal, ...requestOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getCrypto>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetCryptoQueryResult = NonNullable<Awaited<ReturnType<typeof getCrypto>>>
export type GetCryptoQueryError = GetCrypto404


export function useGetCrypto<TData = Awaited<ReturnType<typeof getCrypto>>, TError = GetCrypto404>(
 params: undefined |  GetCryptoParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCrypto>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCrypto>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof fetcher>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetCrypto<TData = Awaited<ReturnType<typeof getCrypto>>, TError = GetCrypto404>(
 params?: GetCryptoParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCrypto>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCrypto>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof fetcher>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetCrypto<TData = Awaited<ReturnType<typeof getCrypto>>, TError = GetCrypto404>(
 params?: GetCryptoParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCrypto>>, TError, TData>>, request?: SecondParameter<typeof fetcher>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetCrypto<TData = Awaited<ReturnType<typeof getCrypto>>, TError = GetCrypto404>(
 params?: GetCryptoParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCrypto>>, TError, TData>>, request?: SecondParameter<typeof fetcher>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetCryptoQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export type getUserMeResponse = {
  data: User;
  status: number;
  headers: Headers;
}

export const getGetUserMeUrl = () => {


  return `http://localhost:4003/user/me`
}

export const getUserMe = async ( options?: RequestInit): Promise<getUserMeResponse> => {
  
  return fetcher<Promise<getUserMeResponse>>(getGetUserMeUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
);}



export const getGetUserMeQueryKey = () => {
    return [`http://localhost:4003/user/me`] as const;
    }

    
export const getGetUserMeQueryOptions = <TData = Awaited<ReturnType<typeof getUserMe>>, TError = GetUserMe404>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserMe>>, TError, TData>>, request?: SecondParameter<typeof fetcher>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUserMeQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserMe>>> = ({ signal }) => getUserMe({ signal, ...requestOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUserMe>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetUserMeQueryResult = NonNullable<Awaited<ReturnType<typeof getUserMe>>>
export type GetUserMeQueryError = GetUserMe404


export function useGetUserMe<TData = Awaited<ReturnType<typeof getUserMe>>, TError = GetUserMe404>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserMe>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserMe>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof fetcher>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserMe<TData = Awaited<ReturnType<typeof getUserMe>>, TError = GetUserMe404>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserMe>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserMe>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof fetcher>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserMe<TData = Awaited<ReturnType<typeof getUserMe>>, TError = GetUserMe404>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserMe>>, TError, TData>>, request?: SecondParameter<typeof fetcher>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetUserMe<TData = Awaited<ReturnType<typeof getUserMe>>, TError = GetUserMe404>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserMe>>, TError, TData>>, request?: SecondParameter<typeof fetcher>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetUserMeQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



