import React from "react";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to see the latest news and trends.
        </FooterSubHeading>
        <FooterSubText>you can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email">
            <Button fontBig>Subscribe</Button>
          </FormInput>
        </Form>
      </FooterSubscription>
    </FooterContainer>
  );
};

export default Footer;
