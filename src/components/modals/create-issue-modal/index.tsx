"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { Issue } from "@/common/graphql/generated/graphql";
import { useAddReviewIssue } from "@/common/hooks/mutations";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type IssueForm = {
  description: string;
};

const issueSchema = z.object({
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .trim(),
});

export default function CreateIssueModal({
  open,
  onClose,
  reviewId,
  questionNumber,
  handleUpdateIssues,
}: {
  open: boolean;
  onClose: () => void;
  reviewId: string;
  questionNumber: number | null;
  handleUpdateIssues: (issue: Issue) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(issueSchema),
    defaultValues: {
      description: "",
    },
  });
  const { addReviewIssue } = useAddReviewIssue();

  useEffect(() => {
    if (open && questionNumber) {
      // Pre-fill the description with "Question X: "
      setValue("description", `Question ${questionNumber}: `);
    }
  }, [open, questionNumber, setValue]);

  const onSubmit: SubmitHandler<IssueForm> = async (data) => {
    const issue = await addReviewIssue({
      variables: {
        reviewId,
        issueInfo: {
          description: data.description,
        },
      },
    });

    handleUpdateIssues(issue.data?.addReviewIssue);

    reset();
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-950">
            Create New Issue
            {questionNumber ? ` for Question ${questionNumber}` : ""}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col space-y-4 mt-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-900">
              Describe the issue you found. The description will be
              automatically prefixed with "Question {questionNumber || "X"}:" to
              help identify which question this issue relates to.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="description"
              className="text-sm font-bold text-gray-800"
            >
              Issue Description
            </label>
            <Textarea
              id="description"
              placeholder="e.g., The correct answer is marked incorrectly. Option B should be the correct answer..."
              {...register("description")}
              rows={8}
              className={cn(
                "text-gray-600",
                errors.description ? "border-red-500" : "",
              )}
            />
            {errors.description && (
              <span className="text-sm text-red-500">
                {errors.description.message}
              </span>
            )}
            <p className="text-xs text-gray-500">
              Be specific about what needs to be fixed. The issue description
              will start with "Question {questionNumber || "X"}:" to maintain
              the association.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-xs font-bold text-yellow-900 mb-1">
              Pattern Matching:
            </p>
            <p className="text-xs text-yellow-800">
              Issues are associated with questions by pattern matching "Question
              X:" in the description. Keep this prefix to maintain the
              relationship.
            </p>
          </div>

          <div className="flex gap-3 mt-6">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gray-800 hover:bg-gray-950"
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create Issue"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
