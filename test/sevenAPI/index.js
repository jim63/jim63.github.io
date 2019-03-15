app = {};

postData("https://logistics-stage.ecpay.com.tw/Express/map", {
  MerchantID: "3117441",
  LogisticsType: "CVS",
  LogisticsSubType: "UNIMARTC2C",
  IsCollection: "N",
  ServerReplyURL: ""
})
  .then(data => console.log(data)) // JSON from `response.json()` call
  .catch(error => console.error(error));

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    redirect: "follow" // manual, *follow, error
  }).then(response => response.json()); // 輸出成 json
}
