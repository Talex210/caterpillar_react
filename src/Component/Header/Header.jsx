import style from './Header.module.css'
import heartFull from '../../assets/img/heartFull.png'
import heartEmpty from '../../assets/img/heartEmpty.png'

export const Header = (props) => {
    // animation of adding and removing life
    let lifeArr = [];
    for (let i = 0; i < 5; i++) {
        lifeArr.push(false);
    }
    for (let i = 0; i < props.life; i++) {
        lifeArr.pop();
        lifeArr.splice(i,0,true)
    }
    return (
        <div className={style.header}>
            <div className={style.positions}>
                <div className={style.life}>
                    {lifeArr.map((l, i) =>
                        <img alt='heart full' src={l ? heartFull : heartEmpty} key={i}/>
                    )}
                </div>
                <div className={style.nameApp}>SNAKE</div>
                <div className={style.length}>Length: {props.snakeLength}</div>
            </div>
        </div>
    )
}