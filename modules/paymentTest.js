

// const axios = require('axios');

// fetch('https://api.ipify.org/?format=json')
//   .then(response => response.json())
// // Returns 
// // {
// //  "ip": "user_ip"
// // }

axios({
    method: 'get',
    url: 'https://api.ipify.org/?format=json',
   
  }).then((response) =>{
    
    console.log(Object.keys(response));
    console.log(response.data.ip);
  });
  
  
  
  
  
  console.log('#################### InitiatePayment ########################');
  var request = require("request");
  
  var token = 'mytokenvalue' //token value to be placed here;
  var baseURL = 'https://apitest.myfatoorah.com';
  var options = { method: 'POST',
    url: baseURL+'/v2/InitiatePayment',
    headers: 
     { Accept: 'application/json',
       Authorization: 'Bearer '+token,
       'Content-Type': 'application/json' },
    body: { InvoiceAmount: 100, CurrencyIso: 'KWD' },
    json: true };
  
  request(options, function (error, res, body) {
    if (error) throw new Error(error);
  
    console.log(res.IsSuccess);
  
    console.log(body);
  
  });
    console.log('#################### ExecutePayment ########################');
  
  var options = { method: 'POST',
    url: baseURL+'/v2/ExecutePayment',
    headers: 
     { Accept: 'application/json',
     Authorization: 'Bearer '+token,
     'Content-Type': 'application/json' },
    body: 
     { PaymentMethodId: '2',
       CustomerName: 'Ahmed',
       DisplayCurrencyIso: 'KWD',
       MobileCountryCode: '+965',
       CustomerMobile: '12345678',
       CustomerEmail: 'xx@yy.com',
       InvoiceValue: 100,
       CallBackUrl: 'https://google.com',
       ErrorUrl: 'https://google.com',
       Language: 'en',
       CustomerReference: 'ref 1',
       CustomerCivilId: 12345678,
       UserDefinedField: 'Custom field',
       ExpireDate: '',
       CustomerAddress: 
        { Block: '',
          Street: '',
          HouseBuildingNo: '',
          Address: '',
          AddressInstructions: '' },
       InvoiceItems: [ { ItemName: 'Product 01', Quantity: 1, UnitPrice: 100 } ] },
    json: true };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
  
  });
  
  
  
  
  
  
  
  
  
  
  /*
  console.log('#################### InitiatePayment ########################');
  // var request = require("request");
  var token = '3nEG_t3JYK1CTP1bvFojGXVA-RtrUa7uJ3RvShtg-Sk6eoWxA4v1aBqQMY4UYzOKdK9TyJv5hmD2HV1GQyVi94V9y-0WIgaKbA0OLMc7HoSmdknEWsc4oSkSU_5SbpWZkt_W0T9h7vjy4pojDlVYv46SQ1jgC_obt-GM620X5JR5OUyFCoWPG5Nyk9efuIMrquD6KoaKxK2zLMY9epGbM1I2J3CA-0-jOJ4a8GpfOam2-RWz0xIsNA9_NoVI1mQIdo3eNthhGI6VIYrDKrmVdM-pmSutKQ3iec3fe6YbcA58WZlFOSEb10NRysDLZaHQ8UOs6E7NHEC20CEf0dbOUh552E22mujlLbDNuO5r8M2wHCNBD4YDp5BN9WfGFCUgWciMPeBkTKYi7no5KIAEzCODXCCBw3vsrRyuzN0f_pf2x6lB02YVfkwHVdQ0jYYncFbj5CyRJU2umwX1W2SOTRwHVY1Tbbh95RnM1HTE6r33pE5CldWApV76Ad5z0Z77Uy00OHZBePhaUwxH2FW5Ve69YPbCy5_Ge7ZQY5E3eXp1F0Npuk7srJPg_NWUs2Dc8PejPq3zIOU8fR0bL9smKcm_YrKfBi5t7KdcyqkBzA9ZO4KD8aEKhMCg1hnfZpa5WbNDb7D4ObxuuMblBSEh5qHh_TL337a0VkMgRIwmGv8bqF7pDR-gNIx1cRWpknbFVbH9Sw' //token value to be placed here;
  var baseURL = 'https://apitest.myfatoorah.com';
  var options = {
      method: 'POST',
      url: baseURL + '/v2/InitiatePayment',
      headers:
      {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
      },
      body: { InvoiceAmount: 100, CurrencyIso: 'KWD' },
      json: true
  };
  
  
  
  axios(options)
      .then(function (error, response, body) {
          // if (error) throw new Error(error);
          console.log(body);
          console.log(response);
      });
  // request(options, function (error, response, body) {
  //     if (error) throw new Error(error);
  //     console.log(body);
  
  // });
  console.log('#################### ExecutePayment ########################');
  
  var options = {
      method: 'POST',
      url: baseURL + '/v2/ExecutePayment',
      headers:
      {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
      },
      body:
      {
          PaymentMethodId: '2',
          CustomerName: 'Ahmed',
          DisplayCurrencyIso: 'KWD',
          MobileCountryCode: '+965',
          CustomerMobile: '12345678',
          CustomerEmail: 'xx@yy.com',
          InvoiceValue: 100,
          CallBackUrl: 'https://google.com',
          ErrorUrl: 'https://google.com',
          Language: 'en',
          CustomerReference: 'ref 1',
          CustomerCivilId: 12345678,
          UserDefinedField: 'Custom field',
          ExpireDate: '',
          CustomerAddress:
          {
              Block: '',
              Street: '',
              HouseBuildingNo: '',
              Address: '',
              AddressInstructions: ''
          },
          InvoiceItems: [{ ItemName: 'Product 01', Quantity: 1, UnitPrice: 100 }]
      },
      json: true
  };
  
  // request(options, function (error, response, body) {
  //     if (error) throw new Error(error);
  //     console.log(body);
  
  // });
  
  
  // axios(options).then(function (error, response, body) {
  //     // if (error) throw new Error(error);
  //     console.log(body);
  //     console.log(response);
  // });
  
  
  
  // app.post('https://apitest.myfatoorah.com/v2/InitiatePayment',{
  //     headers:
  //     {
  //         Accept: 'application/json',
  //         Authorization: 'Bearer ' + token,
  //         'Content-Type': 'application/json'
  //     },
  //     body: { InvoiceAmount: 100, CurrencyIso: 'KWD' } ,
  //     json:true
  // })
  
  // app.post('https://apitest.myfatoorah.com/ExecutePayment',{
  //     headers:
  //     {
  //         Accept: 'application/json',
  //         Authorization: 'Bearer ' + token,
  //         'Content-Type': 'application/json'
  //     },
  //     body:
  //     {
  //         PaymentMethodId: '2',
  //         CustomerName: 'Ahmed',
  //         DisplayCurrencyIso: 'KWD',
  //         MobileCountryCode: '+965',
  //         CustomerMobile: '12345678',
  //         CustomerEmail: 'xx@yy.com',
  //         InvoiceValue: 100,
  //         CallBackUrl: 'https://google.com',
  //         ErrorUrl: 'https://google.com',
  //         Language: 'en',
  //         CustomerReference: 'ref 1',
  //         CustomerCivilId: 12345678,
  //         UserDefinedField: 'Custom field',
  //         ExpireDate: '',
  //         CustomerAddress:
  //         {
  //             Block: '',
  //             Street: '',
  //             HouseBuildingNo: '',
  //             Address: '',
  //             AddressInstructions: ''
  //         },
  //         InvoiceItems: [{ ItemName: 'Product 01', Quantity: 1, UnitPrice: 100 }]
  //     } ,
  //     json:true
  // })
  
  
  
  
  
  
  */
  
  
  
  
  
  
  
  
  
  
  