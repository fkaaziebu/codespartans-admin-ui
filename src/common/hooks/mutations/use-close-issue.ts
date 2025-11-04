import { useMutation } from "@apollo/client";
import type {
  CloseIssueMutation,
  CloseIssueMutationVariables,
} from "@/graphql/generated/graphql";
import { CloseIssue } from "@/graphql/mutations/close-issue.graphql";

const useCloseIssue = () => {
  const [closeIssue, { loading, error }] = useMutation<
    CloseIssueMutation,
    CloseIssueMutationVariables
  >(CloseIssue);

  return { closeIssue, loading, error };
};

export default useCloseIssue;
