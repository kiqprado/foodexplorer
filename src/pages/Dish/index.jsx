import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api'
import { Link } from 'react-router-dom'

import { PiCaretLeft} from 'react-icons/pi'

import { Container, Ingredients, OrderDetails } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Tag } from '../../components/Tag'
import { Quantity } from '../../components/Quantity'
import { Button } from '../../components/Button'

import dishPlaceholder from '../../assets/dishPlaceholder.svg'

export function Dish() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  const dishAvatar = data && data.avatar_url ? data.avatar_url : dishPlaceholder;

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDish();
  }, []);

  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Link to="/">
           <PiCaretLeft/> voltar
          </Link>

          <img src={dishAvatar} alt={data.title} />
          <h1>{data.title}</h1>
          <p>{data.description}</p>

          {
            data.ingredients &&
            <Ingredients>
              {data.ingredients.map(ingredient => (
                <Tag key={String(ingredient.id)} title={ingredient.name} />
              ))}
            </Ingredients>
          }
          
          <OrderDetails>
            <Quantity/>
            <Button
              title="Pedir"
            />
          </OrderDetails>
        </main>
      }
      <Footer/>
    </Container>
  );
}