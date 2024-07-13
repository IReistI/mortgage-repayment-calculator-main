import { form, amountInput, termsInput, rateInput, radioInput, btnClear } from "./const.js";
import Validation from "./class/Validation.js";
import Calculate from "./class/Calculate.js";
import clear from "./functions/btnClear.js";

function initApp() {
    const validationInstance = new Validation();

    amountInput.addEventListener("input", (e) => validationInstance.assignValue(e));
    termsInput.addEventListener("input", (e) => validationInstance.assignValue(e));
    rateInput.addEventListener("input", (e) => validationInstance.assignValue(e));
    for(let radio of radioInput) {
        radio.addEventListener("change", (e) => {
            radio.checked ? validationInstance.assignValue(e) : null;
        });
    };
    btnClear.addEventListener("click", () => clear(validationInstance));

    form.addEventListener("submit", (e) => {
        const testing = validationInstance.validateSubmit(e) ?? undefined;
        if (testing) {
            const {amount, terms, rate, type} = testing;
            const operation = new Calculate(amount, terms, rate, type);

            type === "repayment" ? operation.calculateRepayment() : operation.calculateInterest();
            operation.set();
            return
        }
    });
};

document.addEventListener("DOMContentLoaded", initApp);