'use client'

import { getCategoryWithProductGroup } from "@/app/services/product";
import { ICategory } from "@/app/types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface IProps {
    slugProductGroup : string
}

const ChildMenuItem = ({ slugProductGroup } : IProps) => {

    const { data, isLoading, error } = useQuery({
        queryKey: ["slugProductGroup", slugProductGroup],
        queryFn: () => getCategoryWithProductGroup(slugProductGroup)
    });

    if (isLoading) return <p>Đang tải...</p>;
    if (error) return <p>Có lỗi xảy ra.</p>;

    return (
        <>
            {
                data.data.map((category: ICategory) => {
                    return (
                        <li key={category.documentId}><Link href={`/category/${category.slug}`}>{category.name}</Link></li>
                    )
                })
            }
        </>
    )
}

export default ChildMenuItem;