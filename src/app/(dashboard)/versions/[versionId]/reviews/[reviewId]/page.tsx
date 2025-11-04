"use client";
import { AlertCircle, ArrowLeft, CheckCircle } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Issue,
  IssueStatusType,
  Question,
  QuestionDifficultyType,
  ReviewStatusType,
} from "@/common/graphql/generated/graphql";
import { useCloseReview } from "@/common/hooks/mutations";
import { useGetVersionReview } from "@/common/hooks/queries";
import { CloseIssueModal, CreateIssueModal } from "@/components/modals";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ReviewDetailPage() {
  const [isCreateIssueModalOpen, setIsCreateIssueModalOpen] = useState(false);
  const [isCloseIssueModalOpen, setIsCloseIssueModalOpen] = useState(false);
  const [selectedQuestionNumber, setSelectedQuestionNumber] = useState<
    number | null
  >(null);
  const [selectedIssue, setSelectedIssue] = useState<Issue | undefined>();
  const router = useRouter();
  const { versionId, reviewId } = useParams<{
    versionId: string;
    reviewId: string;
  }>();
  const { getVersionReview } = useGetVersionReview();
  const { closeReview } = useCloseReview();

  const [reviewDetails, setReviewDetails] = useState<
    | {
        id: string | undefined;
        title: string | undefined;
        review_message: string | undefined;
        status: ReviewStatusType | undefined;
        date_created: string | undefined;
        course_name: string | undefined;
        version_number: number | undefined;
      }
    | undefined
  >();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [issues, setIssues] = useState<Issue[]>([]);

  const fetchReviewDetails = async () => {
    try {
      const response = await getVersionReview({
        variables: {
          reviewId,
        },
      });

      setReviewDetails({
        id: response.data?.getVersionReview.id,
        title: response.data?.getVersionReview.title,
        review_message: response.data?.getVersionReview.message,
        status: response.data?.getVersionReview.status,
        date_created: response.data?.getVersionReview.inserted_at,
        course_name:
          response.data?.getVersionReview.course_version?.course?.title,
        version_number:
          response.data?.getVersionReview.course_version?.version_number,
      });

      setQuestions(
        [
          ...(response.data?.getVersionReview.course_version?.questions || []),
        ].sort((a, b) => a.question_number - b.question_number),
      );
      setIssues(response.data?.getVersionReview.issues || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateIssues = (issue: Issue) => {
    const filterredIssues = issues.filter((iss) => iss.id !== issue.id);
    setIssues([...(filterredIssues || []), issue]);
  };

  const getStatusBadge = (status: ReviewStatusType | undefined) => {
    const statusConfig: {
      [key: string]: {
        className: string;
        label: string;
      };
    } = {
      [`${ReviewStatusType.Open}`]: {
        className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
        label: "Open",
      },
      [`${ReviewStatusType.Closed}`]: {
        className: "bg-green-100 text-green-800 hover:bg-green-100",
        label: "Closed",
      },
    };

    const config =
      statusConfig[status || ""] || statusConfig[`${ReviewStatusType.Open}`];
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const getIssueStatusBadge = (
    status: IssueStatusType,
    isClickable: boolean = false,
  ) => {
    const statusConfig: {
      [key: string]: {
        className: string;
        label: string;
      };
    } = {
      [`${IssueStatusType.Open}`]: {
        className: "bg-red-100 text-red-800 hover:bg-red-100",
        label: "Open",
      },
      [`${IssueStatusType.InProgress}`]: {
        className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
        label: "In Progress",
      },
      [`${IssueStatusType.Closed}`]: {
        className: "bg-blue-100 text-blue-800 hover:bg-blue-100",
        label: "Closed",
      },
      [`${IssueStatusType.Resolved}`]: {
        className: isClickable
          ? "bg-green-100 text-green-800 hover:bg-green-200 cursor-pointer"
          : "bg-green-100 text-green-800 hover:bg-green-100",
        label: "Resolved",
      },
    };

    const config =
      statusConfig[status || ""] || statusConfig[`${IssueStatusType.Open}`];
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const getDifficultyBadge = (difficulty: QuestionDifficultyType) => {
    const colors: {
      [key: string]: string;
    } = {
      [`${QuestionDifficultyType.Easy}`]: "bg-green-100 text-green-800",
      [`${QuestionDifficultyType.Medium}`]: "bg-yellow-100 text-yellow-800",
      [`${QuestionDifficultyType.Hard}`]: "bg-red-100 text-red-800",
    };
    return (
      <Badge className={`${colors[difficulty]} hover:${colors[difficulty]}`}>
        {difficulty}
      </Badge>
    );
  };

  const getQuestionIssues = (questionNumber: number) => {
    return issues.filter((issue) => {
      // Pattern match "Question X:" in the description
      const match = issue.description?.match(/^Question (\d+):/);
      return match && parseInt(match[1]) === questionNumber;
    });
  };

  const handleCreateIssue = (questionNumber: number) => {
    setSelectedQuestionNumber(questionNumber);
    setIsCreateIssueModalOpen(true);
  };

  const handleIssueClick = (issueId: string, status: IssueStatusType) => {
    if (status === IssueStatusType.Resolved) {
      setSelectedIssue(issues.find((issue) => issue.id === issueId));
      setIsCloseIssueModalOpen(true);
    }
  };

  const handleCompleteReview = async () => {
    const openIssues = issues.filter(
      (issue) => issue.status === IssueStatusType.Open,
    );
    if (openIssues.length > 0) {
      alert(
        `Cannot complete review. There are ${openIssues.length} open issue(s) that need to be resolved first.`,
      );
      return;
    }

    await closeReview({
      variables: {
        reviewId,
      },
    });
    router.push(`/versions/${versionId}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const openIssuesCount = issues.filter((issue) =>
    [
      IssueStatusType.Open,
      IssueStatusType.InProgress,
      IssueStatusType.Resolved,
    ].includes(issue.status),
  ).length;

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
    fetchReviewDetails();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between px-8 py-6 bg-white border-b">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => router.push(`/versions/${versionId}`)}
              className="p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-gray-950">
                  {reviewDetails?.title}
                </h1>
                {getStatusBadge(reviewDetails?.status)}
              </div>
              <p className="text-sm text-gray-600">
                {reviewDetails?.course_name} • v{reviewDetails?.version_number}
                .0 • Created {formatDate(reviewDetails?.date_created || "")}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={handleCompleteReview}
              className="bg-green-700 hover:bg-green-800 flex items-center gap-2"
              disabled={openIssuesCount > 0}
            >
              <CheckCircle className="w-4 h-4" />
              Complete Review
            </Button>
          </div>
        </div>

        <div className="flex-1 px-8 py-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h3 className="text-sm font-bold text-gray-800 mb-2">
              Review Message
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {reviewDetails?.review_message}
            </p>
          </div>

          {openIssuesCount > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2">
                <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                  {openIssuesCount} Pending Issue
                  {openIssuesCount !== 1 ? "s" : ""}
                </Badge>
                <p className="text-sm text-red-800">
                  Please close all resolved issues before completing the review.
                </p>
              </div>
            </div>
          )}

          <div className="bg-white rounded-lg border border-gray-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-bold text-gray-950">Questions</h2>
                <Badge variant="outline">{questions.length} Total</Badge>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {questions.map((question) => {
                const questionIssues = getQuestionIssues(
                  question.question_number,
                );
                const hasOpenIssues = questionIssues.some(
                  (issue) => issue.status === IssueStatusType.Open,
                );

                return (
                  <div key={question.id} className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex gap-4 flex-1">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm font-bold text-gray-700 flex-shrink-0">
                          {question.question_number}
                        </div>
                        <div className="flex-1 flex flex-col space-y-3">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="text-base font-medium text-gray-900">
                              {question.description}
                            </p>
                            {getDifficultyBadge(question.difficulty)}
                            <Badge variant="outline" className="text-xs">
                              {question.type}
                            </Badge>
                            {hasOpenIssues && (
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                Has Issues
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center gap-4 text-xs text-gray-500 flex-wrap">
                            <span>
                              ⏱️{" "}
                              {(question.estimated_time_in_ms / 1000).toFixed(
                                0,
                              )}
                              s
                            </span>
                            {question.tags && question.tags.length > 0 && (
                              <div className="flex gap-1 flex-wrap">
                                {question.tags.map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {tag.replace("TAG_", "")}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="flex flex-col space-y-2">
                            {question.options?.map((option, optIndex) => (
                              <div
                                key={option}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                                  question.correct_answer === option
                                    ? "bg-green-50 border border-green-200"
                                    : "bg-gray-50"
                                }`}
                              >
                                <span className="text-sm font-medium text-gray-600">
                                  {String.fromCharCode(65 + optIndex)}.
                                </span>
                                <span className="text-sm text-gray-700">
                                  {option}
                                </span>
                                {question.correct_answer === option && (
                                  <Badge className="ml-auto bg-green-100 text-green-800 hover:bg-green-100">
                                    Correct
                                  </Badge>
                                )}
                              </div>
                            ))}
                          </div>

                          {question.hints && question.hints.length > 0 && (
                            <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                              <p className="text-xs font-bold text-blue-900 mb-1">
                                Hints:
                              </p>
                              <ul className="text-xs text-blue-800 space-y-1">
                                {question.hints.map((hint) => (
                                  <li key={hint}>• {hint}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {question.solution_steps &&
                            question.solution_steps.length > 0 && (
                              <div className="bg-purple-50 border border-purple-200 rounded-md p-3">
                                <p className="text-xs font-bold text-purple-900 mb-1">
                                  Solution Steps:
                                </p>
                                <ol className="text-xs text-purple-800 space-y-1 list-decimal list-inside">
                                  {question.solution_steps.map((step) => (
                                    <li key={step}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            )}

                          {questionIssues.length > 0 && (
                            <div className="bg-red-50 border border-red-200 rounded-md p-3 space-y-2">
                              <p className="text-xs font-bold text-red-900">
                                Issues:
                              </p>
                              {questionIssues.map((issue) => (
                                <div
                                  key={issue.id}
                                  className="flex items-start gap-2"
                                >
                                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                                  <div className="flex-1 flex items-start justify-between gap-2">
                                    <p className="text-xs text-red-800">
                                      {issue.description}
                                    </p>
                                    <div
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleIssueClick(
                                          issue.id,
                                          issue.status,
                                        );
                                      }}
                                    >
                                      {getIssueStatusBadge(
                                        issue.status,
                                        issue.status ===
                                          IssueStatusType.Resolved,
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="ml-12">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          handleCreateIssue(question.question_number)
                        }
                        className="flex items-center gap-2"
                      >
                        <AlertCircle className="w-4 h-4" />
                        Report Issue for Question {question.question_number}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <CreateIssueModal
        open={isCreateIssueModalOpen}
        onClose={() => {
          setIsCreateIssueModalOpen(false);
          setSelectedQuestionNumber(null);
        }}
        reviewId={reviewId}
        questionNumber={selectedQuestionNumber}
        handleUpdateIssues={handleUpdateIssues}
      />

      <CloseIssueModal
        open={isCloseIssueModalOpen}
        onClose={() => {
          setIsCloseIssueModalOpen(false);
          setSelectedIssue(undefined);
        }}
        issue={selectedIssue}
        handleUpdateIssues={handleUpdateIssues}
      />
    </div>
  );
}
