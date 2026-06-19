import { useEffect, useState } from "react";

const DEFAULT_ERROR_MESSAGE = "Unable to load data.";

export function useDataFetch<TData>(
    url: string | null,
    initialData: TData,
    errorMessage = DEFAULT_ERROR_MESSAGE,
) {
    const [data, setData] = useState<TData>(initialData);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!url) {
            setData(initialData);
            setIsLoading(false);
            setError(null);
            return;
        }

        const requestUrl = url;

        async function loadData() {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(requestUrl);

                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }

                const nextData = await response.json() as TData;
                setData(nextData);
            } catch (loadError) {
                console.warn(loadError);
                setData(initialData);
                setError(errorMessage);
            } finally {
                setIsLoading(false);
            }
        }

        void loadData();
    }, [errorMessage, url]);

    return {
        data,
        isLoading,
        error,
    };
}
