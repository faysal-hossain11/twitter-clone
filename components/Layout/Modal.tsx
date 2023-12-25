import { useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabal: string;
    disabled?: boolean;

}


const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabal,
    disabled,
}) => {

    const handleClose = useCallback(() => {
        if(disabled) {
            return;
        }
        onClose();
    }, [disabled, onClose])

    const handleSubmit = useCallback(() => {
        if(disabled) {
            return;
        }
        onSubmit();
    }, [disabled, onSubmit])

    if(!isOpen) {
        return null;
    }
    return (
        <div>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto inset-0 fixed z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70">
                <div className="relative w-full lg:w-3/6 mx-auto my-6 lg:max-w-3xl h-full lg:h-auto">
                    {/* context */}
                    <div className="h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                        {/* header */}
                        <div className="flex items-center justify-center p-10 rounded-t">
                            <h2 className="text-3xl font-semibold text-white">{title}</h2>
                            <button onClick={handleClose} className="p-1 ml-auto border-0 hover:opacity-70 transition">
                                <IoMdClose size={24}/>
                            </button>
                        </div>
                        {/* body */}
                        <div className="relative p-10 flex-auto">
                            {body}
                        </div>
                        <div className="flex flex-col p-10 gap-2">
                            <Button disabled={disabled} labal={actionLabal} secondary fullWidth large onClick={handleSubmit}  />
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;