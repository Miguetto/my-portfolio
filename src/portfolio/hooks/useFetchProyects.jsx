import { useEffect, useState } from "react";
import { getProyects } from "../helpers/getProyects";

export const useFetchProyects = () => {

    const [proyects, setProyects] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    
    const getProyectos = async() => {
      const newProyects = await getProyects();
      setProyects(newProyects);
      setIsLoading(false);
    }

    useEffect( () => {
      getProyectos();
    }, []);

  return {
    proyects,
    isLoading,
  }
  
}