import React from 'react'
const Application = () => {
    return (
        <div>
            <form>
                <h1>Job application</h1>
                <h2>Heading2</h2>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' placeholder='FullName' value = 'nanda' onChange={()=>{}} />
                    <p>All fields are mandatory</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-tQCZvAAWczZJfxmaNbjDKUq_4hYcw2FgoyaNCpsxy2BQZ-MI0VbZgsawYg&s" alt="a person with laptop" />
                    <span title='close'>X</span>
                    <div data-testId = "custom-div">Custom div element</div>
                    <div>Hello world</div>
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea id ="bio" name='bio' />
                </div>
                <div>
                    <label htmlFor="job-location">Job Location</label>
                    <select id="job-location">
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="IN">INDIA</option>
                        <option value="AU">Australia</option>
                    </select>
                    <div>
                        <label>
                            <input type="checkbox" id='terms' />I agree to the terms and
                            conditions
                        </label>
                        <button>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Application;