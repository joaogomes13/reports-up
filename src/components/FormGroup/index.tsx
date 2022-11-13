import style from './FormGroup.module.scss';

interface Props {
    title: string,
    name: string,
    children: React.ReactNode;
}

export default function FormGroup({title, name, children}: Props) {
    
    
    return (
        <fieldset className={style.formGroup} name={name}>
            <legend className={style.formGroup__title}>{title}</legend>
            {children}
        </fieldset>
    )
}