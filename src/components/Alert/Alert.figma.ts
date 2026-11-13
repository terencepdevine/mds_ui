// url=https://www.figma.com/design/feMlcOYj2Tp2NX7c477S6V/MDS.Components.Web?node-id=34-1387
// source=https://github.com/terencepdevine/mds_ui/blob/master/src/components/Alert/Alert.tsx
// component=Alert

import figma from "figma"

const status = figma.selectedInstance.getEnum("Status", {
  Default: undefined,
  Warning: "warning",
  Error: "error",
  Success: "success",
})
const heading = figma.selectedInstance.getString("Heading")
const text = figma.selectedInstance.getString("Text")
const linkLabel = figma.selectedInstance.getBoolean("Show Link", {
  true: figma.selectedInstance.getString("Link"),
  false: undefined,
})

export default {
  id: "Alert",
  imports: ['import { Alert } from "./Alert"'],
  example: figma.code`<Alert${figma.helpers.react.renderProp(
    "status",
    status,
  )}${figma.helpers.react.renderProp("heading", heading)}${figma.helpers.react.renderProp(
    "linkLabel",
    linkLabel,
  )}>
      ${figma.helpers.react.renderChildren(text)}
    </Alert>`,
  metadata: { nestable: true },
}
