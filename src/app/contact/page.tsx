
export default function Contact(){
    return(
        <><div className="contact">
            <div className="contact-page">
                <h1 className="contact-page-h1">Contact Us</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" name="name" placeholder="Enter Your Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email:</label>
                        <input type="text" name="email" required placeholder="ABC@gmail.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message:</label>
                        <textarea name="message" rows={5} required placeholder="Enter Your Message"></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div></>

    ) }