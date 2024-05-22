import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { formatCurrency } from "@/lib/utils";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { Badge } from "./badge";
import { Button } from "./button";
import { Product } from "@/data/types";

interface ProductCardProps {
  product: Product;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductCard = ({ product, loading, setLoading }: ProductCardProps) => {
  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <Link to={`/products/${product.id}`} state={product} key={product.id}>
      <Card className="overflow-hidden transition hover:scale-105">
        <CardHeader className="relative mb-0 h-56">
          <img
            className={`absolute inset-0 h-full w-full object-cover ${
              loading ? "blur-sm" : ""
            }`}
            src={product.images.at(0)}
            onLoad={handleImageLoad}
            alt={product.name}
            loading="lazy"
          />
        </CardHeader>
        <CardContent className="mt-2 space-y-2 px-4 md:mt-0 md:py-4">
          <div className="flex h-10 w-full items-center justify-between">
            <CardTitle>{product.name}</CardTitle>
            <p className="text-muted-foreground">
              {formatCurrency(product.price)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex h-8 items-center">
              {product.rating > 4.5 ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <StarFilledIcon key={i} className="text-primary" />
                ))
              ) : (
                <>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <StarFilledIcon key={i} className="text-primary" />
                  ))}
                  <StarIcon className="text-primary" />
                </>
              )}
            </div>
            {product.discount && (
              <Badge variant="outline">{`${product.discount}% Off`}</Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className=" px-4">
          <Button variant="outline">Add to Cart</Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
