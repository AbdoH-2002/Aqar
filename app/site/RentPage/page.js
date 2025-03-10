import axios from "axios";
import rentCard from "../Cards/rentCard";

export default async function RentPage() {
    const API_URL = "http://localhost:3001";

    try {
        const response = await axios.get(`${API_URL}/properties`);
        const rentList = response.data;

        return (
            <section style={{ padding: '50px 0' }}>
                <h1 style={{ fontWeight: 'bolder', fontSize: 'larger', marginBottom: '25px' }}>
                    Explore our Apartments for Service
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {rentList.length > 0 ? (
                        rentList.map((item) => (
                            <rentCard key={item.id} property={item} />
                        ))
                    ) : (
                        <p>No properties available.</p>
                    )}
                </div>
            </section>
        );
    } catch (error) {
        return <p>Error fetching properties: {error.message}</p>;
    }
}
