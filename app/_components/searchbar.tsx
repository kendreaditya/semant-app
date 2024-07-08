export default function SearchBar() {
  return (
    <div className="text-base relative">
      <fieldset
        className="bg-white pl-[1.125rem] pr-5 sm:pr-3 rounded-2xl border-0.5 border-border-300 transition-all"
        style={{
          boxShadow: "0 4px 25px 10px rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="grid sm:grid-flow-col sm:grid-cols-[minmax(0,_1fr)_auto] sm:gap-2">
          <div className="flex items-center flex-grow break-words min-w-0">
            <div className="flex flex-col w-full">
              <div className="overflow-y-auto w-full max-h-96 break-words my-4">
                {/* Search box */}
                <textarea
                  id="search"
                //   ref={textareaRef}
                //   {...(q ? {} : { autoFocus: true })}
                  rows={1}
                  className="bg-transparent w-full outline-none break-words text-black resize-none block z-10"
                  placeholder="What are you looking for?"
                //   onKeyDown={(e) => handleKeyDown(e, q)}
                //   value={q}
                //   onChange={(e) => setQuery(e.target.value)}
                //   maxLength={2048}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col items-start gap-1.5 sm:pt-2.5 pb-2 sm:pb-0 place-self-end sm:place-self-auto -mr-3 sm:mr-0 auto-cols-[minmax(2rem,min-content)]">
            <div>
              {/* Search button */}
              <button className="bg-black w-full flex items-center bg-bg-200 py-2 pr-2 pl-2 rounded-xl cursor-pointer transition-all ease-in-out active:scale-[0.98] text-ellipsis whitespace-nowrap overflow-x-hidden text-sm hover:bg-accent-main-200 [&:not(:disabled)]:bg-accent-main-100 [&:not(:disabled)]:text-[white]">
                <div style={{ opacity: 1, width: "auto" }}>
                  <div
                    // onClick={(e) => handleKeyDown(e, q)}
                    className="mx-1 text-white"
                  >
                    Explain
                  </div>
                </div>
                <div className="grid place-items-center w-5 h-5 text-white">
                  <svg
                    data-testid="geist-icon"
                    height="16"
                    stroke-linejoin="round"
                    viewBox="0 0 16 16"
                    width="16"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
