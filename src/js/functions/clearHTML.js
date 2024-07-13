export default function clearHTML(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
};