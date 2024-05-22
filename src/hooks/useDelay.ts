import { useEffect, useState } from "react";

export const useDelay = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return { loading, setLoading };
};
