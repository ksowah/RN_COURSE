import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error(`Error Status: ${response.status}`);
      }

      const data = await response.json();
      setData(data?.products);
    } catch (error: any) {
      console.log("error", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
  }, [url])
  
  return {data, loading, error, refetch: fetchData}
}
