/* eslint-disable max-len */
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Link from '@docusaurus/Link';

export function ExternalLinkSVG() {
  return (
    <svg
      width="13.5"
      height="13.5"
      aria-hidden="true"
      viewBox="0 0 24 24"
      // eslint-disable-next-line max-len
      className="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"
    >
      <path
        fill="currentColor"
        // eslint-disable-next-line max-len
        d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
      />
    </svg>
  );
}

export default function FooterWrapper() {
  return (
    <div>
      <footer style={{ backgroundColor: 'white' }}>
        <div className="container relative mx-auto flex w-full max-w-screen-xl flex-col pt-10 ">
          <div className="flex flex-col justify-between pb-3 pr-3 md:flex-row">
            <div className="mb-5 flex w-full flex-col md:mb-0 md:w-4/12">
              <div className="py-1">
                <a
                  href="https://fairdataihub.org"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View FAIR Data Innovations Hub website"
                >
                  <img
                    src="https://fairdataihub.org/logo.svg"
                    alt="FAIR Data Innovations Hub logo"
                    className="h-20"
                  />
                </a>
              </div>
              <p className="text-[var(--docsearch-text-color)] m-0  mb-3 py-1 font-inter">
                Helping researchers navigate the world of FAIR data sharing.
              </p>
              <div className="flex flex-row justify-start space-x-3 py-1">
                <a
                  href="https://fairdataihub.org/"
                  target="_blank"
                  className="hover:text-[var(--ifm-color-primary)] text-gray-400 transition-all"
                  aria-label="Github"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    className="h-7 w-7 fill-current"
                    viewBox="0 0 491.52 491.52"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path d="M368.64,65.705c-31.525,0-57.17,25.65-57.17,57.175s25.645,57.175,57.17,57.175c31.525,0,57.175-25.65,57.175-57.175    S400.165,65.705,368.64,65.705z M368.64,159.575c-20.23,0-36.69-16.46-36.69-36.695s16.46-36.695,36.69-36.695    c20.235,0,36.695,16.46,36.695,36.695S388.875,159.575,368.64,159.575z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M491.52,122.88C491.52,55.125,436.395,0,368.64,0c-38.711,0-73.247,18.038-95.787,46.102    c-15.568-3.348-31.521-5.142-47.573-5.142C101.06,40.96,0,142.02,0,266.24s101.06,225.28,225.28,225.28    s225.28-101.06,225.28-225.28c0-0.99,0.08-2.81,0.17-5.125c0.277-6.882,0.644-17.496,0.103-25.829    C473.086,204.795,491.52,166.408,491.52,122.88z M164.112,70.786c-16.064,16.989-29.782,40.406-40.027,68.736    c-12.541-7.158-24.333-15.716-35.284-25.545C110.345,94.647,135.845,79.651,164.112,70.786z M74.256,128.399    c13.388,12.144,27.885,22.663,43.432,31.141c-8.192,28.784-13.004,61.493-13.818,96.46H20.999    C23.442,206.939,43.142,162.459,74.256,128.399z M20.999,276.48h82.872c0.809,34.788,5.585,67.329,13.701,96.005    c-15.604,8.521-30.154,19.093-43.577,31.308C43.031,369.77,23.436,325.403,20.999,276.48z M88.513,418.24    c10.99-9.901,22.833-18.517,35.43-25.721c10.262,28.52,24.026,52.101,40.17,69.176C135.718,452.789,110.116,437.698,88.513,418.24    z M215.04,469.939c-29.482-6.319-55.616-39.602-72.234-86.971c22.614-9.961,46.994-15.674,72.234-16.915V469.939z M215.04,345.573    c-27.356,1.223-53.836,7.153-78.436,17.693c-7.167-26.193-11.455-55.73-12.259-86.786h90.694V345.573z M215.04,256h-90.694    c0.809-31.242,5.155-60.934,12.398-87.245c24.56,10.501,50.993,16.407,78.296,17.627V256z M215.04,165.902    c-25.177-1.237-49.5-6.921-72.067-16.837c16.626-47.125,42.681-80.225,72.067-86.524V165.902z M235.52,62.579    c7.23,1.539,14.339,4.864,21.298,9.645c-7.037,15.468-11.058,32.585-11.058,50.656c0,14.264,2.024,27.956,5.468,41.02    c-5.004,0.959-10.321,1.681-15.708,2.084V62.579z M235.52,186.523c7.6-0.492,15.154-1.496,22.132-2.971    c10.962,28.146,28.09,52.688,45.425,72.449H235.52V186.523z M235.52,276.48h87.143c1.191,1.146,2.361,2.252,3.527,3.344    c0.596,6.946-0.751,18.223-1.241,22.301l-0.28,2.43c-1.999,20.911-5.712,40.588-10.671,58.718    c-24.609-10.547-51.104-16.477-78.479-17.699V276.48z M235.52,469.827V366.054c25.299,1.243,49.73,6.977,72.385,16.977    C291.149,430.696,264.702,463.511,235.52,469.827z M285.795,461.899c16.188-17.076,30.03-40.92,40.47-69.602    c12.731,7.246,24.691,15.943,35.787,25.939C340.283,437.845,314.45,453.018,285.795,461.899z M430.08,266.24    c0,52.971-20.388,101.151-53.51,137.549c-13.506-12.291-28.14-22.934-43.85-31.483c5.797-20.207,10.086-42.231,12.34-65.791    l0.225-1.945c0.291-2.429,0.556-4.937,0.795-7.443c9.354,7.529,15.811,11.905,16.88,12.617l5.68,3.785l5.68-3.785    c2.269-1.513,28.735-19.455,55.941-49.342C430.159,263.034,430.08,265.107,430.08,266.24z M368.635,288.62    c-22.29-16.6-102.395-82.11-102.395-165.74c0-56.465,45.935-102.4,102.4-102.4c56.465,0,102.4,45.935,102.4,102.4    C471.04,206.35,390.91,271.99,368.635,288.62z" />
                      </g>
                    </g>
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                  </svg>
                </a>
                <a
                  href="https://www.twitter.com/fairdataihub"
                  className="hover:text-[var(--ifm-color-primary)] text-gray-400 transition-all"
                  aria-label="Twitter"
                  rel="noopener"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/california-medical-innovations-institute"
                  className="hover:text-[var(--ifm-color-primary)] text-gray-400 transition-all"
                  aria-label="Linked In"
                  rel="noopener"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    />
                    <circle cx="4" cy="4" r="2" stroke="none" />
                  </svg>
                </a>
                <a
                  href="https://github.com/fairdataihub"
                  target="_blank"
                  className="hover:text-[var(--ifm-color-primary)] text-gray-400 transition-all"
                  aria-label="Github"
                  rel="noreferrer"
                >
                  <svg
                    className="h-7 w-7 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid w-full grid-cols-2 gap-10 md:w-7/12 md:grid-cols-3 md:gap-6">
              <div className="flex flex-col">
                <h3 className="footer-header">Docs</h3>
                <ul className="m-0 list-outside list-none p-0">
                  <li className="pb-2 text-base">
                    <div className="h-max w-max scale-200  transition-all hover:scale-105">
                      <Link href="/docs/developer-documentation/changelog">Changelog</Link>
                    </div>
                  </li>
                  <li className="pb-2 text-base ">
                    <div className="h-max w-max scale-200  transition-all hover:scale-105">
                      <Link href="/docs/intro">What is SODA?</Link>
                    </div>
                  </li>
                  <li className="pb-2 text-base ">
                    <div className="h-max w-max scale-200  transition-all hover:scale-105">
                      <Link href="/versions">Versions</Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h3 className="footer-header">Company</h3>
                <ul className="m-0 list-outside list-none p-0">
                  <li className="pb-2 text-base ">
                    <div className="h-max w-max scale-200  transition-all hover:scale-105">
                      <Link href="https://fairdataihub.org/team">
                        {' '}
                        About <ExternalLinkSVG />{' '}
                      </Link>
                    </div>
                  </li>
                  <li className="pb-2 text-base ">
                    <div className="h-max w-max scale-200  transition-all hover:scale-105">
                      <Link href="https://fairdataihub.org/contact-us">
                        {' '}
                        Contact Us <ExternalLinkSVG />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col ">
                <h3 className="footer-header">Legal</h3>
                <ul className="m-0 list-outside list-none p-0">
                  <li className="pb-2 text-base ">
                    <div className="h-max w-max scale-200  transition-all hover:scale-105">
                      <Link href="/docs/legal/privacypolicy">Privacy Policy</Link>
                    </div>
                  </li>
                  <li className="pb-2 text-base ">
                    <div className="h-max w-max scale-200  transition-all hover:scale-105">
                      <Link href="/docs/legal/termsofuse">Terms of Use</Link>
                    </div>
                  </li>
                  <li className="pb-2 text-base ">
                    <div className="h-max w-max scale-200  transition-all hover:scale-105">
                      <Link href="/docs/legal/cookiepolicy">Cookie Policy</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className=" m-0 h-[1px] border-none border-gray-200 bg-gray-200 text-gray-200" />

          <div className="mt-3 flex h-full flex-col items-center justify-center space-y-4 space-x-0 divide-x-2 divide-none divide-gray-200 py-5 md:flex-row md:space-y-0 md:space-x-4 md:divide-solid">
            <div className="text-center ">
              <p className="m-0">© {new Date().getFullYear()} FAIR Data Innovations Hub.</p>
              <p className="m-0">All rights reserved.</p>
            </div>

            <div className="mt-0 flex flex-row items-center justify-center !border-none">
              <a
                href="https://vercel.com/?utm_source=fairdataihub&utm_campaign=oss"
                target="_blank"
                rel="noreferrer"
                className="mx-0 mb-0 flex flex-row items-center justify-center md:mx-4"
              >
                <img
                  src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
                  alt="Powered by Vercel"
                  className="w-40"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
