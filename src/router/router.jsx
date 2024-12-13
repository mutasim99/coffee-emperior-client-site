import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayouts from '../Layoutss/HomeLayouts';
import AddCoffee from '../Components/AddCoffee';
import CoffeCard from '../Components/CoffeCard';
import UpdatedCoffe from '../Components/UpdatedCoffe';

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayouts></HomeLayouts>,
        children:[
            {
                path:'/addCoffee',
                element:<AddCoffee></AddCoffee>
            },
            {
                path:'/',
                element:<CoffeCard></CoffeCard>,
                loader: ()=> fetch('http://localhost:5000/coffe')
            },
            
        ]
    },
    {
        path:'/update/:id',
        element:<UpdatedCoffe></UpdatedCoffe>,
        loader: ({params})=> fetch(`http://localhost:5000/coffe/${params.id}`)
    }
])

export default router;