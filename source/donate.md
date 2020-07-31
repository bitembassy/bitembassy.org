---
title: Donate
alias: donate/index.html
---

<div class="center">

We are accepting Lightning and on-chain donations, every satoshi will be invested back into the community.

<style type="text/css"> .btcpay-form { display: inline-flex; align-items: center; justify-content: center; } .btcpay-form--inline { flex-direction: row; } .btcpay-form--block { flex-direction: column; } .btcpay-form--inline .submit { margin-left: 15px; } .btcpay-form--block select { margin-bottom: 10px; } .btcpay-form .btcpay-custom-container{ text-align: center; }.btcpay-custom { display: flex; align-items: center; justify-content: center; } .btcpay-form .plus-minus { cursor:pointer; font-size:25px; line-height: 25px; background: #DFE0E1; height: 30px; width: 45px; border:none; border-radius: 60px; margin: auto 5px; display: inline-flex; justify-content: center; } .btcpay-form select { -moz-appearance: none; -webkit-appearance: none; appearance: none; color: currentColor; background: transparent; border:1px solid transparent; display: block; padding: 1px; margin-left: auto; margin-right: auto; font-size: 11px; cursor: pointer; } .btcpay-form select:hover { border-color: #ccc; } #btcpay-input-price { -moz-appearance: none; -webkit-appearance: none; border: none; box-shadow: none; text-align: center; font-size: 25px; margin: auto; border-radius: 5px; line-height: 35px; background: #fff; } </style>
<form method="POST"  action="https://btcpay.ln.bitembassy.org/api/v1/invoices" class="btcpay-form btcpay-form--block">
  <input type="hidden" name="storeId" value="7c8Z57eXyJ36ZbaAJr4LBdZjiy62TrJLBJiQFFAKKVrU" />
  <input type="hidden" name="browserRedirect" value="https://www.bitembassy.org/thankyou.html" />
  <div class="btcpay-custom-container">
    <div class="btcpay-custom">
      <button class="plus-minus" onclick="event.preventDefault(); var price = parseInt(document.querySelector('#btcpay-input-price').value); if ('-' == '-' && (price - 1) < 1) { return; } document.querySelector('#btcpay-input-price').value = parseInt(document.querySelector('#btcpay-input-price').value) - 1;">-</button>
      <input id="btcpay-input-price" name="price" type="text" min="1" max="20" step="1" value="5" style="width: 3em;" oninput="event.preventDefault();isNaN(event.target.value) || event.target.value <= 0 ? document.querySelector('#btcpay-input-price').value = 5 : event.target.value"  />
      <button class="plus-minus" onclick="event.preventDefault(); var price = parseInt(document.querySelector('#btcpay-input-price').value); if ('+' == '-' && (price - 1) < 1) { return; } document.querySelector('#btcpay-input-price').value = parseInt(document.querySelector('#btcpay-input-price').value) + 1;">+</button>
    </div>
    <select name="currency">
      <option value="USD">USD</option>
      <option value="ILS">ILS</option>
      <option value="BTC">BTC</option>
      <option value="SATS">SATS</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>    
    </select>
  </div>
  <input class="btcpay-custom" placeholder="notes?" name="orderId" value="" style="margin:10px 15px" />

<button type="submit" class="submit" name="submit" style="min-width:209px; min-height:57px; border-radius: 4px;border-style: none;background-color: #0f3b21;" alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor"><span style="color:#fff">Donate with</span>
<img src="https://btcpay.ln.bitembassy.org/img/logo.svg" style="vertical-align:middle;height:43px;display:inline-block;padding: 5% 0 5% 5px;">
</button></form>
</div>
