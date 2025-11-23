import Card from './components/Card.js';
import images from './images/imageIndex.js';
import './styles/main.css';


function App() {
  
  return (
    <div className="app">
      <div className="nav">
        <div className="primary">
          <img src={images.navOrg} className="navIicon" alt="Organization Navigation image" />
          <img src={images.navLogo} className="navIicon" alt="Company navigation logo" />
        </div>
        <div className='secondary'>
          <img src={images.user} className="navIicon" alt="User navigation button" />
        </div>
      </div>
      <div className="page">
        <header className="page-header">
          <div className='main'>
            <div className='left'>
              <img src={images.logo} className="logo" alt="Main logo" />
              <div className='title-date'>
                <h1>RainFocus Summit</h1>
                <div className='date-loc'>
                  <p className='para-workflow'>December 15th</p>
                  <p className='para-workflow'>Lehi, Utah</p>
                </div>
              </div>
            </div>
            <div className='right'>
              <button aria-label='Edit Event' type='button' className='button primary'>Edit event</button>
            </div>
          </div>
          <section className='page-subhead'>
            <h2>Event setup guide</h2>
            <p className='para-workflow'>See the available list of modules below. We suggest that you start with the attendee module.</p>
          </section>
        </header>
        <div className="page-body">
          <section className='section'>
            <div className='section-header'>
              <img src={images.attendee} className="icon" alt="Attendee" />
              <h3>Attendee</h3>
            </div>
            <div className='section-body'>
              <div className='step'>
                <h4><strong>Step 1:</strong> Base settings.</h4>
                <div className='step-body stepOne'>
                  <div className='label-value-pair'>
                    <h5>General</h5>
                    <p className='description'>Define Attendee types & attributes.</p>
                  </div>
                  <div className='label-value-pair'>
                    <h5>Title</h5>
                    <p className='description'>Description that explains the value goes here. Description that explains the value goes here. </p>
                  </div>
                  <div className='label-value-pair'>
                    <h5>Title</h5>
                    <p className='description'>Description that explains the value goes here. Description that explains the value goes here. </p>
                  </div>
                </div>
              </div>
              <div className='step'>
                <h4><strong>Step 2:</strong> Build registration workflows.</h4>
                <div className='step-body stepTwo'>
                  <Card
                    image={images.leftArrow}
                    title='Attendee Registration'
                    desc='Start by creating a general registration workflow.'
                  />
                  <Card
                    image={images.leftArrow}
                    title='Attendee Registration'
                    desc='Start by creating a general registration workflow.'
                  />
                  <Card
                    image={images.leftArrow}
                    title='Attendee Registration'
                    desc='Start by creating a general registration workflow.'
                  />
                  <div className='card AddCard'>
                    <div className='card-header'>
                      <img src={images.addCircle} className="icon" alt="Add registration workflow" />
                    </div>
                    <p className='description'>Add Registration Workflow</p>
                  </div>
                </div>
              </div>
              <div className='step'>
                <h4><strong>Step 3:</strong> Design post-registration experiences.</h4>
                <div className='step-body stepThree'>
                  <Card
                    image={images.computer}
                    title='Attendee Portal'
                    desc="Manage the portal that attendees will see after they’ve register for your event."
                  />
                </div>
              </div>
            </div>
          </section>
          
        </div>
      </div>  
    </div>
  );
}

export default App;
