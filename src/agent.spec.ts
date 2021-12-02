import {
    createTransactionEvent,
    HandleBlock,
    HandleTransaction
  } from "forta-agent"
  import agent from "./agent"
  
  describe("testing agent", () => {
    let handleTransaction: HandleTransaction
  
    const createTx = () => createTransactionEvent({
      transaction:{
        hash:"0x",
        to:"0xFDFf29dD0b4DD49Bf5E991A30b8593eaA34B4580",
        from:"0x",
        nonce:1,
        gas:"",
        gasPrice:"",
        value:"",
        data:"",
        r:"",
        s:"",
        v:""

        
      },
      type:undefined,
      network:undefined,
      receipt: {
        status:true,
        root:"",
        gasUsed:"",
        cumulativeGasUsed:"",
        logsBloom:"",
        logs:[
            {address:"0xFDFf29dD0b4DD49Bf5E991A30b8593eaA34B4580",
             topics:[
                 "0x51524c2e5edfedf8b01b29719c661e4fbe27e71734e7cd773dabb7cb712fb3b3",
                 "0x00000000000000000000000088557cb72f9e4e3d785771f08d3f03eb10eb9e2e",
                 "0x0000000000000000000000000000000000000000000000000000000000000000",
                ],
             data:"0x000000000000000000000000000000000000000000000000000000000475f5e50000000000000000000000000000000000000000000000004a36927b3ec6c247",
             blockHash:"",
             blockNumber:1,
             logIndex:1,
             transactionHash:"",
             transactionIndex:1,
             removed:false
            
            
            }
        ],
        contractAddress:"0xFDFf29dD0b4DD49Bf5E991A30b8593eaA34B4580",
        blockHash:"",
        blockNumber:1,
        transactionHash:"",
        transactionIndex:1

      },
      block:{}as any,
      


    })
  
    beforeAll(() => {
      handleTransaction = agent.handleTransaction
    })
  
    describe("agent", () => {
      it("harwest", async () => {
        const txEvent = createTx()
  
        const findings = await handleTransaction(txEvent)
  
        expect(findings.length).toBe(1)
        expect(findings[0].metadata.offeringAmount).toBe("74839525")
      })
  
    })
  })