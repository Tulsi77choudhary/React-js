import {useState,useContext} from "react";
import UserContext from "../context/UserContext";

function Login(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }

    return(
        <div className="max-w-sm mx-auto w-100  mt-10 p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            <input
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            className="bg-gray-100 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input type="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="bg-gray-100 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2"
            />
            <button  className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition" onClick={handleSubmit}>Submit</button>
        </div>
    )
   
}
export default Login;