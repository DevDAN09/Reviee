import { createBrowserRouter, RouterProvider, RouteObject, Outlet, ScrollRestoration, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Frame from '@/components/Frame';
import ToastProvider from '@/components/ToastProvider';

const queryClient = new QueryClient();

// 지연 로딩을 위한 페이지 컴포넌트 분리
const HomePage = lazy(() => import('@/pages/HomePage/HomePage' /* webpackChunkName: "home" */));
const LoginPage = lazy(() => import('@/pages/LoginPage/LoginPage' /* webpackChunkName: "login" */));
const VelogPage = lazy(() => import('@/pages/VelogPage/VelogPage' /* webpackChunkName: "velog" */));
const DashBoardPage = lazy(() => import('@/pages/DashBoardPage/DashBoardPage' /* webpackChunkName: "dashboard" */));
const ErrorPage = lazy(() => import('@/pages/ErrorPage/ErrorPage'));

// 로딩 컴포넌트
const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    로딩중...
  </div>
);

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <>
        <ScrollRestoration />
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/velog',
        element: <VelogPage />,
      },
      {
        path: '/dashboard',
        element: <DashBoardPage />,
      },
    ],
  },
];

const routes: RouteObject[] = [
  {
    path: '/error',
    element: <ErrorPage />,
  },
  {
    element:(
      <QueryClientProvider client={queryClient}>
        <ToastProvider/>
          <Frame>
            <Outlet />
          </Frame>
      </QueryClientProvider>
    ),
    errorElement: <Navigate to="/error" replace/>,
    children: [...publicRoutes.filter(route => route.path !== '/error')],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
