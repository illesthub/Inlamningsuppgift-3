import { useContext, useState } from "react";
import { createContext } from "react";
import { ProductItem } from "../models/ProductModels";


interface ProductProviderType {
    children?: any
}

export interface ProductContextType {
    product: ProductItem
    products: ProductItem[]
    featured: ProductItem[]
    cheapDeals: ProductItem[]
    expensiveDeals: ProductItem[]
    get: (articleNumber?: string) => void
    getAll: () => void
    getFeatured: (take?: number) => void
    getCheapDeals: (take?: number) => void
    getExpensiveDeals: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext) }

const ProductProvider: React.FC<ProductProviderType> = ({ children }) => {
    const baseUrl: string = 'http://localhost:5000/api/products'
    const empty_products: ProductItem = { tag: '', articleNumber: 0, name: '', description: '', category: '', price: 0, rating: 0, imageName: '' }

    const [product, setProduct] = useState<ProductItem>(empty_products)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [featured, setFeatured] = useState<ProductItem[]>([])
    const [cheapDeals, setCheapDeals] = useState<ProductItem[]>([])
    const [expensiveDeals, setExpensiveDeals] = useState<ProductItem[]>([])

    const get = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res: any = await fetch(baseUrl + `/product/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getAll = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getFeatured = async (take: number = 0) => {
        let url = `${baseUrl}/featured`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setFeatured(await res.json())
    }

    const getCheapDeals = async (take: number = 0) => {
        let url = `${baseUrl}/cheapDeals`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setCheapDeals(await res.json())
    }

    const getExpensiveDeals = async (take: number = 0) => {
        let url = `${baseUrl}/expensiveDeals`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setExpensiveDeals(await res.json())
    }


    return <ProductContext.Provider value={{ product, products, featured, cheapDeals, expensiveDeals, getExpensiveDeals, getCheapDeals, getFeatured, get, getAll }}>
        {children}
    </ProductContext.Provider>
}


export default ProductProvider