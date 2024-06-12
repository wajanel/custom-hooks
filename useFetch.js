import { useEffect } from "react"
import { useState } from "react"

const localCache = {    }

export const useFetch = (url) => {

    const [fetchState, setfetchState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    useEffect( () => {
      fetchData(url)
    }, [url])

    const setLoadingState = ()=>{
        setfetchState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }

    const fetchData = async()=>{

        if (localCache[url]) {
            console.log('utilizando cache');
            setfetchState({
                data: localCache[url],
                isLoading:false,
                hasError:false,
                error:null
            })

            return;
        } else {
            console.log('utilizando el fetch');
        }

        setLoadingState();
        const resp = await fetch(url);
        
        if(!resp.ok) {
            setfetchState({
                data:null,
                isLoading:false,
                hasError:true,
                error:{
                    message: resp.statusText,
                    errorCode: resp.status
                }
            })
            return;
        }

        const data = await resp.json();

        setfetchState({
            data: data,
            isLoading:false,
            hasError:false,
            error:null
        })

        localCache[url] = data;
        //console.log(localCache);
    }

  return (
    {
        data : fetchState.data,
        isLoading : fetchState.isLoading,
        hasError : fetchState.hasError
    }
  )
}
