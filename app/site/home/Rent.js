import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import Link from "next/link";
import rentCard from "../Cards/rentCard";

export default async function Rent() {
    const API_URL = "http://localhost:3001";
    try {
        const response = await axios.get(`${API_URL}/properties`);
        const rentList = response.data;

        return (
            <section style={{ padding: '50px 0' }}>
                <h1 style={{ fontWeight: 'bolder', fontSize: 'larger', marginBottom: '25px' }}>
                    Explore our Apartments for service
                </h1>
                <div className="purchase grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {rentList.length > 0 ? (
                        rentList.map((item) => (
                            <Link key={item.id} href={`/site/servicePage?id=${item.id}`} passHref>
                                <rentCard property={item} />
                            </Link>
                        ))
                    ) : (
                        <p>No services available.</p>
                    )}
                </div>
            </section>
        );
    } catch (error) {
        return <p>Error fetching services:{error.message}</p>
    }
}