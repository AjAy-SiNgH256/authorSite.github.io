export default function TeamContent({data}) {
    const {image,heading,position,text} = data
    return (
        <div class="testimonials-items">
            <div class="testimonials-items-list">
                <div class="testimonial-logo">
                    <img src={image} alt="icon" />
                </div>
                <h3>{heading}</h3>
                <p class="testimonials-para">{position}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}