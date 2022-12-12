import { useInView } from 'react-intersection-observer';


function slider() {

  const {ref, inView, entry} = useInView({
    threshold: 0.4,
  });


  return (
    <div className="slider" ref = {ref}>
      <p>sup niggas</p>
    </div>
  );
}

export default slider;
