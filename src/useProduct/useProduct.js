import { useEffect, useState } from "react";

const useProduct = () =>{
    const [products, setProducts] = useState([])
    useEffect( () => {
        fetch('./education.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return [products]
}

export default useProduct;