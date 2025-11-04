// imports
import { useLazyQuery } from "@apollo/client";
// entities
import type {
  GetCourseVersionQuery,
  GetCourseVersionQueryVariables,
} from "@/graphql/generated/graphql";
import { GetCourseVersion } from "@/graphql/queries/get-course-version.graphql";

// hook
function useGetCourseVersion(args?: GetCourseVersionQueryVariables) {
  const [getCourseVersion, { data, loading, error }] = useLazyQuery<
    GetCourseVersionQuery,
    GetCourseVersionQueryVariables
  >(GetCourseVersion, {
    variables: args,
  });

  return {
    getCourseVersion,
    data: data?.getCourseVersion,
    loading,
    error,
  };
}

export default useGetCourseVersion;
