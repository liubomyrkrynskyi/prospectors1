import Styles from './Title.module.scss'

const Title = (
    {
        title,
        description
    }:{
        title?: string
        description?: string
    }
) => {

    return (
       <div className={Styles.title}>
            <h2 className={Styles.textCenter}>
                <span className={Styles.titleIcon}/>
                <span className={Styles.title}>{title}</span>
                <span className={Styles.titleIcon}/>
            </h2>
            <p>{description}</p>
       </div>
    );
};

export default Title;