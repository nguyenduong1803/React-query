import React, { useReducer } from 'react'
import { getPhoto } from '../../api/api';
import styles from "./form.module.css"
import { FormReducer, INIT_STATE } from './FormReducer'

function Form() {
    const [state, dispatch] = useReducer(FormReducer, INIT_STATE)
    const [img, setImg] = React.useState([]);

    const handleChangevalue = (e) => {
        console.log(e.target.value)
        console.log(state)
        const payload = { name: e.target.name, value: e.target.value }
        dispatch({ type: "ChangValue", payload })
    }
    console.log(state)
    const handleIncrea = (e) => {
        e.preventDefault();
        dispatch({ type: "increase" })
    }
    const handleDecrea = (e) => {
        e.preventDefault();
        dispatch({ type: "decrease" })
    }
  console.log(img)
  React.useEffect(() => {
    getPhoto(setImg);
  },[]);
    return (
        <div>
            <form>
                <div className={styles.formControl}>
                    <input type="text" onChange={handleChangevalue} name="name" value={state.name} />
                </div>
                <div className={styles.formControl}>
                    <input type="text" onChange={handleChangevalue} name="desc" value={state.desc} />
                </div>
                <div className={styles.formControl}>
                    <input type="text" onChange={handleChangevalue} name="price" value={state.price} />
                </div>
                <div className={styles.formControl}>
                    <input type="text" onChange={handleChangevalue} name="quantity" value={state.quantity} />
                </div>
                <div className={styles.formControl}>
                    <input type="text" onChange={handleChangevalue} name="status" value={state.status} />
                </div>
                <button onClick={handleIncrea}>increa</button>
                <h2>{state.number}</h2>
                <button onClick={handleDecrea}>decrea</button>
            </form>
        </div>
    )
}

export default Form