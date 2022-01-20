import TeamContent from "./team-item-content";
export default function Team({ team }) {
    return (
        <div class="testimonials-section" id="team">
            <div class="testimonials-main-bg">
                <div class="testimonials-container">
                    <div class="testimonials-block">
                        <div class="testimonials-header-section">
                            <h2>The Team</h2>
                        </div>
                        <div class="testimonials-block-items">
                            {
                                team.map((activeData, index) => (
                                    <TeamContent key={index} data={activeData} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}