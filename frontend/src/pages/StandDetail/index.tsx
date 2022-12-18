import FormList from './FormList';
import style from './StandDetail.module.scss';

export default function StandDetail() {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>Formulários</h1>
            </div>
            <section className={style.container__list}>
                <FormList />
            </section>
        </div>
    );
}