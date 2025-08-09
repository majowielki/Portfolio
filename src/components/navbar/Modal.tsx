import Close from "./CloseBurgerMenu";
import { useGlobalState } from "@/contexts/GlobalStateContext";

const Modal = () => {

    const { isModalOpen, exitModal } = useGlobalState();

    return (<>
        {isModalOpen ? <>
            <div className="fixed top-0 right-0 p-2 z-[101]" onClick={exitModal}><Close /></div> 
            <div className="fixed text-text text-4xl  bg-bg backdrop-blur-md bg-opacity-40 w-full h-screen min-h-screen z-[100]">
            </div></> : <></>}
        </>)
}

export default Modal;