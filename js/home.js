/**
 * ---------javascript for home page Start---------
 */
/**
 * -------Blog page visit button-----------
 */
document.getElementById('btnBlog')
    .addEventListener('click', function () {
        window.location.href = '/blog.html';
    });
/**
 *----------Common section start--------
 */
const totalMainBalance = document.getElementById('totalBalanceAmount');
// console.log(totalMainBalance);
/**
 *----------Common section end--------
 */
/**
 *----------Donation Noakhali section start--------
 */
const NoakhaliDonationBalance = document.getElementById('balanceNoakhaliAmount');
// console.log(totalNoakhaliDonationBalance);
const toNoakhaliDonateAmount = document.getElementById('inputNoakhaliDonateAmount');
// console.log(toNoakhaliDonateAmount);
const toNoakhaliDonateBtn = document.getElementById('btnNoakhaliDonate');
// console.log(toNoakhaliDonateBtn);
toNoakhaliDonateBtn.addEventListener('click', function () {
    const totalBalance = parseFloat(totalMainBalance.innerText);
    // console.log(totalBalance);
    const totalNoakhaliDonationBalance = parseFloat(NoakhaliDonationBalance.innerText);
    const donationAmount = parseFloat(toNoakhaliDonateAmount.value);
    const newNoakhaliDonationBalance = totalNoakhaliDonationBalance + donationAmount;
    NoakhaliDonationBalance.innerText = newNoakhaliDonationBalance;
    const remainingTotalBalance = totalBalance - donationAmount;
    totalMainBalance.innerText = remainingTotalBalance;
    //=== History Section style and represent by JS start
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500  border shadow-sm  rounded-lg mt-4 ";
    historyItem.innerHTML = `
    <p class="text-xs text-yellow-500"> ${donationAmount } Taka is Donated for flood-2024 at Noakhali, Bangladesh</p>
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    `;
    console.log(historyItem);
    console.log(historyItem.innerHTML);
    const historyContainer = document.getElementById("historySection");
    console.log(historyContainer);
    console.log(historyItem);
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);;
    //==== History Section style and represent by JS end
});
/**
 *----------Donation Noakhali section end--------
 */
/**
 *----------Donation Feni section start--------
 */
const FeniDonationBalance = document.getElementById('balanceFeniAmount');
// console.log(FeniDonationBalance);
const toFeniDonateAmount = document.getElementById('inputFeniDonateAmount');
// console.log(toFeniDonateAmount);
const toFeniDonateBtn = document.getElementById('btnFeniDonate');
// console.log(toFeniDonateBtn);
toFeniDonateBtn.addEventListener('click', function () {
    const totalBalance = parseFloat(totalMainBalance.innerText);
    // console.log(totalBalance);
    const totalFeniDonationBalance = parseFloat(FeniDonationBalance.innerText);
    const donationAmount = parseFloat(toFeniDonateAmount.value);
    const newFeniDonationBalance = totalFeniDonationBalance + donationAmount;
    FeniDonationBalance.innerText = newFeniDonationBalance;
    const remainingTotalBalance = totalBalance - donationAmount;
    totalMainBalance.innerText = remainingTotalBalance;
    //=== History Section style and represent by JS start
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500 ";
    historyItem.innerHTML = `
        <p class="text-xs text-yellow-500"> ${donationAmount } Taka is Donated for Flood Relief in Feni,Bangladesh</p>
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        `;
    console.log(historyItem);
    console.log(historyItem.innerHTML);
    const historyContainer = document.getElementById("historySection");
    console.log(historyContainer);
    console.log(historyItem);
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);;
    //==== History Section style and represent by JS en
});
/**
 *----------Donation Feni section end--------
 */
/**
 *----------Donation Qoota section start--------
 */
const QuotaDonationBalance = document.getElementById('balanceQuotaAmount');
// console.log(QuotaDonationBalance);
const toQuotaDonateAmount = document.getElementById('inputQuotaDonateAmount');
// console.log(toNoakhaliDonateAmount);
const toQuotaDonateBtn = document.getElementById('btnQuotaDonate');
// console.log(toQuotaDonateBtn);
toQuotaDonateBtn.addEventListener('click', function () {
    const totalBalance = parseFloat(totalMainBalance.innerText);
    // console.log(totalBalance);
    const totalQuotaDonationBalance = parseFloat(QuotaDonationBalance.innerText);
    const donationAmount = parseFloat(toQuotaDonateAmount.value);
    const newQuotaDonationBalance = totalQuotaDonationBalance + donationAmount;
    QuotaDonationBalance.innerText = newQuotaDonationBalance;
    const remainingTotalBalance = totalBalance - donationAmount;
    totalMainBalance.innerText = remainingTotalBalance;
    //=== History Section style and represent by JS start
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500 ";
    historyItem.innerHTML = `
        <p class="text-xs text-yellow-500"> ${donationAmount } Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        `;
    console.log(historyItem);
    console.log(historyItem.innerHTML);
    const historyContainer = document.getElementById("historySection");
    console.log(historyContainer);
    console.log(historyItem);
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);;
    //==== History Section style and represent by JS en
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