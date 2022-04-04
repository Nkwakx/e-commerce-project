import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AllRoutes } from './AllRoutes'
import Fitness from '../pages/home/Fitness';
import CombactSport from '../pages/home/components/fitness/CombactSport';
import Dancing from '../pages/home/components/fitness/Dancing';
import Training from '../pages/home/components/fitness/Training';
import YogaPilatesStudio from '../pages/home/components/fitness/YogaPilatesStudio';
import Nutrition from '../pages/home/components/supplements/Nutrition';
import NutritionBarsDrinks from '../pages/home/components/supplements/NutritionBarsDrinks';
import ProteinSupplements from '../pages/home/components/supplements/ProteinSupplements';
import SupplementsShakers from '../pages/home/components/supplements/SupplementsShakers';
import Fishing from '../pages/home/components/waterSport/Fishing';
import Diving from '../pages/home/components/waterSport/Diving';
import Surfing from '../pages/home/components/waterSport/Surfing';
import Swimming from '../pages/home/components/waterSport/Swimming';
import Supplements from '../pages/home/Supplements';
import WaterSport from '../pages/home/WaterSport';
import FitnessProducts from './../pages/home/components/DefaultProductsDisplay/FitnessProducts';
import SupplementsProducts from './../pages/home/components/DefaultProductsDisplay/SupplementsProducts';
import WaterProducts from './../pages/home/components/DefaultProductsDisplay/WaterProducts';
import ProductUploads from './../pages/admin/ProductUploads';
import AdminLayout from '../pages/layouts/AdminLayout'
import ProductDetails from '../pages/home/components/Views/ProductDetails';
import ProductList from '../pages/admin/ProductList';
import PageNotFound from '../pages/auth/PageNotFound';


export default function Routing() {
    return (
        <Router>
            <Routes>{
                AllRoutes.map((entry, index) => {
                    return <Route key={index} exact={entry.ex} path={entry.path} element={entry.comp} />
                })
            }
            </Routes>
           

            <Routes>
                <Route path='/fitness' element={<Fitness />}>
                    <Route path='' element={<FitnessProducts />} />
                    <Route path='combact-sport' element={<CombactSport />} />
                    <Route path='dancing' element={<Dancing />} />
                    <Route path='training' element={<Training />} />
                    <Route path='yoga-pilates-studio' element={<YogaPilatesStudio />} />
                </Route>
            </Routes>

            <Routes>
                <Route path='/supplements' element={<Supplements />}>
                    <Route path='' element={<SupplementsProducts />} />
                    <Route path='nutrition' element={<Nutrition />} />
                    <Route path='protein-supplements' element={<ProteinSupplements />} />
                    <Route path='supplements-shakers' element={<SupplementsShakers />} />
                    <Route path='nutrition-bars-drinks' element={<NutritionBarsDrinks />} />
                </Route>
            </Routes>

            <Routes>
                <Route path='/watersport' element={<WaterSport />}>
                    <Route path='' element={<WaterProducts />} />
                    <Route path='fishing' element={<Fishing />} />
                    <Route path='diving' element={<Diving />} />
                    <Route path='surfing' element={<Surfing />} />
                    <Route path='swimming' element={<Swimming />} />
                </Route>
            </Routes>

            <Routes >
                <Route path='/admin' element={<AdminLayout />}>
                    <Route path='' element={<ProductList />} />
                    <Route path='add-product' element={<ProductUploads />} />
                </Route>
            </Routes>
          
        </Router>
    )
}

