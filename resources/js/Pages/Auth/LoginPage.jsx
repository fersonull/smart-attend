import { Head } from "@inertiajs/react"
import { bgGradientButton } from '@/modules/styles'
import AuthLayout from '@/Layouts/AuthLayout'
import { useForm } from "@inertiajs/react"

const LoginPage = () => {

    const { data, setData, errors, processing, post } = useForm({
        'email': '',
        'password': '',
    })
    
    const { email, password } = errors

    // console.log(errors)

    function submit(e) {
        e.preventDefault()
        post('/login')
    }

    return (
        <div className="p-4 bg-white shadow rounded">
            <form onSubmit={submit}>
                <h3 className="mb-4 display-5">Login</h3>
                <div className=" d-flex flex-column gap-3">
                    <div className="d-flex flex-column gap-1">
                        <label>Email</label>
                        <input type="text" onChange={e => setData('email', e.target.value)}  className="form-control"/>
                        {email && <span>{ email }</span>}
                    </div>
                    <div className="d-flex flex-column gap-1">
                        <label>Password</label>
                        <input type="password" onChange={e => setData('password', e.target.value)} className="form-control"/>
                        {password && <span>{ password }</span>}
                    </div>

                    <div className="d-flex">

                    </div>

                    <button type="submit" className="rounded py-1 border poppins-semibold" style={bgGradientButton}>Login</button>
                </div>

                {/* <input type="text" onChange={(e) => setData('email', e.target.value)} placeholder="Email" />
                <input type="text" onChange={(e) => setData('password', e.target.value)} placeholder="Password" />
                <button type="submit">Login</button> */}
            </form>
        </div>
        
    )
}

LoginPage.layout = (page) => <AuthLayout children={page} />

export default LoginPage