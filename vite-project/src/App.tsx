// import ViteIntro from "./pages/ViteIntro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";

import Layout from "./components/Layout.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
import Counter from "./components/Counter.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";

function App() {


  return (
    <>
        <Layout>
        {/*<div className="text-center">this is a comment</div>*/}
        {/*<div className="text-red-200"></div>*/}
        {/*<ViteIntro />*/}
        {/*<ClassComponent/>*/}
        {/*<FunctionalComponent/>*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalComponentWithProps title = "Is a Arrow Functional Component With Props" />*/}
        {/*<ArrowFunctionalComponentWithPropsType title = "Is a Arrow Functional Component With Props" description = "This is a description" />*/}

    {/*<CodingFactoryLogo/>*/}


      {/*  <h1 className="text-center text-2xl font-bold">This is heading title</h1>*/}
      {/*<FunctionalComponent/>*/}

            {/*<ClassComponentWithState/>*/}
            <Counter/>
            {/*<FunctionalComponentWithState/>*/}
      </Layout>
    </>
  )
}

export default App
