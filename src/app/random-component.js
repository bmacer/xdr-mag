"use client";

import React, { useState, createContext, useRef } from "react";
import { AButton } from "@cisco-sbg-ui/magna-react";
import {
  AAccordion,
  AAccordionPanel,
  AAccordionHeader,
  AAccordionHeaderTitle,
  AAccordionBody,
  AIcon,
  AMenu,
  AListItem,
} from "@cisco-sbg-ui/magna-react";

const MyContext = createContext();

const Something = () => {
  const [count, setCount] = useState(0);
  return (
    <MyContext.Provider value={count}>
      <div>
        <AButton
          data-testid="click-test-button"
          onClick={() => setCount(count + 1)}
        >
          Click Me
        </AButton>
        <p data-testid="click-test-text">
          Button has been clicked {count} times.
        </p>
      </div>
    </MyContext.Provider>
  );
};
const S2 = () => {
  const buttonRef = useRef(null);
  const [active, setActive] = useState(false);
  return (
    <AAccordion bordered>
      <AAccordionPanel>
        <AAccordionHeader>
          <AAccordionHeaderTitle chevron={false}>
            Accordion Item 1
          </AAccordionHeaderTitle>
          <AButton
            ref={buttonRef}
            icon
            tertiaryAlt
            onClick={() => setActive(!active)}
          >
            <AIcon>ellipsis-horizontal</AIcon>
          </AButton>
          <AMenu
            anchorRef={buttonRef}
            open={active}
            onClose={() => setActive(false)}
          >
            <AListItem>See More</AListItem>
          </AMenu>
        </AAccordionHeader>
      </AAccordionPanel>
      <AAccordionPanel collapsed={false}>
        <AAccordionHeader>
          <AAccordionHeaderTitle>Accordion Item 2</AAccordionHeaderTitle>
        </AAccordionHeader>
        <AAccordionBody>LoremIpsum</AAccordionBody>
      </AAccordionPanel>
      <AAccordionPanel>
        <AAccordionHeader>
          <AAccordionHeaderTitle>Accordion Item 3</AAccordionHeaderTitle>
          <AButton icon tertiaryAlt href="/" target="_blank">
            <AIcon>info</AIcon>
          </AButton>
        </AAccordionHeader>
        <AAccordionBody>LoremIpsum</AAccordionBody>
      </AAccordionPanel>
      <AAccordionPanel collapsed={false}>
        <AAccordionHeader>
          <AAccordionHeaderTitle>
            Additional Accordion Item
          </AAccordionHeaderTitle>
        </AAccordionHeader>
        <AAccordionBody>LoremIpsum</AAccordionBody>
      </AAccordionPanel>
    </AAccordion>
  );
};

export default S2;
