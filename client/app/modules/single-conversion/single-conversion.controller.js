'use strict';
angular.module('rbt.single-conversion').controller('SingleConversion', /*@ngInject*/function ($scope, singleConversion) {
  var controller = this;

  controller.convert = convert;
  //controller.getCurrency = singleConversion.getCurrency;

  $scope.convert = {};

  function convert() {
    $scope.convert.sum = parseInt($scope.convert.sum);
    singleConversion.convert($scope.convert).then(function(result) {
      $scope.conversionResult = result.data;
    });
  }

  $scope.currencies = [
    {
      "sortName": "AED",
      "name": "United Arab Emirates Dirham"
    },
    {
      "sortName": "AFN",
      "name": "Afghan Afghani"
    },
    {
      "sortName": "ALL",
      "name": "Albanian Lek"
    },
    {
      "sortName": "AMD",
      "name": "Armenian Dram"
    },
    {
      "sortName": "ANG",
      "name": "Netherlands Antillean Guilder"
    },
    {
      "sortName": "AOA",
      "name": "Angolan Kwanza"
    },
    {
      "sortName": "ARS",
      "name": "Argentine Peso"
    },
    {
      "sortName": "AUD",
      "name": "Australian Dollar"
    },
    {
      "sortName": "AWG",
      "name": "Aruban Florin"
    },
    {
      "sortName": "AZN",
      "name": "Azerbaijani Manat"
    },
    {
      "sortName": "BAM",
      "name": "Bosnia-Herzegovina Convertible Mark"
    },
    {
      "sortName": "BBD",
      "name": "Barbadian Dollar"
    },
    {
      "sortName": "BDT",
      "name": "Bangladeshi Taka"
    },
    {
      "sortName": "BGN",
      "name": "Bulgarian Lev"
    },
    {
      "sortName": "BHD",
      "name": "Bahraini Dinar"
    },
    {
      "sortName": "BIF",
      "name": "Burundian Franc"
    },
    {
      "sortName": "BMD",
      "name": "Bermudan Dollar"
    },
    {
      "sortName": "BND",
      "name": "Brunei Dollar"
    },
    {
      "sortName": "BOB",
      "name": "Bolivian Boliviano"
    },
    {
      "sortName": "BRL",
      "name": "Brazilian Real"
    },
    {
      "sortName": "BSD",
      "name": "Bahamian Dollar"
    },
    {
      "sortName": "BTC",
      "name": "Bitcoin"
    },
    {
      "sortName": "BTN",
      "name": "Bhutanese Ngultrum"
    },
    {
      "sortName": "BWP",
      "name": "Botswanan Pula"
    },
    {
      "sortName": "BYR",
      "name": "Belarusian Ruble"
    },
    {
      "sortName": "BZD",
      "name": "Belize Dollar"
    },
    {
      "sortName": "CAD",
      "name": "Canadian Dollar"
    },
    {
      "sortName": "CDF",
      "name": "Congolese Franc"
    },
    {
      "sortName": "CHF",
      "name": "Swiss Franc"
    },
    {
      "sortName": "CLF",
      "name": "Chilean Unit of Account (UF)"
    },
    {
      "sortName": "CLP",
      "name": "Chilean Peso"
    },
    {
      "sortName": "CNY",
      "name": "Chinese Yuan"
    },
    {
      "sortName": "COP",
      "name": "Colombian Peso"
    },
    {
      "sortName": "CRC",
      "name": "Costa Rican Colón"
    },
    {
      "sortName": "CUC",
      "name": "Cuban Convertible Peso"
    },
    {
      "sortName": "CUP",
      "name": "Cuban Peso"
    },
    {
      "sortName": "CVE",
      "name": "Cape Verdean Escudo"
    },
    {
      "sortName": "CZK",
      "name": "Czech Republic Koruna"
    },
    {
      "sortName": "DJF",
      "name": "Djiboutian Franc"
    },
    {
      "sortName": "DKK",
      "name": "Danish Krone"
    },
    {
      "sortName": "DOP",
      "name": "Dominican Peso"
    },
    {
      "sortName": "DZD",
      "name": "Algerian Dinar"
    },
    {
      "sortName": "EEK",
      "name": "Estonian Kroon"
    },
    {
      "sortName": "EGP",
      "name": "Egyptian Pound"
    },
    {
      "sortName": "ERN",
      "name": "Eritrean Nakfa"
    },
    {
      "sortName": "ETB",
      "name": "Ethiopian Birr"
    },
    {
      "sortName": "EUR",
      "name": "Euro"
    },
    {
      "sortName": "FJD",
      "name": "Fijian Dollar"
    },
    {
      "sortName": "FKP",
      "name": "Falkland Islands Pound"
    },
    {
      "sortName": "GBP",
      "name": "British Pound Sterling"
    },
    {
      "sortName": "GEL",
      "name": "Georgian Lari"
    },
    {
      "sortName": "GGP",
      "name": "Guernsey Pound"
    },
    {
      "sortName": "GHS",
      "name": "Ghanaian Cedi"
    },
    {
      "sortName": "GIP",
      "name": "Gibraltar Pound"
    },
    {
      "sortName": "GMD",
      "name": "Gambian Dalasi"
    },
    {
      "sortName": "GNF",
      "name": "Guinean Franc"
    },
    {
      "sortName": "GTQ",
      "name": "Guatemalan Quetzal"
    },
    {
      "sortName": "GYD",
      "name": "Guyanaese Dollar"
    },
    {
      "sortName": "HKD",
      "name": "Hong Kong Dollar"
    },
    {
      "sortName": "HNL",
      "name": "Honduran Lempira"
    },
    {
      "sortName": "HRK",
      "name": "Croatian Kuna"
    },
    {
      "sortName": "HTG",
      "name": "Haitian Gourde"
    },
    {
      "sortName": "HUF",
      "name": "Hungarian Forint"
    },
    {
      "sortName": "IDR",
      "name": "Indonesian Rupiah"
    },
    {
      "sortName": "ILS",
      "name": "Israeli New Sheqel"
    },
    {
      "sortName": "IMP",
      "name": "Manx pound"
    },
    {
      "sortName": "INR",
      "name": "Indian Rupee"
    },
    {
      "sortName": "IQD",
      "name": "Iraqi Dinar"
    },
    {
      "sortName": "IRR",
      "name": "Iranian Rial"
    },
    {
      "sortName": "ISK",
      "name": "Icelandic Króna"
    },
    {
      "sortName": "JEP",
      "name": "Jersey Pound"
    },
    {
      "sortName": "JMD",
      "name": "Jamaican Dollar"
    },
    {
      "sortName": "JOD",
      "name": "Jordanian Dinar"
    },
    {
      "sortName": "JPY",
      "name": "Japanese Yen"
    },
    {
      "sortName": "KES",
      "name": "Kenyan Shilling"
    },
    {
      "sortName": "KGS",
      "name": "Kyrgystani Som"
    },
    {
      "sortName": "KHR",
      "name": "Cambodian Riel"
    },
    {
      "sortName": "KMF",
      "name": "Comorian Franc"
    },
    {
      "sortName": "KPW",
      "name": "North Korean Won"
    },
    {
      "sortName": "KRW",
      "name": "South Korean Won"
    },
    {
      "sortName": "KWD",
      "name": "Kuwaiti Dinar"
    },
    {
      "sortName": "KYD",
      "name": "Cayman Islands Dollar"
    },
    {
      "sortName": "KZT",
      "name": "Kazakhstani Tenge"
    },
    {
      "sortName": "LAK",
      "name": "Laotian Kip"
    },
    {
      "sortName": "LBP",
      "name": "Lebanese Pound"
    },
    {
      "sortName": "LKR",
      "name": "Sri Lankan Rupee"
    },
    {
      "sortName": "LRD",
      "name": "Liberian Dollar"
    },
    {
      "sortName": "LSL",
      "name": "Lesotho Loti"
    },
    {
      "sortName": "LTL",
      "name": "Lithuanian Litas"
    },
    {
      "sortName": "LVL",
      "name": "Latvian Lats"
    },
    {
      "sortName": "LYD",
      "name": "Libyan Dinar"
    },
    {
      "sortName": "MAD",
      "name": "Moroccan Dirham"
    },
    {
      "sortName": "MDL",
      "name": "Moldovan Leu"
    },
    {
      "sortName": "MGA",
      "name": "Malagasy Ariary"
    },
    {
      "sortName": "MKD",
      "name": "Macedonian Denar"
    },
    {
      "sortName": "MMK",
      "name": "Myanma Kyat"
    },
    {
      "sortName": "MNT",
      "name": "Mongolian Tugrik"
    },
    {
      "sortName": "MOP",
      "name": "Macanese Pataca"
    },
    {
      "sortName": "MRO",
      "name": "Mauritanian Ouguiya"
    },
    {
      "sortName": "MTL",
      "name": "Maltese Lira"
    },
    {
      "sortName": "MUR",
      "name": "Mauritian Rupee"
    },
    {
      "sortName": "MVR",
      "name": "Maldivian Rufiyaa"
    },
    {
      "sortName": "MWK",
      "name": "Malawian Kwacha"
    },
    {
      "sortName": "MXN",
      "name": "Mexican Peso"
    },
    {
      "sortName": "MYR",
      "name": "Malaysian Ringgit"
    },
    {
      "sortName": "MZN",
      "name": "Mozambican Metical"
    },
    {
      "sortName": "NAD",
      "name": "Namibian Dollar"
    },
    {
      "sortName": "NGN",
      "name": "Nigerian Naira"
    },
    {
      "sortName": "NIO",
      "name": "Nicaraguan Córdoba"
    },
    {
      "sortName": "NOK",
      "name": "Norwegian Krone"
    },
    {
      "sortName": "NPR",
      "name": "Nepalese Rupee"
    },
    {
      "sortName": "NZD",
      "name": "New Zealand Dollar"
    },
    {
      "sortName": "OMR",
      "name": "Omani Rial"
    },
    {
      "sortName": "PAB",
      "name": "Panamanian Balboa"
    },
    {
      "sortName": "PEN",
      "name": "Peruvian Nuevo Sol"
    },
    {
      "sortName": "PGK",
      "name": "Papua New Guinean Kina"
    },
    {
      "sortName": "PHP",
      "name": "Philippine Peso"
    },
    {
      "sortName": "PKR",
      "name": "Pakistani Rupee"
    },
    {
      "sortName": "PLN",
      "name": "Polish Zloty"
    },
    {
      "sortName": "PYG",
      "name": "Paraguayan Guarani"
    },
    {
      "sortName": "QAR",
      "name": "Qatari Rial"
    },
    {
      "sortName": "RON",
      "name": "Romanian Leu"
    },
    {
      "sortName": "RSD",
      "name": "Serbian Dinar"
    },
    {
      "sortName": "RUB",
      "name": "Russian Ruble"
    },
    {
      "sortName": "RWF",
      "name": "Rwandan Franc"
    },
    {
      "sortName": "SAR",
      "name": "Saudi Riyal"
    },
    {
      "sortName": "SBD",
      "name": "Solomon Islands Dollar"
    },
    {
      "sortName": "SCR",
      "name": "Seychellois Rupee"
    },
    {
      "sortName": "SDG",
      "name": "Sudanese Pound"
    },
    {
      "sortName": "SEK",
      "name": "Swedish Krona"
    },
    {
      "sortName": "SGD",
      "name": "Singapore Dollar"
    },
    {
      "sortName": "SHP",
      "name": "Saint Helena Pound"
    },
    {
      "sortName": "SLL",
      "name": "Sierra Leonean Leone"
    },
    {
      "sortName": "SOS",
      "name": "Somali Shilling"
    },
    {
      "sortName": "SRD",
      "name": "Surinamese Dollar"
    },
    {
      "sortName": "STD",
      "name": "São Tomé and Príncipe Dobra"
    },
    {
      "sortName": "SVC",
      "name": "Salvadoran Colón"
    },
    {
      "sortName": "SYP",
      "name": "Syrian Pound"
    },
    {
      "sortName": "SZL",
      "name": "Swazi Lilangeni"
    },
    {
      "sortName": "THB",
      "name": "Thai Baht"
    },
    {
      "sortName": "TJS",
      "name": "Tajikistani Somoni"
    },
    {
      "sortName": "TMT",
      "name": "Turkmenistani Manat"
    },
    {
      "sortName": "TND",
      "name": "Tunisian Dinar"
    },
    {
      "sortName": "TOP",
      "name": "Tongan Paʻanga"
    },
    {
      "sortName": "TRY",
      "name": "Turkish Lira"
    },
    {
      "sortName": "TTD",
      "name": "Trinidad and Tobago Dollar"
    },
    {
      "sortName": "TWD",
      "name": "New Taiwan Dollar"
    },
    {
      "sortName": "TZS",
      "name": "Tanzanian Shilling"
    },
    {
      "sortName": "UAH",
      "name": "Ukrainian Hryvnia"
    },
    {
      "sortName": "UGX",
      "name": "Ugandan Shilling"
    },
    {
      "sortName": "USD",
      "name": "United States Dollar"
    },
    {
      "sortName": "UYU",
      "name": "Uruguayan Peso"
    },
    {
      "sortName": "UZS",
      "name": "Uzbekistan Som"
    },
    {
      "sortName": "VEF",
      "name": "Venezuelan Bolívar Fuerte"
    },
    {
      "sortName": "VND",
      "name": "Vietnamese Dong"
    },
    {
      "sortName": "VUV",
      "name": "Vanuatu Vatu"
    },
    {
      "sortName": "WST",
      "name": "Samoan Tala"
    },
    {
      "sortName": "XAF",
      "name": "CFA Franc BEAC"
    },
    {
      "sortName": "XAG",
      "name": "Silver (troy ounce)"
    },
    {
      "sortName": "XAU",
      "name": "Gold (troy ounce)"
    },
    {
      "sortName": "XCD",
      "name": "East Caribbean Dollar"
    },
    {
      "sortName": "XDR",
      "name": "Special Drawing Rights"
    },
    {
      "sortName": "XOF",
      "name": "CFA Franc BCEAO"
    },
    {
      "sortName": "XPF",
      "name": "CFP Franc"
    },
    {
      "sortName": "YER",
      "name": "Yemeni Rial"
    },
    {
      "sortName": "ZAR",
      "name": "South African Rand"
    },
    {
      "sortName": "ZMK",
      "name": "Zambian Kwacha (pre-2013)"
    },
    {
      "sortName": "ZMW",
      "name": "Zambian Kwacha"
    },
    {
      "sortName": "ZWL",
      "name": "Zimbabwean Dollar"
    }
  ];

});