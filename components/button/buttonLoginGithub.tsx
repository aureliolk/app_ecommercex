import { signIn } from "next-auth/react"
import { GithubLogo } from "phosphor-react"

export const ButtonLoginGitHub = ()=>{
    return(
        <button className="flex w-[150px] justify-between border items-center px-2 gap-2 text-sm h-[50px] bg-black text-white rounded font-bold group hover:text-black hover:bg-white" onClick={()=>signIn("github")}>
            <span>Fazer Login</span><GithubLogo className=" p-1 flex items-center justify-center rounded-full border group-hover:bg-black group-hover:text-white" size={30} />
        </button>
    )
}