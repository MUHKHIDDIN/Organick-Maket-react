import { Home } from "../Pages/Home/home";
import { About } from "../Pages/About/about";
import { Page } from "../Pages/Page";
import { Shop } from "../Pages/shop";
import { Project } from "../Pages/project";
import { News } from "../Pages/news/news";
import {ShopSingle} from "../Pages/shop-single";
import {NotFound} from "../Pages/not-found";
import { nanoid } from "nanoid";

export const routs = [
  {
    Component: Home,
    path: "/",
    id: nanoid(),
  },
  {
    Component: About,
    path: "/about",
    id: nanoid(),
  },

  {
    Component: Page,
    path: "/page",
    id: nanoid(),
  },
  {
    Component: Shop,
    path: "/shop",
    id: nanoid(),
  },
  {
    Component: Project,
    path: "/project",
    id: nanoid(),
  },
  {
    Component: News,
    path: "/news",
    id: nanoid(),
  },
  {
    Component: ShopSingle,
    path: "products/ShopSingle/:id",
    id: nanoid(),
  },
  {
    Component: NotFound,
    path: "*",
    id: nanoid(),
  }
];
