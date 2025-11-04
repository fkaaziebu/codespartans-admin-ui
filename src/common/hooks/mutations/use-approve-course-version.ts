import { useMutation } from "@apollo/client";
import type {
  ApproveCourseVersionMutation,
  ApproveCourseVersionMutationVariables,
} from "@/graphql/generated/graphql";
import { ApproveCourseVersion } from "@/graphql/mutations/approve-course-version.graphql";

const useApproveCourseVersion = () => {
  const [approveCourseVersion, { loading, error }] = useMutation<
    ApproveCourseVersionMutation,
    ApproveCourseVersionMutationVariables
  >(ApproveCourseVersion);

  return { approveCourseVersion, loading, error };
};

export default useApproveCourseVersion;
