export default function PricingValue({data}) {
    const {pricingHeader,offerPrice,btnText} = data
    return(
        <div class="pricing-block">
                    <div class="pricing-block-items">
                        <div class="pricing-header">
                            <h2>{pricingHeader}</h2>
                        </div>
                        <div class="pricing-content">
                            <h3>{offerPrice}</h3>
                            <p id="first-para">Lorem Ipsum</p>
                            <p>Dolor Sit Amet</p>
                            <p>Adipiscing elit</p>
                            <p>Proin commodo turpis</p>
                            <p>lacus pulvinarvel</p>
                            <p>prnare nisi pretium</p>
                        </div>
                        <div class="pricing-button">
                            <button>{btnText}</button>
                        </div>
                    </div>
                </div>
    )
}