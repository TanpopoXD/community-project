import { IoMdClose } from "react-icons/io";
import * as Dialog from '@radix-ui/react-dialog';

interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title: string;
    description: string;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onChange,
    title,
    description,
    children
}) => {
    return (
            <Dialog.Root
                open={isOpen}
                defaultOpen={isOpen}
                onOpenChange={onChange}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-white backdrop-blur-sm" />
                    <Dialog.Content className='fixed  bg-white drop-shadow-md border top-[50%] left-[50%] max-h-full h-full w-full translate-x-[-50%] translate-y-[-50%] rounded-lg p-[25px] focus:outline-none md:w-[90vw] md:max-w-[450px] md:h-auto md:max-h-[85vh]'>
                        <Dialog.Title className='text-xl text-black text-center font-bold mb-4'>
                            {title}
                        </Dialog.Title>
                        <Dialog.Description className='mb-5 text-xl leading-normal text-center'>
                            {description}
                        </Dialog.Description>
                        <div>
                            {children}
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
    )
}