import sky from '../assets/images/sky.png'; // Tell webpack this JS file uses this image

export default function Home() {
    return (
        <div>
            <h1>Steve Kim</h1>
            <br></br>
            <h2>Full Stack Developer</h2>

            <img className="sky" src={sky} style={{ height: 250, width: 250 }} alt="spiderman falling upwards" />
            <p> 

            </p>
        </div>
    );
}