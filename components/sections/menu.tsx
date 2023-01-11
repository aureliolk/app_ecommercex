import Link from "next/link"
import { useSession,signOut } from 'next-auth/react'
import { ButtonLoginGitHub } from "../button/buttonLoginGithub"
import { ButtonLogoutGitHub } from "../button/buttonLogoutGitHub"


export const Menu = () => {
    const nav = [
        {
            name: "Home",
            url: "/"
        }
    ]

    const { data,status} = useSession()

    console.log(data)

    return (
        <div className="w-full bg-slate-100 flex justify-between items-center p-4">
            <div className="flex gap-2">
                {nav.map(item => {
                    return (
                        <Link href={item.url} key={item.name}>{item.name}</Link>
                    )
                })}
            </div>
            {status != "authenticated" ? <ButtonLoginGitHub /> :<ButtonLogoutGitHub />}
        </div>
    )
}