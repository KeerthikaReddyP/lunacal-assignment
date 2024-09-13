import Tabs from "./Tabs";
import Gallery from "./Gallery";

const Container=()=>{
    return <div className="flex h-screen bg-gray-700">
    <div className="w-1/2 m-10 border border-black rounded-3xl bg-gray-600"></div>
    <div className="w-1/2 m-10">
        <Tabs />
        <Gallery />
    </div>
  </div>;
}
export default Container;