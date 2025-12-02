import ReCAPTCHA from "react-google-recaptcha";
import React, { forwardRef } from "react";

const Recaptcha = forwardRef<ReCAPTCHA>((_, ref) => (
  <ReCAPTCHA ref={ref} sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY ?? ""} />
));

export default Recaptcha;
