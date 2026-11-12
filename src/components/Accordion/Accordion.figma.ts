// url=https://www.figma.com/design/feMlcOYj2Tp2NX7c477S6V/MDS.Components.Web?node-id=94-462
// source=https://github.com/terencepdevine/mds_ui/blob/master/src/components/Accordion/Accordion.tsx
// component=AccordionItem

import figma from "figma"

const headline = figma.selectedInstance.getString("Headline")
const text = figma.selectedInstance.getString("Text")
const defaultOpen = figma.selectedInstance.getEnum("State", {
  Active: true,
  Inactive: false,
})

export default {
  id: "AccordionItem",
  imports: ['import { AccordionItem } from "./Accordion"'],
  example: figma.code`<AccordionItem${figma.helpers.react.renderProp(
    "headline",
    headline,
  )}${figma.helpers.react.renderProp("defaultOpen", defaultOpen)}>
      ${figma.helpers.react.renderChildren(text)}
    </AccordionItem>`,
  metadata: { nestable: true },
}
