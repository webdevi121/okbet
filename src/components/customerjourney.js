import React from "react"

const CustomerJourney = props => {
  return (
    <React.Fragment>
      <div
        className={`relative py-20 ${
          props.layout ? "min-h-[50vh] bg-theme-secondary" : "bg-theme-light"
        }`}
      >
        {props.layout ? (
          <div className="absolute top-0 left-0 h-full w-full">
            <img
              src="https://admin.payinn.com.au/wp-content/uploads/2023/03/bg-matrix.jpg"
              alt=""
              className="h-full w-full object-cover object-bottom opacity-10"
            />
          </div>
        ) : null}
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-easing="ease"
          data-sal-duration="1000"
          className="theme-container relative"
        >
          <div className="mb-20 space-y-3 text-center">
            <h2
              className={`text-3xl font-bold md:text-4xl ${
                props.layout ? "text-theme-primary" : "text-theme-secondary"
              }`}
            >
              {props.title}
            </h2>
            {props.content ? (
              <div className="m-auto max-w-4xl font-medium text-white">
                {props.content}
              </div>
            ) : null}
          </div>
          <div>
            <div
              className={`journey-container ${props.layout ? "dark" : "light"}`}
            >
              <div className="jc-scroll-box">
                <div className="jc-wrap">
                  {props.list?.map((item, index) => (
                    <div className="journey-item" key={index}>
                      <div
                        className="roadmap-content"
                        style={{ color: `var(--accent-color-${index})` }}
                      >
                        <span
                          className="dot relative"
                          style={{ color: `var(--accent-color-${index})` }}
                        >
                          <span className="ping inline-flex"></span>
                          <span className="dot-title">
                            <h4 className="font-bold">{item.stageTitle}</h4>
                          </span>
                        </span>

                        <div className="content">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.stageDescription,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CustomerJourney
