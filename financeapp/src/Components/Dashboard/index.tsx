import { Summary } from "../Summary";
import { TrasanctionTable } from "../TrasanctiosTable";
import { Container } from "./style";

export function Dashboard(){
    return(
        <Container>
            <Summary/>
            <TrasanctionTable/>
            </Container>
    );
}