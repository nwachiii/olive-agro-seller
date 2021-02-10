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
    "icon": "DashboardTwoToneIcon",
    "content": [
      {
        "label": "Home",
        "description": "This is a dashboard page example built using this template.",
        "to": "/Home"
      }
    ]
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
        "description": "Add scrolling areas to any elements with custom scrollbars or default browser ones.",
        "to": "/Inbox"
      }
    ]
  },
  {
    "label": "Orders",
    "icon": "BarChartIcon",
    "content": [
      {
        "label": "All Orders",
        "description": "Wide selection of forms controls, using a standardised code base, specifically for React.",
        "to": "/AllOrders"
      }
    ]
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
    "label": "View Users",
    "icon": "BarChartIcon",
    "content": [
      {
        "label": "Vendors",
        "description": "Wide selection of forms controls, using a standardised code base, specifically for React.",
        "to": "/Vendors"
      },
      {
        "label": "Users",
        "description": "Wide selection of forms controls, using a standardised code base, specifically for React.",
        "to": "/All users"
      }
    ]
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
