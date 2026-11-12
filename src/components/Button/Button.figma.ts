// url=https://www.figma.com/design/feMlcOYj2Tp2NX7c477S6V/MDS.Components.Web?node-id=15-199
// source=https://github.com/terencepdevine/mds_ui/blob/master/src/components/Button/Button.tsx
// component=Button

import figma from "figma"

const showLeadingIcon = figma.selectedInstance.getBoolean("Show Leading Icon")
const showTrailingIcon = figma.selectedInstance.getBoolean("Show Trailing Icon")
const children = figma.selectedInstance.getString("Label")

export default {
  id: "Button",
  imports: ['import { Button } from "./Button"'],
  example: figma.code`<Button${figma.helpers.react.renderProp(
    "showLeadingIcon",
    showLeadingIcon,
  )}${figma.helpers.react.renderProp("showTrailingIcon", showTrailingIcon)}>
      ${figma.helpers.react.renderChildren(children)}
    </Button>`,
  metadata: { nestable: true },
}
