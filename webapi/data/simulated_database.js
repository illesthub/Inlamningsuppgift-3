const products = [
    
    { id: 1, tag:"featured", articleNumber: "0208287e-bbba-41be-a7d2-0cbf2b97f37b", name: "Black coat", description: "", category: "Coats", price: 95, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/black-coat.png" },
    { id: 2, tag:"featured", articleNumber: "55afc7f5-6958-4aa9-9efa-28536c8aafa5", name: "Black dress", description: "", category: "Dresses", price: 88, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/black-dress.png" },
    { id: 3, tag:"expensiveDeals", articleNumber: "03aacdae-1918-4758-8202-a24cb75eed62", name: "Black top & pants set", description: "", category: "Sets", price: 107, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/black-set.png" },
    { id: 4, tag:"expensiveDeals", articleNumber: "9dba0288-82ec-4ad4-9241-1e49080b8c38", name: "White top & black pants set", description: "", category: "Sets", price: 115, rating: 2, imageName: "https://win22imgstorage.blob.core.windows.net/images/black-white-set.png" },
    { id: 5, tag:"expensiveDeals", articleNumber: "d785f6e0-9ade-4acd-9fa7-f9d5f7256df9", name: "Blue jacket", description: "", category: "Jackets", price: 299, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-jacket.png" },
    { id: 6, tag:"expensiveDeals", articleNumber: "b17bd1e0-d16e-4fcd-ba6f-5c18e8c5f577", name: "Blue hoodie & pants", description: "", category: "Sets", price: 150, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-set.png" },
    { id: 7, tag:"cheapDeals", articleNumber: "c76c2d26-a6c0-4d61-8765-c1ac3fa55a6e", name: "Blue t-shirt", description: "", category: "T-Shirts", price: 25, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-tshirt.png" },
    { id: 8, tag:"featured", articleNumber: "6da1eb10-2ea0-42cc-b33e-1a80ea55dd7f", name: "Brown sweater", description: "", category: "Sweaters", price: 35, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/brown-sweater.png" },
    { id: 9, tag:"featured", articleNumber: "3bdf270c-ad87-412d-b6e5-9270b3a8edde", name: "Brown watch", description: "", category: "Watches", price: 150, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/brown-watch.png" },
    { id: 10, tag:"featured", articleNumber: "cf2f628a-64ad-4a2b-af02-e7bf2523551d", name: "Stiletto shoes", description: "", category: "Shoes", price: 89, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/chrome-shoe.png" },
    { id: 11, tag:"cheapDeals", articleNumber: "c1db784f-925c-4d1e-8e4e-bd82986a251f", name: "Gray t-shirt", description: "", category: "T-Shirts", price: 15, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/gray-tshirt.png" },
    { id: 12, tag:"", articleNumber: "c7aaac5f-1331-4e27-9762-c8a4ce71b5b9", name: "Jeans dress", description: "", category: "Jeans", price: 55, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/jeans-dress.png" },
    { id: 13, tag:"expensiveDeals", articleNumber: "85997105-68b6-4b4a-82d3-2d8a84013392", name: "Jeans jacket & pants", description: "", category: "Sets", price: 110, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/jeans-set.png" },
    { id: 14, tag:"cheapDeals", articleNumber: "c06e40df-dc7f-4685-9b70-3252ced50c3b", name: "Olive sweater", description: "", category: "Sweaters", price: 19, rating: 2, imageName: "https://win22imgstorage.blob.core.windows.net/images/olive-sweater.png" },
    { id: 15, tag:"cheapDeals", articleNumber: "89e5c70d-10ad-4bf1-bbbb-ab47d638fca8", name: "Multicolor t-shirt", description: "", category: "T-Shirts", price: 25, rating: 2, imageName: "https://win22imgstorage.blob.core.windows.net/images/multicolor-tshirt.png" },
    { id: 16, tag:"featured", articleNumber: "fe98d7e0-1f6f-4fdd-b879-a8bf121ff1ed", name: "Purple handbag", description: "", category: "Bags", price: 99, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/purple-bag.png" },
    { id: 17, tag:"featured", articleNumber: "16f5e100-6f97-4ddf-a085-f3fc904acc81", name: "Red handbag", description: "", category: "Bags", price: 105, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/red-bag.png" },
    { id: 18, tag:"featured", articleNumber: "52cb7fdb-b85d-4113-b177-ff35dcaceb17", name: "Red dress", description: "", category: "Dresses", price: 67, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/red-dress.png" },
    { id: 19, tag:"", articleNumber: "26fc2b12-ceb4-484b-80d8-8340f2d1e17e", name: "Striped top", description: "", category: "Tops", price: 45, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/striped-top.png" },
    { id: 20, tag:"cheapDeals", articleNumber: "9019fb0d-e780-4134-ba91-5c635b5f1dcb", name: "Striped pink pants", description: "", category: "Pants", price: 36, rating: 2, imageName: "https://win22imgstorage.blob.core.windows.net/images/striped-pants.png" },
    { id: 21, tag:"cheapDeals", articleNumber: "2d1857a1-5993-45ae-bb10-3ecbd66e00f9", name: "White sweater", description: "", category: "Sweaters", price: 25, rating: 2, imageName: "https://win22imgstorage.blob.core.windows.net/images/white-sweater.png" },
    { id: 22, tag:"expensiveDeals", articleNumber: "c6e630a9-7d52-4389-8691-744978aed5c7", name: "Winter boots", description: "", category: "Shoes", price: 85, rating: 2, imageName: "https://win22imgstorage.blob.core.windows.net/images/winter-boots.png" },
]

module.exports = products


