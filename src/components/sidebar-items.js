import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PersonIcon from '@mui/icons-material/Person';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import PeopleIcon from '@mui/icons-material/People';
import SmsIcon from '@mui/icons-material/Sms';

const upperSidebarItems = [
    {
        id: 0,
        label: 'User',
        icon: <PersonIcon />,
        route: 'route'
    },
    {
        id: 1,
        label: 'Questions',
        icon: <QuestionAnswerIcon />,
        route: 'route'
    },
    {
        id: 2,
        label: 'Ask a Question',
        icon: <LiveHelpIcon />,
        route: 'route'
    },
]

const lowerSidebarItems = [
    {
        id: 0,
        label: 'All users',
        icon: <PeopleIcon />,
        route: 'route'
    },
    {
        id: 1,
        label: 'Answers',
        icon: <SmsIcon />,
        route: 'route'
    },
]

export { upperSidebarItems, lowerSidebarItems };