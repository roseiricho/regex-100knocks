import React from 'react';
import parse from 'html-react-parser';

import RegexMatcher from './RegexMatcher';

const Question = ({id, chapter, difficulty, type, title, tags, question, targetData, hint, answer}) => {
  
  return(
      <section class='my-10 border-b pb-10 mb-10 dark:border-gray-700'>
        <div id={'knocks-'+id+'-'+title}>
          <div class='flex justify-between mt-3 mr-3'>
            <div>
              <p class='text-base font-semibold leading-6 text-gray-600 dark:text-gray-400'>{id} / 100 本目</p>
              <p class='text-base font leading-6 text-gray-600 dark:text-gray-400'><strong>{'難易度【'+'*'.repeat(difficulty)}</strong><strong class='text-gray-200 dark:text-gray-700'>{'*'.repeat(5-difficulty)}</strong><strong>】</strong></p>
            </div>

            <div class='my-3 text-right'>
              {
                tags.map((tag) => (
                  <span class="inline-flex my-1 mx-1 items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-gray-200">
                  <span class="w-1.5 h-1.5 inline-block bg-indigo-400 rounded-full"></span>
                    {tag}
                  </span>
                ))
              }
            </div>
          </div>
          <div class='flex'>
            <span class="inline-flex mr-3 items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-gray-200">{chapter}</span>
            <h3 class="group relative text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
          </div>

          <p class="mt-3 text-gray-600 dark:text-gray-400">{question}</p>
        </div>
        
        <RegexMatcher
          id = {id}
          inputText = {targetData}
          type = {type}
          answer = {answer}
        />

        <div class="hs-accordion-group my-5" data-hs-accordion-always-open>
          <div class="hs-accordion" id="hs-basic-always-open-heading-one">
            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-always-open-collapse-one">
              <svg class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M8.12421 13.36V2.35999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <svg class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              ヒント
            </button>
            <div id="hs-basic-always-open-collapse-one" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-always-open-heading-one">
              <p class="text-gray-800 dark:text-gray-200 ml-3 my-3">
                {parse(hint)}
              </p>
            </div>
          </div>

          <div class="hs-accordion" id="hs-basic-always-open-heading-two">
            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-always-open-collapse-two">
              <svg class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M8.12421 13.36V2.35999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <svg class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              解答
            </button>
            <div id="hs-basic-always-open-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-always-open-heading-two">
              <div class='ml-3 my-3'>
                <p class='font-semibold text-left text-gray-800 dark:text-gray-200'>
                  正規表現
                </p>
                <p class="text-gray-400 dark:text-gray-400 ml-3 my-3">
                  / <strong class='text-blue-800 dark:text-blue-200'>{answer.regex}</strong> /<strong class='text-blue-800 dark:text-blue-200'>{answer.regexOption}</strong>
                </p>
              </div>
              {
                type === "replace" &&
                <div class='ml-3 my-3'>
                  <p class='font-semibold text-left text-gray-800 dark:text-gray-200'>
                    置換文字列
                  </p>
                  <p class="ml-3 my-3">
                  <strong class='text-blue-800 dark:text-blue-200'>{answer.regexReplace}</strong>
                  </p>
                </div>
              }
              <div class='ml-3 my-3'>
                <p class='font-semibold text-left text-gray-800 dark:text-gray-200'>
                  解説
                </p>
                <p class="text-gray-800 dark:text-gray-200 ml-3 my-3">
                  {parse(answer.comment)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );

}


export default Question;