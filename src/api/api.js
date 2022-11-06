import axios from "axios";

export const apiCalling = (url, setState, setLoading, navigate) => {
    axios
        .get(url)
        .then((response) => {
            if (response?.status === 200) {
                setState(response?.data);
                setLoading(false);
            }
        })
        .catch(() => {
            setLoading(false);
            navigate(`/error`);
        });
}