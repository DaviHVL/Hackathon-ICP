import React from "react";

const Template4 = ({ pagesSections, pagesProps, pagesImg }) => {
  return (
    <>
      {pagesSections.get("secao1") == true && (
        <header>
          <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
              <a className="flex items-center">
                {pagesImg.get("secao1_prop1")?.url != "" &&
                  pagesImg.get("secao1_prop1")?.url != null && (
                    <img
                      src={pagesImg.get("secao1_prop1")?.url}
                      className="h-6 mr-3 sm:h-9"
                    />
                  )}

                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  {pagesProps.get("secao1_prop2")}
                </span>
              </a>

              <div className="flex items-center lg:order-2">
                <ul className="flex space-x-8">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white"
                    >
                      {pagesProps.get("secao1_prop3")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white"
                    >
                      {pagesProps.get("secao1_prop4")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white"
                    >
                      {pagesProps.get("secao1_prop5")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white"
                    >
                      {pagesProps.get("secao1_prop6")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      )}

      {pagesSections.get("secao2") == true && (
        <section class="bg-white dark:bg-gray-900">
          <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                {" "}
                {pagesProps.get("secao2_prop1")}{" "}
              </h1>

              <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                {" "}
                {pagesProps.get("secao2_prop2")}{" "}
              </p>

              <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <a class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  {pagesProps.get("secao2_prop3")}
                </a>

                <a class="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  {pagesProps.get("secao2_prop4")}
                </a>
              </div>
            </div>

            {pagesImg.get("secao2_prop5")?.url != "" &&
              pagesImg.get("secao2_prop5")?.url != null && (
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <figure class="max-w-lg">
                    <img
                      src={pagesImg.get("secao2_prop5")?.url}
                      loading={"lazy"}
                      class="h-auto max-w-full rounded-lg"
                      alt=""
                    />
                  </figure>
                </div>
              )}
          </div>
        </section>
      )}

      {pagesSections.get("secao3") == true && (
        <section class="bg-white dark:bg-gray-900">
          <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
            <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
              <a className="flex items-center">
                {pagesImg.get("secao3_prop1")?.url != "" &&
                  pagesImg.get("secao3_prop1")?.url != null && (
                    <img
                      src={pagesImg.get("secao3_prop1")?.url}
                      className="h-[80px] w-auto mr-3"
                    />
                  )}
              </a>

              <a class="flex items-center lg:justify-center">
                {pagesImg.get("secao3_prop2")?.url != "" &&
                  pagesImg.get("secao3_prop2")?.url != null && (
                    <img
                      src={pagesImg.get("secao3_prop2")?.url}
                      className="h-[80px] w-auto mr-3"
                    />
                  )}
              </a>

              <a class="flex items-center lg:justify-center">
                {pagesImg.get("secao3_prop3")?.url != "" &&
                  pagesImg.get("secao3_prop3")?.url != null && (
                    <img
                      src={pagesImg.get("secao3_prop3")?.url}
                      className="h-[80px] w-auto mr-3"
                    />
                  )}
              </a>

              <a class="flex items-center lg:justify-center">
                {pagesImg.get("secao3_prop4")?.url != "" &&
                  pagesImg.get("secao3_prop4")?.url != null && (
                    <img
                      src={pagesImg.get("secao3_prop4")?.url}
                      className="h-[80px] w-auto mr-3"
                    />
                  )}
              </a>

              <a class="flex items-center lg:justify-center">
                {pagesImg.get("secao3_prop5")?.url != "" &&
                  pagesImg.get("secao3_prop5")?.url != null && (
                    <img
                      src={pagesImg.get("secao3_prop5")?.url}
                      className="h-[80px] w-auto mr-3"
                    />
                  )}
              </a>

              <a class="flex items-center lg:justify-center">
                {pagesImg.get("secao3_prop6")?.url != "" &&
                  pagesImg.get("secao3_prop6")?.url != null && (
                    <img
                      src={pagesImg.get("secao3_prop6")?.url}
                      className="h-[80px] w-auto mr-3"
                    />
                  )}
              </a>
            </div>
          </div>
        </section>
      )}

      {pagesSections.get("secao4") == true && (
        <section class="bg-gray-50 dark:bg-gray-800">
          <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
              <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  {pagesProps.get("secao4_prop1")}
                </h2>

                <p class="mb-8 font-light lg:text-xl">
                  {pagesProps.get("secao4_prop2")}
                </p>

                <ul
                  role="list"
                  class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                >
                  <li class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      {pagesProps.get("secao4_prop3")}
                    </span>
                  </li>
                  <li class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      {pagesProps.get("secao4_prop4")}
                    </span>
                  </li>
                  <li class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      {pagesProps.get("secao4_prop5")}
                    </span>
                  </li>
                </ul>
                <p class="mb-8 font-light lg:text-xl">
                  {pagesProps.get("secao4_prop6")}
                </p>
              </div>

              {pagesImg.get("secao4_prop7")?.url != "" &&
                pagesImg.get("secao4_prop7")?.url != null && (
                  <img
                    class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                    src={pagesImg.get("secao4_prop7")?.url}
                  />
                )}
            </div>

            <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
              {pagesImg.get("secao4_prop8")?.url != "" &&
                pagesImg.get("secao4_prop8")?.url != null && (
                  <img
                    class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                    src={pagesImg.get("secao4_prop8")?.url}
                    alt=""
                  />
                )}

              <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  {" "}
                  {pagesProps.get("secao4_prop9")}{" "}
                </h2>

                <p class="mb-8 font-light lg:text-xl">
                  {" "}
                  {pagesProps.get("secao4_prop10")}{" "}
                </p>

                <ul
                  role="list"
                  class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                >
                  <li class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      {" "}
                      {pagesProps.get("secao4_prop11")}{" "}
                    </span>
                  </li>
                  <li class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      {" "}
                      {pagesProps.get("secao4_prop12")}{" "}
                    </span>
                  </li>
                  <li class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      {" "}
                      {pagesProps.get("secao4_prop13")}{" "}
                    </span>
                  </li>
                  <li class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      {" "}
                      {pagesProps.get("secao4_prop14")}{" "}
                    </span>
                  </li>
                  <li class="flex space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      {" "}
                      {pagesProps.get("secao4_prop15")}{" "}
                    </span>
                  </li>
                </ul>
                <p class="font-light lg:text-xl">
                  {" "}
                  {pagesProps.get("secao4_prop15")}{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {pagesSections.get("secao5") == true && (
        <section class="bg-white dark:bg-gray-900">
          <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
            <div class="col-span-2 mb-8">
              <p class="text-lg font-medium text-purple-600 dark:text-purple-500">
                {" "}
                {pagesProps.get("secao5_prop1")}{" "}
              </p>

              <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
                {" "}
                {pagesProps.get("secao5_prop2")}{" "}
              </h2>

              <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                {" "}
                {pagesProps.get("secao5_prop3")}{" "}
              </p>

              <div class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                <div>
                  <a
                    href="#"
                    class="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
                  >
                    {pagesProps.get("secao5_prop4")}
                    <svg
                      class="w-5 h-5 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    class="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
                  >
                    {pagesProps.get("secao5_prop5")}
                    <svg
                      class="w-5 h-5 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
              <div>
                <svg
                  class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <h3 class="mb-2 text-2xl font-bold dark:text-white">
                  {" "}
                  {pagesProps.get("secao5_prop6")}{" "}
                </h3>

                <p class="font-light text-gray-500 dark:text-gray-400">
                  {" "}
                  {pagesProps.get("secao5_prop7")}{" "}
                </p>
              </div>
              <div>
                <svg
                  class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
                <h3 class="mb-2 text-2xl font-bold dark:text-white">
                  {" "}
                  {pagesProps.get("secao5_prop8")}{" "}
                </h3>

                <p class="font-light text-gray-500 dark:text-gray-400">
                  {" "}
                  {pagesProps.get("secao5_prop9")}{" "}
                </p>
              </div>
              <div>
                <svg
                  class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <h3 class="mb-2 text-2xl font-bold dark:text-white">
                  {" "}
                  {pagesProps.get("secao5_prop10")}{" "}
                </h3>

                <p class="font-light text-gray-500 dark:text-gray-400">
                  {" "}
                  {pagesProps.get("secao5_prop11")}{" "}
                </p>
              </div>
              <div>
                <svg
                  class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
                <h3 class="mb-2 text-2xl font-bold dark:text-white">
                  {" "}
                  {pagesProps.get("secao5_prop12")}{" "}
                </h3>

                <p class="font-light text-gray-500 dark:text-gray-400">
                  {" "}
                  {pagesProps.get("secao5_prop13")}{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {pagesSections.get("secao6") == true && (
        <section class="bg-gray-50 dark:bg-gray-800">
          <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure class="max-w-screen-md mx-auto">
              <svg
                class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                  {" "}
                  {pagesProps.get("secao6_prop1")}{" "}
                </p>
              </blockquote>

              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                {pagesImg.get("secao6_prop4")?.url != "" &&
                  pagesImg.get("secao6_prop4")?.url != null && (
                    <img
                      src={pagesImg.get("secao6_prop4")?.url}
                      class="w-6 h-6 rounded-full"
                    />
                  )}

                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="pr-3 font-medium text-gray-900 dark:text-white">
                    {" "}
                    {pagesProps.get("secao6_prop2")}{" "}
                  </div>

                  <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    {" "}
                    {pagesProps.get("secao6_prop3")}{" "}
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {pagesSections.get("secao7") == true && (
        <section class="bg-white dark:bg-gray-900">
          <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
            <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
              <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                {" "}
                {pagesProps.get("secao7_prop1")}{" "}
              </h2>
              <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                {" "}
                {pagesProps.get("secao7_prop2")}{" "}
              </p>
            </div>
            <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              <div class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 class="mb-4 text-2xl font-semibold">
                  {" "}
                  {pagesProps.get("secao7_prop3")}{" "}
                </h3>

                <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  {" "}
                  {pagesProps.get("secao7_prop4")}{" "}
                </p>

                <div class="flex items-baseline justify-center my-8">
                  <span class="mr-2 text-5xl font-extrabold">
                    {" "}
                    {pagesProps.get("secao7_prop5")}{" "}
                  </span>

                  <span class="text-gray-500 dark:text-gray-400">
                    {" "}
                    {pagesProps.get("secao7_prop6")}{" "}
                  </span>
                </div>

                <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span> {pagesProps.get("secao7_prop7")} </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span> {pagesProps.get("secao7_prop8")} </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span> {pagesProps.get("secao7_prop9")} </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span> {pagesProps.get("secao7_prop10")} </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span> {pagesProps.get("secao7_prop11")} </span>
                  </li>
                </ul>
                <a
                  href="#"
                  class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                >
                  {pagesProps.get("secao7_prop12")}{" "}
                </a>
              </div>

              <div class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 class="mb-4 text-2xl font-semibold">
                  {" "}
                  {pagesProps.get("secao7_prop13")}{" "}
                </h3>

                <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  {" "}
                  {pagesProps.get("secao7_prop14")}{" "}
                </p>

                <div class="flex items-baseline justify-center my-8">
                  <span class="mr-2 text-5xl font-extrabold">
                    {" "}
                    {pagesProps.get("secao7_prop15")}{" "}
                  </span>

                  <span
                    class="text-gray-500 dark:text-gray-400"
                    dark:text-gray-400
                  >
                    {" "}
                    {pagesProps.get("secao7_prop16")}{" "}
                  </span>
                </div>

                <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span> {pagesProps.get("secao7_prop17")} </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span> {pagesProps.get("secao7_prop18")} </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span> {pagesProps.get("secao7_prop19")} </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span> {pagesProps.get("secao7_prop20")} </span>
                  </li>

                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span> {pagesProps.get("secao7_prop21")} </span>
                  </li>
                </ul>
                <a
                  href="#"
                  class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                >
                  {" "}
                  {pagesProps.get("secao7_prop22")}{" "}
                </a>
              </div>

              <div class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 class="mb-4 text-2xl font-semibold">
                  {" "}
                  {pagesProps.get("secao7_prop23")}{" "}
                </h3>

                <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  {" "}
                  {pagesProps.get("secao7_prop24")}{" "}
                </p>

                <div class="flex items-baseline justify-center my-8">
                  <span class="mr-2 text-5xl font-extrabold">
                    {" "}
                    {pagesProps.get("secao7_prop25")}{" "}
                  </span>

                  <span class="text-gray-500 dark:text-gray-400">
                    {" "}
                    {pagesProps.get("secao7_prop26")}{" "}
                  </span>
                </div>

                <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span> {pagesProps.get("secao7_prop27")} </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span> {pagesProps.get("secao7_prop28")} </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span> {pagesProps.get("secao7_prop29")} </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span> {pagesProps.get("secao7_prop30")} </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span> {pagesProps.get("secao7_prop31")} </span>
                  </li>
                </ul>
                <a
                  href="#"
                  class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                >
                  {" "}
                  {pagesProps.get("secao7_prop32")}{" "}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {pagesSections.get("secao8") == true && (
        <section class="bg-white dark:bg-gray-900">
          <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
            <h2 class="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
              {" "}
              {pagesProps.get("secao8_prop1")}{" "}
            </h2>

            <div class="max-w-screen-md mx-auto">
              <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                data-inactive-classes="text-gray-500 dark:text-gray-400"
              >
                <h3 id="accordion-flush-heading-1">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-flush-body-1"
                  >
                    <span> {pagesProps.get("secao8_prop2")} </span>
                    <svg
                      data-accordion-icon=""
                      class="w-6 h-6 rotate-180 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h3>
                <div
                  id="accordion-flush-body-1"
                  class=""
                  aria-labelledby="accordion-flush-heading-1"
                >
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      {" "}
                      {pagesProps.get("secao8_prop3")}{" "}
                    </p>
                  </div>
                </div>
                <h3 id="accordion-flush-heading-2">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-2"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-2"
                  >
                    <span> {pagesProps.get("secao8_prop4")} </span>

                    <svg
                      data-accordion-icon=""
                      class="w-6 h-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h3>
                <div
                  id="accordion-flush-body-2"
                  class="hidden"
                  aria-labelledby="accordion-flush-heading-2"
                >
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      {" "}
                      {pagesProps.get("secao8_prop5")}{" "}
                    </p>
                  </div>
                </div>
                <h3 id="accordion-flush-heading-3">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-3"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-3"
                  >
                    <span>{pagesProps.get("secao8_prop6")}</span>

                    <svg
                      data-accordion-icon=""
                      class="w-6 h-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h3>
                <div
                  id="accordion-flush-body-3"
                  class="hidden"
                  aria-labelledby="accordion-flush-heading-3"
                >
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      {pagesProps.get("secao8_prop7")}
                    </p>
                  </div>
                </div>

                <h3 id="accordion-flush-heading-4">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-4"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-4"
                  >
                    <span> {pagesProps.get("secao8_prop8")} </span>

                    <svg
                      data-accordion-icon=""
                      class="w-6 h-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h3>
                <div
                  id="accordion-flush-body-4"
                  class="hidden"
                  aria-labelledby="accordion-flush-heading-4"
                >
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      {" "}
                      {pagesProps.get("secao8_prop9")}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {pagesSections.get("secao9") == true && (
        <section class="bg-gray-50 dark:bg-gray-800">
          <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div class="max-w-screen-sm mx-auto text-center">
              <h2 class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                {" "}
                {pagesProps.get("secao9_prop1")}{" "}
              </h2>

              <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                {" "}
                {pagesProps.get("secao9_prop2")}{" "}
              </p>

              <a
                href="#"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
              >
                {" "}
                {pagesProps.get("secao9_prop3")}{" "}
              </a>
            </div>
          </div>
        </section>
      )}

      {pagesSections.get("secao10") == true && (
        <section class="bg-white dark:bg-gray-900 py-12">
          <div class="max-w-screen-xl px-4 mx-auto">
            <div class="text-center mb-8">
              <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">
                {pagesProps.get("secao10_prop1")}
              </h2>
              <p class="text-lg text-gray-500 dark:text-gray-400">
                {pagesProps.get("secao10_prop2")}
              </p>
            </div>

            <form class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-white">
                  Nome
                </label>
                <input
                  type="text"
                  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  placeholder="Seu nome"
                />
              </div>

              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-white">
                  E-mail
                </label>
                <input
                  type="email"
                  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  placeholder="seu@email.com"
                />
              </div>

              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-white">
                  Telefone
                </label>
                <input
                  type="tel"
                  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-white">
                  Data
                </label>
                <input
                  type="date"
                  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-white">
                  Horário
                </label>
                <input
                  type="time"
                  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              <button
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
                onClick={(e) => e.preventDefault()}
              >
                Agendar
              </button>
            </form>
          </div>
        </section>
      )}

      {pagesSections.get("secao11") == true && (
        <section class="bg-white dark:bg-gray-900 py-12">
          <div class="max-w-screen-xl px-4 mx-auto">
            <div class="text-center mb-8">
              <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">
                {pagesProps.get("secao11_prop1")}
              </h2>

              <p class="text-lg text-gray-500 dark:text-gray-400">
                {pagesProps.get("secao11_prop2")}
              </p>
            </div>

            <form class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-white">
                  Nome
                </label>
                <input
                  type="text"
                  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  placeholder="Seu nome"
                />
              </div>

              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-white">
                  E-mail
                </label>
                <input
                  type="email"
                  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  placeholder="seu@email.com"
                />
              </div>

              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-white">
                  Telefone
                </label>
                <input
                  type="tel"
                  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <button
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
                onClick={(e) => e.preventDefault()}
              >
                Cadastrar
              </button>
            </form>
          </div>
        </section>
      )}

      <footer class="bg-white dark:bg-gray-800">
        <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="text-center">
            <ul class="flex justify-center mt-5 space-x-5">
              {pagesProps.get("secao12_prop1") && (
                <li>
                  <a
                    href={pagesProps.get("secao12_prop1")}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              )}
              {pagesProps.get("secao12_prop2") && (
                <li>
                  <a
                    href={pagesProps.get("secao12_prop2")}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              )}
              {pagesProps.get("secao12_prop3") && (
                <li>
                  <a
                    href={pagesProps.get("secao12_prop3")}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
              )}
              {pagesProps.get("secao12_prop4") && (
                <li>
                  <a
                    href={pagesProps.get("secao12_prop4")}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              )}
              {pagesProps.get("secao12_prop5") && (
                <li>
                  <a
                    href={pagesProps.get("secao12_prop5")}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Template4;
