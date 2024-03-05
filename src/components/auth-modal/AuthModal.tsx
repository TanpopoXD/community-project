"use client"

import { Auth } from "@supabase/auth-ui-react";
import { Modal } from "./Modal"
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { useAuthModal } from "@/hooks/useAuthModal";

export const AuthModal = () => {
    const supabaseClient = createClientComponentClient<Database>()
    const router = useRouter()
    const { session } = useSessionContext();
    const { onClose, isOpen } = useAuthModal();

    const onChange = (open: boolean) => {
        if (!open) {
            onClose()
        }
    }

    useEffect(() => {
        if (session) {
            router.push('/dashboard')
        }
    }, [session, router, onClose])

    return (
        <div>
            <Modal
                title=""
                description={`"Державна установа "ДЗОВ Водограй"`}
                isOpen={isOpen}
                onChange={onChange}>
                <Auth
                    theme="dark"
                    magicLink={false}
                    providers={[]}
                    supabaseClient={supabaseClient}
                    appearance={{
                        theme: ThemeSupa,
                        variables: {
                            default: {
                                colors: {
                                    inputBackground: '#ffffff',
                                }
                            }
                        }
                    }
                    }
                    localization={{
                        variables: {
                            sign_in: {
                                email_label: 'Електронна пошта',
                                password_label: 'Пароль',
                                button_label: 'Увійти',
                                email_input_placeholder: 'Введіть вашу електронну пошту',
                                password_input_placeholder: 'Введіть ваш пароль',
                                loading_button_label: 'Зачекайте...',
                                link_text: 'Вже маєте акаунт? Увійти'
                            },
                            sign_up: {
                                email_label: 'Електронна пошта',
                                password_label: 'Пароль',
                                button_label: 'Зареєструватися',
                                email_input_placeholder: 'Введіть вашу електронну пошту',
                                password_input_placeholder: 'Введіть ваш пароль',
                                loading_button_label: 'Зачекайте...',
                                link_text: 'Вже маєте акаунт? Увійти',
                                confirmation_text: 'Ви отримаєте лист на вашу електронну пошту з посиланням для підтвердження'
                            }
                        },
                    }}
                />
            </Modal>
        </div>

    )
}