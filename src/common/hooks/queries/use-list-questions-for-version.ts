// imports
import { useLazyQuery } from "@apollo/client";
// entities
import type {
  ListQuestionsForVersionQuery,
  ListQuestionsForVersionQueryVariables,
} from "@/graphql/generated/graphql";
import { ListQuestionsForVersion } from "@/graphql/queries/list-questions-for-version.graphql";

// hook
function useListQuestionsForVersion(
  args?: ListQuestionsForVersionQueryVariables,
) {
  const [listQuestionsForVersion, { data, loading, error }] = useLazyQuery<
    ListQuestionsForVersionQuery,
    ListQuestionsForVersionQueryVariables
  >(ListQuestionsForVersion, {
    variables: args,
  });

  return {
    listQuestionsForVersion,
    data: data?.listQuestionsForVersion,
    loading,
    error,
  };
}

export default useListQuestionsForVersion;
