//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Ourstory() {
  return (
    <>
    <div className='first'>
<div className='story'>
<img src='https://media.istockphoto.com/id/1427913515/photo/the-dressmaker-elaborately-made-a-thread-pattern-on-a-fine-beige-fabric-close-up.webp?b=1&s=170667a&w=0&k=20&c=kf-HstFfiHfer7ErDqEM9x3iZon2t_Qew2jXTx7U3RI=' alt=''/>
</div>
<div className='text'>
<h1>Tailoring your
Fashion Definition</h1>
<p>A leading clothing manufacturer skilled in producing and delivering high-quality 
  apparel and home textiles,<br/> all backed by first-rate customer service, <br/>we are not just a wholesaler; 
  but the best-in-class to develop your idea into a reality!</p>
  </div>
</div>



    <Carousel>

      <Carousel.Item>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCgLFZJkvqsEw6paJ9HM3NXND_tV02HfwZhQ&usqp=CAU" />
        <Carousel.Caption>
          <h3>Cotton Fabric</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://lh3.googleusercontent.com/geougc/AF1QipPONT5PMcUVuIkFBbAoqzGq3GPxxcR7jtJYjNAn=h305-no" />
        <Carousel.Caption>
          <h3>woolen Fabric</h3>
          <p>.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeV7m1KbnpTJp4agQFnvjqUcS2Kq37JF_HA&usqp=CAU" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>
  );
}

export default Ourstory;