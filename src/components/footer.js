import React from "react"
import FooterLogos from "./footerLogo"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div>
          <div className="bg-theme-primary py-5 text-white">
            <div className="footer-container">
              <div className="grid grid-cols-5">
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
                  <a
                    href="https://www.okebet.com.au/registration/step-1"
                    className="flex justify-center space-x-2"
                  >
                    <span>[]</span>
                    <span>Get Started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-theme-primary-light100 py-5">
            <div className="footer-container grid grid-flow-row gap-7">
              <div className="grid grid-cols-3 text-center text-white">
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
                <div></div>
                <div></div>
              </div>
              <FooterLogos />
              <div>
                <div className="m-auto flex max-w-[60%] items-center space-x-3">
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
              <div className="m-auto flex space-x-3">
                <a href="https://apps.apple.com/au/app/okebet/id1613091869">
                  <StaticImage
                    src="https://admin.okbet.infusion121.com/wp-content/uploads/2023/04/apple-store.png"
                    alt="illustration"
                    quality={100}
                    width={130}
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.betmakers.okebet">
                  <StaticImage
                    src="https://admin.okbet.infusion121.com/wp-content/uploads/2023/04/google-play.png"
                    alt="illustration"
                    quality={100}
                    width={130}
                  />
                </a>
              </div>
              <div className="text-center text-[.70rem] text-white">
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
                >
                  Gambling Codes Practice
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
