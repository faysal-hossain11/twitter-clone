import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";


const LoginModal = () => {
    const LoginModal = useLoginModal();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isLoding, setIsLoding] = useState();

    const onSubmit = useCallback(async () => {
        try{
            setIsLoding(true);
            // todo add login
            LoginModal.onClose();

        }catch(error) {
            console.log(error);
        }finally{
            setIsLoding(false);
        }
    }, [LoginModal]);

    const bodyContent = (
        <div className=" flex flex-col ">

        </div>
    )
    return (
        <div>
            
        </div>
    );
};

export default LoginModal;