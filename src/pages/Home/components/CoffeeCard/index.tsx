import { CoffeeCardContainer, Tags, Name, Description, CardFooter, AddCartWrapper } from "./styles"
import { formatMoney } from "../../../../utils/formatMoney";
import { RegularText, TitleText } from "../../../../components/Typography";
import { QuantityInput } from "../../../../components/QuantityInput";
import { ShoppingCart } from "phosphor-react";
export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
  }

interface CoffeeProps {
    coffee: Coffee;
  }


export const CoffeeCard = ({coffee}: CoffeeProps) => {

  const formattedPrice = formatMoney(coffee.price);

    return (
        <CoffeeCardContainer>
             <img src={`/coffees/${coffee.photo}`} alt="" />
             <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
        <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput 
          />
           <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
        </CoffeeCardContainer>
    )
}