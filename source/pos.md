---
permalink: pos/
layout: false
web-app: true
---

<div id="pos">
  <button onclick="document.getElementById('btcpay').src = document.getElementById('btcpay').src ;">&#215;</button>
  <iframe id="btcpay" src='https://btcpay.ln.bitembassy.org/apps/2w7eTJeYtZKT5irjaMJvFrroJmCk/pos/static' style='width: 100%; height: 100%; border: 0;'></iframe>
</div>

<style>
  #pos > button {
    position:fixed;
    left: 35px;
    top:35px;
    border-radius:50px;
    border: 0;
    width:48px;
    height:48px;
    font-size: 20;
  }
</style>
