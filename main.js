(function() {

  const darkTheme = {
    textColor: '#DAE3E5',
    backgroundColor: '#04080F',
    secondaryBackgroundColor: '#507DBC'
  };

  const lightTheme = {
    textColor: '#5603AD',
    backgroundColor: '#F0FFF1',
    secondaryBackgroundColor: '#769982'
  };

  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');

  let activeTheme = 'dark';

  themeToggle.style.backgroundColor = lightTheme.backgroundColor;

  themeToggle.onclick = () => {
    if (activeTheme === 'dark') {
      activeTheme = 'light';
      changeTheme({...lightTheme, oppositeBackgroundColor: darkTheme.backgroundColor});
    } else {
      activeTheme = 'dark';
      changeTheme({...darkTheme, oppositeBackgroundColor: lightTheme.backgroundColor});
    }
  }

  function changeTheme({textColor, backgroundColor, secondaryBackgroundColor, oppositeBackgroundColor}) {
    root.style.setProperty('--text-color', textColor);
    root.style.setProperty('--background-color', backgroundColor);
    root.style.setProperty('--secondary-background-color', secondaryBackgroundColor);
    themeToggle.style.backgroundColor = oppositeBackgroundColor;
  }

}());
