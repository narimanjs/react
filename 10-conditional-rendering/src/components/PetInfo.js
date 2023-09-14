function PetInfo(props) {
  const { animal, age, hasPet } = props;
  const text = hasPet
    ? `My ${animal} is ${age} years old!`
    : "I dont't have any pets";
  return <h1>{text}</h1>;
}

export default PetInfo;
