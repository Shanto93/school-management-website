import { useState } from 'react';
import { NavLink, Outlet } from 'react-router'; // use react-router-dom
import {
  MdDashboard, MdEvent, MdSettings, MdSchedule, MdAssignment,
  MdGrade, MdMenuBook, MdPeople, MdMenu, MdClose,
  MdExpandLess, MdExpandMore
} from 'react-icons/md';
import Header from "../modules/Dashboards/Header"

const sidebarLinks = [
  {
    label: 'Dashboards',
    to: '/dashboards',
    icon: <MdDashboard size={22} />,
    badge: 'NEW',
  },
  {
    label: 'Institute Profile',
    to: '/institute-profile',
    icon: <MdPeople size={22} />,
  },
  {
    group: 'APPS & PAGES',
    links: [
      { label: 'Academic Events', to: '/academic-events', icon: <MdEvent size={22} /> },
      {
        label: 'Settings',
        to: '/settings',
        icon: <MdSettings size={22} />,
        subLinks: [
          { label: 'Academic Setup', to: '/settings/academic-setup' },
          { label: 'Academic Time', to: '/academic-time' },
          { label: 'Class Config', to: '/class-config' },
          { label: 'Period Config', to: '/period-config' },
          { label: 'Class Subject Assign', to: '/class-subject-assign' },
          { label: 'Teacher Subject Assign', to: '/teacher-subject-assign' },
          { label: 'Mark Config', to: '/mark-config' },
          { label: 'Choosable Subject', to: '/choosable-subject' },
        ],

      },
      {
        label: 'Routine',
        icon: <MdSchedule size={22} />,
        subLinks: [
          { label: 'Routine', to: '/routine' },
          { label: 'Teacher Routine', to: '/teacher-routine' },
        ],
      },
      { label: 'Exam', to: '/exam', icon: <MdAssignment size={22} /> },
      { label: 'Result', to: '/result', icon: <MdGrade size={22} /> },
      { label: 'Study Material', to: '/study-material', icon: <MdMenuBook size={22} /> },
      { label: 'Student Info', to: '/student-info', icon: <MdPeople size={22} /> },
    ]
  }
];

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const handleToggleMenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className='min-h-screen flex bg-[#f5f6fa]'>
      {/* Mobile nav */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#1d1e4e] text-white shadow z-30 flex items-center justify-between px-4 py-3">
        <span className="font-bold text-2xl tracking-wider">EDUTECH</span>
        <button onClick={() => setSidebarOpen(true)} aria-label="Open sidebar">
          <MdMenu size={28} />
        </button>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-full bg-[#1d1e4e] text-white shadow-xl rounded-tr-2xl rounded-br-2xl flex flex-col py-6 px-4 z-50
        transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:flex md:w-72 md:min-h-screen
        overflow-y-auto max-h-screen md:overflow-visible md:max-h-none
        `}
        style={{ minWidth: '18rem' }}
      >
        {/* Close for mobile */}
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
            <MdClose size={28} />
          </button>
        </div>
        {/* Logo */}
        <div className="mb-10 flex items-center gap-2 px-2">
          <span className="font-bold text-2xl tracking-wider">EDUTECH</span>
        </div>
        {/* Main links */}
        <nav className='flex-1'>
          {/* Render non-group links */}
          <ul className="space-y-2">
            {sidebarLinks.filter(link => !link.group).map(({ label, to, icon, badge }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg transition-all
                     font-medium
                     ${isActive ? 'bg-white/20 text-[#ffd02c] shadow-md' : 'hover:bg-white/10 hover:text-[#ffd02c]'}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  {icon}
                  <span>{label}</span>
                  {badge && (
                    <span className="ml-auto bg-red-500 text-xs text-white px-2 py-0.5 rounded-lg font-semibold">
                      {badge}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Render grouped links */}
          {sidebarLinks.filter(link => link.group).map(group => (
            <div key={group.group}>
              <div className="my-5 text-xs uppercase text-[#b2b5d2] font-bold px-2 tracking-wider">
                {group.group}
              </div>
              <ul className="space-y-1">
                {group.links.map(({ label, to, icon, subLinks }) => (
                  <li key={label}>
                    {/* If subLinks exist, render collapsible parent */}
                    {subLinks ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleToggleMenu(label)}
                          className={`
                            flex items-center gap-3 px-3 py-2 rounded-lg w-full font-medium transition-all
                            ${openMenus[label] ? 'bg-white/20 text-[#ffd02c]' : 'hover:bg-white/10 hover:text-[#ffd02c]'}
                          `}
                        >
                          {icon}
                          <span>{label}</span>
                          <span className="ml-auto">
                            {openMenus[label] ? <MdExpandLess /> : <MdExpandMore />}
                          </span>
                        </button>
                        {/* Sublinks shown when menu is open */}
                        {openMenus[label] && (
                          <ul className="ml-9 mt-1 space-y-1">
                            {subLinks.map((sub) => (
                              <li key={sub.label}>
                                <NavLink
                                  to={sub.to}
                                  className={({ isActive }) =>
                                    `block px-3 py-1 rounded-md text-sm transition-all
                                     ${isActive ? 'bg-[#ffd02c] text-[#1d1e4e]' : 'text-[#f1f1f1] hover:bg-white/10'}`
                                  }
                                  onClick={() => setSidebarOpen(false)}
                                >
                                  {sub.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-2 rounded-lg transition-all
                           font-medium
                           ${isActive ? 'bg-white/20 text-[#ffd02c] shadow-md' : 'hover:bg-white/10 hover:text-[#ffd02c]'}`
                        }
                        onClick={() => setSidebarOpen(false)}
                      >
                        {icon}
                        <span>{label}</span>
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className='flex-1 p-6 pt-16 md:pt-6'>
        <Header></Header>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
