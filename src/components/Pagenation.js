import React from 'react';

function Pagenation({contentsPerPage, totalContents, handleClick, currentPage}) {
    
  return(
    <div class="py-1 px-4 justify-center flex">
      <nav class="flex items-center space-x-2">
        
        {
          currentPage == 1 ? (
            <div class="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md">
              <span aria-hidden="true">«</span>
              <span class="sr-only">Previous</span>
            </div>
          ) : (
            <button onClick={handleClick} class="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md" id={currentPage-1}>
              <span aria-hidden="true">«</span>
              <span class="sr-only">Previous</span>
            </button>
          )
        }
        
        {
          currentPage == Math.floor(totalContents/contentsPerPage) + 1  && <button onClick={handleClick} class="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" id={currentPage-2}>{currentPage-2}</button>
        }
        {
          currentPage !== 1 && <button onClick={handleClick} class="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" id={currentPage-1}>{currentPage-1}</button>
        }

        <button onClick={handleClick} class="w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full" id={currentPage} aria-current="page">{currentPage}</button>
        
        {
          currentPage !== Math.floor(totalContents/contentsPerPage) + 1 && <button onClick={handleClick} class="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" id={currentPage+1}>{currentPage+1}</button>
        }
        {
          currentPage == 1 && <button onClick={handleClick} class="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" id={currentPage+2}>{currentPage+2}</button>
        }
        
        {
          currentPage == Math.floor(totalContents/contentsPerPage) + 1 ? (
            <div class="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md">
              <span class="sr-only">Next</span>
              <span aria-hidden="true">»</span>
            </div>
          ) : (
            <button onClick={handleClick} class="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md" id={currentPage+1}>
              <span class="sr-only">Next</span>
              <span aria-hidden="true">»</span>
            </button>
          )
        }
          
      </nav>
    </div>
        
    );
  }


export default Pagenation;