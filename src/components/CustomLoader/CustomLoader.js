import { getShoppingCart } from "../Utilities/fakedb";


const customLoader = async () => {
    const loadData = await fetch("/CompanyData.json")
    const data = await loadData.json()
    let savedCart = []

    const storedCart = getShoppingCart()
    if(storedCart){
        for (const id in storedCart) {
            const existingJob = data.find(job => job.id ==id)
            if(existingJob){
                savedCart.push(existingJob)
            }
        }
    }

    return savedCart
};

export {customLoader}