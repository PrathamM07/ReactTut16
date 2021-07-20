import Cake from "./Cake"
function Cakelist()
{
    let ck1={
        Name:"Butter Cake",
        Price:"100 Rs",
        image:"Buttercake.jpg"
    }
    let ck2={
        Name:"Biscuit Cake",
        Price:"200 Rs",
        image:"BiscuitCake.jpg"
    }
    let ck3={
        Name:"Red Velvet",
        Price:"150 Rs",
        image:"redvelvet.jpg"
    }
    let ck4={
        Name:"Sponge Cake",
        Price:"200 Rs",
        image:"Spongecake.jpg"
    }
    return(
        <div className="container p-2">
        <div className="row">
            <div className="col-sm-3"><Cake data={ck1}></Cake></div>
            <div className="col-sm-3"><Cake data={ck2}></Cake></div>
            <div className="col-sm-3"><Cake data={ck3}></Cake></div>
            <div className="col-sm-3"><Cake data={ck4}></Cake></div>





        </div></div>
    )
}
export default Cakelist