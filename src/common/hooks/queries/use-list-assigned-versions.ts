// imports
import { useLazyQuery } from "@apollo/client";
// entities
import type {
  ListAssignedVersionsQuery,
  ListAssignedVersionsQueryVariables,
} from "@/graphql/generated/graphql";
import { ListAssignedVersions } from "@/graphql/queries/list-assigned-versions.graphql";

// hook
function useListAssignedVersions(args?: ListAssignedVersionsQueryVariables) {
  const [listAssignedVersions, { data, loading, error }] = useLazyQuery<
    ListAssignedVersionsQuery,
    ListAssignedVersionsQueryVariables
  >(ListAssignedVersions, {
    variables: args,
  });

  return {
    listAssignedVersions,
    data: data?.listAssignedVersions,
    loading,
    error,
  };
}

export default useListAssignedVersions;
