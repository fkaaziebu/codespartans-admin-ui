// imports
import { useLazyQuery } from "@apollo/client";
// entities
import type {
  LoginAdminQuery,
  LoginAdminQueryVariables,
} from "@/graphql/generated/graphql";
import { LoginAdmin } from "@/graphql/queries/login-admin.graphql";

// hook
function useLoginAdmin(args?: LoginAdminQueryVariables) {
  const [loginAdmin, { data, loading, error }] = useLazyQuery<
    LoginAdminQuery,
    LoginAdminQueryVariables
  >(LoginAdmin, {
    variables: args,
  });

  return {
    loginAdmin,
    data: data?.loginAdmin,
    loading,
    error,
  };
}

export default useLoginAdmin;
