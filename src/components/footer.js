import React from "react"
import FooterLogos from "./footerLogo"
import { StaticImage } from "gatsby-plugin-image"
import BackToTopButton from "./backToTop"

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div>
          <div className="hidden bg-theme-primary py-1 text-white lg:block">
            <div className="footer-container">
              <div className="grid grid-cols-5 items-center">
                <div>It's not too late!</div>
                <div>
                  <span className="font-semibold">Step 1:</span> Join OKEBET
                </div>
                <div>
                  <span className="font-semibold">Step 2:</span> Make a Deposit
                </div>
                <div>
                  <span className="font-semibold">Step 3:</span> 'Get in the
                  Game'
                </div>
                <div>
                  <div className="flex justify-end">
                    <a
                      href="https://www.okebet.com.au/registration/step-1"
                      className="flex items-center justify-center space-x-2 bg-theme-primary-light py-3 px-2"
                    >
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Get Started</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-theme-primary-light100 py-5">
            <div className="footer-container grid grid-flow-row gap-7 px-5 lg:px-0">
              <div className="grid gap-5 text-center text-white sm:grid-cols-3 sm:gap-0">
                <div>
                  <h2 className="mb-2 font-semibold uppercase">Company</h2>
                  <ul className="text-sm">
                    <li>
                      <a href="https://www.okebet.com.au/content/contact">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="https://www.okebet.com.au/content/about-us">
                        About Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-2 font-semibold uppercase">Legal</h2>
                  <ul className="text-sm">
                    <li>
                      <a href="https://www.okebet.com.au/content/privacy">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="https://www.okebet.com.au/content/code">
                        Responsible Gambling Code of Conduct
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-2 font-semibold uppercase">Information</h2>
                  <ul className="text-sm">
                    <li>
                      <a href="https://www.okebet.com.au/content/terms">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="https://www.okebet.com.au/content/htp">
                        Banking FAQ
                      </a>
                    </li>
                    <li>
                      <a href="https://www.okebet.com.au/content/verification">
                        Account Verification
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <FooterLogos />
              <div>
                <div className="m-auto flex items-center space-x-3 lg:max-w-[60%]">
                  <div>
                    <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-4 border-theme-error bg-white text-sm font-semibold">
                      18+
                    </span>
                  </div>
                  <div className=" text-white">
                    <div className="text-sm font-semibold">Must Be 18+</div>
                    <p className="text-[.70rem]">
                      Think About Your Choices Call Gambling Help 1800 858 858
                      Responsible Gambling. OkeBet is committed to responsible
                      gambling and ensuring that a range of tools are available
                      to our customers to manage their gambling. STAY IN
                      CONTROL. LEAVE BEFORE YOU LOSE IT, GAMBLE RESPONSIBLY.
                    </p>
                  </div>
                </div>
              </div>
              <div className="m-auto space-y-2 text-center text-[.70rem] text-white">
                <div className="m-auto flex justify-center space-x-3">
                  <a href="https://apps.apple.com/au/app/okebet/id1613091869">
                    <StaticImage
                      src="https://8p1.c15.mywebsitetransfer.com/wp-content/uploads/2023/04/apple-store.png"
                      alt="illustration"
                      quality={100}
                      width={130}
                    />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.betmakers.okebet">
                    <StaticImage
                      src="https://8p1.c15.mywebsitetransfer.com/wp-content/uploads/2023/04/google-play.png"
                      alt="illustration"
                      quality={100}
                      width={130}
                    />
                  </a>
                </div>
                <div className="m-auto flex items-center justify-center">
                  <a
                    href="https://www.facebook.com/okebetaustralia"
                    className="p-2"
                  >
                    <svg viewBox="0 0 15 15" width="15" height="15" fill="#fff">
                      <g>
                        <g id="Layer_1-2">
                          <path d="M2.3,15V8.16H0V5.49H2.3V5.31c0-.7,0-1.4,0-2.1A3.34,3.34,0,0,1,3.19,1,3.13,3.13,0,0,1,4.84.09,6.26,6.26,0,0,1,6.4,0L7.67.09l.1,0V2.49H7.62c-.52,0-1,0-1.57,0a.93.93,0,0,0-1,1c0,.65,0,1.29,0,1.93l0,0H7.69L7.34,8.15H5.06c0,.06,0,.1,0,.14V14.9s0,.07,0,.1Z" />
                        </g>
                      </g>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/okebetaustralia/"
                    className="p-2"
                  >
                    <svg viewBox="0 0 15 15" width="15" height="15" fill="#fff">
                      <g>
                        <g>
                          <path d="M15,4.43v6a1.49,1.49,0,0,0,0,.21c0,.32-.06.66-.13,1a3.82,3.82,0,0,1-2.48,3,5.79,5.79,0,0,1-2.06.34c-1.59,0-3.17,0-4.76,0a10.15,10.15,0,0,1-2.33-.2A3.82,3.82,0,0,1,.48,12.64,5.24,5.24,0,0,1,0,10.37C0,8.75,0,7.13,0,5.5a15.43,15.43,0,0,1,.15-2A3.79,3.79,0,0,1,1.67.9,4.48,4.48,0,0,1,4.16.06C4.52,0,4.88,0,5.24,0H9.73l1,.06a4.9,4.9,0,0,1,1.77.39,3.9,3.9,0,0,1,2.33,3.19C14.92,3.9,14.94,4.17,15,4.43ZM7.49,13.68v0H8.68c.86,0,1.72,0,2.56-.13a2.46,2.46,0,0,0,2.22-2,7,7,0,0,0,.16-1.44c0-1.38,0-2.77,0-4.16a19.77,19.77,0,0,0-.11-2.18,2.48,2.48,0,0,0-2.1-2.26,7.58,7.58,0,0,0-1.57-.14c-1.4,0-2.8,0-4.19,0a16.36,16.36,0,0,0-2,.12,2.47,2.47,0,0,0-2.16,2A8.37,8.37,0,0,0,1.38,5c0,1.21,0,2.42,0,3.64,0,.83,0,1.68.11,2.51a2.46,2.46,0,0,0,1.26,2,3.16,3.16,0,0,0,1.53.41C5.34,13.64,6.42,13.66,7.49,13.68Z" />
                          <path d="M3.64,7.51A3.86,3.86,0,1,1,7.5,11.36,3.86,3.86,0,0,1,3.64,7.51ZM5,7.49A2.5,2.5,0,1,0,7.51,5,2.49,2.49,0,0,0,5,7.49Z" />
                          <path d="M12.4,3.49a.9.9,0,0,1-.88.91.92.92,0,0,1-.92-.9.9.9,0,0,1,.89-.9A.88.88,0,0,1,12.4,3.49Z" />
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
                <p>© 2023 OKEBET. All Rights Reserved.</p>
              </div>
              <div className="text-center text-[.70rem] text-white">
                <p>
                  For SA customers, our operations are governed by the SA Code.
                </p>
                <a
                  href="https://www.cbs.sa.gov.au/sites/default/files/resource-files/authorised_betting_operations_gambling_code_of_practice.pdf?timestamp=1647305330731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  Gambling Codes Practice
                </a>
              </div>
              <BackToTopButton />
            </div>
            <a
              href="https://infusion121.com.au"
              target="_blank"
              className="bottom-5 right-5 m-auto mt-5 flex items-center justify-center lg:absolute lg:mt-0"
              rel="noreferrer"
            >
              <StaticImage
                src="https://8p1.c15.mywebsitetransfer.com/wp-content/uploads/2023/04/i121-footer-logo.png"
                alt="illustration"
                quality={100}
                width={130}
              />
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
