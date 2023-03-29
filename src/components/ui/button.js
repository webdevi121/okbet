import React from "react"
import { navigate } from "gatsby"

const Button = props => {
  const IconComponent = props.icon
  return (
    <>
      {props.link ? (
        <button
          className={`rounded-2xl bg-theme-primary px-8 py-3 text-lg font-medium text-white`}
          type={props.type}
          onClick={() => {
            navigate(props.link)
          }}
        >
          <div className="flex justify-center">
            {props.icon ? (
              <div className="mr-3">
                <IconComponent className="h-6 w-6" aria-hidden="true" />
              </div>
            ) : null}
            <div>{props.name}</div>
          </div>
        </button>
      ) : null}
    </>
  )
}

export default Button
