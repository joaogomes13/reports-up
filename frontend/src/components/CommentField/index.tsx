import style from './CommentField.module.scss';

interface Props{
    title?: string;
}

export default function CommentField({title}: Props) {

    return(
        <>
            {
                title !== undefined &&
                <p className={style.text}>{title}</p>        
            } 
            <textarea className={style.area} placeholder='Sua resposta aqui'>
            </textarea>
        </>
    );
}