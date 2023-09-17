interface IconFoodProps {
    size: number,
    color: string,

}
export default function IconFood({size, color} : IconFoodProps){
    return(   

        <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke={color} d="M17.56 21.995H19.22C20.06 21.995 20.75 21.355 20.85 20.535L22.5 4.05501H17.5V0.00500488H15.53V4.05501H10.56L10.86 6.395C12.57 6.865 14.17 7.715 15.13 8.655C16.57 10.075 17.56 11.545 17.56 13.945V21.995ZM0.5 20.995V20.005H15.53V20.995C15.53 21.545 15.08 21.995 14.52 21.995H1.51C0.95 21.995 0.5 21.545 0.5 20.995ZM15.53 13.995C15.53 5.995 0.5 5.995 0.5 13.995H15.53ZM0.52 16.005H15.52V18.005H0.52V16.005Z" fill="white"/>
        </svg>
    )
}
