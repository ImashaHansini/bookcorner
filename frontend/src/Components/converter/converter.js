import React, { useState } from "react";
import axios from "axios";

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      fromCurrency: "USD",
      toCurrency: "LKR",
      amount: 1,
      currencies: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://v6.exchangerate-api.com/v6/9fa0b1ed62cae823aadaff37/codes")
      .then((response) => {
        const currencyAr = [
          "USD",
          "LKR",
          "AED",
          "UAE",
          "AFN",
          "ALL",
          "AMD",
          "ANG",
          "AOA",
          "ARS",
          "AUD",
          "AWG",
          "AZN",
          "BAM",
          "BBD",
          "BDT",
          "BGN",
          "BHD",
          "BIF",
          "BMD",
          "BND",
          "BOB",
          "BRL",
          "BSD",
          "BTN",
          "BWP",
          "BYN",
          "BZD",
          "CAD",
          "CDF",
          "CHF",
          "CLP",
          "CNY",
          "COP",
          "CRC",
          "CUC",
          "CUP",
          "CVE",
          "CZK",
          "DJF",
          "DKK",
          "DOP",
          "DZD",
          "EGP",
          "ERN",
          "ETB",
          "EUR",
          "FJD",
          "FKP",
          "FOK",
          "GBP",
          "GEL",
          "GGP",
          "GHS",
          "GIP",
          "GMD",
          "GNF",
          "GTQ",
          "GYD",
          "HKD",
          "HNL",
          "HRK",
          "HTG",
          "HUF",
          "IDR",
          "ILS",
          "IMP",
          "INR",
          "IQD",
          "IRR",
          "ISK",
          "JMD",
          "JOD",
          "JPY",
          "KES",
          "KGS",
          "KHR",
          "KID",
          "KMF",
          "KRW",
          "KWD",
          "KYD",
          "KZT",
          "LAK",
          "LBP",
          "LRD",
          "LSL",
          "LYD",
          "MAD",
          "MDL",
          "MGA",
          "MKD",
          "MMK",
          "MNT",
          "MOP",
          "MRU",
          "MUR",
          "MVR",
          "MWK",
          "MXN",
          "MYR",
          "MZN",
          "NAD",
          "NGN",
          "NIO",
          "NOK",
          "NPR",
          "NZD",
          "OMR",
          "PAB",
          "PEN",
          "PGK",
          "PHP",
          "PKR",
          "PLN",
          "PYG",
          "QAR",
          "RON",
          "RSD",
          "RUB",
          "RWF",
          "SAR",
          "SBD",
          "SCR",
          "SDG",
          "SEK",
          "SGD",
          "SHP",
          "SLL",
          "SOS",
          "SRD",
          "SSP",
          "STN",
          "SYP",
          "SZL",
          "THB",
          "TJS",
          "TMT",
          "TND",
          "TOP",
          "TRY",
          "TTD",
          "TVD",
          "TWD",
          "TZS",
          "UAH",
          "UGX",
          "UYU",
          "UZS",
          "VES",
          "VND",
          "VUV",
          "WST",
          "XAF",
          "XCD",
          "XDR",
          "XOF",
          "XPF",
          "YER",
          "ZAR",
          "ZMW",
        ];
        for (const key in response.data.rates) {
          currencyAr.push(key);
        }
        this.setState({ currencies: currencyAr });
      })
      .catch((err) => {
        console.log("Oops", err);
      });
  }
  convertHandler = () => {
    if (this.state.fromCurrency !== this.state.toCurrency) {
      axios
        .get(
          `https://v6.exchangerate-api.com/v6/9fa0b1ed62cae823aadaff37/pair/${this.state.fromCurrency}/${this.state.toCurrency}/${this.state.amount}`
        )
        .then((response) => {
          const { conversion_result } = response.data;
          console.log(response.data);
          this.setState({ result: Number(conversion_result).toFixed(2) });
          console.log("Converted amount: " + conversion_result);
        })
        .catch((error) => {
          console.log("Oops", error.message);
        });
    } else {
      this.setState({ result: "You can't convert between same currency!" });
    }
  };
  selectHandler = (event) => {
    if (event.target.name === "from") {
      this.setState({ fromCurrency: event.target.value });
    } else {
      if (event.target.name === "to") {
        this.setState({ toCurrency: event.target.value });
      }
    }
  };
  render() {
    return (
      <div className="Converter">
        <div className="From">
          <input
            class="input-group d-flex mb-3"
            name="amount"
            type="text"
            value={this.state.amount}
            onChange={(event) => this.setState({ amount: event.target.value })}
          />
          <select
            class="custom-select custom-select-sm d-flex mb-3 mr-3"
            name="from"
            onChange={(event) => this.selectHandler(event)}
            value={this.state.fromCurrency}
          >
            {this.state.currencies.map((cur) => (
              <option key={cur}>{cur}</option>
            ))}
          </select>
          <select
            class="custom-select custom-select-sm d-flex mb-3 mr-3"
            name="to"
            onChange={(event) => this.selectHandler(event)}
            value={this.state.toCurrency}
          >
            {this.state.currencies.map((cur) => (
              <option key={cur}>{cur}</option>
            ))}
          </select>
          <div>
            <button
              type="button"
              class="btn btn-light btn-sm mr-1 mb-3"
              onClick={this.convertHandler}
            >
              Convert
            </button>

            {this.state.result && (
              <h6 class="mb-3">
                {" "}
                {this.state.toCurrency} {this.state.result}{" "}
              </h6>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Converter;
