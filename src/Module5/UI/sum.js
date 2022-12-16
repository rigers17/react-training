import classes from './Sum.module.css';

const Sum = props => {
    return( 
    <div className={classes.sum}>{props.children}</div>
    );
};

export default Sum;