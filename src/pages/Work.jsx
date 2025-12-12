import VideoPlayer from '../components/VideoPlayer'
import './Work.css'

function Work() {
  return (
    <div className="work-page">
      <div className="work-container">
        <div className="recent-examples-section">
          <h2 className="recent-examples-headline">Recent example</h2>
          <VideoPlayer />
          <div className="video-info">
            <div className="video-info-name">Spencer Kinney</div>
            <a href="https://orgo.ai" target="_blank" rel="noopener noreferrer" className="video-info-project">
              Orgo
            </a>
          </div>
          <div className="work-stats">
            <a href="https://x.com/spncrk/status/1986141117302383006" target="_blank" rel="noopener noreferrer" className="stat-item stat-link">
              <div className="stat-value">210K</div>
              <div className="stat-label">Views on X</div>
            </a>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">1 Week</div>
              <div className="stat-label">Filmed & Uploaded</div>
            </div>
          </div>
          <div className="past-work-section">
            <h2 className="past-work-headline">Past work</h2>
            <div className="past-work-stats">
              <div className="past-stat-item">
                <div className="past-stat-value">5 M</div>
                <div className="past-stat-label">Views in last 6 months</div>
              </div>
              <div className="stat-divider"></div>
              <div className="past-stat-item">
                <div className="past-stat-value">20 M</div>
                <div className="past-stat-label">Impressions</div>
              </div>
              <div className="stat-divider"></div>
              <div className="past-stat-item">
                <div className="past-stat-value">15</div>
                <div className="past-stat-label">Events</div>
              </div>
            </div>
            <div className="past-work-images">
              <div className="past-work-image-wrapper">
                <img src="/Pic222.png" alt="Past work 1" className="past-work-image" />
              </div>
              <div className="past-work-image-wrapper">
                <img src="/C0226.00_08_52_01.Still001.png" alt="Past work 2" className="past-work-image" />
              </div>
              <div className="past-work-image-wrapper">
                <img src="/AGZ24_210724_MW-92 Kopie.jpg" alt="Past work 3" className="past-work-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work

