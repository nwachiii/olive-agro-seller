import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import GradeTwoTone from '@material-ui/icons/GradeTwoTone';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

var iconsMap = {
  BarChartIcon: BarChartIcon,
  CalendarTodayIcon: CalendarTodayIcon,
  ChatIcon: ChatIcon,
  CodeIcon: CodeIcon,
  DashboardIcon: DashboardIcon,
  ErrorIcon: ErrorIcon,
  FolderIcon: FolderIcon,
  DashboardTwoToneIcon: DashboardTwoToneIcon,
  GradeTwoTone: GradeTwoTone,
  ListAltIcon: ListAltIcon,
  LockOpenIcon: LockOpenIcon,
  MailIcon: MailIcon,
  PresentToAllIcon: PresentToAllIcon,
  PeopleIcon: PeopleIcon,
  PersonIcon: PersonIcon,
  ReceiptIcon: ReceiptIcon,
  SettingsIcon: SettingsIcon,
  ViewModuleIcon: ViewModuleIcon
};

export default [
  {
    label: 'Navigation menu',
    content: JSON.parse(
      `[
  {
    "label": "Home",
    "to": "/Home"
  },
  {
    "label": "Messages",
    "icon": "SettingsIcon",
    "content": [
           {
        "label": "Inbox",
        "description": "All your received messages are contained here...",
        "to": "/Inbox"
      },
      {
        "label": "Sent Messages",
        "description": "",
        "to": "/Inbox"
      }
    ]
  },
  {
    "label": "All Orders",
    "to": "/AllOrders"
  },  
  {
    "label": "Products",
    "icon": "CodeIcon",
    "content": [
      {
        "label": "Fruits and Vegetables",
        "description": "",
        "to": "/FruitsVeg"
      },
      {
        "label": "Spices",
        "description": "",
        "to": "/Spices"
      },
      {
        "label": "Drinks",
        "description": "",
        "to": "/Drinks"
      },
      {
        "label": "Dry Herbs",
        "description": "",
        "to": "/DryHerbs"
      },
      {
        "label": "Legumes",
        "description": "",
        "to": "/Legumes"
      },
      {
        "label": "Oils",
        "description": "",
        "to": "/Oils"
      },
      {
        "label": "Flours",
        "description": "",
        "to": "/Flours"
      }
    ]
  },
  {
    "label": "Vendors",
    "icon": "BarChartIcon",
    "content": [
      {
        "label": "Registered Vendors",
        "description": "",
        "to": "/Vendors"
      },
      {
        "label": "Pending Vendors",
        "description": "",
        "to": "/PendingVendors"
      }
    ]
  }, 
  {
        "label": "Customers",
        "to": "/Customers"
  } 
]`,
      (key, value) => {
        if (key === 'icon') {
          return iconsMap[value];
        } else {
          return value;
        }
      }
    )
  }
];
