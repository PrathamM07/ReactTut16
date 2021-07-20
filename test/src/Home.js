import Cakelist from "./Cakelist";
import Corousel from "./Corousel";

function Home()
{
    return(
        <div className="Container p-3 h-25">
<Corousel />
<Cakelist />
        </div>
    )
}
export default Home