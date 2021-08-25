export class Offer{
  id!: number;
  clientCode!: number;
  clientName!: string;
  bound!: boolean;
  offerName!: string;
  price!: number;
  minimum!: number;
  exclusiveMinimum!: boolean;
  amount!: number;
  clientEmail!: string;
  agentEmail!: string;
  status: string = "";

}
