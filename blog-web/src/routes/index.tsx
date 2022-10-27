import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const lazyLoad = (path: string) => {
  const Comp = React.lazy(() => import(`pages/${path}`))
  return (
    <Suspense fallback={<div>loading.........</div>}>
      <Comp />
    </Suspense>
  )
}

interface Router {
  path: string,
  element: any,
  children?: Array<Router>
}

const routerList: Array<Router> = [
  {
    path: '/',
    element: lazyLoad('layout'),
    children: [
      {
        path: '/',
        element: lazyLoad('home')
      },
      {
        path: 'article',
        element: lazyLoad('article')
      },
      {
        path: 'project',
        element: lazyLoad('project')
      },
      {
        path: 'space',
        element: lazyLoad('space')
      },
      {
        path: 'about',
        element: lazyLoad('about')
      }
    ]
  },
]

const router = createBrowserRouter(routerList)

export default router