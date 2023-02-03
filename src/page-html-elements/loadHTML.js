//select full html 
const HTMLBody = document.querySelector('body');

export default function loadHTML() {
   //create website wrapper
   const mainDiv = document.createElement('main');
   mainDiv.classList.add('main-content');
   //1.header wrapper
   const headerWrapper = document.createElement('header');
   headerWrapper.classList.add('header-wrapper');
   //2. sidebar wrapper
   const sidebarWrapper = document.createElement('div');
   sidebarWrapper.classList.add('sidebar-wrapper');
   //3. main wrapper
   const contentWrapper = document.createElement('div');
   contentWrapper.classList.add('content-wrapper');
   //3. footer wrapper
   const footerWrapper = document.createElement('footer');
   footerWrapper.classList.add('footer-wrapper');
  
   HTMLBody.insertAdjacentElement("afterbegin",mainDiv);
   mainDiv.append(headerWrapper,sidebarWrapper,contentWrapper,footerWrapper); 
}


export function makeSidebar() {
   const takeSidebar = document.querySelector('.sidebar-wrapper')
}