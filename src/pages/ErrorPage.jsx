import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-5xl text-[#A55E3F]">ERROR 404</h2>
            <h2 className="text-3xl text-[#A55E3F] my-6">Please Go back.</h2>
            <Link to='/'><button className="btn bg-[#A55E3F] text-white">Go To Home</button></Link>
        </div>
    );
};

export default ErrorPage;