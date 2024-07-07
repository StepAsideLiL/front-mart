import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="space-y-10">
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-40" />
    </div>
  );
}
