import styles from './Avatar.module.css';

// Desestruturação - const user =  { name: Lucas }
//                   const { name } = user;
// Desestruturação pode ser usado como propriedade
export function Avatar({ hasBorder = true, src }) { // hasBorder = true -> definimos um valor "default, ou seja, padrão" para essa propriedade
//  const hasBorder = props.hasBorder !== false; - se a propriedade hasBorder não receber false, então coloque a borda

  return (
    <div>
      <img className={hasBorder ? styles.avatrWithBorder : styles.avatar} // recebe hasBorder ? se sim, retorne avatar com borda, senão retorne avatar sem borda
      src={src} 
      />
    </div>
  )
}