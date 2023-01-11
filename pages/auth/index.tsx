import { FormLogin } from "../../components/forms/formLogin"

const Index = ()=>{
    return(
        <div className="flex flex-col w-full h-screen bg-slate-200 justify-center items-center">
            <h1 className="text-xl font-bold my-4" >Fazer Login</h1>
            <FormLogin />
        </div>
    )
}

export default Index