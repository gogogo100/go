import Link from 'next/link'
export default function FirstPage() {
    return (
        <div>
            <h1>고예준_한양대학교 정보시스템학과 23학번</h1> 
            <h2>인적사항</h2>
            <ul>
                <li>생년월일 : 2003.10.12</li>
                <li>혈액형 : AB형</li>
                <li>MBTI : INFP</li>
                <li>전화번호 : 010-4373-1643</li>
                <li>이메일 : rhdpwns00@hanyang.ac.kr</li>
                <li>좋아하는 것 : 축구, 게임</li>
                <li>싫어하는 것 : 공부</li>
            </ul>
            <h3>2023년 한 해 잘 부탁드립니다!</h3>
            <Link href="/">Back to home</Link>
        </div>
    )
}