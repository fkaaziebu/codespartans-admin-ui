import { useMutation } from "@apollo/client";
import type {
  AddCourseVersionReviewMutation,
  AddCourseVersionReviewMutationVariables,
} from "@/graphql/generated/graphql";
import { AddCourseVersionReview } from "@/graphql/mutations/add-course-version-review.graphql";

const useAddCourseVersionReview = () => {
  const [addCourseVersionReview, { loading, error }] = useMutation<
    AddCourseVersionReviewMutation,
    AddCourseVersionReviewMutationVariables
  >(AddCourseVersionReview);

  return { addCourseVersionReview, loading, error };
};

export default useAddCourseVersionReview;
