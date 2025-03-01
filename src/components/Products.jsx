import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function Products() {
    const [products, setProducts] = useState([]);

    const getProducts = ()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then((res)=>res.json())
        .then((json)=>{
            setProducts(json);
        })
    }

    useEffect(()=>{
        getProducts();
    },[])

    return (
        <section id="Products" className="p-[20px] bg-green-100">
            <div className="container grid grid-cols-[repeat(auto-fit,min(305px,_100%))] justify-center items-center gap-[20px]  min-h-[100vh] mx-auto ">
                {
                    products.map(product => {
                        return (
                            <div key={product.id} className="product flex flex-col items-center gap-[15px] p-[20px] bg-white rounded-[6px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                                <img src={product.image} className="max-w-full h-[200px]" alt="Product Image" />
                                <h3 className="title min-h-[80px] text-center text-[18px] font-bold text-green-900">{product.title}</h3>
                                <Link to={`/product/${product.id}`} className="p-[10px_20px] rounded-[6px] text-[16px] font-semibold bg-green-600">More Details</Link>  
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Products;