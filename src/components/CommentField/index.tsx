import style from './CommentField.module.scss';

interface Props{
    title?: string;
}

export default function CommentField({title}: Props) {

    return(
        <>
            <p className={style.text}>{title}</p>        
            <textarea className={style.area}>

            </textarea>
        </>
    );
}