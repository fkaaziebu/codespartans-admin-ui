"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { VersionStatusType } from "@/common/graphql/generated/graphql";
import { useListAssignedVersions } from "@/common/hooks/queries";
import { Badge } from "@/components/ui/badge";

export default function AdminDashboard() {
  const router = useRouter();
  const { listAssignedVersions } = useListAssignedVersions();
  const [assignedVersions, setAssignedVersions] = useState<
    | {
        id: string;
        course_name: string | undefined;
        status: VersionStatusType | undefined;
        date_assigned: string;
        number_of_reviews: number;
        number_of_questions: number;
      }[]
    | undefined
  >();

  const listAdminAssignedVersions = async () => {
    try {
      const response = await listAssignedVersions({
        variables: {},
        fetchPolicy: "no-cache",
      });

      const allAssignedVersions = response.data?.listAssignedVersions.edges.map(
        (edge) => ({
          id: edge.node.id,
          course_name: edge.node.course?.title,
          status: edge.node.status,
          date_assigned: edge.node.review_request?.inserted_at,
          number_of_reviews: edge.node.total_reviews,
          number_of_questions: edge.node.total_questions,
        }),
      );

      setAssignedVersions(allAssignedVersions);
    } catch (error) {
      console.log(error);
    }
  };

  const getStatusBadge = (status: VersionStatusType | undefined) => {
    const statusConfig: {
      [key: string]: {
        className: string;
        label: string;
      };
    } = {
      [`${VersionStatusType.Pending}`]: {
        className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
        label: "Pending",
      },
      [`${VersionStatusType.Approved}`]: {
        className: "bg-green-100 text-green-800 hover:bg-green-100",
        label: "Approved",
      },
    };

    const config =
      statusConfig[status || ""] ||
      statusConfig[`${VersionStatusType.Pending}`];

    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const handleVersionClick = (versionId: string) => {
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

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
    listAdminAssignedVersions();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between px-8 py-6 bg-white border-b">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-gray-950">
              Admin Dashboard
            </h1>
            <p className="text-sm text-gray-600">
              Manage assigned course versions
            </p>
          </div>
          <Badge variant="outline" className="text-sm">
            {assignedVersions?.length} Assigned Versions
          </Badge>
        </div>

        <div className="flex-1 px-8 py-6">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-950">
                Assigned Course Versions
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">
                      Course Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">
                      Date Assigned
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">
                      No. of Reviews
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">
                      No. of Questions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {assignedVersions?.map((version) => (
                    <tr
                      key={version.id}
                      className="hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => handleVersionClick(version.id)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {version.course_name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(version.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {formatDate(version.date_assigned)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {version.number_of_reviews}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {version.number_of_questions}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {assignedVersions?.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12">
                <p className="text-gray-500 mb-2">No assigned versions yet</p>
                <p className="text-sm text-gray-400">
                  Course versions will appear here when assigned to you
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
