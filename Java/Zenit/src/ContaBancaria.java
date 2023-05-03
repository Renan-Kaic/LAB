public class ContaBancaria {
    private float saldo;
    public String agencia;
    public String numero;

    public ContaBancaria(String agencia, String numero) {
        this.agencia = agencia;
        this.numero = numero;
        this.saldo = 0;
    }

    public void depositar(float valor) {
        this.saldo += valor;
    }

    public void sacar(float valor) {
        if (valor > this.saldo) {
            System.out.println(
                "Saldo insuficiente para realizar o saque."
            );
            return;
        }
        this.saldo -= valor;

        System.out.println("Saque realizado com sucesso!");
        System.out.println("Novo saldo: R$"+this.saldo);
    }
    public static void main(String[] args) {
        ContaBancaria conta1 = new ContaBancaria("0001", "123456");
        conta1.depositar(1000);
        conta1.sacar(500);
        conta1.sacar(600); 
    }
}