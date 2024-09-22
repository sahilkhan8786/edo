import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import FAQ from "./pages/FAQ"


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/pricing',
        element: <Pricing />
      },
      {
        path: '/faq',
        element: <FAQ />
      },
    ]
  }
])


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}