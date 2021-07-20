import {Link} from 'react-router-dom'
function Signup()
{

    return(

        <div className="container col-md-4 bg-dark text-white p-3">
<form>
<div className="form-group bg-danger text-whit text-center">
<h1>Sign Up Here</h1>
</div>
<div className="form-group">
<label for="InputName">Name</label>
<input type="text" className="form-control" placeholder="Enter your Name"></input>
</div>
<div className="form-group">
<label for="InputEmail">Email Address</label>
<input type="email" className="form-control" placeholder="Enter your Email"></input>
</div>
<div className="form-group">
<label for="InputPassword">Password</label>
<input type="password" className="form-control" placeholder="Enter your Password"></input>
</div>
<br />
<div className="form-group">
<button className="form-control btn btn-primary" type="submit">Sign Up</button>
</div>
</form>
        </div>
    )
}

export default Signup