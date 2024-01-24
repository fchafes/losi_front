import Categories from "../components/Categories"
import CategoryItem from "../components/CategoryItem"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/NavBar"
import Parallax from "../components/Parallax"
import ProductCategories from "../components/ProductCategories"
import ScrollingText from "../components/ScrollingText"
const Featured = () => {

    return (
        <div>
        <Header/>
        <Categories/>
        <CategoryItem/>
        <Parallax/>
        <ScrollingText/>
        <ProductCategories/>
        <Footer/>
        </div>
    )
}

export default Featured