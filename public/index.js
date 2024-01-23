var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// if we want to change the color or font of the text, we need to create a Style and then set the properties
let myStyle = webflow.createStyle('red');
myStyle.setProperties({ 'color': 'red' });
// we can then add more styles/classes if we want to
let myStyle2 = webflow.createStyle('font-size-16');
myStyle2.setProperties({ 'font-size': '16px', 'font-family': 'Verdana' });
document.getElementById("lorem").onsubmit = (event) => __awaiter(this, void 0, void 0, function* () {
    event.preventDefault();
    // Get the currently selected element in the Designer
    const el = yield webflow.getSelectedElement();
    if (el && el.textContent) {
        // If we found the element and it has the ability to update the text content,
        // replace it with some placeholder text
        el.setTextContent("Lorem ipfsum dolor sit amet, consectetur adipiscing elit, sed do " +
            "eiusmod tempori incididunt ut labore et dolore magna aliqua.");
        // Finally, save the changes to the element & they will be reflected in the Designer
        // Putting a try/catch block ensures messagging of an error
        try {
            yield myStyle.save();
            yield myStyle2.save();
            // Instead of combo classes we can add multiple styles as individual "modules"
            el.setStyles([myStyle, myStyle2]);
            yield el.save();
            webflow.notify({ type: 'Success', message: 'Successfully chnaged the size, color and font!' });
        }
        catch (_a) {
            webflow.notify({ type: 'Error', message: 'Something went wrong, try again!' });
        }
    }
});
