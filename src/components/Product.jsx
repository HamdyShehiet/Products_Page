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
    },[id])

    return (
        <section id="Product" className="p-[20px] bg-green-100">
            <div className="container grid  justify-center items-center gap-[20px]  min-h-[80vh] mx-auto ">
                <div className="product flex flex-col items-center gap-[15px] p-[20px] bg-white rounded-[6px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <img src={product.image} className="max-w-full h-[400px]" alt="Product Image" />
                    <h3 className="title text-center text-[18px] font-bold text-green-900"></h3>
                </div>
            </div>
        </section>
    )
}

export default Product;
