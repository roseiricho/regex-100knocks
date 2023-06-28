import React from 'react';
import contents from '../contents.json';

const Sidebar = ({activeSection}) => {
  
  return(
    <div class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transform hidden fixed top-0 left-0 bottom-0 z-[60] w-80 bg-white pt-7 pb-10 px-8 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:top-[4.5rem] lg:right-auto lg:bottom-0 lg:left-[max(0px,calc(50%-45rem))] lg:z-10 dark:scrollbar-y dark:bg-slate-900">
      <ul class="relative space-y-8" >
        <h2 class={activeSection == 0 ? "space-y-3 mb-3 text-m font-semibold text-blue-500 hover:border-blue-600 hover:text-blue-500 text-blue-600 dark:text-blue-400" : "space-y-3 mb-3 text-m font-semibold text-slate-900 dark:text-slate-200"}>
          <a href='#'>
            Regex - 100 knocks
          </a>

        </h2>
          {
            contents.data.map((chapter) => (
              <li data-hs-scrollspy-group>
                <h5 class="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-200">{chapter.chapter}</h5>
                <ul class='ml-0.5 space-y-2 border-l-2 border-slate-100 dark:border-slate-800'>
                  {
                    chapter.questions.map((content) => (
                      <li class="">
                        <a href={'#knocks-'+content.id+'-'+content.title} class={activeSection == content.id ? "block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 active border-blue-600 font-semibold text-blue-500 hover:border-blue-600 hover:text-blue-500 text-blue-600 dark:text-blue-400" : "block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 "}>
                          {content.title}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
      </ul>
    </div>
  );
}

export default Sidebar;