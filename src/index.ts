// if we want to change the color or font of the text, we need to create a Style and then set the properties
let myStyle = webflow.createStyle('red');
myStyle.setProperties({ 'color': 'red' });

// we can then add more styles/classes if we want to
let myStyle2 = webflow.createStyle('font-size-16');
myStyle2.setProperties({ 'font-size': '16px', 'font-family': 'Verdana' });

document.getElementById("lorem").onsubmit = async (event) => {
  event.preventDefault()
  // Get the currently selected element in the Designer
  const el: any = await webflow.getSelectedElement()
  if (el && el.textContent) {
    // If we found the element and it has the ability to update the text content,
    // replace it with some placeholder text
    el.setTextContent(
      "Lorem ipfsum dolor sit amet, consectetur adipiscing elit, sed do " +
      "eiusmod tempori incididunt ut labore et dolore magna aliqua."
    )

    // Finally, save the changes to the element & they will be reflected in the Designer
    // Putting a try/catch block ensures messagging of an error
    try {
      await myStyle.save()
      await myStyle2.save()
  
      // Instead of combo classes we can add multiple styles as individual "modules"
      el.setStyles([myStyle, myStyle2])

      await el.save()

      webflow.notify({ type: 'Success', message: 'Successfully chnaged the size, color and font!' })
    } catch {
      webflow.notify({ type: 'Error', message: 'Something went wrong, try again!' })
    }
  }
}
