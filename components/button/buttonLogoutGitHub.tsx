import { signOut, useSession } from "next-auth/react"

export const ButtonLogoutGitHub = ()=>{
    const {data} = useSession()
    
    const avatar = data?.user?.image || undefined
    
    return(
        <button className="flex w-[150px] justify-between border items-center px-2 gap-2 text-sm h-[50px] bg-black text-white rounded font-bold group hover:text-black hover:bg-white" onClick={()=>signOut()}>
            <span>Sair</span><img src={avatar}  className="w-[30px] object-contain flex items-center justify-center rounded-full border group-hover:bg-black group-hover:text-white" />
        </button>
    )
}