import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface Route {
  path: string;
  name: string;
  icon?: React.ReactNode;
  description?: string;
  routes?: Route[];
}

const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    icon: <DashboardOutlinedIcon />,
    description: "Home page",
  },
  {
    path: "/about",
    name: "About",
    icon: <InfoOutlinedIcon />,
    description: "About page",
  },
];

export { type Route };

export default routes;
