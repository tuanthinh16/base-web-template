///////---------------Button Congfig-------------


export let buttonColor = 'bg-green-500';
export let buttonHover = 'bg-yellow-500';
export let buttonTextColor = 'text-[#4e1818]';

export function changeButtonColor(key,newColor) {
  try {
    switch (key) {
            case 'buttonColor':
                buttonColor = newColor;
                break;
            case 'buttonHover':
                buttonHover = newColor;
                break;
            case 'buttonTextColor':
                buttonTextColor = newColor;
                break;
            default:
                break;
        }
  } catch (error) {
    console.log("Error change button config: "+error);
  }
}

/////----------------Input Config-----------
export const textHoverBorder = 'border-blue-500';
export const textFocusBorder = 'border-blue-500';
