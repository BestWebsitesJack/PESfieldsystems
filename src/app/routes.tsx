import { createBrowserRouter } from "react-router";
import { DesignSelector } from "./components/design-selector";
import { DesignOne } from "./components/design-one";
import { DesignTwo } from "./components/design-two";
import { DesignThree } from "./components/design-three";
import { Contact } from "./components/contact";
import { Gallery } from "./components/gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DesignThree,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/gallery",
    Component: Gallery,
  },
  {
    path: "/design-selector",
    Component: DesignSelector,
  },
  {
    path: "/design-1",
    Component: DesignOne,
  },
  {
    path: "/design-2",
    Component: DesignTwo,
  },
  {
    path: "/design-3",
    Component: DesignThree,
  },
]);