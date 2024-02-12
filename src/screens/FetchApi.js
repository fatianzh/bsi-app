// ProductList.js
import React, { useEffect , useState} from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { fetchProducts } from '../actions/action';

const IntegrateFetchAPI = ({ products, loading, error }) => {
  const dispatch = useDispatch()
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
 

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts()(dispatch);
  }, []);
  
  return (
    <View style={{flex: 1, padding: 24}}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={products?.movies || []}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  products: state.products,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(IntegrateFetchAPI);