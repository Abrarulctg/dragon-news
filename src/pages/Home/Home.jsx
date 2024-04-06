import { useEffect, useState } from "react";
import Header from "../../shared/Header/Header";
import LeftSideNav from "../../shared/LeftSideNav/LeftSideNav";
import Navbar from "../../shared/Navbar/Navbar";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "../NewsCard";


const Home = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => {
                setNews(data)
            })
    }, []);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border p-4">
                    <h2 className="text-2xl font-bold">Dragon News Home</h2>
                    <div>
                        {
                            news.map(singleNews => <NewsCard singleNews={singleNews} key={singleNews._id}></NewsCard>)
                        }
                    </div>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;