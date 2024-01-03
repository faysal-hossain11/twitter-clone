
import { useCallback, useState } from "react";
import Input from "../Layout/Input";
import Modal from "../Layout/Modal";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";


const RegisterModal = () => {
    const LoginModal = useLoginModal();
    const RegisterModal = useRegisterModal();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoding, setIsLoding] = useState();


    const onToggle = useCallback(() => {
        if(isLoding) {
            return;
        }
        RegisterModal.onClose();
        LoginModal.onOpen();

    }, [isLoding, RegisterModal, LoginModal]);


    const onSubmit = useCallback(async () => {
        try{
            setIsLoding(true);
            // todo add  Register and login
            RegisterModal.onClose();

        }catch(error) {
            console.log(error);
        }finally{
            setIsLoding(false);
        }
    }, [RegisterModal]);

    const bodyContent = (
        <div className=" flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoding}
            />
            <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoding}
            />
            <Input
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                disabled={isLoding}
            />
            <Input 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoding}
            />
        </div>
    )

    const footerContent = (
        <div className="text-center mt-4 text-neutral-400">
            <p>Already an account?
                <span 
                    onClick={onToggle}
                    className="text-white cursor-pointer hover:underline"
                >
                     Sign in
                </span>
            </p>
        </div>
    )
    return (
        <Modal 
            disabled={isLoding}
            isOpen={RegisterModal.isOpen}
            title="Create an account"
            actionLabal="Register"
            onClose={RegisterModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default RegisterModal;