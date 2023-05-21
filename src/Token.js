import { useParams } from "react-router-dom"

const Token=()=>{
    const {code}=useParams();
    console.log(code)
    return(
        <div>
            <button>
                Get access token
            </button>
        </div>
    )
}

export default Token