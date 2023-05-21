import { useLocation } from "react-router-dom"

const Token=()=>{
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');
  console.log(code);
    return(
        <div>
            <button>
                Get access token
            </button>
        </div>
    )
}

export default Token