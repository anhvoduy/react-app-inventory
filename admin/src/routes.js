import Dashboard from './views/dashboard';
import Icons from './views/icons';
import Maps from './views/maps';
import Accounts from './views/accounts';
import Customer from './views/customer';
import Transactions from './views/transactions';
import Reports from './views/reports';
import TableList from './views/tablelist';
import Notifications from './views/notification';
import Typography from './views/typography';
import UserProfile from './views/userProfile';
import Upgrade from './views/upgrade';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/accounts",
    name: "Accounts",
    icon: "pe-7s-note2",
    component: Accounts,
    layout: "/admin"
  },
  {
    path: "/customer",
    name: "Customer",
    icon: "pe-7s-user",
    component: Customer,
    layout: "/admin"
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: "pe-7s-note",
    component: Transactions,
    layout: "/admin"
  },
  {
    path: "/reports",
    name: "Reports",
    icon: "pe-7s-server",
    component: Reports,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin"
  }, 
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin"
  },  
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },   
  {
    upgrade: false,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: Upgrade,
    layout: "/admin"
  }
];

export default dashboardRoutes;
