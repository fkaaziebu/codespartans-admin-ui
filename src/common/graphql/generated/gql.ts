/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation AddCourseVersionReview($versionId: String!, $reviewInfo: ReviewInfoInput!) {\n  addCourseVersionReview(versionId: $versionId, reviewInfo: $reviewInfo) {\n    id\n    title\n    message\n  }\n}": typeof types.AddCourseVersionReviewDocument,
    "mutation AddReviewIssue($reviewId: String!, $issueInfo: IssueInfoInput!) {\n  addReviewIssue(reviewId: $reviewId, issueInfo: $issueInfo) {\n    id\n    description\n    status\n  }\n}": typeof types.AddReviewIssueDocument,
    "mutation ApproveCourseVersion($versionId: String!) {\n  approveCourseVersion(versionId: $versionId) {\n    id\n    status\n  }\n}": typeof types.ApproveCourseVersionDocument,
    "mutation CloseIssue($issueId: String!) {\n  closeIssue(issueId: $issueId) {\n    id\n    description\n    status\n  }\n}": typeof types.CloseIssueDocument,
    "mutation CloseReview($reviewId: String!) {\n  closeReview(reviewId: $reviewId) {\n    id\n  }\n}": typeof types.CloseReviewDocument,
    "query GetCourseVersion($versionId: String!) {\n  getCourseVersion(versionId: $versionId) {\n    id\n    version_number\n    status\n    course {\n      title\n      instructor {\n        name\n      }\n    }\n    review_request {\n      inserted_at\n    }\n    reviews {\n      id\n      title\n      message\n      inserted_at\n      status\n      total_issues\n    }\n    total_questions\n    total_reviews\n  }\n}": typeof types.GetCourseVersionDocument,
    "query GetVersionReview($reviewId: String!) {\n  getVersionReview(reviewId: $reviewId) {\n    id\n    inserted_at\n    message\n    status\n    title\n    course_version {\n      version_number\n      course {\n        title\n      }\n      questions {\n        id\n        question_number\n        correct_answer\n        description\n        difficulty\n        estimated_time_in_ms\n        hints\n        options\n        solution_steps\n        tags\n        type\n      }\n    }\n    issues {\n      id\n      description\n      status\n      response\n    }\n  }\n}": typeof types.GetVersionReviewDocument,
    "query ListAssignedVersions {\n  listAssignedVersions {\n    edges {\n      node {\n        id\n        status\n        course {\n          title\n        }\n        review_request {\n          inserted_at\n        }\n        total_questions\n        total_reviews\n      }\n    }\n  }\n}": typeof types.ListAssignedVersionsDocument,
    "query ListQuestionsForVersion($versionId: String!, $searchTerm: String, $pagination: PaginationInput) {\n  listQuestionsForVersion(\n    versionId: $versionId\n    searchTerm: $searchTerm\n    pagination: $pagination\n  ) {\n    edges {\n      node {\n        id\n        correct_answer\n        description\n        difficulty\n        estimated_time_in_ms\n        hints\n        options\n        question_number\n        solution_steps\n        tags\n        type\n      }\n    }\n  }\n}": typeof types.ListQuestionsForVersionDocument,
    "query LoginAdmin($email: String!, $password: String!) {\n  loginAdmin(email: $email, password: $password) {\n    id\n    email\n    name\n    token\n    organization {\n      id\n    }\n  }\n}": typeof types.LoginAdminDocument,
};
const documents: Documents = {
    "mutation AddCourseVersionReview($versionId: String!, $reviewInfo: ReviewInfoInput!) {\n  addCourseVersionReview(versionId: $versionId, reviewInfo: $reviewInfo) {\n    id\n    title\n    message\n  }\n}": types.AddCourseVersionReviewDocument,
    "mutation AddReviewIssue($reviewId: String!, $issueInfo: IssueInfoInput!) {\n  addReviewIssue(reviewId: $reviewId, issueInfo: $issueInfo) {\n    id\n    description\n    status\n  }\n}": types.AddReviewIssueDocument,
    "mutation ApproveCourseVersion($versionId: String!) {\n  approveCourseVersion(versionId: $versionId) {\n    id\n    status\n  }\n}": types.ApproveCourseVersionDocument,
    "mutation CloseIssue($issueId: String!) {\n  closeIssue(issueId: $issueId) {\n    id\n    description\n    status\n  }\n}": types.CloseIssueDocument,
    "mutation CloseReview($reviewId: String!) {\n  closeReview(reviewId: $reviewId) {\n    id\n  }\n}": types.CloseReviewDocument,
    "query GetCourseVersion($versionId: String!) {\n  getCourseVersion(versionId: $versionId) {\n    id\n    version_number\n    status\n    course {\n      title\n      instructor {\n        name\n      }\n    }\n    review_request {\n      inserted_at\n    }\n    reviews {\n      id\n      title\n      message\n      inserted_at\n      status\n      total_issues\n    }\n    total_questions\n    total_reviews\n  }\n}": types.GetCourseVersionDocument,
    "query GetVersionReview($reviewId: String!) {\n  getVersionReview(reviewId: $reviewId) {\n    id\n    inserted_at\n    message\n    status\n    title\n    course_version {\n      version_number\n      course {\n        title\n      }\n      questions {\n        id\n        question_number\n        correct_answer\n        description\n        difficulty\n        estimated_time_in_ms\n        hints\n        options\n        solution_steps\n        tags\n        type\n      }\n    }\n    issues {\n      id\n      description\n      status\n      response\n    }\n  }\n}": types.GetVersionReviewDocument,
    "query ListAssignedVersions {\n  listAssignedVersions {\n    edges {\n      node {\n        id\n        status\n        course {\n          title\n        }\n        review_request {\n          inserted_at\n        }\n        total_questions\n        total_reviews\n      }\n    }\n  }\n}": types.ListAssignedVersionsDocument,
    "query ListQuestionsForVersion($versionId: String!, $searchTerm: String, $pagination: PaginationInput) {\n  listQuestionsForVersion(\n    versionId: $versionId\n    searchTerm: $searchTerm\n    pagination: $pagination\n  ) {\n    edges {\n      node {\n        id\n        correct_answer\n        description\n        difficulty\n        estimated_time_in_ms\n        hints\n        options\n        question_number\n        solution_steps\n        tags\n        type\n      }\n    }\n  }\n}": types.ListQuestionsForVersionDocument,
    "query LoginAdmin($email: String!, $password: String!) {\n  loginAdmin(email: $email, password: $password) {\n    id\n    email\n    name\n    token\n    organization {\n      id\n    }\n  }\n}": types.LoginAdminDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation AddCourseVersionReview($versionId: String!, $reviewInfo: ReviewInfoInput!) {\n  addCourseVersionReview(versionId: $versionId, reviewInfo: $reviewInfo) {\n    id\n    title\n    message\n  }\n}"): (typeof documents)["mutation AddCourseVersionReview($versionId: String!, $reviewInfo: ReviewInfoInput!) {\n  addCourseVersionReview(versionId: $versionId, reviewInfo: $reviewInfo) {\n    id\n    title\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation AddReviewIssue($reviewId: String!, $issueInfo: IssueInfoInput!) {\n  addReviewIssue(reviewId: $reviewId, issueInfo: $issueInfo) {\n    id\n    description\n    status\n  }\n}"): (typeof documents)["mutation AddReviewIssue($reviewId: String!, $issueInfo: IssueInfoInput!) {\n  addReviewIssue(reviewId: $reviewId, issueInfo: $issueInfo) {\n    id\n    description\n    status\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ApproveCourseVersion($versionId: String!) {\n  approveCourseVersion(versionId: $versionId) {\n    id\n    status\n  }\n}"): (typeof documents)["mutation ApproveCourseVersion($versionId: String!) {\n  approveCourseVersion(versionId: $versionId) {\n    id\n    status\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CloseIssue($issueId: String!) {\n  closeIssue(issueId: $issueId) {\n    id\n    description\n    status\n  }\n}"): (typeof documents)["mutation CloseIssue($issueId: String!) {\n  closeIssue(issueId: $issueId) {\n    id\n    description\n    status\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CloseReview($reviewId: String!) {\n  closeReview(reviewId: $reviewId) {\n    id\n  }\n}"): (typeof documents)["mutation CloseReview($reviewId: String!) {\n  closeReview(reviewId: $reviewId) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCourseVersion($versionId: String!) {\n  getCourseVersion(versionId: $versionId) {\n    id\n    version_number\n    status\n    course {\n      title\n      instructor {\n        name\n      }\n    }\n    review_request {\n      inserted_at\n    }\n    reviews {\n      id\n      title\n      message\n      inserted_at\n      status\n      total_issues\n    }\n    total_questions\n    total_reviews\n  }\n}"): (typeof documents)["query GetCourseVersion($versionId: String!) {\n  getCourseVersion(versionId: $versionId) {\n    id\n    version_number\n    status\n    course {\n      title\n      instructor {\n        name\n      }\n    }\n    review_request {\n      inserted_at\n    }\n    reviews {\n      id\n      title\n      message\n      inserted_at\n      status\n      total_issues\n    }\n    total_questions\n    total_reviews\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetVersionReview($reviewId: String!) {\n  getVersionReview(reviewId: $reviewId) {\n    id\n    inserted_at\n    message\n    status\n    title\n    course_version {\n      version_number\n      course {\n        title\n      }\n      questions {\n        id\n        question_number\n        correct_answer\n        description\n        difficulty\n        estimated_time_in_ms\n        hints\n        options\n        solution_steps\n        tags\n        type\n      }\n    }\n    issues {\n      id\n      description\n      status\n      response\n    }\n  }\n}"): (typeof documents)["query GetVersionReview($reviewId: String!) {\n  getVersionReview(reviewId: $reviewId) {\n    id\n    inserted_at\n    message\n    status\n    title\n    course_version {\n      version_number\n      course {\n        title\n      }\n      questions {\n        id\n        question_number\n        correct_answer\n        description\n        difficulty\n        estimated_time_in_ms\n        hints\n        options\n        solution_steps\n        tags\n        type\n      }\n    }\n    issues {\n      id\n      description\n      status\n      response\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ListAssignedVersions {\n  listAssignedVersions {\n    edges {\n      node {\n        id\n        status\n        course {\n          title\n        }\n        review_request {\n          inserted_at\n        }\n        total_questions\n        total_reviews\n      }\n    }\n  }\n}"): (typeof documents)["query ListAssignedVersions {\n  listAssignedVersions {\n    edges {\n      node {\n        id\n        status\n        course {\n          title\n        }\n        review_request {\n          inserted_at\n        }\n        total_questions\n        total_reviews\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ListQuestionsForVersion($versionId: String!, $searchTerm: String, $pagination: PaginationInput) {\n  listQuestionsForVersion(\n    versionId: $versionId\n    searchTerm: $searchTerm\n    pagination: $pagination\n  ) {\n    edges {\n      node {\n        id\n        correct_answer\n        description\n        difficulty\n        estimated_time_in_ms\n        hints\n        options\n        question_number\n        solution_steps\n        tags\n        type\n      }\n    }\n  }\n}"): (typeof documents)["query ListQuestionsForVersion($versionId: String!, $searchTerm: String, $pagination: PaginationInput) {\n  listQuestionsForVersion(\n    versionId: $versionId\n    searchTerm: $searchTerm\n    pagination: $pagination\n  ) {\n    edges {\n      node {\n        id\n        correct_answer\n        description\n        difficulty\n        estimated_time_in_ms\n        hints\n        options\n        question_number\n        solution_steps\n        tags\n        type\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query LoginAdmin($email: String!, $password: String!) {\n  loginAdmin(email: $email, password: $password) {\n    id\n    email\n    name\n    token\n    organization {\n      id\n    }\n  }\n}"): (typeof documents)["query LoginAdmin($email: String!, $password: String!) {\n  loginAdmin(email: $email, password: $password) {\n    id\n    email\n    name\n    token\n    organization {\n      id\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;