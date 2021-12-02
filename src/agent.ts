import { 
  TransactionEvent, 
  Finding, 
  HandleTransaction, 
  FindingSeverity, 
  FindingType,
  getJsonRpcUrl

} from 'forta-agent'
import Web3 from 'web3';
import filter from "./eventsFilter"

const web3 = new Web3(getJsonRpcUrl())
const handleTransaction: HandleTransaction = async (txEvent: TransactionEvent) => {
  const findings: Finding[] = [];

  const events = filter(txEvent)

  for (const event of events){

    findings.push(

      Finding.fromObject({
        name: "HARWEST_IFO_POOL",
        description: `IFO HARWEST EVENT`,
        alertId: "FORTA-0",
        severity: FindingSeverity.Info,
        type: FindingType.Info,
        everestId:"0x0",
        metadata:{
          offeringAmount:event.args.offeringAmount.toString(),
          excessAmount:event.args.excessAmount.toString()
        }
       
        

      })
     )
  }

  return findings;
}

export default {
  handleTransaction
}