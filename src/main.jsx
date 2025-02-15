
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import home from './views/home.jsx'
import about from './views/about.jsx'
import contacts from './views/contacts.jsx'

function RoutePages(){
  const path = window.location.pathname;
  console.log(path);

  if (path == "/"){
    root.render(<home/>)
  }
  else if (path == "/about"){
    root.render(<about/>);
  }
  else if (path == "/contacts"){
    root.render(<contacts/>);
  }
  else{
    root.render(<h1>404 Error : Page not found</h1>)
  }
}

createRoot(document.getElementById('root')).render(
<>
    <RoutePages/>
    </>
);
