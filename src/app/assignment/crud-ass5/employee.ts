export class employee {
  id: number = 0;
  Policy_Holders_Name: string = '';
  Policy_Amount: number = 0;
  Amount_for_EMI: number = 0;
  Nominees_name: string = '';

  constructor(
    id: number,
    Policy_Holders_Name: string,
    Policy_Amount: number,
    Amount_for_EMI: number,
    Nominees_name: string
  ) {
    this.id = id;
    this.Policy_Holders_Name = Policy_Holders_Name;
    this.Policy_Amount = Policy_Amount;
    this.Amount_for_EMI = Amount_for_EMI;
    this.Nominees_name = Nominees_name;
  }
}
