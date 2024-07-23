// Mock IoT sensor data
export function getSensorData() {
    return {
        temperature: Math.random() * 30,
        humidity: Math.random() * 100,
        waterLevel: Math.random() * 10
    };
}
