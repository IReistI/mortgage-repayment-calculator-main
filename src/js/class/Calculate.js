import { containerResult, containerInfo } from "../const.js";
import clearHTML from "../functions/clearHTML.js";
export default class Calculate {
    constructor(amount, terms, rate, type) {
        this.amount = amount;
        this.terms = terms;
        this.rate = rate;
        this.type = type;
    }
    set() {
        this.amount = 0;
        this.terms = 0;
        this.rate = 0;
        this.type = "";
    }
    calculateRepayment() {
        let rateInterestMonthly = this.rate / 100 / 12;
        let numPays = this.terms * 12;
        let monthlyPayment = (this.amount * rateInterestMonthly * Math.pow(1 + rateInterestMonthly, numPays)) / (Math.pow(1 + rateInterestMonthly, numPays) - 1);

        let totalPayment =  this.calculateTotalPayment(monthlyPayment);
        this.showPayment(monthlyPayment, totalPayment);
    }
    calculateInterest() {
        let rateInterestMonthly = this.rate / 100 / 12;
        let paymentInterestMonthly = this.amount * rateInterestMonthly;

        let totalPayment = this.calculateTotalPayment(paymentInterestMonthly);
        this.showPayment(paymentInterestMonthly, totalPayment);
    }
    calculateTotalPayment(payment) {
        let total = payment;
        let numPays = this.terms * 12;
        let totalPay = total * numPays;
        return totalPay;
    }
    showPayment(payByMonth, totalPayment) {
        clearHTML(containerInfo);
        clearHTML(containerResult);
        const payByMonthFormated = payByMonth.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        const totalPaymentFormated = totalPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        const h2 = document.createElement("H2");
        h2.textContent = "Your Results";
        h2.classList.add("text-slate-100", "font-bold", "text-2xl");

        const p = document.createElement("P");
        p.textContent = 'Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.'
        p.classList.add("text-slate-100", "my-[1.5rem]");

        const divInformation = document.createElement("DIV");
        divInformation.classList.add("bg-slate-900", "px-3", "py-4", "rounded-lg", "border-t-4", "border-t-primary-lime", "mt-5", "md:px-8", "md:py-8");

        divInformation.innerHTML = `
            <div class="md:mb-8">
                <h3 class="text-slate-300 my-2 md:mt-0">Your monthly ${this.type === 'repayment' ? "repayment" : "interest"}</h3>
                <p class="text-primary-lime text-4xl font-primaryMedium md:text-5xl">$${payByMonthFormated}</p>
            </div>
            <div class="border-t-[1px] mt-5 border-slate-100 border-opacity-50">
                <h3 class="text-slate-300 my-2 md:mt-8">Total you'll repay over the term</h3>
                <p class="text-primary-lime text-2xl font-primaryMedium md:text-3xl">$${totalPaymentFormated}</p>
            </div>
        `;
        containerResult.appendChild(h2);
        containerResult.appendChild(p);
        containerResult.appendChild(divInformation);
    }
};