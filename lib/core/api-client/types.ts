export type TQueryOptions<
  TResponse = Record<string, unknown>,
  TVariables = Record<string, unknown>,
  TError = Record<string, unknown>
> = {
  onSuccess?: (resData: TResponse) => void;
  onError?: (resData: TError) => void;
  variables: TVariables;
};
