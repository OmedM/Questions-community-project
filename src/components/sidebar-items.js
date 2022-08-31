import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PersonIcon from '@mui/icons-material/Person';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import PeopleIcon from '@mui/icons-material/People';
import SmsIcon from '@mui/icons-material/Sms';
import CategoryIcon from '@mui/icons-material/Category';

const upperSidebarItems = [
    {
        id: 0,
        label: 'User',
        icon: <PersonIcon />,
        route: '/user/main/user'
    },
    {
        id: 1,
        label: 'Questions',
        icon: <QuestionAnswerIcon />,
        route: '/user/main/questions'
    },
    {
        id: 2,
        label: 'Ask a Question',
        icon: <LiveHelpIcon />,
        route: '/user/main/ask-question'
    },
]

const lowerSidebarItems = [
    {
        id: 0,
        label: 'All users',
        icon: <PeopleIcon />,
        route: '/user/main/admin-users'
    },
    {
        id: 1,
        label: 'Categories',
        icon: <CategoryIcon />,
        route: '/user/main/admin-categories'
    },
]

export { upperSidebarItems, lowerSidebarItems };