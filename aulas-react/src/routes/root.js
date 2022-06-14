import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home/Index'
import { QuemSomos } from '../pages/quem-somos/Index'
import { NotFound } from '../pages/not-found/Index'

export const Root = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={'/'} element={<Home />} />
            {/* <Route path="/quemsomos" element={<QuemSomos />} /> */}
            <Route path={'/quemsomos/:nome/:idade'} element={<QuemSomos />} />
            <Route path={'*'} element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   )
}
