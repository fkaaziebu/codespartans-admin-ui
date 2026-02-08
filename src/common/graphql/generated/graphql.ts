/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  assigned_course_versions_for_review?: Maybe<Array<Version>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<Organization>;
  status: AdminStatusType;
};

export type AdminConnection = {
  __typename?: 'AdminConnection';
  count: Scalars['Int']['output'];
  edges: Array<AdminResponseEdge>;
  pageInfo: PageInfo;
};

export type AdminLoginResponse = {
  __typename?: 'AdminLoginResponse';
  assigned_course_versions_for_review?: Maybe<Array<Version>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<Organization>;
  status: AdminStatusType;
  token: Scalars['String']['output'];
};

export type AdminResponse = {
  __typename?: 'AdminResponse';
  assigned_course_versions_for_review?: Maybe<Array<Version>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<Organization>;
  status: AdminStatusType;
  total_approved_course_versions: Scalars['Float']['output'];
  total_course_versions: Scalars['Float']['output'];
};

export type AdminResponseEdge = {
  __typename?: 'AdminResponseEdge';
  cursor: Scalars['String']['output'];
  node: AdminResponse;
};

/** Admin status */
export enum AdminStatusType {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type Cart = {
  __typename?: 'Cart';
  categories?: Maybe<Array<Category>>;
  courses?: Maybe<Array<Course>>;
  id: Scalars['ID']['output'];
  student?: Maybe<Student>;
};

export type Category = {
  __typename?: 'Category';
  avatar_url: Scalars['String']['output'];
  courses?: Maybe<Array<Course>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<Organization>;
  students?: Maybe<Array<Student>>;
};

export type CategoryInfoInput = {
  avatar_url: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Checkout = {
  __typename?: 'Checkout';
  categories?: Maybe<Array<Category>>;
  courses?: Maybe<Array<Course>>;
  id: Scalars['ID']['output'];
  student?: Maybe<Student>;
};

export type Coupon = {
  __typename?: 'Coupon';
  courses?: Maybe<Array<Course>>;
  id: Scalars['ID']['output'];
  organization?: Maybe<Organization>;
};

export type Course = {
  __typename?: 'Course';
  approved_version?: Maybe<Version>;
  avatar_url: Scalars['String']['output'];
  categories?: Maybe<Array<Category>>;
  coupons?: Maybe<Array<Coupon>>;
  currency: CurrencyType;
  description: Scalars['String']['output'];
  domains: Array<DomainType>;
  id: Scalars['ID']['output'];
  inserted_at: Scalars['DateTime']['output'];
  instructor?: Maybe<Instructor>;
  level: LevelType;
  organization?: Maybe<Organization>;
  price: Scalars['Float']['output'];
  subscribed_students?: Maybe<Array<Student>>;
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  versions?: Maybe<Array<Version>>;
};

export type CourseConnection = {
  __typename?: 'CourseConnection';
  count: Scalars['Int']['output'];
  edges: Array<CourseResponseEdge>;
  pageInfo: PageInfo;
};

export type CourseFilterInput = {
  is_subscribed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CourseInfoInput = {
  avatar_url: Scalars['String']['input'];
  currency: CurrencyType;
  description: Scalars['String']['input'];
  domains: Array<DomainType>;
  level: LevelType;
  price: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type CourseResponse = {
  __typename?: 'CourseResponse';
  approved_version?: Maybe<Version>;
  avatar_url: Scalars['String']['output'];
  categories?: Maybe<Array<Category>>;
  coupons?: Maybe<Array<Coupon>>;
  currency: CurrencyType;
  description: Scalars['String']['output'];
  domains: Array<DomainType>;
  estimated_duration: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  inserted_at: Scalars['DateTime']['output'];
  instructor?: Maybe<Instructor>;
  is_subscribed: Scalars['Boolean']['output'];
  level: LevelType;
  organization?: Maybe<Organization>;
  price: Scalars['Float']['output'];
  subscribed_students?: Maybe<Array<Student>>;
  title: Scalars['String']['output'];
  total_questions: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
  versions?: Maybe<Array<Version>>;
};

export type CourseResponseEdge = {
  __typename?: 'CourseResponseEdge';
  cursor: Scalars['String']['output'];
  node: CourseResponse;
};

/** Currency */
export enum CurrencyType {
  Eur = 'EUR',
  Usd = 'USD'
}

/** Course domains */
export enum DomainType {
  English = 'ENGLISH',
  Mathematics = 'MATHEMATICS',
  Science = 'SCIENCE'
}

export type Instructor = {
  __typename?: 'Instructor';
  created_courses?: Maybe<Array<Course>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organizations?: Maybe<Array<Organization>>;
  status: InstructorStatusType;
};

export type InstructorConnection = {
  __typename?: 'InstructorConnection';
  count: Scalars['Int']['output'];
  edges: Array<InstructorResponseEdge>;
  pageInfo: PageInfo;
};

export type InstructorLoginResponse = {
  __typename?: 'InstructorLoginResponse';
  created_courses?: Maybe<Array<Course>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organizations?: Maybe<Array<Organization>>;
  status: InstructorStatusType;
  token: Scalars['String']['output'];
};

export type InstructorResponse = {
  __typename?: 'InstructorResponse';
  created_courses?: Maybe<Array<Course>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organizations?: Maybe<Array<Organization>>;
  status: InstructorStatusType;
  total_approved_courses: Scalars['Float']['output'];
  total_created_courses: Scalars['Float']['output'];
  total_requested_reviews: Scalars['Float']['output'];
};

export type InstructorResponseEdge = {
  __typename?: 'InstructorResponseEdge';
  cursor: Scalars['String']['output'];
  node: InstructorResponse;
};

/** Instructor status */
export enum InstructorStatusType {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type Issue = {
  __typename?: 'Issue';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  response?: Maybe<Scalars['String']['output']>;
  review?: Maybe<Review>;
  status: IssueStatusType;
};

export type IssueInfoInput = {
  description: Scalars['String']['input'];
};

/** Issue status */
export enum IssueStatusType {
  Closed = 'CLOSED',
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN',
  Resolved = 'RESOLVED'
}

/** Course level */
export enum LevelType {
  Advanced = 'ADVANCED',
  Beginner = 'BEGINNER',
  Intermediate = 'INTERMEDIATE'
}

export type Mutation = {
  __typename?: 'Mutation';
  addCategoryToCart: Cart;
  addCourseToCart: Cart;
  addCourseVersion: Version;
  addCourseVersionReview: Review;
  addCoursesToCategory: Category;
  addQuestionsToCourseVersion: Version;
  addReviewIssue: Issue;
  approveCourseVersion: Version;
  assignCourseVersionForReview: Version;
  closeIssue: Issue;
  closeReview: Review;
  createCategory: Category;
  createCheckout: Checkout;
  createCourse: Course;
  endTest: Test;
  pauseTest: Test;
  registerAdmin: Admin;
  registerInstructor: Instructor;
  registerOrganization: RegisterResponse;
  registerStudent: RegisterResponse;
  removeCourseFromCart: Cart;
  requestCourseVersionReview: ReviewRequest;
  requestStudentPasswordReset: PasswordResetResponse;
  resetStudentPassword: PasswordResetResponse;
  resumeTest: Test;
  startTest: Test;
  submitAnswer: SubmittedAnswer;
  updateCourse: Course;
  updateIssue: Issue;
  updateQuestion: Question;
};


export type MutationAddCategoryToCartArgs = {
  categoryId: Scalars['String']['input'];
};


export type MutationAddCourseToCartArgs = {
  courseId: Scalars['String']['input'];
};


export type MutationAddCourseVersionArgs = {
  courseId: Scalars['String']['input'];
};


export type MutationAddCourseVersionReviewArgs = {
  reviewInfo: ReviewInfoInput;
  versionId: Scalars['String']['input'];
};


export type MutationAddCoursesToCategoryArgs = {
  categoryId: Scalars['String']['input'];
  courseIds: Array<Scalars['String']['input']>;
};


export type MutationAddQuestionsToCourseVersionArgs = {
  questions: Array<QuestionInput>;
  suiteDescription: Scalars['String']['input'];
  suiteKeywords: Array<Scalars['String']['input']>;
  suiteTitle: Scalars['String']['input'];
  versionId: Scalars['String']['input'];
};


export type MutationAddReviewIssueArgs = {
  issueInfo: IssueInfoInput;
  reviewId: Scalars['String']['input'];
};


export type MutationApproveCourseVersionArgs = {
  versionId: Scalars['String']['input'];
};


export type MutationAssignCourseVersionForReviewArgs = {
  adminId: Scalars['String']['input'];
  versionId: Scalars['String']['input'];
};


export type MutationCloseIssueArgs = {
  issueId: Scalars['String']['input'];
};


export type MutationCloseReviewArgs = {
  reviewId: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  categoryInfo: CategoryInfoInput;
};


export type MutationCreateCheckoutArgs = {
  autoApproveSubscription: Scalars['Boolean']['input'];
  checkoutFromCart?: InputMaybe<Scalars['Boolean']['input']>;
  courseId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateCourseArgs = {
  courseInfo: CourseInfoInput;
  organizationId: Scalars['String']['input'];
};


export type MutationEndTestArgs = {
  testId: Scalars['String']['input'];
};


export type MutationPauseTestArgs = {
  testId: Scalars['String']['input'];
};


export type MutationRegisterAdminArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterInstructorArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterOrganizationArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterStudentArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRemoveCourseFromCartArgs = {
  courseId: Scalars['String']['input'];
};


export type MutationRequestCourseVersionReviewArgs = {
  versionId: Scalars['String']['input'];
};


export type MutationRequestStudentPasswordResetArgs = {
  email: Scalars['String']['input'];
};


export type MutationResetStudentPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationResumeTestArgs = {
  testId: Scalars['String']['input'];
};


export type MutationStartTestArgs = {
  mode?: InputMaybe<Scalars['String']['input']>;
  suiteId: Scalars['String']['input'];
};


export type MutationSubmitAnswerArgs = {
  answer: Scalars['String']['input'];
  isFlagged: Scalars['Boolean']['input'];
  questionId: Scalars['String']['input'];
  testId: Scalars['String']['input'];
  timeRange: Scalars['String']['input'];
};


export type MutationUpdateCourseArgs = {
  courseId: Scalars['String']['input'];
  courseInfo: UpdateCourseInfoInput;
};


export type MutationUpdateIssueArgs = {
  issueId: Scalars['String']['input'];
  issueStatus: IssueStatusType;
  response: Scalars['String']['input'];
};


export type MutationUpdateQuestionArgs = {
  question: QuestionInput;
  questionId: Scalars['String']['input'];
};

export type Organization = {
  __typename?: 'Organization';
  admins?: Maybe<Array<Admin>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  instructors?: Maybe<Array<Instructor>>;
  name: Scalars['String']['output'];
  organizational_categories?: Maybe<Array<Category>>;
  organizational_coupons?: Maybe<Array<Coupon>>;
  organizational_courses?: Maybe<Array<Course>>;
  requested_reviews?: Maybe<Array<ReviewRequest>>;
  students?: Maybe<Array<Student>>;
};

export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  count: Scalars['Int']['output'];
  edges: Array<OrganizationTypeClassEdge>;
  pageInfo: PageInfo;
};

export type OrganizationLoginResponse = {
  __typename?: 'OrganizationLoginResponse';
  admins?: Maybe<Array<Admin>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  instructors?: Maybe<Array<Instructor>>;
  name: Scalars['String']['output'];
  organizational_categories?: Maybe<Array<Category>>;
  organizational_coupons?: Maybe<Array<Coupon>>;
  organizational_courses?: Maybe<Array<Course>>;
  requested_reviews?: Maybe<Array<ReviewRequest>>;
  students?: Maybe<Array<Student>>;
  token: Scalars['String']['output'];
};

export type OrganizationTypeClassEdge = {
  __typename?: 'OrganizationTypeClassEdge';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type PasswordResetResponse = {
  __typename?: 'PasswordResetResponse';
  message: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllAttemptedQuestions: Array<SubmittedAnswer>;
  getCourse: Course;
  getCourseVersion: VersionResponse;
  getInstructorCourseVersion: VersionResponse;
  getInstructorVersionReview: Review;
  getOrganizationCourse: StudentCourseResponse;
  getQuestion: Question;
  getStats: StatsResponse;
  getSubscribedCourseDetails: Course;
  getVersionReview: Review;
  listAdmins: AdminConnection;
  listAssignedVersions: VersionConnection;
  listCartCategories: Array<Category>;
  listCartCourses: Array<Course>;
  listCourses: CourseConnection;
  listCoursesForOrganization: CourseConnection;
  listInstructorQuestionsForVersion: QuestionConnection;
  listInstructors: InstructorConnection;
  listOrganizationCourses: CourseConnection;
  listOrganizations: OrganizationConnection;
  listQuestionsForVersion: QuestionConnection;
  listRequestedReviews: RequestedReviewConnection;
  loginAdmin: AdminLoginResponse;
  loginInstructor: InstructorLoginResponse;
  loginOrganization: OrganizationLoginResponse;
  loginStudent: StudentLoginResponse;
  studentProfile: Student;
  testStats: Test;
};


export type QueryGetAllAttemptedQuestionsArgs = {
  testId: Scalars['String']['input'];
};


export type QueryGetCourseArgs = {
  courseId: Scalars['String']['input'];
};


export type QueryGetCourseVersionArgs = {
  versionId: Scalars['String']['input'];
};


export type QueryGetInstructorCourseVersionArgs = {
  versionId: Scalars['String']['input'];
};


export type QueryGetInstructorVersionReviewArgs = {
  reviewId: Scalars['String']['input'];
};


export type QueryGetOrganizationCourseArgs = {
  courseId: Scalars['String']['input'];
};


export type QueryGetQuestionArgs = {
  testId: Scalars['String']['input'];
};


export type QueryGetSubscribedCourseDetailsArgs = {
  courseId: Scalars['String']['input'];
};


export type QueryGetVersionReviewArgs = {
  reviewId: Scalars['String']['input'];
};


export type QueryListAdminsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListCoursesArgs = {
  pagination?: InputMaybe<PaginationInput>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListCoursesForOrganizationArgs = {
  pagination?: InputMaybe<PaginationInput>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListInstructorQuestionsForVersionArgs = {
  pagination?: InputMaybe<PaginationInput>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  versionId: Scalars['String']['input'];
};


export type QueryListInstructorsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListOrganizationCoursesArgs = {
  filter?: InputMaybe<CourseFilterInput>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<PaginationInput>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListOrganizationsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListQuestionsForVersionArgs = {
  pagination?: InputMaybe<PaginationInput>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  versionId: Scalars['String']['input'];
};


export type QueryListRequestedReviewsArgs = {
  filter?: InputMaybe<RequestedReviewFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryLoginAdminArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type QueryLoginInstructorArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type QueryLoginOrganizationArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type QueryLoginStudentArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type QueryTestStatsArgs = {
  testId: Scalars['String']['input'];
};

export type Question = {
  __typename?: 'Question';
  correct_answer: Scalars['String']['output'];
  description: Scalars['String']['output'];
  difficulty: QuestionDifficultyType;
  estimated_time_in_ms: Scalars['Float']['output'];
  hints: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  options?: Maybe<Array<Scalars['String']['output']>>;
  question_number: Scalars['Float']['output'];
  solution_steps: Array<Scalars['String']['output']>;
  tags: Array<QuestionTagType>;
  type: QuestionType;
  version?: Maybe<Version>;
};

export type QuestionConnection = {
  __typename?: 'QuestionConnection';
  count: Scalars['Int']['output'];
  edges: Array<QuestionTypeClassEdge>;
  pageInfo: PageInfo;
};

/** Question difficulty types */
export enum QuestionDifficultyType {
  Easy = 'EASY',
  Hard = 'HARD',
  Medium = 'MEDIUM'
}

export type QuestionInput = {
  correct_answer: Scalars['String']['input'];
  description: Scalars['String']['input'];
  difficulty: QuestionDifficultyType;
  estimated_time_in_ms: Scalars['Float']['input'];
  hints: Array<Scalars['String']['input']>;
  options?: InputMaybe<Array<Scalars['String']['input']>>;
  question_number: Scalars['Float']['input'];
  solution_steps: Array<Scalars['String']['input']>;
  tags: Array<QuestionTagType>;
  type: QuestionType;
};

/** Question tag types */
export enum QuestionTagType {
  TagAlgorithm = 'TAG_ALGORITHM',
  TagDatabase = 'TAG_DATABASE',
  TagDataStructure = 'TAG_DATA_STRUCTURE',
  TagGeneral = 'TAG_GENERAL',
  TagNetwork = 'TAG_NETWORK',
  TagSecurity = 'TAG_SECURITY',
  TagSystem = 'TAG_SYSTEM',
  TagWeb = 'TAG_WEB'
}

/** Question types */
export enum QuestionType {
  FillIn = 'FILL_IN',
  MultipleChoice = 'MULTIPLE_CHOICE',
  MultipleSelect = 'MULTIPLE_SELECT'
}

export type QuestionTypeClassEdge = {
  __typename?: 'QuestionTypeClassEdge';
  cursor: Scalars['String']['output'];
  node: Question;
};

export type Recommendation = {
  __typename?: 'Recommendation';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  message: Scalars['String']['output'];
};

export type RequestedReviewConnection = {
  __typename?: 'RequestedReviewConnection';
  count: Scalars['Int']['output'];
  edges: Array<ReviewRequestTypeClassEdge>;
  pageInfo: PageInfo;
};

export type RequestedReviewFilterInput = {
  adminId?: InputMaybe<Scalars['String']['input']>;
  instructorId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<VersionStatusType>;
};

export type Review = {
  __typename?: 'Review';
  course_version?: Maybe<Version>;
  id: Scalars['ID']['output'];
  inserted_at: Scalars['DateTime']['output'];
  issues?: Maybe<Array<Issue>>;
  message: Scalars['String']['output'];
  status: ReviewStatusType;
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type ReviewInfoInput = {
  message: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type ReviewRequest = {
  __typename?: 'ReviewRequest';
  course_version?: Maybe<Version>;
  id: Scalars['ID']['output'];
  inserted_at: Scalars['DateTime']['output'];
  organization?: Maybe<Organization>;
  updated_at: Scalars['DateTime']['output'];
};

export type ReviewRequestTypeClassEdge = {
  __typename?: 'ReviewRequestTypeClassEdge';
  cursor: Scalars['String']['output'];
  node: ReviewRequest;
};

export type ReviewResponse = {
  __typename?: 'ReviewResponse';
  course_version?: Maybe<Version>;
  id: Scalars['ID']['output'];
  inserted_at: Scalars['DateTime']['output'];
  issues?: Maybe<Array<Issue>>;
  message: Scalars['String']['output'];
  status: ReviewStatusType;
  title: Scalars['String']['output'];
  total_issues: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
};

/** Review status */
export enum ReviewStatusType {
  Closed = 'CLOSED',
  Open = 'OPEN'
}

export type StatsResponse = {
  __typename?: 'StatsResponse';
  total_admins: Scalars['Float']['output'];
  total_assigned_reviews: Scalars['Float']['output'];
  total_completed_reviews: Scalars['Float']['output'];
  total_instructors: Scalars['Float']['output'];
  total_requested_reviews: Scalars['Float']['output'];
};

export type Student = {
  __typename?: 'Student';
  cart?: Maybe<Cart>;
  checkouts?: Maybe<Array<Checkout>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organizations?: Maybe<Array<Organization>>;
  subscribed_categories?: Maybe<Array<Category>>;
  subscribed_courses?: Maybe<Array<Course>>;
};

export type StudentCourseResponse = {
  __typename?: 'StudentCourseResponse';
  approved_version?: Maybe<Version>;
  avatar_url: Scalars['String']['output'];
  categories?: Maybe<Array<Category>>;
  coupons?: Maybe<Array<Coupon>>;
  currency: CurrencyType;
  description: Scalars['String']['output'];
  domains: Array<DomainType>;
  id: Scalars['ID']['output'];
  inserted_at: Scalars['DateTime']['output'];
  instructor?: Maybe<Instructor>;
  is_course_in_cart: Scalars['Boolean']['output'];
  is_subscribed: Scalars['Boolean']['output'];
  level: LevelType;
  organization?: Maybe<Organization>;
  price: Scalars['Float']['output'];
  subscribed_students?: Maybe<Array<Student>>;
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  versions?: Maybe<Array<Version>>;
};

export type StudentLoginResponse = {
  __typename?: 'StudentLoginResponse';
  cart?: Maybe<Cart>;
  checkouts?: Maybe<Array<Checkout>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organizations?: Maybe<Array<Organization>>;
  subscribed_categories?: Maybe<Array<Category>>;
  subscribed_courses?: Maybe<Array<Course>>;
  token: Scalars['String']['output'];
};

export type SubmittedAnswer = {
  __typename?: 'SubmittedAnswer';
  answer_provided: Scalars['String']['output'];
  hints_used: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_flagged: Scalars['Boolean']['output'];
  question?: Maybe<Question>;
  question_id: Scalars['String']['output'];
  test?: Maybe<Test>;
};

/** Suite difficulty */
export enum SuiteDifficultyType {
  Advanced = 'ADVANCED',
  Beginner = 'BEGINNER',
  Intermediate = 'INTERMEDIATE'
}

export type Test = {
  __typename?: 'Test';
  id: Scalars['ID']['output'];
  mode: TestModeType;
  recommendations?: Maybe<Array<Recommendation>>;
  status: TestStatusType;
  submitted_answers?: Maybe<Array<SubmittedAnswer>>;
  test_suite: TestSuite;
};

/** Test mode */
export enum TestModeType {
  Proctured = 'PROCTURED',
  UnProctured = 'UN_PROCTURED'
}

/** Test status */
export enum TestStatusType {
  Ended = 'ENDED',
  OnGoing = 'ON_GOING',
  Paused = 'PAUSED'
}

export type TestSuite = {
  __typename?: 'TestSuite';
  description: Scalars['String']['output'];
  difficulty: SuiteDifficultyType;
  id: Scalars['ID']['output'];
  keywords: Array<Scalars['String']['output']>;
  questions: Array<Question>;
  title: Scalars['String']['output'];
};

export type UpdateCourseInfoInput = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CurrencyType>;
  description?: InputMaybe<Scalars['String']['input']>;
  domains?: InputMaybe<Array<DomainType>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Version = {
  __typename?: 'Version';
  assigned_admin?: Maybe<Admin>;
  course?: Maybe<Course>;
  id: Scalars['ID']['output'];
  inserted_at: Scalars['DateTime']['output'];
  questions?: Maybe<Array<Question>>;
  review_request?: Maybe<ReviewRequest>;
  reviews?: Maybe<Array<Review>>;
  status: VersionStatusType;
  test_suites?: Maybe<Array<TestSuite>>;
  updated_at: Scalars['DateTime']['output'];
  version_number: Scalars['Float']['output'];
};

export type VersionConnection = {
  __typename?: 'VersionConnection';
  count: Scalars['Int']['output'];
  edges: Array<VersionResponseEdge>;
  pageInfo: PageInfo;
};

export type VersionResponse = {
  __typename?: 'VersionResponse';
  assigned_admin?: Maybe<Admin>;
  course?: Maybe<Course>;
  id: Scalars['ID']['output'];
  inserted_at: Scalars['DateTime']['output'];
  questions?: Maybe<Array<Question>>;
  review_request?: Maybe<ReviewRequest>;
  reviews: Array<ReviewResponse>;
  status: VersionStatusType;
  test_suites?: Maybe<Array<TestSuite>>;
  total_questions: Scalars['Float']['output'];
  total_reviews: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
  version_number: Scalars['Float']['output'];
};

export type VersionResponseEdge = {
  __typename?: 'VersionResponseEdge';
  cursor: Scalars['String']['output'];
  node: VersionResponse;
};

/** Version status */
export enum VersionStatusType {
  Approved = 'APPROVED',
  Archived = 'ARCHIVED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type AddCourseVersionReviewMutationVariables = Exact<{
  versionId: Scalars['String']['input'];
  reviewInfo: ReviewInfoInput;
}>;


export type AddCourseVersionReviewMutation = { __typename?: 'Mutation', addCourseVersionReview: { __typename?: 'Review', id: string, title: string, message: string } };

export type AddReviewIssueMutationVariables = Exact<{
  reviewId: Scalars['String']['input'];
  issueInfo: IssueInfoInput;
}>;


export type AddReviewIssueMutation = { __typename?: 'Mutation', addReviewIssue: { __typename?: 'Issue', id: string, description: string, status: IssueStatusType } };

export type ApproveCourseVersionMutationVariables = Exact<{
  versionId: Scalars['String']['input'];
}>;


export type ApproveCourseVersionMutation = { __typename?: 'Mutation', approveCourseVersion: { __typename?: 'Version', id: string, status: VersionStatusType } };

export type CloseIssueMutationVariables = Exact<{
  issueId: Scalars['String']['input'];
}>;


export type CloseIssueMutation = { __typename?: 'Mutation', closeIssue: { __typename?: 'Issue', id: string, description: string, status: IssueStatusType } };

export type CloseReviewMutationVariables = Exact<{
  reviewId: Scalars['String']['input'];
}>;


export type CloseReviewMutation = { __typename?: 'Mutation', closeReview: { __typename?: 'Review', id: string } };

export type GetCourseVersionQueryVariables = Exact<{
  versionId: Scalars['String']['input'];
}>;


export type GetCourseVersionQuery = { __typename?: 'Query', getCourseVersion: { __typename?: 'VersionResponse', id: string, version_number: number, status: VersionStatusType, total_questions: number, total_reviews: number, course?: { __typename?: 'Course', title: string, instructor?: { __typename?: 'Instructor', name: string } | null } | null, review_request?: { __typename?: 'ReviewRequest', inserted_at: any } | null, reviews: Array<{ __typename?: 'ReviewResponse', id: string, title: string, message: string, inserted_at: any, status: ReviewStatusType, total_issues: number }> } };

export type GetVersionReviewQueryVariables = Exact<{
  reviewId: Scalars['String']['input'];
}>;


export type GetVersionReviewQuery = { __typename?: 'Query', getVersionReview: { __typename?: 'Review', id: string, inserted_at: any, message: string, status: ReviewStatusType, title: string, course_version?: { __typename?: 'Version', version_number: number, course?: { __typename?: 'Course', title: string } | null, questions?: Array<{ __typename?: 'Question', id: string, question_number: number, correct_answer: string, description: string, difficulty: QuestionDifficultyType, estimated_time_in_ms: number, hints: Array<string>, options?: Array<string> | null, solution_steps: Array<string>, tags: Array<QuestionTagType>, type: QuestionType }> | null } | null, issues?: Array<{ __typename?: 'Issue', id: string, description: string, status: IssueStatusType, response?: string | null }> | null } };

export type ListAssignedVersionsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListAssignedVersionsQuery = { __typename?: 'Query', listAssignedVersions: { __typename?: 'VersionConnection', edges: Array<{ __typename?: 'VersionResponseEdge', node: { __typename?: 'VersionResponse', id: string, status: VersionStatusType, total_questions: number, total_reviews: number, course?: { __typename?: 'Course', title: string } | null, review_request?: { __typename?: 'ReviewRequest', inserted_at: any } | null } }> } };

export type ListQuestionsForVersionQueryVariables = Exact<{
  versionId: Scalars['String']['input'];
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<PaginationInput>;
}>;


export type ListQuestionsForVersionQuery = { __typename?: 'Query', listQuestionsForVersion: { __typename?: 'QuestionConnection', edges: Array<{ __typename?: 'QuestionTypeClassEdge', node: { __typename?: 'Question', id: string, correct_answer: string, description: string, difficulty: QuestionDifficultyType, estimated_time_in_ms: number, hints: Array<string>, options?: Array<string> | null, question_number: number, solution_steps: Array<string>, tags: Array<QuestionTagType>, type: QuestionType } }> } };

export type LoginAdminQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginAdminQuery = { __typename?: 'Query', loginAdmin: { __typename?: 'AdminLoginResponse', id: string, email: string, name: string, token: string, organization?: { __typename?: 'Organization', id: string } | null } };


export const AddCourseVersionReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddCourseVersionReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"versionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reviewInfo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReviewInfoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCourseVersionReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"versionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"versionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"reviewInfo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reviewInfo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<AddCourseVersionReviewMutation, AddCourseVersionReviewMutationVariables>;
export const AddReviewIssueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddReviewIssue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reviewId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueInfo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IssueInfoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addReviewIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reviewId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reviewId"}}},{"kind":"Argument","name":{"kind":"Name","value":"issueInfo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueInfo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<AddReviewIssueMutation, AddReviewIssueMutationVariables>;
export const ApproveCourseVersionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ApproveCourseVersion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"versionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"approveCourseVersion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"versionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"versionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<ApproveCourseVersionMutation, ApproveCourseVersionMutationVariables>;
export const CloseIssueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CloseIssue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"closeIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"issueId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<CloseIssueMutation, CloseIssueMutationVariables>;
export const CloseReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CloseReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reviewId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"closeReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reviewId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reviewId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CloseReviewMutation, CloseReviewMutationVariables>;
export const GetCourseVersionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCourseVersion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"versionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCourseVersion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"versionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"versionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version_number"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"instructor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"review_request"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inserted_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"inserted_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"total_issues"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_questions"}},{"kind":"Field","name":{"kind":"Name","value":"total_reviews"}}]}}]}}]} as unknown as DocumentNode<GetCourseVersionQuery, GetCourseVersionQueryVariables>;
export const GetVersionReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVersionReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reviewId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getVersionReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reviewId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reviewId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"inserted_at"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"course_version"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"version_number"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"question_number"}},{"kind":"Field","name":{"kind":"Name","value":"correct_answer"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"estimated_time_in_ms"}},{"kind":"Field","name":{"kind":"Name","value":"hints"}},{"kind":"Field","name":{"kind":"Name","value":"options"}},{"kind":"Field","name":{"kind":"Name","value":"solution_steps"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"response"}}]}}]}}]}}]} as unknown as DocumentNode<GetVersionReviewQuery, GetVersionReviewQueryVariables>;
export const ListAssignedVersionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListAssignedVersions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listAssignedVersions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"review_request"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inserted_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_questions"}},{"kind":"Field","name":{"kind":"Name","value":"total_reviews"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ListAssignedVersionsQuery, ListAssignedVersionsQueryVariables>;
export const ListQuestionsForVersionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListQuestionsForVersion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"versionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listQuestionsForVersion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"versionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"versionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"correct_answer"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"estimated_time_in_ms"}},{"kind":"Field","name":{"kind":"Name","value":"hints"}},{"kind":"Field","name":{"kind":"Name","value":"options"}},{"kind":"Field","name":{"kind":"Name","value":"question_number"}},{"kind":"Field","name":{"kind":"Name","value":"solution_steps"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ListQuestionsForVersionQuery, ListQuestionsForVersionQueryVariables>;
export const LoginAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LoginAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<LoginAdminQuery, LoginAdminQueryVariables>;