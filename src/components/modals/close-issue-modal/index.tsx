"use client";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { Issue } from "@/common/graphql/generated/graphql";
import { useCloseIssue } from "@/common/hooks/mutations";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function CloseIssueModal({
  open,
  onClose,
  issue,
  handleUpdateIssues,
}: {
  open: boolean;
  onClose: () => void;
  issue: Issue | undefined;
  handleUpdateIssues?: (issue: Issue | undefined) => void;
}) {
  const [isClosing, setIsClosing] = useState(false);
  const { closeIssue } = useCloseIssue();

  const handleCloseIssue = async () => {
    if (!issue) return;

    setIsClosing(true);

    try {
      // Simulate API call - replace with actual mutation
      const updatedIssue = await closeIssue({
        variables: {
          issueId: issue?.id,
        },
      });

      handleUpdateIssues?.(updatedIssue?.data?.closeIssue);

      onClose();
    } catch (error) {
      console.error("Error closing issue:", error);
    } finally {
      setIsClosing(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-950">
            Close Issue
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col space-y-4 mt-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-xs font-bold text-gray-700 mb-2">
              Instructor Response:
            </p>
            <p className="text-sm text-gray-900">{issue?.response}</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium text-green-900">
                Confirm Issue Closure
              </p>
              <p className="text-sm text-green-800">
                This issue has been marked as resolved. Click confirm to close
                this issue permanently.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-xs text-blue-900">
              <span className="font-bold">Note:</span> Closing this issue will
              remove it from the open issues count. The instructor has indicated
              this issue has been resolved.
            </p>
          </div>

          <div className="flex gap-3 mt-6">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={onClose}
              disabled={isClosing}
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="flex-1 bg-green-700 hover:bg-green-800"
              onClick={handleCloseIssue}
              disabled={isClosing}
            >
              {isClosing ? "Closing..." : "Confirm Close Issue"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
