import Pokemon from "./Components/Pokemon";
import Heading from "./Components/Heading";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import useAction from "./redux/hooks/useAction";
import { useEffect, useMemo } from "react";
import Card from "./Components/Card";
import Arrow from "./Components/Arrow";
import { requestData, change, pokedata } from "./redux/actions";

const CustomBox = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #f0e68c;
`;

const Bottom = styled(Box)`
  display: flex;
  margin-top: 35px;
  flex-wrap: wrap;
`;

function App() {
  //getting initial state
  const initial = useSelector((state) => state.pokeReducers);
  const { url, data, pokemon, error } = initial;

  //for dispatching actions
  const dispatch = useDispatch();

  //running api once at the beginning
  useEffect(() => {
    dispatch(requestData(url));
  }, [dispatch, url]);

  //setting default pokemon card
  useEffect(() => {
    dispatch(pokedata("pikachu"));
  }, [dispatch]);

  //getting 20 pokemons divided into two arrays
  const { array1, array2 } = useMemo(() => {
    const array = data.results;
    return {
      array1: Object.keys(data).length !== 0 ? array.slice(0, 10) : 0,
      array2: Object.keys(data).length !== 0 ? array.slice(10) : 0,
    };
  }, [data]);

  return (
    <CustomBox>
      <Heading />
      {error === "" ? (
        <Bottom>
          <Arrow
            name="previous"
            previous={data.previous}
            onClick={() => dispatch(change(data.previous))}
          />
          <CustomBox>
            {array1 !== 0 &&
              array1.map((item) => (
                <Pokemon
                  key={item.id}
                  name={item.name}
                  onClick={() => dispatch(pokedata(item.name))}
                />
              ))}
          </CustomBox>
          <CustomBox sx={{ ml: 10 }}>
            {array2 !== 0 &&
              array2.map((item) => (
                <Pokemon
                  key={item.id}
                  name={item.name}
                  onClick={() => dispatch(pokedata(item.name))}
                />
              ))}
          </CustomBox>
          <Arrow
            name="next"
            next={data.next}
            onClick={() => dispatch(change(data.next))}
          />
          {Object.keys(pokemon).length !== 0 && <Card pokemon={pokemon} />}
        </Bottom>
      ) : (
        <h1>error</h1>
      )}
    </CustomBox>
  );
}

export default App;
