import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Product() {
    const [product, setProduct] = useState({});
    const {id} = useParams()

    const getProduct = ()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((json)=>{
            setProduct(json);
        })
    }

    useEffect(()=>{
        getProduct();
    },[])

    return (
        <section id="Product" className="p-[10px] bg-green-100">
            <div className="container min-h-[80vh] mx-auto ">
                <div className="flex items-center flex-col gap-[15px] p-[20px]  bg-white rounded-[6px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <img src={product.image} className="max-w-full h-[350px]" alt="Product Image" />
                    <h3 className="text-center text-[18px] font-bold text-green-900">{product.title}</h3>
                    <p className="text-center leading-[1.6] text-[16px] font-bold text-[#2c2c2c]">{product.description}</p>
                    <span className="text-[18px] font-bold text-green-700">Price : {product.price}$</span>
                </div>
            </div>
        </section>
    )
}

export default Product;
