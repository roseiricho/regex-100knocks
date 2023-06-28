import React from 'react';
import DarkModeButton from './DarkModeButton';


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  

  render() {
    return (
      <header class="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full h-20 bg-white border-b text-sm py-2.5 sm:py-4 dark:bg-slate-900 dark:border-gray-700">
        <nav class="flex flex-nowrap basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8 lg:max-w-[90rem]" aria-label="Global">
          <div class="flex items-center justify-between">
            <a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Regex - 100 knocks</a>
          </div>

          <div id="navbar-collapse-with-animation" class="flex items-center ml-auto sm:w-full sm:gap-x-3 sm:order-3 sm:ml-0">
            <div class="flex items-center relative z-10 ml-auto">
            
              <a class="inline-flex justify-center items-center w-10 h-10 text-center text-gray-800 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="https://github.com/roseiricho/regex-100knocks">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            
              <DarkModeButton />

              <a class="border-l h-full pl-5 ml-2 dark:border-gray-700 text-black font-medium dark:text-gray-200" href="https://github.com/roseiricho/regex-100knocks/releases">
                {this.props.app_version}
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;