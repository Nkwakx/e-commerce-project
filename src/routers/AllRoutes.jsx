import Home from '../pages/layouts/Home';
import Fitness from '../pages/home/Fitness';
import Supplements from '../pages/home/Supplements';
import WaterSport from '../pages/home/WaterSport';
import { IoFitnessOutline } from 'react-icons/io5';
import { FaNutritionix } from 'react-icons/fa';
import { GiWaterPolo } from 'react-icons/gi';
import ProductDetails from '../pages/home/Views/ProductDetails';
import CartItemList from './../pages/home/cart/CartItemList';
import Contact from './../pages/home/Views/Contact';
import FAQ from '../pages/home/Views/FAQ';
import Wrapper from './Wrapper';
import WrapperWithoutNav from './WrapperWithoutNav';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import Authetication from '../pages/layouts/Authetication';


export const RoutesObj = {

    sign_in: { name: "Sign In", path: "/signin", comp: <WrapperWithoutNav body={<SignIn/>} />, ex: true },
    sign_up: { name: "Sign Up", path: "/signup", comp: <WrapperWithoutNav body={<SignUp/>} />, ex: true },
    forgot_password: { name: "Forgot Password", path: "/forgot", comp: <WrapperWithoutNav body={<ForgotPassword/>} />, ex: true },
    reset_password: { name: "Reset Password", path: "/reset", comp: <WrapperWithoutNav body={<ResetPassword/>} />, ex: true },

    auth: { name: "Authetication", path: "/auth", comp: <WrapperWithoutNav body={<Authetication />} />, ex: true },
    
    cart: { name: "Cart", path: "/cart", comp: <Wrapper body={<CartItemList/>} />, ex: true },
    contact: { name: "Contact", path: "/contact", comp: <WrapperWithoutNav body={<Contact/>} />, ex: true },
    faq: { name: "Faq", path: "/faq", comp: <WrapperWithoutNav body={<FAQ/>} />, ex: true },

    product: { name: "Product", path: "/:cat/:subcat/:product", comp: <Wrapper body={<ProductDetails/>} />, ex: false },
    home: { name: "Home", path: "/", comp: <Wrapper body={<Home />} />, ex: true },

};

export const CategoriesObj = {

    fitness: {
        name: "Fitness", path: "/fitness", comp: <Fitness />, iconClassName: <IoFitnessOutline />, ex: false,
        subMenus: [
            { name: "Yoga, Pilates & Studio", path: "/fitness/yoga-pilates-studio" },
            { name: "Combact Sport", path: "/fitness/combact-sport" },
            { name: "Training", path: "/fitness/training" },
            { name: "Dancing", path: "/fitness/dancing" },
        ],
        productD: [
            { name: "Product Details", path: ":id", comp: <ProductDetails />, ex: true }
        ],
    },
    supplements: {
        name: "Supplements", path: "/supplements", comp: <Supplements />, iconClassName: <FaNutritionix />, ex: true,
        subMenus: [
            { name: "Nutrition", path: "/supplements/nutrition" },
            { name: "Protein Supplements", path: "/supplements/protein-supplements" },
            { name: "Supplements Shakers", path: "/supplements/supplements-shakers" },
            { name: "Nutrition Bars & Drinks", path: "/supplements/nutrition-bars-drinks" },
        ],
    },
    waterSport: {
        name: "WaterSport", path: "/watersport", comp: <WaterSport />, iconClassName: <GiWaterPolo />, ex: true,
        subMenus: [
            { name: "Fishing", path: "/watersport/fishing" },
            { name: "Diving", path: "/watersport/diving" },
            { name: "Surfing", path: "/watersport/surfing" },
            { name: "Swimming", path: "/watersport/swimming" },
        ],
    },
};


export const AllRoutes = Object.values(RoutesObj);
export const AllSubCateg = Object.values(CategoriesObj);

// change to see all subs

// let mF = {name: CategoriesObj.fitness.name, path: CategoriesObj.fitness.path}
// let mS = {name: CategoriesObj.supplements.name, path: CategoriesObj.supplements.path}
// let mW = {name: CategoriesObj.waterSport.name, path: CategoriesObj.waterSport.path}

// let f = CategoriesObj.fitness.subMenus
// let w = CategoriesObj.waterSport.subMenus
// let s = CategoriesObj.supplements.subMenus


// let local = [...f, ...s, ...w]
// // local.push(mF)
// // local.push(mS)
// // local.push(mW)

// export const AllSubCateg = local