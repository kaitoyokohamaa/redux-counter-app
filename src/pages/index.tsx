import {Count} from '../redux/counter/selectors'
import {add, dec} from '../redux/counter/slice'
import {useSelector, useDispatch} from 'react-redux'
export default function Home() {
  // storeの中身を参照
  const count = useSelector(Count)

  // storeの値を更新
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        counter
        <button onClick={() => dispatch(add(1))}>add</button>
        <button
          disabled={count.counter.count <= 0}
          onClick={() => dispatch(dec(1))}
        >
          dec
        </button>
        {count.counter.count}
      </div>
      <div />
    </div>
  )
}
