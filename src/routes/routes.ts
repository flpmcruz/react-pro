import { lazy, LazyExoticComponent } from "react";

// Poniendo /* webpackChunkName: "LazyPage1" */ se puede cambiar el nombre del chunk
const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */"../01-lazyload/pages/LazyPage1"));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */"../01-lazyload/pages/LazyPage2"));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */"../01-lazyload/pages/LazyPage3"));

// Los componentes tienen que estar exportados como default

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent; 
  name: string;
}

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "/",
    Component: Lazy1,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "/lazy2",
    Component: Lazy2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "/lazy3",
    Component: Lazy3,
    name: "Lazy-3",
  },
];
