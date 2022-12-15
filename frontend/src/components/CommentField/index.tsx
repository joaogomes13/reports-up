import style from './CommentField.module.scss';

interface Props{
    title?: string;
    name: string;
    data?: string;
    setData: React.Dispatch<React.SetStateAction<any[]>>;
    object: any[];
}

export default function CommentField({title, data, setData, name, object}: Props) {

    const handleDataChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let _object = [...object] as any;
        _object[0][event.target.name] = event.target.value;
        setData(_object);
    }

    return(
        <>
            {
                title !== undefined ? 
                <p className={style.text}>{title}</p> : null                       
            } 
            <textarea className={style.area} name={name} placeholder='Sua resposta aqui' onChange={e => handleDataChange(e)}>
                {data}
            </textarea>
        </>
    );
}