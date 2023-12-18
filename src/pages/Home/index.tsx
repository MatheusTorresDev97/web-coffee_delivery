import { HomeContainer } from "./styles"

import { Intro } from "./components/Intro"
import { OurCoffees } from "./components/OurCoffees"

export const Home = () => {
    return (
        <HomeContainer>
            <Intro />
            <OurCoffees />
        </HomeContainer>
    )
}