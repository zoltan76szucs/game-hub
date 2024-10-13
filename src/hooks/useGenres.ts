import { useEffect, useState } from "react";
import apClient from "../components/services/ap-client";
import { CanceledError } from "axios";

export interface Genre {
    id: number;
    name: string;

  }

  interface FetchGemresResponse {
    count: number;
    results: Genre[];
  }  

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isloading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
  
      setLoading(true);
      apClient
        .get<FetchGemresResponse>("/genres", { signal: controller.signal })
        .then((res) => {
            setGenres(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
  
      return () => controller.abort();
    }, []);
  
    return { genres, error, isloading };    
};

export default useGenres;
