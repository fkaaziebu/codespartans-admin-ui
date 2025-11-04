import { useMutation } from "@apollo/client";
import type {
  AddReviewIssueMutation,
  AddReviewIssueMutationVariables,
} from "@/graphql/generated/graphql";
import { AddReviewIssue } from "@/graphql/mutations/add-review-issue.graphql";

const useAddReviewIssue = () => {
  const [addReviewIssue, { loading, error }] = useMutation<
    AddReviewIssueMutation,
    AddReviewIssueMutationVariables
  >(AddReviewIssue);

  return { addReviewIssue, loading, error };
};

export default useAddReviewIssue;
