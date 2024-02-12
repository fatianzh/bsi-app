import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';
import React, { useEffect, useState} from 'react';
import { fetchProducts } from '../action/actions'

const IntegrateFetchAPI = ({products, loading, error, fetchProducts}) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getProducts = async () => {
        try {
            const response = await fetch ('https://dummyjson.com/products');
            const json = await response.json()
            setData(json.products);
        } catch (error) {
            console.error('err', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <View style={{flex:1, padding: 24}}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({id}) => id}
                    renderItem={({item}) => (
                        <Text>
                            {item.title}, {item.description}
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

export default connect(mapStateToProps, { fetchProducts })(IntegrateFetchAPI);