import React from "react"
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  FacebookMessengerIcon,
  TwitterIcon,
  EmailIcon,
  FacebookMessengerShareButton,
} from "react-share"

const ShareIcons = props => {
  return (
    <div className="space-x-2">
      <FacebookShareButton url={props.postUrl}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <FacebookMessengerShareButton url={props.postUrl} appId="274266067164">
        <FacebookMessengerIcon size={32} round={true} />
      </FacebookMessengerShareButton>
      <TwitterShareButton url={props.postUrl}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton url={props.postUrl}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
      <EmailShareButton url={props.postUrl} subject={props.title}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
    </div>
  )
}

export default ShareIcons
