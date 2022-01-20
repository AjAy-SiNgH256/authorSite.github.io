import PricingValue from "./pricing-offer";

export default function Pricing ({pricing}) {
    return(
        <div class="pricing-section">
        <div class="pricing-main-bg">
            <div class="pricing-container">
                {
                    pricing.map((currentValue, index) => (
                        <PricingValue key={index} data={currentValue} />
                    ))
                }
            </div>
        </div>
    </div>
    )
}