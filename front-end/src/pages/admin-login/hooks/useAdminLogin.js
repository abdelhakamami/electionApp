import { useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "../schemas/login-schema";
import { adminLogin } from "../services/admin-login-service";
import { useNavigate } from "react-router-dom";

const useAdminLogin = () => {

    const navigate = useNavigate();
    const [token, setToken] = useState();
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);

    const initialValues = {
        email: "",
        password: "",
    };

    const onSubmit = async (values) => {
        try {
            setLoading(true);
            const response = await adminLogin(values);
            if (response.token) {
                setAlert(false);
                setToken(true);
                localStorage.setItem("token", JSON.stringify(response.token));
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error);
            setAlert(true);
            setToken();
        }
        finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit,
    });

    return { loading, alert, formik }
}
export default useAdminLogin