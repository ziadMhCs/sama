//by ziad , 404 page
import { Link } from "react-router-dom";

export default function Errorpage(){
    return(
        <div>
            <h1> Error, you should not land here </h1>
            <Link to="/Dashboard/Main">get back to HOME</Link>
        </div>
    )

}