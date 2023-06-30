import { useEffect, useState } from "react"

const useLocalStorage = (key, initialValue) => {
    const [data, setData] = useState(
        JSON.parse(localStorage.getItem(key)) || initialValue
    );

    const storeData = (data) => {
        setData(data);
    }

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [key, data])

    return [data, storeData];
}

export default useLocalStorage;