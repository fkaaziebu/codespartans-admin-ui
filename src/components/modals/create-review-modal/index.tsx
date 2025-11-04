"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { ReviewStatusType } from "@/common/graphql/generated/graphql";
import { useAddCourseVersionReview } from "@/common/hooks/mutations";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type ReviewForm = {
  title: string;
  message: string;
};

const reviewSchema = z.object({
  title: z.string().min(1, "Title is required").trim(),
  message: z.string().min(1, "Review message is required").trim(),
});

export default function CreateReviewModal({
  open,
  onClose,
  versionId,
  handleUpdateReviews,
}: {
  open: boolean;
  versionId: string;
  onClose: () => void;
  handleUpdateReviews: (review: {
    id: string | undefined;
    title: string | undefined;
    review_message: string | undefined;
    number_of_issues: number | undefined;
    status: ReviewStatusType | undefined;
    date_created: string | undefined;
  }) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      title: "",
      message: "",
    },
  });

  const { addCourseVersionReview } = useAddCourseVersionReview();

  const onSubmit: SubmitHandler<ReviewForm> = async (data) => {
    try {
      const review = await addCourseVersionReview({
        variables: {
          versionId,
          reviewInfo: {
            title: data.title,
            message: data.message,
          },
        },
      });

      handleUpdateReviews({
        id: review.data?.addCourseVersionReview.id,
        title: review.data?.addCourseVersionReview.title,
        review_message: review.data?.addCourseVersionReview.message,
        number_of_issues: 0,
        status: ReviewStatusType.Open,
        date_created: `${new Date()}`,
      });
      reset();
      onClose();
    } catch (error) {
      console.log(error);
    }
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
            Create New Review
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col space-y-4 mt-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-900">
              Create a review to provide feedback on this course version. You
              can add issues and detailed feedback after creating the review.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="title" className="text-sm font-bold text-gray-800">
              Review Title
            </label>
            <Input
              id="title"
              type="text"
              placeholder="e.g., Initial Review - Course Structure"
              {...register("title")}
              className={cn(
                "py-5 text-gray-600",
                errors.title ? "border-red-500" : "",
              )}
            />
            {errors.title && (
              <span className="text-sm text-red-500">
                {errors.title.message}
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-bold text-gray-800"
            >
              Review Message
            </label>
            <Textarea
              id="message"
              placeholder="Provide an overall summary of your review..."
              {...register("message")}
              rows={6}
              className={cn(
                "text-gray-600",
                errors.message ? "border-red-500" : "",
              )}
            />
            {errors.message && (
              <span className="text-sm text-red-500">
                {errors.message.message}
              </span>
            )}
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
              {isSubmitting ? "Creating..." : "Create Review"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
