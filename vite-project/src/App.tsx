import ViteIntro from "./pages/ViteIntro.tsx";

import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

function App() {


  return (
    <>
        <div className="text-center">this is a comment</div>
        <div className="text-red-200"></div>
        <ViteIntro />
        <ClassComponent/>
        <FunctionalComponent/>
        <ArrowFunctionalComponent/>
        <ArrowFunctionalComponentWithProps title = "Is a Arrow Functional Component With Props" />
        <ArrowFunctionalComponentWithPropsType title = "Is a Arrow Functional Component With Props" description = "This is a description" />
        </>
  )
}

export default App
