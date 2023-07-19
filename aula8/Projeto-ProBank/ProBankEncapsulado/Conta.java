package ProBankEncapsulado;

public class Conta {
	
	private double saldo;
	private int agencia;
	private int numero;
	private Cliente titular;
	private static int total;
	
	public Conta(int agencia, int numero) {
		System.out.println("CONTA CRIADA COM SUCESSO!!!");
		Conta.total++;
		System.out.println("O total de conta e: " + total);
		this.agencia = agencia;
		this.numero = numero;
	}
	
	// working with balance 
	public void deposita(double valor){
		this.saldo += valor;
	}
			
	public boolean saca(double valor) {
		if(this.saldo >= valor) {
			this.saldo -= valor;
			return true;
		} else {
			return false;
		}
	}
			
	public boolean transfere(double valor, Conta destino) {
		if(this.saldo >= valor) {
			this.saldo -= valor;
			destino.deposita(valor);
			return true;
		} 
			return false;
	}
	
	public double getSaldo() {
		return this.saldo;
	}
	
	// number 
	public int getNumero() {
		return this.numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	
	// agency
	public int getAgencia() {
		return this.agencia;
	}
	public void setAgencia(int agencia) {
		if(agencia <= 0) {
			System.out.println("Não são permitidos valores menos ou iguais a zero.");
			return;
		}
		this.agencia = agencia;		
	}
	
	//Totaler
	public void setTitular(Cliente titular) {
		this.titular = titular;
	}
	public Cliente getTitular() {
		return titular;
	}
	
	//total
	public static int getTotal() {
		return total;
	}
	
}
