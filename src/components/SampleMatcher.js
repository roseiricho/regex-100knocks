import React, { useState } from "react";

const SampleMatcher = ({inputText, type, answer}) => {
  const [output, setOutput] = useState('');
  const regexExpected = new RegExp(answer.regex, answer.regexOption);

  let outputExpected = '';
  if (type === 'match') {
    try {
      const matches = inputText.match(regexExpected);
      outputExpected = matches ? matches.join('\n') : '';
    } catch (error) {
      outputExpected = '正規表現が無効です．';
    }
  }
  if (type === 'replace') {
    try {
      outputExpected = inputText.replace(regexExpected, answer.regexReplace);
    } catch (error) {
      outputExpected = '正規表現が無効です．';
    }
  }

  const handleRegexChange = (e) => {
    const regexText = document.getElementById('regex-match-sample')?.value || "";
    const regexOption = document.getElementById('regex-match-option-sample')?.value || "";
    const replaceText = document.getElementById('regex-replace-sample')?.value || "";
    const inputText = document.getElementById('input-sample')?.value || "";

    if (type === 'match') {
      try {
        const regex = new RegExp(regexText, regexOption);
        const matches = inputText.match(regex);
        const result = matches ? matches.join('\n') : '';
        setOutput(result);
      } catch (error) {
        setOutput('正規表現が無効です。');
      }
    }
    if (type === 'replace') {
      try {
        const regex = new RegExp(regexText, regexOption);
        const result = inputText.replace(regex, replaceText);
        setOutput(result);
      } catch (error) {
        setOutput('正規表現が無効です。');
      }
    }
  };

  return (
    <div>
      <div class="">
        <p class='my-5 mb-2 font-semibold text-left text-gray-800 transition dark:text-gray-200'>入力データ</p>
        <textarea type="text" id={'input-sample'} class="mb-5 py-3 px-4 w-full h-40 block border-textarea shadow-xs rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" readOnly value={inputText}></textarea>
      </div>
      <div class="my-5">
        <label for="hs-trailing-button-add-on-with-leading-and-trailing" class="sr-only">Label</label>
        <div class="flex rounded-md shadow-sm">
          <span class="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm dark:bg-gray-700 dark:border-gray-700">
            <span class="text-sm text-gray-500 dark:text-gray-400">/</span>
          </span>
          <input type="text" id={'regex-match-sample'} onChange={handleRegexChange} value={answer.regex} placeholder='正規表現を入力してください．' autocomplete="off" name="hs-trailing-button-add-on-with-leading-and-trailing" class="py-3 px-4 block w-full border-input border-gray-200 shadow-sm rounded-0 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
          <span class="px-4 inline-flex items-center min-w-fit border border-l-0 border-gray-200 bg-gray-50 text-sm dark:bg-gray-700 dark:border-gray-700">
            <span class="text-sm text-gray-500 dark:text-gray-400">/</span>
          </span>
          <input type="text" id={'regex-match-option-sample'} onChange={handleRegexChange} value={answer.regexOption} autocomplete="off" name="hs-trailing-button-add-on-with-leading-and-trailing" class="py-3 px-4 block w-1/12 rounded-r-md border-input border-gray-200 shadow-sm rounded-0 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
        </div>

        {
          type === 'replace' &&
            <div class="flex rounded-md shadow-sm mt-2">
              <span class="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm dark:bg-gray-700 dark:border-gray-700">
                <span class="text-sm text-gray-500 dark:text-gray-400">'</span>
              </span>
              <input type="text" id={'regex-replace-sample'} onChange={handleRegexChange} value={answer.regexReplace} placeholder='置換する文字列を入力してください．' autocomplete="off" name="hs-trailing-button-add-on-with-leading-and-trailing" class="py-3 px-4 block w-full border-input border-gray-200 shadow-sm rounded-0 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
              <span class="px-4 inline-flex items-center min-w-fit rounded-r-md border border-l-0 border-gray-200 bg-gray-50 text-sm dark:bg-gray-700 dark:border-gray-700">
                <span class="text-sm text-gray-500 dark:text-gray-400">'</span>
              </span>
            </div>
        }
      </div>
      
      <div class="flex justify-center w-full">
        <div class="w-full">
          <p class='mb-2 font-semibold text-left text-gray-800 transition dark:text-gray-200'>出力目標</p>
          <textarea type="text" id={'output-expectedsample'} value={outputExpected} class="opacity-70 w-full h-40 block border-textarea pointer-events-none py-3 px-4 block bg-gray-50 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" disabled readOnly></textarea>
        </div>

        <div class="ml-5 w-full">
          <p class='mb-2 font-semibold text-left text-gray-800 transition dark:text-gray-200'>出力</p>
          <div class='relative'>
            <textarea type="text" id={'output-sample'} value={outputExpected} class={outputExpected == outputExpected ? "opacity-70 w-full h-40 block border-textarea-green pointer-events-none py-3 px-4 block rounded-md text-sm border-green-500 ring-blue-500 dark:bg-slate-900 dark:text-gray-400" : "opacity-70 w-full h-40 block border-textarea pointer-events-none py-3 px-4 block bg-gray-50 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"} disabled readOnly></textarea>
            {
              outputExpected == outputExpected &&
              <div class="absolute inset-y-0 right-0 flex pointer-events-none pr-5 pt-3">
                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                </svg>
              </div>
            }
          </div>

          <div class='text-right'>
            <strong class='text-sm text-green-600 mt-2'>{outputExpected == outputExpected && 'LGTM!!'}</strong>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SampleMatcher;