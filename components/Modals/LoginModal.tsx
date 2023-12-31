
import { useCallback, useState } from "react";
import Input from "../Layout/Input";
import Modal from "../Layout/Modal";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";


const LoginModal = () => {
    const LoginModal = useLoginModal();
    const RegisterModal = useRegisterModal();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isLoding, setIsLoding] = useState();


    const onToggle = useCallback(() => {
        if(isLoding) {
            return;
        }
        LoginModal.onClose();
        RegisterModal.onOpen();

    }, [isLoding, LoginModal, RegisterModal]);


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
        <div className=" flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoding}
            />
            <Input 
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoding}
            />
        </div>
    )
    
    const footerContent = (
        <div className="text-center mt-4 text-neutral-400">
            <p>First time use Twitter? 
                <span 
                    onClick={onToggle}
                    className="text-white cursor-pointer hover:underline"
                >
                    Create an account
                </span>
            </p>
        </div>
    )


    return (
        <Modal 
            disabled={isLoding}
            isOpen={LoginModal.isOpen}
            title="Login"
            actionLabal="Sign in"
            onClose={LoginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default LoginModal;