// imports
import { useLazyQuery } from "@apollo/client";
// entities
import type {
  GetVersionReviewQuery,
  GetVersionReviewQueryVariables,
} from "@/graphql/generated/graphql";
import { GetVersionReview } from "@/graphql/queries/get-version-review.graphql";

// hook
function useGetVersionReview(args?: GetVersionReviewQueryVariables) {
  const [getVersionReview, { data, loading, error }] = useLazyQuery<
    GetVersionReviewQuery,
    GetVersionReviewQueryVariables
  >(GetVersionReview, {
    variables: args,
  });

  return {
    getVersionReview,
    data: data?.getVersionReview,
    loading,
    error,
  };
}

export default useGetVersionReview;
