export default function makeSidebar() {
    const takeSidebar = document.querySelector('.sidebar-wrapper');

    const sidebarTabs = document.createElement('ul');
    sidebarTabs.classList.add("sidebar-list");

    const homeTab = document.createElement('li');
    homeTab.innerText = "Home";
    homeTab.id = "home-tab";

    const todayTab = document.createElement('li');
    todayTab.innerText = "Today";
    todayTab.id = "today-tab";

    const weekTab = document.createElement('li');
    weekTab.innerText = "This Week";
    weekTab.id = "week-tab";

    const monthTab = document.createElement('li');
    monthTab.innerText = "This Month";
    monthTab.id = "month-tab";

    const projectsTab = document.createElement('li');
    projectsTab.innerText = "Projects";
    projectsTab.id = "projects-tab";

    sidebarTabs.append(homeTab,todayTab,weekTab,projectsTab);
    takeSidebar.append(sidebarTabs);
 }