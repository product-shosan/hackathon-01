'use client'
import { useEffect } from "react";
import { useState } from "react";

export default function AxiosGet() {
    const [isInToilet, setIsInToilet] = useState<boolean | null>(null);

    // の状態を定期的に取得するための関数
    const fechtIsInToilet = async () => {
        try {
            const response = await fetch('hogehoge.com/api/isInToilet');
            const data = await response.json();
            // setIsInToilet(data.isInToilet);
            setIsInToilet(data.isInToilet);
        } catch (error) {
            console.error('Error fetching data:', error);
            setTimeout(() => {console.log("Failed to fetch data after 5 seconds");}, 5000);
        };
    };
    
    useEffect(() => {
        fechtIsInToilet(); // コンポーネントがマウントされたときに一度APIを呼び出す
        const intervalId = setInterval(() => {
            fechtIsInToilet();
        }, 5000); // 5秒ごとにAPIを呼び出す

        return () => clearInterval(intervalId); // コンポーネントがアンマウントされたときにインターバルをクリアする
    }, []);

    return (
        <>
            <div>
                {isInToilet === null ? (
                    <p>Loading...</p>
                ) : isInToilet ? (
                    <p>トイレに入っています。</p>
                ) : (
                    <p>トイレに入っていません。</p>
                )}
            </div>
            <p> デバッグ: {isInToilet}, </p>
        </>
    );
};