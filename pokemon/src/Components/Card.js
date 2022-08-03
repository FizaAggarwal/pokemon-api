import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const CustomBox = styled(Box)`
  margin: auto auto;
  display: flex;
  flex-direction: column;
`;

const Ability = styled(Box)`
  margin: 10px;
  background-color: #ec4561;
  color: white;
  padding: 5px;
  border-radius: 10px;
`;
const Data = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

function Card(props) {
  const { pokemon } = props;
  return (
    <CustomBox>
      <h1 style={{ margin: " 20px auto" }}>{pokemon.name.toUpperCase()}</h1>
      <img
        style={{ height: "200px", width: "200px", margin: "auto" }}
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      ></img>
      <Data>
        {pokemon.abilities.map((item) => (
          <Ability>{item.ability.name} </Ability>
        ))}
      </Data>
      <Data>
        <Box>Weight: {pokemon.weight}</Box>
        <Box>Height: {pokemon.height}</Box>
      </Data>
      <Data>
        <Box>Speed: {pokemon.stats[5].base_stat}</Box>
        <Box>HP: {pokemon.stats[0].base_stat}</Box>
      </Data>
      <Data>
        <Box>Attack: {pokemon.stats[1].base_stat}</Box>
        <Box>Defense: {pokemon.stats[2].base_stat}</Box>
      </Data>
    </CustomBox>
  );
}

export default Card;
