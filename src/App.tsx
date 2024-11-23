import { createBrowserRouter, RouterProvider, RouteObject, Outlet, ScrollRestoration, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { 
  HomePage, 
  LoginPage,
  ErrorPage,
  VelogPage,
  DashBoardPage
} from '@/pages';
import Frame from '@/components/Frame';
import ToastProvider from '@/components/ToastProvider';

const queryClient = new QueryClient();

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <>
        <ScrollRestoration />
        <Suspense fallback={null}>
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
