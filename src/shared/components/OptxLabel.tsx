import FormLabel from "@mui/material/FormLabel";

interface OptxLabelProps {
  name: string;
}

const OptxLabel = ({ name }: OptxLabelProps) => {
  return <FormLabel id={`${name}-label`}>{name}</FormLabel>;
};

export default OptxLabel;
