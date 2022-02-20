import React, { useState } from "react";
import Link from "@docusaurus/Link";

function Footer() {
  return (
    <div>
      <footer className="bg-[color:var(--footer-background-color)]">
        <div className="container mx-auto flex w-full max-w-screen-xl flex-col pt-10 ">
          <div className="flex flex-col justify-between pb-3 pr-3 md:flex-row">
            <div className="mb-5 flex w-full flex-col md:mb-0 md:w-4/12">
              <div className="py-1">
                <a
                  href="https://calmi2.org"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View California Medical Innovations Institute website"
                >
                  <svg
                    id="e2e7ad45-a5d8-45e3-97ca-4ba2e5555a04"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20"
                    viewBox="0 0 428.58 149.12"
                  >
                    <path
                      d="M219.76,157.31a10.81,10.81,0,0,1-9.42,5.72,10.57,10.57,0,1,1,9.34-15.55h-2.3a8.65,8.65,0,0,0-7.09-3.73,8.72,8.72,0,0,0,0,17.43,8.73,8.73,0,0,0,7.16-3.87Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M229.84,142.24h2.29l8.78,20.43h-2.24l-2.95-6.87h-9.5l-3,6.87h-2.12ZM227,154h7.93l-3.92-9.4Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M243.85,142.24h2v18.58h8.45v1.85H243.85Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M257,142.24h2.05v20.43H257Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M263.84,142.24h10.33v1.85h-8.28v7.4h8v1.85h-8v9.33h-2.05Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M287.6,141.88a10.58,10.58,0,1,1-10.8,10.68A10.73,10.73,0,0,1,287.6,141.88Zm0,19.3a8.73,8.73,0,1,0-8.75-8.62A8.79,8.79,0,0,0,287.6,161.18Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M302.2,142.24h5.19a11.58,11.58,0,0,1,5,.77,6.34,6.34,0,0,1,3.65,5.83,6.21,6.21,0,0,1-6.08,6.21l5.77,7.62h-2.57l-6.93-9.25a15.51,15.51,0,0,0,4.39-.3,4.51,4.51,0,0,0,1.14-8.26,7.7,7.7,0,0,0-4-.77h-3.56v18.58H302.2Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M319.79,142.24h2.76L334,159.19H334V142.24h2v20.43h-2l-12.13-18h-.05v18h-2Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M341,142.24h2v20.43h-2Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M354.53,142.24h2.29l8.79,20.43h-2.24l-2.95-6.87h-9.51l-3,6.87H345.8ZM351.69,154h7.93l-3.93-9.4Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M376.88,142.24H380l7.43,17.39,7.45-17.39h3.15v20.43h-2v-18.2H396l-7.65,18.2h-1.74L379,144.47h-.06v18.2h-2Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M402.9,142.24h11.19v1.85H405v7.34h8.83v1.85H405v7.54h9.14v1.85H402.9Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M417.87,142.24h6a12.69,12.69,0,0,1,6.66,1.68,10.17,10.17,0,0,1,0,17.07,12.69,12.69,0,0,1-6.66,1.68h-6Zm2,18.58h3c1.85,0,4.67,0,7-1.66a8.59,8.59,0,0,0,3.21-6.73,8.45,8.45,0,0,0-3.48-6.77c-1.83-1.19-3.73-1.57-6.74-1.57h-3Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M439,142.24h2v20.43h-2Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M465,157.31a10.81,10.81,0,0,1-9.42,5.72A10.57,10.57,0,1,1,465,147.48h-2.3a8.65,8.65,0,0,0-7.1-3.73,8.72,8.72,0,0,0,0,17.43,8.72,8.72,0,0,0,7.15-3.87Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M475.1,142.24h2.3l8.78,20.43h-2.24L481,155.8h-9.5l-3,6.87h-2.12ZM472.26,154h7.93l-3.93-9.4Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M489.12,142.24h2v18.58h8.45v1.85H489.12Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M200.56,175.38h2.05v20.44h-2.05Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M206.84,175.38h2.76l11.41,17h.06v-17h2v20.44h-2l-12.13-18h-.05v18h-2Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M227.4,175.38h2.76l11.41,17h.05v-17h2v20.44h-2l-12.12-18h-.06v18h-2Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M257.7,175a10.58,10.58,0,1,1-10.8,10.69A10.74,10.74,0,0,1,257.7,175Zm0,19.31a8.73,8.73,0,1,0-8.76-8.62A8.79,8.79,0,0,0,257.7,194.33Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M268.69,175.38H271l7.21,17.9,7.24-17.9h2.2l-8.47,20.44h-2Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M294.58,175.38h2.3l8.78,20.44h-2.24l-2.95-6.88H291l-3,6.88h-2.12Zm-2.84,11.71h7.93l-3.93-9.39Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M309.24,177.23h-4.7v-1.85H316v1.85h-4.67v18.59h-2Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M318.1,175.38h2v20.44h-2Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M334.18,175a10.58,10.58,0,1,1-10.8,10.69A10.74,10.74,0,0,1,334.18,175Zm0,19.31a8.73,8.73,0,1,0-8.76-8.62A8.79,8.79,0,0,0,334.18,194.33Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M348.24,175.38H351l11.4,17h.06v-17h2v20.44h-2l-12.13-18h-.05v18h-2Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M369.55,190.1a4.19,4.19,0,0,0,8.37.17c0-3.15-3.17-4-4.55-4.37-1.85-.55-5.31-1.32-5.31-5.38a5.71,5.71,0,0,1,11.41,0h-2a3.69,3.69,0,0,0-3.62-3.7,3.57,3.57,0,0,0-3.7,3.56c0,2.49,2.18,3.07,4.86,3.84,5,1.36,5,5.31,5,5.91a6,6,0,0,1-6.16,6c-2.65,0-6.22-1.58-6.3-6.08Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M390.41,175.38h2v20.44h-2Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M396.69,175.38h2.76l11.41,17h.05v-17h2v20.44h-2l-12.12-18h-.06v18h-2Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M418,190.1a4.19,4.19,0,0,0,8.37.17c0-3.15-3.18-4-4.56-4.37-1.85-.55-5.3-1.32-5.3-5.38a5.7,5.7,0,0,1,11.4,0h-2a3.69,3.69,0,0,0-3.62-3.7,3.57,3.57,0,0,0-3.7,3.56c0,2.49,2.18,3.07,4.86,3.84,5,1.36,5,5.31,5,5.91a6,6,0,0,1-6.16,6c-2.65,0-6.22-1.58-6.3-6.08Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M433.91,177.23h-4.69v-1.85h11.41v1.85H436v18.59h-2Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M442.78,175.38h2v20.44h-2Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M451.64,177.23H447v-1.85h11.4v1.85h-4.66v18.59h-2.05Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M462.54,175.38v12.73a8.31,8.31,0,0,0,.68,3.7,4.81,4.81,0,0,0,8.46,0,8.17,8.17,0,0,0,.69-3.7V175.38h2v12.73a10.54,10.54,0,0,1-.77,4.26,6.93,6.93,0,0,1-12.38,0,10.54,10.54,0,0,1-.77-4.26V175.38Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M481.27,177.23h-4.69v-1.85H488v1.85h-4.67v18.59h-2.05Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M490.06,175.38h11.18v1.85H492.1v7.35h8.84v1.85H492.1V194h9.14v1.85H490.06Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M124.2,119c-3.32-6.2-15.7-19-37-8.37-25.29,12.57-16.82,54,20,92.56,30.05,31.52,47,28.12,47,28.12s.28-1.41-.57-2-2.91-.8-4.84-2.51c-7.07-6.27-19.74-20.31-32.83-35.47-23.31-27-40.24-59.69-20.25-69.13,19.77-9.33,26.46,15.29,28.27,15.24C124.74,137.48,125.82,122.06,124.2,119Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M150.35,131.57c0,.16-.28.25-.28.25-1.27.7-13.19,7.19-12.36,19.64.74,11,14.22,17.06,14.22,17.06.34,7.36.54,11.14.82,18.56,0,0-13.31,4.46-12.56,17.19.49,8.29,13.9,15.24,13.9,15.24s.06,4.78,0,6.4c0,.13-1.37.3-3.13-1.07-.94-.74-24-25.29-41.85-50.18-14.73-20.59-24-41-9.21-47.64,9-4,13.85,2.38,16.45,5.77,4.58,5.94,7.74,12.28,8.2,12.71s1,.58,1.25-.16c.32-1.81.57-3.38,3-15.58,2.09-10.64,20.19-9.74,21.36-1A21.91,21.91,0,0,1,150.35,131.57Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#e31b23"
                    />
                    <path
                      d="M158.59,155.25c-2.94-.39-4.79-1.27-4.79-1.44-.48-14-.66-25.38-.94-35.89,0,0,1.72-.47,6.66.86a20.41,20.41,0,0,1,5.71,2.3s-1,34.47-1.24,34.61A27.86,27.86,0,0,1,158.59,155.25Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M157.27,250.6c-.14-1.77-.28-4.18-.44-7.12-.43-8.29-.45-9-1-23.3,0,0,0-.13.12-.06a23.75,23.75,0,0,1,3.14,1.69,16.09,16.09,0,0,1,2.46,1.93c.09.17-.69,21.12-.69,21.12l-.18,5.63-.13,3.61a2.13,2.13,0,0,1-2.87,0A14.29,14.29,0,0,1,157.27,250.6Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M155.52,208.26c-.25-.27-.8-25.27-1.22-39.25a33.47,33.47,0,0,0,4.72.75c2.47.18,4.44.12,4.44.12l-1.24,42s0,.29-.2.15S155.77,208.53,155.52,208.26Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M150.9,134.54a.1.1,0,0,1,.16.09c0,.08.28,10.87.22,11.06s-6.93,6,2.57,10.44c7.5,3.49,23.29.37,30,2.05.43.11,6,.54,4.64,10.48-1.35,9.59-22.45,24.85-23.8,26-.1.08-.11-.14-.11-.14s.21-9.62.29-9.77a53.45,53.45,0,0,0,8.68-7.45c7.66-8,8-10.45,8-10.45s-16.83,2-27-1.08c-10.55-3.15-14.42-11.38-13.77-16.75A18.75,18.75,0,0,1,150.9,134.54Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M152.69,189c.18-.1.2,0,.2,0l.29,9s-5.67,1.94-3.35,6.65c3.13,6.35,16.12,10.31,20.32,16,4.58,6.28-6.48,12.53-7.58,13.1-.13.07-.11-.15-.11-.15s.09-6.7.11-6.81a2.23,2.23,0,0,0,.84-1.76c0-1.35-1.26-3.34-5.2-5.62-6.89-4-17.44-9.22-15.65-19.08C143.82,193.44,151.59,189.58,152.69,189Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M155.16,236.4c0-.22-.19-3.86-.19-3.86s0-.57-.09-.53-12.56,5.69-1.7,14.86c5.72,4.83,12.71,2.07,12.71,2.07s.69-2-4.83-2.76-10.05-7.31-6-9.48C155.05,236.7,155.16,236.65,155.16,236.4Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                    <path
                      d="M127.61,113c3.31,0,12.91-.6,12.91-.6s-5.74-1.36-5.78-1.48,12.61-11.24,35.6-1.06a14,14,0,0,1,8.52,10.42,15.57,15.57,0,0,1-2.47,11.09,80.15,80.15,0,0,1-9.32,9.54c-.17.17-.25-.06-.25-.06l.46-12.06a.23.23,0,0,1,.05-.14c.64-.55,4.41-4,.84-7.83-2.53-2.72-8.23-4.13-12.35-4.91-9.33-1.77-20.43.87-20.51.69s3.39-1.93,5.47-3l-13.38,1.54,1.7-1.06Zm21.37-3.9c-1.71,0-3.1.42-3.1.93s1.39.93,3.1.93,3.1-.41,3.1-.93S150.69,109.08,149,109.08Z"
                      transform="translate(-72.66 -105.54)"
                      fill="#455560"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-[var(--docsearch-text-color)] m-0  mb-3 py-1 font-inter">
                Helping researchers navigate the world of FAIR data sharing.
              </p>
              <div className="flex flex-row justify-start space-x-3 py-1">
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
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
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
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
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
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid w-full grid-cols-2 gap-10 md:w-7/12 md:grid-cols-3 md:gap-6">
              <div className="flex flex-col">
                <h3 className="footer-header">Docs</h3>
                <ul className="m-0 list-outside list-none p-0">
                  <li className="pb-2 text-base ">
                    <Link href="/docs/changelog">Changelog</Link>
                  </li>
                  <li className="pb-2 text-base ">
                    <Link href="/docs/intro">What is SODA for SPARC?</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h3 className="footer-header">Company</h3>
                <ul className="m-0 list-outside list-none p-0">
                  <li className="pb-2 text-base ">
                    <Link href="https://fairdataihub.org/team"> About </Link>
                  </li>
                  <li className="pb-2 text-base ">
                    <Link href="https://fairdataihub.org/contact-us">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col ">
                <h3 className="footer-header">Legal</h3>
                <ul className="m-0 list-outside list-none p-0">
                  <li className="pb-2 text-base ">
                    <Link href="/docs/termsofuse">Terms of Use</Link>
                  </li>
                  <li className="pb-2 text-base ">
                    <Link href="/docs/privacypolicy">Privacy Policy</Link>
                  </li>
                  <li className="pb-2 text-base ">
                    <Link href="/docs/cookiepolicy">Cookie Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className=" m-0 h-[1px] border-none border-gray-200 bg-gray-200 text-gray-200" />

          <div className="mt-3 flex h-full flex-col items-center justify-center space-y-4 space-x-0 divide-x-2 divide-none divide-gray-200 py-5 md:flex-row md:space-y-0 md:space-x-4 md:divide-solid">
            <div className="text-center ">
              <p className="m-0">
                © {new Date().getFullYear()} FAIR Data Innovations Hub.
              </p>
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
          {/* <span>{cookieConsent}</span> */}
        </div>
      </footer>
    </div>
  );
}

export default React.memo(Footer);
