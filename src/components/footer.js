export default function Footer () {
    return(
        <div class="footer-section" id="contact">
        <div class="footer-main-bg">
            <div class="footer-container">
                <div class="footer-block">
                    <div class="footer-header-section">
                        <h2>Contact Us</h2>
                    </div>
                    <div class="footer-contact-us-section">
                        <div class="block1">
                            <h3>Get in touch with us</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                            <p>industry.Lorem Ipsum has been the industry's</p>
                            <ul>
                                <li><a href="#"><img src="assets/facebook (5).png" alt="icon"/></a></li>
                                <li><a href="#"><img src="assets/twit.png" alt="icon"/></a></li>
                                <li><a href="#"><img src="assets/google.png" alt="icon"/></a></li>
                            </ul>
                            <div id="author-info">
                            <p>Cssaauthor.com</p>
                            <a href="tel:8222086811">+918222086811</a>
                            <p>info@cssauthor.com</p>
                        </div>
                        </div>
                        <div class="block2">
                            <div class="block2-container">
                            <form action="insert.php" method="POST">
                            <div class="footer-input-section">
                                <div class="input-block1">
                            <input type="text" name="username" placeholder="Name"/>
                        </div>
                        <div class="input-block2">
                            <input type="text" name="email" placeholder="Email"/>
                        </div>
                        </div>
                        <div class="textarea-block">
                            <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
                        </div>
                            <div class="footer-button">
                                <input type="submit" name="submit" placeholder="Send"/>
                            </div>
                        </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}