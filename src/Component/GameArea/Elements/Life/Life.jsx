import style from './Life.module.css';
import heartFull from "../../../../assets/img/heartFull.png";
import heartEmpty from "../../../../assets/img/heartEmpty.png";

export const Life = (props) => {
    return (
        <div className={props.width <= 600 ? style.life_smallWidth : style.life}>
            <div>
                {props.life.map((l, i) =>
                    <img alt='heart full or empty' src={l ? heartFull : heartEmpty} key={i}/>
                )}
            </div>
        </div>
    )
}