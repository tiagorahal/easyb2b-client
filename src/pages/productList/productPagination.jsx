export default function ProductPagination() {
  return (
    <div className="flex justify-center pb-4">
      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex space-x-3">
          <li className="rounded-full bg-white">
            <a className="pointer-events-none relative block rounded-full bg-transparent py-1.5 px-3 text-sm text-neutral-500 transition-all duration-300 ">
              {"<"}
            </a>
          </li>
          <li className="rounded-full bg-white">
            <a className="pointer-events-none relative block rounded-full bg-transparent py-1.5 px-3 text-sm text-neutral-500 transition-all duration-300 ">
              {"<<"}
            </a>
          </li>
          <li className="rounded-full bg-white">
            <a
              className="rounded-full bg-white relative block rounded-full bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
            >
              1
            </a>
          </li>
          <li aria-current="page" className="rounded-full bg-white">
            <a
              className="rounded-full bg-white relative block rounded-full bg-primary-100 py-1.5 px-3 text-sm font-medium text-primary-700 transition-all duration-300"
              href="#!"
            >
              2
              <span className="rounded-full bg-white absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                (current)
              </span>
            </a>
          </li>
          <li className="rounded-full bg-white">
            <a
              className="rounded-full bg-white relative block rounded-full bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
            >
              3
            </a>
          </li>
          <li className="rounded-full bg-white">
            <a
              className="rounded-full bg-white relative block rounded-full bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
            >
              4
            </a>
          </li>
          <li className="rounded-full bg-white">
            <a
              className="relative block rounded-full bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
            >
              {">>"}
            </a>
          </li>
          <li className="rounded-full bg-white">
            <a
              className="relative block rounded-full bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
            >
              {">"}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
