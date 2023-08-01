// Load Testing with K6
import http from 'k6/http';


export const options = {
    scenarios: {
        constant_request_rate: {
            executor: 'constant-arrival-rate',
            rate: 1000,
            timeUnit: '1s',
            duration: '30s',
            preAllocatedVUs: 100,
            maxVUs: 100,
        },
    },
};


export default function () {
    const url = 'http://localhost:3000';//testing url
    const payload = JSON.stringify({
        name: "hello",
        age: 13
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params);
}
