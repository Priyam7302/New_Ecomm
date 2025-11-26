import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState(() => {
        try {
            const stored = localStorage.getItem("currency");
            return stored ? stored : "INR";
        } catch (e) {
            return "INR";
        }
    });
    const [rates, setRates] = useState({ INR: 1, USD: 1, EUR: 1 })

    useEffect(() => {
        async function fetchRates() {
            let response = await axios.get("https://v6.exchangerate-api.com/v6/e928549c3a8e6ff1d81c0d0b/latest/INR");
            console.log(response);

            setRates({
                INR: 1,
                USD: response.data.conversion_rates.USD,
                EUR: response.data.conversion_rates.EUR,
            })
        }
        fetchRates()
    }, [])

    function convert(priceInINR) {
        return priceInINR * rates[currency];
    }

    useEffect(() => {
        try {
            localStorage.setItem("currency", currency);
        } catch (e) {
            // ignore storage errors silently
        }
    }, [currency]);

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency, convert }}>
            {children}
        </CurrencyContext.Provider>

    )
}

export default CurrencyProvider;
export function useCurrency() {
    return useContext(CurrencyContext)
}
