import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <>
        <p>Page Not Found</p>
        <button onClick={goBack}>Go Back?</button>
        </>
    );
}

export default PageNotFound;