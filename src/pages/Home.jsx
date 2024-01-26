import Categories from "../components/Categories"
import CategoryItem from "../components/CategoryItem"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Parallax from "../components/Parallax"
import ProductCategories from "../components/ProductCategories"
import ScrollingText from "../components/ScrollingText"

const Home = () => {

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

export default Home