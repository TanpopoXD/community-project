"use client"

import { Navbar } from "@/components/Navbar"
import { supabaseAdmin } from "@/libs/admin";
import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FiLink } from "react-icons/fi";
import { useQuery } from "react-query";

type Files = Database['public']['Tables']['files']['Row'];

export default function Dashboard() {
    const supabase = createClientComponentClient<Database>();
    const [fileUrls, setFileUrls] = useState<{ publicUrl: string }[]>([]);

    const { data: filesData } = useQuery<Files[]>(
        ['business-images'],
        async () => {
            const { data, error } = await supabase
                .from('files')
                .select('*')
            if (error) {
                throw error;
            }
            return data || [];
        }
    );

    useEffect(() => {
        if (filesData) {
            setFileUrls(filesData.map(file => ({
                publicUrl: file.file_url
            })))
        }
    }, [filesData])

    return (
        <>
            <div className="w-[1200px] m-auto flex flex-col items-start gap-8 justify-start">
                <Navbar />
                <h1 className="text-3xl font-bold">Список ваших файлів: </h1>
                {fileUrls.map((file, index) => (
                    <div key={index} 
                    className="p-4 border-[.5px] border-black/20 rounded-xl flex gap-4">
                        <div className="flex gap-2">
                            <FiLink className="text-2xl text-black/70" />
                            <p>
                                {file.publicUrl}
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className="flex">
                                <a className='text-black/80 font-semibold hover:text-black/70 transition-all'
                                    href={file.publicUrl}
                                    download>
                                    Download PDF
                                </a>
                                <BiDownload className="text-2xl text-green-500/50" />
                            </div>
                            <a className='text-black/80 font-semibold hover:text-black/70 transition-all'
                                href={file.publicUrl}
                                target="_blank"
                                rel="noopener noreferrer">
                                Open PDF
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}