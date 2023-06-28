import React from 'react';

 const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div class="text-center">
        <div>
          <a class="flex-none text-xl font-semibold text-black dark:text-white" href="#" aria-label="Brand">Regex - 100 knocks</a>
        </div>

        <div class="mt-3">
          <p class="text-gray-500">by <a href='https://github.com/roseiricho'>@rosei_richo {year !== 2023 ? '2023-'+year: '2023'}</a></p>
          {/* <p class="text-gray-500">Code copyright {year !== 2023 ? '2023-'+year: '2023'} @rosei_richo</p> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;