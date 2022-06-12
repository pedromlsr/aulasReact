import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { QuemSomos } from './QuemSomos'
import { NotFound } from './NotFound'

export const Root = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quemsomos" element={<QuemSomos />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   )
}
