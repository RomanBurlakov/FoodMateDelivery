import useHttp from '../hooks/useHttp'

function useAPIServices(startLoading) {
    const { loading, setLoading, error, setError } = useHttp(startLoading);

    const _apiBase = 'https://www.themealdb.com/api/json/v1/1/';

    async function getResources(url) {
        setLoading(true);
        setError(false);
        try {
            let res = await fetch(url);
            if (!res.ok) {
                setError(true);
                throw new Error('Could not find ' + url + ', status: ' + res.status);
            } else {
                setError(false);
            }
            res = await res.json();
            setLoading(false);
            return res
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    }

    async function getMeals(country) {
        const res = await getResources(_apiBase + 'filter.php?a=' + country);
        return res.meals.map(({ idMeal, strMeal, strMealThumb }) => {
            return {
                id: idMeal,
                name: strMeal,
                image: strMealThumb,
                price: ((Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000) / 100).toFixed(2),
            }
        });
    }

    return { loading, error, getMeals }
}

export default useAPIServices;