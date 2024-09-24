/**
 *  -------Blog page visit button-----------
 */
document.getElementById('btnBlog')
    .addEventListener('click', function () {
        window.location.href = '/blog.html';
    });
/**
 *----------Common section start--------
 */
/**
 * ---------javascript Common Function Start---------
 */
function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id) {
    const textvalue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textvalue);
    return textNumber;
}

function tergetGetInputValueById(id) {
    const value = document.getElementById(id);
    return value;
}

/**
 * ---------javascript Common Function End---------
 */
const totalMainBalance = tergetGetInputValueById('totalBalanceAmount');
/**
 *----------Common section end--------
 */
/**
 *----------Donation Noakhali section start--------
 */

const NoakhaliDonationBalance = tergetGetInputValueById('balanceNoakhaliAmount');
const toNoakhaliDonateAmount = tergetGetInputValueById('inputNoakhaliDonateAmount');
const toNoakhaliDonateBtn = tergetGetInputValueById('btnNoakhaliDonate');
toNoakhaliDonateBtn.addEventListener('click', function () {
    const totalBalance = getTextFieldValueById('totalBalanceAmount');
    const totalNoakhaliDonationBalance = getTextFieldValueById('balanceNoakhaliAmount');
    const donationAmount = getInputFieldValueById('inputNoakhaliDonateAmount');
    const donationAmountstring = donationAmount.toString();
    const donationAmountArray = donationAmountstring.split(' ');
    // const donationAmountArray = donationAmount.split('');
    console.log(donationAmountArray);
    for (const item of donationAmountArray) {
        if (!isNaN(item) && item !== ' ' && item > 0 && totalBalance >= donationAmount) {
            const newNoakhaliDonationBalance = totalNoakhaliDonationBalance + donationAmount;
            NoakhaliDonationBalance.innerText = newNoakhaliDonationBalance;
            const remainingTotalBalance = totalBalance - donationAmount;
            totalMainBalance.innerText = remainingTotalBalance;
            //=== History Section style and represent by JS start
            const historyItem = document.createElement("div");
            historyItem.className = "bg-white p-5 rounded-md border-l-2 border-indigo-500  border shadow-sm  rounded-lg mt-4 ";
            historyItem.innerHTML = `
        <p class="text-xs text-yellow-500"> ${donationAmount } Tk. is Donate for Flood at Noakhali, Bangladesh</p>
        <p class="text-xs text-gray-500">${new Date()}</p>
        `;
            const historyContainer = document.getElementById("historySection");
            historyContainer.insertBefore(historyItem, historyContainer.firstChild);
            //==== History Section style and represent by JS end
            document.getElementById('inputNoakhaliDonateAmount').value = '';
            document.getElementById("my_modal_1").showModal();
        } else {
            alert('Invalid Donation Amount');
            document.getElementById('inputNoakhaliDonateAmount').value = '';
            return;
        }
    }
});
/**
 *----------Donation Noakhali section end--------
 */
/**
 *----------Donation Feni section start--------
 */

const FeniDonationBalance = tergetGetInputValueById('balanceFeniAmount');
const toFeniDonateAmount = tergetGetInputValueById('inputFeniDonateAmount');
const toFeniDonateBtn = tergetGetInputValueById('btnFeniDonate');
toFeniDonateBtn.addEventListener('click', function () {
    const totalBalance = getTextFieldValueById('totalBalanceAmount');
    const totalFeniDonationBalance = getTextFieldValueById('balanceFeniAmount');
    const donationAmount = getInputFieldValueById('inputFeniDonateAmount');
    const donationAmountstring = donationAmount.toString();
    const donationAmountArray = donationAmountstring.split(' ');
    for (const item of donationAmountArray) {
        if (!isNaN(item) && item !== ' ' && item > 0 && totalBalance >= donationAmount) {
            const newFeniDonationBalance = totalFeniDonationBalance + donationAmount;
            FeniDonationBalance.innerText = newFeniDonationBalance;
            const remainingTotalBalance = totalBalance - donationAmount;
            totalMainBalance.innerText = remainingTotalBalance;
            //=== History Section style and represent by JS start
            const historyItem = document.createElement("div");
            historyItem.className = "bg-white p-5 rounded-md border-l-2 border-indigo-500  border shadow-sm  rounded-lg mt-4";
            historyItem.innerHTML = `
        <p class="text-xs text-yellow-500"> ${donationAmount } Tk. is Donated for Flood Relief in Feni,Bangladesh</p>
        <p class="text-xs text-gray-500">${new Date()}</p>
        `;
            const historyContainer = document.getElementById("historySection");
            historyContainer.insertBefore(historyItem, historyContainer.firstChild);;
            //==== History Section style and represent by JS end
            document.getElementById('inputFeniDonateAmount').value = '';
            document.getElementById("my_modal_1").showModal();
        } else {
            alert('Invalid Donation Amount');
            document.getElementById('inputFeniDonateAmount').value = '';
            return;
        }
    }
});
/**
 *----------Donation Feni section end--------
 */
/**
 *----------Donation Qoota section start--------
 */
const QuotaDonationBalance = tergetGetInputValueById('balanceQuotaAmount');
const toQuotaDonateAmount = tergetGetInputValueById('inputQuotaDonateAmount');
const toQuotaDonateBtn = tergetGetInputValueById('btnQuotaDonate');
toQuotaDonateBtn.addEventListener('click', function () {
    const totalBalance = getTextFieldValueById('totalBalanceAmount');
    const totalQuotaDonationBalance = getTextFieldValueById('balanceQuotaAmount');
    const donationAmount = getInputFieldValueById('inputQuotaDonateAmount');
    const donationAmountstring = donationAmount.toString();
    const donationAmountArray = donationAmountstring.split(' ');
    for (const item of donationAmountArray) {
        if (!isNaN(item) && item !== ' ' && item > 0 && totalBalance >= donationAmount) {
            const newQuotaDonationBalance = totalQuotaDonationBalance + donationAmount;
            QuotaDonationBalance.innerText = newQuotaDonationBalance;
            const remainingTotalBalance = totalBalance - donationAmount;
            totalMainBalance.innerText = remainingTotalBalance;
            //=== History Section style and represent by JS start
            const historyItem = document.createElement("div");
            historyItem.className = "bg-white p-5 rounded-md border-l-2 border-indigo-500  border shadow-sm  rounded-lg mt-4";
            historyItem.innerHTML = `
        <p class="text-xs text-yellow-500"> ${donationAmount } Tk. is Donated Aid for Injured in the Quota Movement </p>
        <p class="text-xs text-gray-500">${new Date()}</p>
        `;
            const historyContainer = document.getElementById("historySection");
            historyContainer.insertBefore(historyItem, historyContainer.firstChild);
            //==== History Section style and represent by JS end
            document.getElementById('inputQuotaDonateAmount').value = '';
            document.getElementById("my_modal_1").showModal();
        } else {
            alert('Invalid Donation Amount');
            document.getElementById('inputQuotaDonateAmount').value = '';
            return;
        }
    }
});
/**
 *----------Donation Quota section end--------
 */

/**
 * ---------javascript for History section Start--------
 */
document.getElementById('btnHistoryTab').addEventListener('click', function () {
    document.getElementById('mainSection').classList.add('hidden');
    document.getElementById('historySection').classList.remove('hidden');
    document.getElementById('btnHistoryTab').classList.add('bg-[#b4f461]');
    document.getElementById('btnDonationTab').classList.remove('bg-[#b4f461]');
    // console.log(history - list);
})
document.getElementById('btnDonationTab').addEventListener('click', function () {
    document.getElementById('mainSection').classList.remove('hidden');
    document.getElementById('historySection').classList.add('hidden');
    document.getElementById('btnDonationTab').classList.add('bg-[#b4f461]');
    document.getElementById('btnHistoryTab').classList.remove('bg-[#b4f461]');
})
/**
 * ---------javascript for History section End--------
 */