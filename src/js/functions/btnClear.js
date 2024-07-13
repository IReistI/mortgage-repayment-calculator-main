import { amountInput, termsInput, rateInput, radioInput, containerInfo, containerResult } from "../const.js";
import clearHTML from "./clearHTML.js";
export default function clear(instance) {

    instance.set();
    
    amountInput.value = '';
    termsInput.value = '';
    rateInput.value = '';
    for(let radio of radioInput) {
        radio.checked = false;
    };

    // if (containerInfo) return;
    

    clearHTML(containerInfo);

    clearHTML(containerResult);

    const img = document.createElement("IMG");
    img.src = 'assets/images/illustration-empty.svg';
    img.alt = 'img illustration-empty';

    const h2 = document.createElement("H2");
    h2.classList.add("text-slate-100", "font-bold", "text-2xl", "my-2");
    h2.textContent = 'Results shown here';

    const p = document.createElement("P");
    p.classList.add("text-slate-100", "text-center");
    p.textContent = 'Complete the form and click “calculate repayments” to see what your monthly repayments would be.';

    containerInfo.appendChild(img);
    containerInfo.appendChild(h2);
    containerInfo.appendChild(p);
};