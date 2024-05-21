import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const AllProductSkeleton = () => {
  return Array.from({ length: 8 }).map((_, i) => (
    <Card className="overflow-hidden" key={i}>
      <CardHeader className="relative mb-0 h-56">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[230px]" />
          <Skeleton className="h-4 w-[220px]" />
          <Skeleton className="h-4 w-[210px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </CardHeader>
      <CardContent className="mt-2 space-y-2 px-6 md:mt-0 md:px-6 md:py-4">
        <div className="flex items-center gap-1">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-4 w-[180px]" />
        </div>
        <div className=" w-full space-y-2">
          <Skeleton className="h-4 w-[230px]" />
          <Skeleton className="h-4 w-[230px]" />
        </div>
      </CardContent>
    </Card>
  ));
};

export default AllProductSkeleton;
