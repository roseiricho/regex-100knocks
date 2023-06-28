import React, {useState} from 'react';
import contents from '../contents.json';
import Pagenation from './Pagenation';

function Table() {
  const [currentPage, setCurrentPage] = useState(1);

  function handleClick(e) {
    if (e.target.id < 1) {
      setCurrentPage(1);
      return;
    }
    if (e.target.id > Math.ceil(totalContents / contentsPerPage + 1)) {
      setCurrentPage(Math.ceil(totalContents / contentsPerPage + 1));
      return;
    }
    setCurrentPage(Number(e.target.id));
  }


  let totalContents = 0;
  for (const questions in contents.data) {
    totalContents += contents.data[questions].questions.length;
  }

  const contentsPerPage = 10;
  const indexOfLastContent = currentPage * contentsPerPage;
  const indexOfFirstContent = indexOfLastContent - contentsPerPage + 1;

    return(
      <div class="">
        <h2 id='table-knocks' class='scroll-mt-24'>
          <a href='#table-knocks' class='group relative text-lg font-bold text-gray-800 dark:text-white'>問題一覧</a>
        </h2>
        <div class="relative space-y-2 mt-5">
          <div class="p-1.5 w-full inline-block align-middle">
            <div class="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900 dark:bg-gray-800 overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-gray-400">No.</th>
                    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-gray-400">種別</th>
                    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-gray-400">難易度</th>
                    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-gray-400">タイトル</th>
                    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-gray-400">タグ</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  {
                    contents.data.map((chapter) => 
                        chapter.questions.map((content, index) => (
                           <>
                            {
                              (indexOfFirstContent <= content.id && content.id <= indexOfLastContent) &&
                              <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-800">
                                  <a class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" href={'#knocks-'+content.id+'-'+content.title}>{content.id}</a>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-800 ">
                                  <a class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" href={'#knocks-'+content.id+'-'+content.title}>{chapter.chapter}</a>
                                  </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-8000">
                                  <a class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" href={'#knocks-'+content.id+'-'+content.title}><strong>{'*'.repeat(content.difficulty)}</strong><strong class='text-gray-200 dark:text-gray-700'>{'*'.repeat(5-content.difficulty)}</strong></a>
                                  </td>
                                <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                  <a class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" href={'#knocks-'+content.id+'-'+content.title}>{content.title}</a>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                  {
                                    content.tags.map((tag) => (
                                      <span class="inline-flex mx-1 items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-gray-200">
                                      <span class="w-1.5 h-1.5 inline-block bg-indigo-400 rounded-full"></span>
                                        {tag}
                                      </span>
                                    ))
                                  }
                                </td>
                              </tr>
                              }
                           </> 
                          
                        ))
                      )     
                    }
                </tbody>
              </table>
              <Pagenation 
                contentsPerPage={contentsPerPage}
                totalContents={totalContents}
                handleClick={handleClick}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Table;