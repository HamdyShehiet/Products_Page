import { Link } from "react-router-dom";

function Header() {

    return (
      <header className="sticky top-0 py-[25px] bg-white border border-b-[1px] border-solid ">
        <div className="contaioner mx-auto text-center">
          <Link to={"/"} className="text-[20px] text-green-700 font-semibold hover:text-green-800">Our Products</Link>
        </div>
      </header>
    )
  }
  
  export default Header;