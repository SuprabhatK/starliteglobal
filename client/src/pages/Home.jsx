import Customcarousel from "../components/common/customcarousel";
import Featureitem from "../components/common/featureitem";
import Services from "../components/common/services";
import Statssection from "../components/common/statssection";

export default function Home() {
    return (
        <>
            <Customcarousel />
            <Featureitem />
            <Services bgcolor="black"/>
            <Statssection />
        </>
    )
}
