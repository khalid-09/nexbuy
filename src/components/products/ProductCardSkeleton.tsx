import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

interface ProductCardSkeletonProps {
  isAllProducts?: boolean;
}

const ProductCardSkeleton = ({ isAllProducts }: ProductCardSkeletonProps) => {
  const length = isAllProducts ? 8 : 4;

  return Array.from({ length }).map((_, i) => (
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
          <Skeleton className="h-4 w-[230px]" />
          <Skeleton className="h-4 w-[230px]" />
        </div>
      </CardContent>
    </Card>
  ));
};

export default ProductCardSkeleton;
