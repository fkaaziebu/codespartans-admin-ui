import { useMutation } from "@apollo/client";
import type {
  CloseReviewMutation,
  CloseReviewMutationVariables,
} from "@/graphql/generated/graphql";
import { CloseReview } from "@/graphql/mutations/close-review.graphql";

const useCloseReview = () => {
  const [closeReview, { loading, error }] = useMutation<
    CloseReviewMutation,
    CloseReviewMutationVariables
  >(CloseReview);

  return { closeReview, loading, error };
};

export default useCloseReview;
