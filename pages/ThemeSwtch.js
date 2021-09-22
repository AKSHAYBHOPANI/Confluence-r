import {useEffect, useState} from 'react';
export default function ThemeSwitch({theme, settheme}) {



if (typeof window !== "undefined") {
const toggleSwitch = document.getElementById('checkbox');
const toggleIcon = document.getElementById('toggle-icon');
let Time = new Date;
Time = Time.getHours()
console.log(Time)

function automaticToggle() {
  if (Time>=18) {
      darkMode();
    console.log('Night');
    toggleSwitch.checked = true;
   
  } else {
    lightMode();
    console.log('Morning');
    toggleSwitch.checked = false;
  }
}

 useEffect(() => {
    automaticToggle();
  }, []);

// Dark Mode Styles
function darkMode() {
  
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  document.documentElement.setAttribute('data-theme', 'dark');
  settheme("dark")
}

// Light Mode Styles
function lightMode() {
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  document.documentElement.setAttribute('data-theme', 'light');
  settheme("")
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    
    lightMode();
  }


}


// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
}



return (
<>
    <div className="theme-switch-wrapper">
        <span id="toggle-icon">
            <span className="toggle-text">Light Mode</span>
            <i className="fas fa-sun"></i>
        </span><span id="time"></span>
        <label className="theme-switch">
            <input id="checkbox" type="checkbox"/>
            <div className="slider round"></div>
        </label>
   </div>
</>
)
}