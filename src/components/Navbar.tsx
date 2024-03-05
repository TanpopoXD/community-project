"use client"

import { supabaseAdmin } from '@/libs/admin';
import { Database } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LuLogOut } from 'react-icons/lu';

export const Navbar = () => {
    const supabase = createClientComponentClient<Database>();
    const router = useRouter();

    return (
        <>
            <div className='w-[1200px] m-auto flex justify-end py-4'>
                <button className='flex items-center gap-2 text-lg border-[1px] border-red-500/50 p-2 rounded-xl hover:opacity-70 transition' onClick={async () => {
                    await supabase.auth.signOut();

                    router.push('/');
                }}>
                    Вийти
                    <LuLogOut />
                </button>
            </div>

        </>
    );
};