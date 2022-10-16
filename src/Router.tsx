import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Posts } from './pages/Posts'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Posts />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  )
}
