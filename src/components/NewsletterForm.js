import React from 'react'

const NewsletterForm = () => {
  return (
    <>
    <div className='newsletter-form-data'>
            <h6 className="mb-2 text-uppercase mt-4">
                  Join our mailing list. Never miss an update.
                </h6>
                    <div className="newsletter-form mt-4">
                      <form className="d-flex justify-content-center">
                        <input 
                          type="email" 
                          className="form-control me-2" 
                          placeholder="Email Address"
                          style={{maxWidth: "300px"}}
                        />
                        <button type="submit" className="box-btn know-more text-uppercase">
                          Submit
                        </button>
                      </form>
                    </div>
      </div>
    </>
  )
}

export default NewsletterForm
