---
title: Donate
alias: donate/index.html
---

<div class="center">

We are accepting Lightning and on-chain donations, every satoshi will be invested back into the community.

<form method="POST" target="_blank" action="https://btcpay.ln.bitembassy.org/api/v1/invoices">
    <input type="hidden" name="storeId" value="ExbsGv3DAtRwYaxSQJUWK3A39iMcjExFsRTSVcsLqVEG" />
    <input type="hidden" name="browserRedirect" value="https://www.bitembassy.org/thankyou.html" />
    <input id="btcpay-input-price" name="price" placeholder="amount" type="number" step="any" min="0" oninput="event.preventDefault();isNaN(event.target.value) ? document.querySelector('#btcpay-input-price').value = 0 : event.target.value"  />
    <select name="currency">
        <option value="BTC">BTC</option>
        <option value="USD">USD</option>
        <option value="ILS" selected>ILS</option>
    </select>
    <input placeholder="notes?" name="orderId" value="" />
    <input type="image" class="submit" name="submit" src="/img/pay.svg" style="width:130px" alt="Pay with BtcPay">
</form>
</div>
