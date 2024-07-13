import { amountInput, termsInput, rateInput, radioInput } from "../const.js"; 
export default class Validation {
    constructor() {
        this.amount = 0;
        this.terms = 0;
        this.rate = 0;
        this.type = "";
    }
    set() {
        this.amount = 0;
        this.terms = 0;
        this.rate = 0;
        this.type = "";
    }
    assignValue(e) {
        if (e.target.name === 'amount') {
            this.amount = e.target.value.trim();
        }
        else if (e.target.name === 'terms') {
            this.terms = e.target.value.trim();
        }
        else if (e.target.name === 'rate') {
            this.rate = e.target.value.trim();
        }
        else if (e.target.name === 'type') {
            this.type = e.target.value.trim();
        }
    }
    validateSubmit(e) {
        e.preventDefault();
        let pass = true;
        
        this.clearAlert(amountInput);
        this.clearAlert(termsInput);
        this.clearAlert(rateInput);
        this.clearAlert(radioInput[0]);
        
        if (!this.amount) {
            this.showAlert("This field is required", amountInput);
            pass = false;
        } 
        if (!Number(this.amount) && this.amount.length > 0) {
            this.showAlert("Enter a valid number", amountInput);
            pass = false;
        }
        if (!this.terms) {
            this.showAlert("This field is required", termsInput);
            pass = false;
        }
        if (!Number(this.terms) && this.terms.length > 0) {
            this.showAlert("Enter a valid number", termsInput);
            pass = false;
        }
        if (!this.rate) {
            this.showAlert("This field is required", rateInput);
            pass = false;
        }
        if (!Number(this.rate) && this.rate.length > 0) {
            this.showAlert("Enter a valid number", rateInput);
            pass = false;
        }
        if (!this.type) {
            this.showAlert("This field is required", radioInput[0]);
            pass = false;
        }
        if (!pass) return;
        return this
    }
    showAlert(msj, location) {
        this.clearAlert(location);

        const alert = document.createElement("P");
        alert.classList.add("text-primary-red", "text-sm");
        alert.setAttribute('id', 'p-alert');
        alert.textContent = msj;

        if (location !== radioInput[0]) {
            location.parentElement.classList.remove("border-slate-300");
            location.parentElement.classList.add("border-primary-red");
            location.parentElement.querySelector("span").classList.remove("bg-slate-100");
            location.parentElement.querySelector("span").classList.add("bg-primary-red", "text-white");
        }
        location.parentElement.parentElement.appendChild(alert);
    }
    clearAlert(location) {
        const alert = location.parentElement.parentElement.querySelector("p"); 
        alert?.remove();

        location.parentElement.classList.remove("border-primary-red");
        location.parentElement.classList.add("border-slate-300");
        const span = location.parentElement.querySelector("span");
        if (span) {
            span.classList.remove("bg-primary-red", "text-white");
            span.classList.add("bg-slate-100");
        }
    }
};