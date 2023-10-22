import video from './Volvo Trucks - The Epic Split feat. Van Damme (Live Test).mp4'

const VideoComponent = () => {
    return (
        <>
        <video className='video' src={video} autoplay loop></video>
        </>
    )
}
export default VideoComponent;