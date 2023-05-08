/**
 * Write-only the password as cookie
 */
import React, { useState } from "react"
import { setSessionPassword } from "../utils/utils"

const PasswordProtect = () => {
  const [password, setPassword] = useState("")

  const onSubmit = event => {
    event.preventDefault()
    setSessionPassword(password)
    window.location.reload() // eslint-disable-line
  }

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="flex h-screen items-center justify-center bg-white lg:overflow-hidden">
          <div className="mx-auto max-w-5xl lg:px-8">
            <div className="grid lg:grid-cols-2 lg:gap-8">
              <div className="order-2 mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:order-1 lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block text-theme-primary">
                      Coming Soon{" "}
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Our new Website will launch soon. Enter password to try the
                    beta before it's publicly available.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <form
                      className="sm:mx-auto sm:max-w-xl lg:mx-0"
                      onSubmit={onSubmit}
                    >
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <input
                            name="password"
                            type="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            placeholder="Enter Password"
                            className="block h-[50px] w-full rounded-md border-0 bg-gray-200 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="block h-[50px] w-full rounded-md bg-theme-primary px-4 font-medium text-white shadow focus:outline-none"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="order-1 mx-auto mt-12 flex max-w-[340px] items-center justify-center px-20 lg:order-2 lg:max-w-full">
                <img
                  className=""
                  src="https://admin.tips.okebet.com.au/wp-content/uploads/2023/05/welcome-logo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PasswordProtect
