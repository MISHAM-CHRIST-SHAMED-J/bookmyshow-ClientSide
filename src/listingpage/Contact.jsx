import React from 'react'

function Contact() {
  return (
    <section class=" bg-light text-dark ">
    
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly.
          </p>
    
        <div class="row  d-flex justify-content-center">
    
            <div class="col-md-5 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
    
                    <div class="row">
    
                        <div class="col-md-6">
                            <div class="md-form mb-2">
                                <input type="text" id="name" placeholder='Your name' name="name" class="form-control"/>
                            </div>
                        </div>
    
                        <div class="col-md-6">
                            <div class="md-form mb-2">
                                <input type="text" id="email" name="email" placeholder='Your email' class="form-control"/>
                            </div>
                        </div>
    
                    </div>
    
                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form mb-2 ">
                                <input type="text" id="subject" placeholder='Subject' name="subject" class="form-control"/>
                            </div>
                        </div>
                    </div>
    
                    <div class="row">
    
                        <div class="col-md-12">
    
                            <div class="md-form mb-3">
                                <textarea type="text" placeholder='Your Message...' id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            </div>
    
                        </div>
                    </div>
    
                </form>
    
                <div class="text-center text-md-left pb-4">
                    <a class="btn bttn btn-secondary" onclick="document.getElementById('contact-form').submit();">Send</a>
                </div>
                <div class="status"></div>
            </div>
    
            
    
        </div>
    
    </section>
  )
}

export default Contact