import Link from "next/link";
import { Card } from "../ui/card";
import DeleteButton from "./delete-button";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { MotionDiv } from "../common/motion-wrapper";
import { itemVariants } from "@/utils/constants";

const SummaryHeader = ({
  //   fileUrl,
  title,
  createdAt,
}: {
  //   fileUrl: string;
  title: string | null;
  createdAt: string;
}) => {
  return (
    <div className="flex items-start gap-2 sm:gap-4">
      <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400 mt-1" />
      <div className="flex-1 min-w-0">
        <h3 className="text-base xl:text-lg font-semibold text-gray-900 truncate w-4/5">
          {title}
        </h3>
        <p className="text-sm text-gray-500">
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  return (
    <span
      className={cn(
        "px-3 py-1 text-xs font-medium rounded-full capitalize",
        status === "completed"
          ? "bg-green-100 text-green-800"
          : "bg-yellow-100 text-yellow-800"
      )}
    >
      {status}
    </span>
  );
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SummaryCard = ({ summary }: { summary: any }) => {
  return (
    <MotionDiv
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <Card className="relative h-full">
        <div className="absolute top-2 right-2">
          <DeleteButton summaryId={summary.id} />
        </div>
        <Link href={`summaries/${summary.id}`} className="block p-4 sm:p-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3 sm:gap-4"
          >
            <SummaryHeader
              title={summary.title}
              createdAt={summary.created_at}
            />

            <p className="text-gray-600 line-clamp-2 text-sm sm:text-base pl-2">
              {summary.summary_text}
            </p>

            <div className="flex justify-between items-center mt-2 sm:mt-4">
              <StatusBadge status={summary.status} />
            </div>
          </MotionDiv>
        </Link>
      </Card>
    </MotionDiv>
  );
};

export default SummaryCard;
