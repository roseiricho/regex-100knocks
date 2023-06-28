import React from 'react';
import SampleMatcher from './SampleMatcher';

class About extends React.Component{
  render(){
    return(
      <div class="border-b pb-10 mb-10 dark:border-gray-700">
        <p class='mb-2 text-sm font-semibold text-blue-600'>Master Regex with 100 Challenges. </p>
        <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">Regex - 100 knocks: 100 exercises to master regex.</h1>
        <p class="mt-2 text-lg text-gray-800 dark:text-gray-400">"Regex - 100 knocks"は，正規表現を楽しく学ぶための問題集です．</p>
        <p class="mt-1 text-lg text-gray-800 dark:text-gray-400">実務で直面するようなシナリオや擬似データに基づいた問題を通じて，正規表現の使い方や応用力を向上させることを目的としています．</p>
        <p class="mt-6 text-lg text-gray-800 dark:text-gray-400">また，ページ上で問題を解く際に，即座に正規表現を実行できる環境を提供しています．</p>
        <p class="mt-1 text-lg text-gray-800 dark:text-gray-400">問題に取り組む際に，作成した正規表現をリアルタイムでテストして結果を確認できるため，素早いフィードバックを受けながら学習を進めることができます．</p>

        <div class="hs-accordion-group" data-hs-accordion-always-open>
          <div class="hs-accordion" id="hs-basic-always-open-heading-one">
            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-always-open-collapse-one">
              <svg class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M8.12421 13.36V2.35999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <svg class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              更新履歴
            </button>
            <div id="hs-basic-always-open-collapse-one" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-always-open-heading-one">
              <p class="text-gray-800 dark:text-gray-200 ml-3 my-3">
                2023/06/12: Regex - 100 knocksを公開しました．
              </p>
            </div>
          </div>
          <div class="hs-accordion" id="hs-basic-always-open-heading-one">
            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-always-open-collapse-one">
              <svg class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M8.12421 13.36V2.35999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <svg class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              学習方法
            </button>
            <div id="hs-basic-always-open-collapse-one" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-always-open-heading-one">
              
              <ol class="relative space-y-2 mt-5" type="1">
              <li class="relative last:pb-0 last:after:hidden" >
                  <h3 class="text-sm pl-2 font-semibold text-gray-800 dark:text-gray-200">
                    1. 解く問題を選ぶ
                  </h3>
                  <p class="pl-12 py-4 text-gray-600 dark:text-gray-400">
                    問題一覧から，タイトルやタグを参考に解きたい問題を選びます．
                  </p>
                </li>

                <li class="relative last:pb-0 last:after:hidden" >
                <h3 class="text-sm pl-2 font-semibold text-gray-800 dark:text-gray-200">
                    2. 正規表現を入力する
                  </h3>
                  <p class=" pl-12 py-4 text-gray-600 dark:text-gray-400">
                    問題の設定に応じて，最適な正規表現パターンをフォームに入力します．置換後の文字列やオプションフラグも必要に応じて指定してください．以下にフォームの例を示します．
                  </p>
                </li>

                <li class="relative last:pb-0 last:after:hidden" >
                <h3 class="text-sm pl-2 font-semibold text-gray-800 dark:text-gray-200">
                    3. フィードバックを確認する
                  </h3>
                  <p class=" pl-12 py-4 text-gray-600 dark:text-gray-400">
                    正規表現パターンの入力のたびに出力結果が更新されます．出力目標と結果が一致するまで正規表現パターンを調整してみてください．目標と一致した場合は，出力フォームがグリーンにフォーカスされます．
                  </p>
                </li>
              </ol>

              <SampleMatcher
                inputText = 'これは例題です'
                type = 'replace'
                answer = {
                  {
                           
                      "regex": "[あ-ん]",
                      "regexOption": "g",
                      "regexReplace": ""
                    
                  }
                }
              />
              <div class="mt-5 bg-blue-50 border border-blue-500 text-sm text-gray-500 rounded-md p-5 dark:bg-blue-600/[.15]">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg class="h-4 w-4 text-blue-600 mt-0.5 dark:text-white" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-blue-600 font-semibold dark:font-medium dark:text-white">
                      サポートしている正規表現パターンについて
                    </h3>
                    <p class="mt-2 text-gray-800 dark:text-slate-400">
                      Regex - 100 knocksでは，JavaScriptの正規表現パターンのみをサポートしています．オプションフラグについてもJavaScriptに準拠しています．
                    </p>
                    <div class="mt-4">
                      <a class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:text-white" href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_expressions">
                        正規表現 - JavaScript | MDN
                        <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hs-accordion" id="hs-basic-always-open-heading-one">
            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-always-open-collapse-one">
              <svg class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M8.12421 13.36V2.35999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <svg class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              ライセンス・免責事項ほか
            </button>
            <div id="hs-basic-always-open-collapse-one" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-always-open-heading-one">
            <ul class="relative space-y-2 mt-5" type="1">
              <li class="relative last:pb-0 last:after:hidden" >
                <h3 class="text-sm pl-2 font-semibold text-gray-800 dark:text-gray-200">
                    ライセンス
                  </h3>
                  <p class=" pl-12 py-4 text-gray-600 dark:text-gray-400">
                    "Regex - 100knocks"（以下，「本サービス」とする．）は，MITライセンスのもとで公開されています．詳細はLICENSEファイルをご覧ください．
                    <br/><br/>
                    <a href="https://github.com/roseiricho/regex-100knocks/blob/main/LICENSE">regex-100knocks LICENSE</a>
                    <br/>       
                    <br/>また．本サービスの作成にあたっては，主に以下のライブラリを使用しています．
                    <br/><br/>
                    <a href="https://react.dev/" >React</a>
                    <br/>     
                    <a href="https://tailwindcss.com/">Tailwind CSS</a>
                    <br/>
                    <a href="https://preline.co/">Preline UI</a>
                    <br/><br/>
                    その他のライブラリについては，package.jsonやLICENSEをご覧ください．
                    <br/><br/>
                    <a href="https://github.com/roseiricho/regex-100knocks/blob/main/licenses">regex-100knocks/licenses/</a>
                  </p>
              </li>
              <li class="relative last:pb-0 last:after:hidden" >
                  <h3 class="text-sm pl-2 font-semibold text-gray-800 dark:text-gray-200">
                    免責事項
                  </h3>
                  <p class="pl-12 py-4 text-gray-600 dark:text-gray-400">
                    本サービスは無保証で提供されており，明示的または黙示的ないかなる保証も行いません．利用者は自己の責任において本サービスを使用するものとし，その使用に関連して発生するいかなる損害も負担するものとします．
                    開発者は，本サービスに起因して生じるいかなる損害についても責任を負いません．本サービスの使用やデータの使用に関しては，利用者自身の判断と責任に基づいて行ってください．<br/>
                    <br/>
                  </p>
                </li>

                <li class="relative last:pb-0 last:after:hidden" >
                <h3 class="text-sm pl-2 font-semibold text-gray-800 dark:text-gray-200">
                    お問い合わせ
                  </h3>
                  <p class=" pl-12 py-4 text-gray-600 dark:text-gray-400">
                    ご利用される皆さまのご質問やご意見，不具合の報告など，貴重なご意見をお待ちしております．<br/>
                    お手続きが必要な場合や技術的な問題が発生した場合は，お手数ですが下記のリンク先のGitHub Issueをご利用ください．そちらで詳細な情報を提供いただくことで，スムーズな対応が可能となります．<br/>
                    なお，お問い合わせ前に，既存のIssueやドキュメントをご確認いただくことをお勧めします．すでに同様の問題が報告され，解決済みの場合や回答が記載されている可能性がございます．また，その他の疑問や要望がある場合もお気軽にお知らせください．<br/>
                    <br/>
                    <a href="https://github.com/roseiricho/regex-100knocks/issues">regex-100knocks issues</a>
                  </p>
                </li>
              </ul>
              <p class="text-gray-800 dark:text-gray-200 ml-3 my-3">
              
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;