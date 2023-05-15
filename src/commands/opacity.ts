import { window as codeWindow } from 'vscode'
import { getMaterialIconsJSON, setThemeConfig } from '../helpers'
import { translate } from '../i18n'
import { getDefaultIconOptions, validateOpacityValue } from '../icons'

/** Command to toggle the folder icons. */
export async function changeOpacity() {
   try {
      const currentOpacityValue = getCurrentOpacityValue()
      const response = await showInput(currentOpacityValue)
      if (response)
         await setOpacityConfig(+response)
   }
   catch (error) {
      console.error(error)
   }
}

/** Show input to enter the opacity value. */
function showInput(opacity: number) {
   return codeWindow.showInputBox({
      placeHolder: translate('opacity.inputPlaceholder'),
      ignoreFocusOut: true,
      value: opacity.toString(),
      validateInput: validateOpacityInput,
   })
}

/** Validate the opacity value which was inserted by the user. */
function validateOpacityInput(opacityInput: string) {
   if (!validateOpacityValue(+opacityInput))
      return translate('opacity.wrongValue')

   return undefined
}

/** Get the current value of the opacity of the icons. */
export function getCurrentOpacityValue(): number {
   const defaultOptions = getDefaultIconOptions()
   const config = getMaterialIconsJSON()
   return config?.options?.opacity ?? defaultOptions.opacity
}

function setOpacityConfig(opacity: number) {
   return setThemeConfig('opacity', opacity, true)
}
