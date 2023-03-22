import { useFormik } from "formik";
import { useState } from "react";
import { validationSchema } from "../schema/register-schema";
import { adminRegister } from "../services/admin-register-service";
import { useNavigate } from "react-router-dom";

const useAdminRegister = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [userAlreadyExist, setUserAlreadyExist] = useState(false);

    //Initial values of formik
    const initialValues = {
        email: "",
        name: "",
        password: "",
        repeatPassword: "",
    };
    //on Submit form
    const onSubmit = async (values, { resetForm }) => {
        setLoading(true);
        try {
            const response = await adminRegister(values);
            if (response === "User already exist !") {
                setUserAlreadyExist(true);
                resetForm();
            } else {
                setUserAlreadyExist(false);
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }

    };
    // formik hook
    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit,
    });

    return { loading, userAlreadyExist, setUserAlreadyExist, formik }


}
export default useAdminRegister