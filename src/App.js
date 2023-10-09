import './App.css';
import Video from './components/thumbnail';
import videos from './components/data/data'
import Counter from './components/counter';
function App() {
  
  return (
     <>
     <h1>Simple Heading</h1>
     <h1>This is also a Simple heading</h1>
      {
        videos.map(video=><Video
          id={video.id}
          title={video.title}
        ></Video>)
      }
      <Counter name='hello'></Counter>
      <Counter name='world'></Counter>
      <Counter name='hi'></Counter>
      {
        // for(let k=0;k<2;k++)
        //   console.log(k);
      }
     </>
  );
}

export default App;