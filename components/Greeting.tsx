import {text} from "node:stream/consumers";

type Props = {
    name: string;

}

const Greeting = ({name}: Props) => {

    return (
        <p className={"text-black pt-5"}> Hi, {name}</p>
    )
}

export default Greeting;