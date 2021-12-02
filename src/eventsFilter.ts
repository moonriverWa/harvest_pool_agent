import { LogDescription } from "@ethersproject/abi"
import { TransactionEvent} from "forta-agent"
const ifo_contract_address = "0xFDFf29dD0b4DD49Bf5E991A30b8593eaA34B4580"
const event_abi = "event Harvest(address indexed user, uint256 offeringAmount, uint256 excessAmount, uint8 indexed pid)"


export default function(event:TransactionEvent):LogDescription[]{
    return event.filterLog(event_abi, ifo_contract_address)
    
}