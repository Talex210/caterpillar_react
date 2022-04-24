import style from './Life.module.css';
import heartFull from "../../../../assets/img/heartFull.png";
import heartEmpty from "../../../../assets/img/heartEmpty.png";

export const Life = (props) => {
    // animation of adding and removing life
    let lifeArr = [];
    for (let i = 0; i < 5; i++) {
        lifeArr.push(false);
    }
    for (let i = 0; i < props.life; i++) {
        lifeArr.pop();
        lifeArr.splice(i, 0, true)
    }
    return (
        <div className={style.life}>
            <div>
                {lifeArr.map((l, i) =>
                    <img alt='heart full' src={l ? heartFull : heartEmpty} key={i}/>
                )}
            </div>
        </div>
    )
}