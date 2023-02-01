import IndicadoresAPI from "./IndicadoresAPI"

interface Props {
    title: string
}

function BasicExample({title}:Props) {

  return (
    <div>
        <IndicadoresAPI/>
    </div>
  );
}

export default BasicExample;