const API_KEY = '1f4ca8a0845ac0f72a6a89e872168d25';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
    return {
        type: FETCH_WEATHER
    };
}