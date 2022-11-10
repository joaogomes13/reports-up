import style from './CommentField.module.scss';

export default function CommentField() {

    return(
        <>
            <p className={style.text}>Se negativo, explique.</p>        
            <textarea className={style.area}>

            </textarea>
        </>
    );
}