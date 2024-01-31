import { useEffect, useState } from 'react';
import { getData, postData, APIResponse } from 'api/api';

interface FetchHookResult<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

const useDataFetch = <T>(url: string, isPost: boolean = false): FetchHookResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response: APIResponse<T> = isPost ? await postData<T>(url) : await getData<T>(url);
                setData(response.result);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, isPost]);

    return { data, loading, error };
};

export default useDataFetch;
